-- VoyAgent initial database schema
-- PostgreSQL 15+

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE EXTENSION IF NOT EXISTS citext;

-- =========================================================
-- 1. Users
-- =========================================================

CREATE TABLE users (
    user_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           CITEXT NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,
    user_name       VARCHAR(100) NOT NULL,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT uq_users_email UNIQUE (email)
);

-- =========================================================
-- 2. Emergency contacts
-- emergency_user_id is the id of the contact, not the id of whom register
-- this emergency contact
-- =========================================================

CREATE TABLE emergency_contacts (
    emergency_user_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id             UUID NOT NULL,
    name                VARCHAR(100) NOT NULL,
    phone_no            VARCHAR(20) NOT NULL,
    relationship        VARCHAR(50) NOT NULL,

    CONSTRAINT fk_emergency_contacts_user
        FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_emergency_contacts_user_id
    ON emergency_contacts (user_id);

-- =========================================================
-- 3. Authentication tokens / password-reset OTP
-- token_hash: hashed token value for safety reason
-- =========================================================

CREATE TABLE auth_tokens (
    token_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL,
    attempt_counts  INTEGER NOT NULL DEFAULT 0,
    token_hash      VARCHAR(255) NOT NULL,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    expires_at      TIMESTAMPTZ NOT NULL,
    used_at         TIMESTAMPTZ,

    CONSTRAINT fk_auth_tokens_user
        FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE CASCADE,
    CONSTRAINT uq_auth_tokens_token_hash UNIQUE (token_hash),
    CONSTRAINT ck_auth_tokens_attempt_counts
        CHECK (attempt_counts >= 0),
    CONSTRAINT ck_auth_tokens_expiry
        CHECK (expires_at > created_at),
    CONSTRAINT ck_auth_tokens_used_at
        CHECK (used_at IS NULL OR used_at >= created_at)
);

CREATE INDEX idx_auth_tokens_user_expires
    ON auth_tokens (user_id, expires_at);

-- =========================================================
-- 4. Trips
-- =========================================================

CREATE TABLE trips (
    trip_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_user_id    UUID NOT NULL,
    title            VARCHAR(200) NOT NULL,
    destination      VARCHAR(200) NOT NULL,
    trip_start_date  DATE NOT NULL,
    trip_end_date    DATE NOT NULL,
    trip_budget      NUMERIC(12, 2),
    budget_currency  CHAR(3) NOT NULL DEFAULT 'MYR',
    status           VARCHAR(20) NOT NULL DEFAULT 'draft',
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at       TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_trips_owner
        FOREIGN KEY (owner_user_id)
        REFERENCES users (user_id)
        ON DELETE RESTRICT,
    CONSTRAINT ck_trips_date_range
        CHECK (trip_end_date >= trip_start_date),
    CONSTRAINT ck_trips_budget
        CHECK (trip_budget IS NULL OR trip_budget >= 0),
    CONSTRAINT ck_trips_budget_currency
        CHECK (budget_currency ~ '^[A-Z]{3}$'),
    CONSTRAINT ck_trips_status
        CHECK (status IN (
            'draft',
            'planning',
            'confirmed',
            'completed',
            'cancelled'
        ))
);

CREATE INDEX idx_trips_owner_user_id
    ON trips (owner_user_id);

-- =========================================================
-- 5. Trip preferences
-- interest store pairs like ["food", "nature", "museum"]。
-- =========================================================

CREATE TABLE trip_preferences (
    trip_id     UUID PRIMARY KEY,
    interest    JSONB NOT NULL DEFAULT '[]'::jsonb,
    pace        VARCHAR(20),
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_trip_preferences_trip
        FOREIGN KEY (trip_id)
        REFERENCES trips (trip_id)
        ON DELETE CASCADE,
    CONSTRAINT ck_trip_preferences_interest_array
        CHECK (jsonb_typeof(interest) = 'array')
);

-- =========================================================
-- 6. Trip members
-- =========================================================

CREATE TABLE trip_members (
    trip_id     UUID NOT NULL,
    user_id     UUID NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT pk_trip_members
        PRIMARY KEY (trip_id, user_id),
    CONSTRAINT fk_trip_members_trip
        FOREIGN KEY (trip_id)
        REFERENCES trips (trip_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_trip_members_user
        FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_trip_members_user_id
    ON trip_members (user_id);

-- =========================================================
-- 7. Trip expenses
-- =========================================================

CREATE TABLE trip_expenses (
    expense_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    trip_id          UUID NOT NULL,
    paid_by_user_id  UUID NOT NULL,
    expense_title    VARCHAR(200) NOT NULL,
    category         VARCHAR(50) NOT NULL,
    expense_value    NUMERIC(12, 2) NOT NULL,
    currency         CHAR(3) NOT NULL DEFAULT 'MYR',
    expense_date     DATE NOT NULL,
    expense_time     TIME,
    split_method     VARCHAR(20) NOT NULL DEFAULT 'equal',
    created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_trip_expenses_trip
        FOREIGN KEY (trip_id)
        REFERENCES trips (trip_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_trip_expenses_payer
        FOREIGN KEY (paid_by_user_id)
        REFERENCES users (user_id)
        ON DELETE RESTRICT,
    CONSTRAINT ck_trip_expenses_value
        CHECK (expense_value > 0),
    CONSTRAINT ck_trip_expenses_currency
        CHECK (currency ~ '^[A-Z]{3}$'),
    CONSTRAINT ck_trip_expenses_split_method
        CHECK (split_method IN ('equal', 'custom'))
);

CREATE INDEX idx_trip_expenses_trip_date
    ON trip_expenses (trip_id, expense_date);

CREATE INDEX idx_trip_expenses_paid_by_user_id
    ON trip_expenses (paid_by_user_id);

-- =========================================================
-- 8. Expense shares
-- =========================================================

CREATE TABLE expense_shares (
    expense_id   UUID NOT NULL,
    user_id      UUID NOT NULL,
    share_amount NUMERIC(12, 2) NOT NULL,
    is_settled   BOOLEAN NOT NULL DEFAULT false,
    settled_at   TIMESTAMPTZ,

    CONSTRAINT pk_expense_shares
        PRIMARY KEY (expense_id, user_id),
    CONSTRAINT fk_expense_shares_expense
        FOREIGN KEY (expense_id)
        REFERENCES trip_expenses (expense_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_expense_shares_user
        FOREIGN KEY (user_id)
        REFERENCES users (user_id)
        ON DELETE RESTRICT,
    CONSTRAINT ck_expense_shares_amount
        CHECK (share_amount >= 0),
    CONSTRAINT ck_expense_shares_settlement
        CHECK (
            (is_settled = true AND settled_at IS NOT NULL)
            OR
            (is_settled = false AND settled_at IS NULL)
        )
);

CREATE INDEX idx_expense_shares_user_settled
    ON expense_shares (user_id, is_settled);

COMMIT;

