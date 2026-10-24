# AI-Powered Travel Planning System

An AI travel planner that turns a few preferences into a real, day-by-day itinerary — then keeps it useful during the trip with weather-aware replanning, budget tracking, and group expense splitting.

**Monash University · FIT3161 / FIT3162 Final Year Project · 2026**

> **Status:** Planning and setup. Development begins in Week 7. Technical architecture, technology stack and repository layout are still being decided and will be documented here once confirmed.

---

## Overview

Planning a trip means juggling a dozen tabs: what to see, how long it takes, what it costs, whether it rains, and who paid for what. This system collapses that into one flow.

The user gives destination, dates, budget, travel type, interests and pace. The system generates a personalised day-by-day itinerary, then supports the trip as it happens — replanning around weather, tracking spending against a budget, holding booking details in one place, and settling shared costs for group travel.

```
Preferences → AI itinerary → Booking records → Budget tracking → Edits & replanning
```

---

## Platforms

The system is delivered in **two forms, both required**:

| Platform | Scope |
|---|---|
| **Web application** | Full-featured interface for desktop and tablet. Complete itinerary planning and management. Responsive across screen sizes. |
| **Mobile super app** | Mobile-optimised interface for use during the trip. Same core functionality as web, plus location-based features (nearby recommendations, on-trip assistance) and push notifications for booking updates and budget alerts. |

Both share one backend API, one database and one business logic layer. They are the same system presented in two forms, not two systems.

---

## Features

Priorities were agreed with our supervisor. Nothing below is implemented yet — this is the scope we are building to.

### P0 · Core

| Feature | Description |
|---|---|
| **Personalised trip planning** | Collect destination (country / state / city), travel dates and duration, approximate budget, number of travellers, travel type (solo, family, business, romantic, adventure), interests (food, sightseeing, shopping, culture, nature, nightlife), and preferred pace (relaxed, moderate, packed). Supports group trip planning. |
| **AI-generated itineraries** | Day-by-day plans generated through an LLM API, returned as structured data rather than plain text. Morning, afternoon and evening suggestions per day, each with estimated time and cost. |
| **Destination & activity recommendations** | Suggest cities, attractions, activities, restaurants and accommodation based on user preferences. |
| **Trip management** | User registration and profile, create and save trips, edit saved itineraries, multiple trips per user. |

### P1 · High

| Feature | Description |
|---|---|
| **Dynamic replanning** | Edit individual activities without regenerating the whole itinerary. Check weather, identify affected activities, and suggest alternatives that fit the user's interests, location and budget. |
| **Maps & transport** | Display destinations and routes on a map, distances between locations, transport suggestions (walking, public transport, driving), and estimated travel time between itinerary points. |
| **Budget support** | Cost estimates for activities, category-specific allocations (accommodation, transport, food, activities, shopping), currency conversion, alerts as the plan approaches the budget limit, spending tracked against plan, and a visual budget breakdown. |
| **AI travel assistant** | Natural-language conversation for planning questions, recommendations during and before the trip, and itinerary changes requested in chat. Supports multi-turn context. |
| **Booking information management** | Store hotel reservations, flight itineraries and activity bookings, including confirmation numbers, contact details and documents. Display all bookings in a unified itinerary view, and use them for budget tracking and route planning. |

### P2 · Medium

| Feature | Description |
|---|---|
| **Group finance manager** | Track shared expenses for group trips and calculate what each traveller owes. Supports equal, percentage and custom splits, expense categories, payment status, and a clear "who owes whom" summary — including bookings one person paid for on behalf of the group. |
| **Hidden attraction discovery** | Surface lesser-known destinations that real travellers recommend but that are not yet overexposed. Categorised by type (cafes, viewpoints, restaurants, hiking trails, local markets) and verified against places data for location and practical details. |
| **Nearby suggestions** | Events and activities near the user's current location during the trip. |
| **Travel support information** | Packing suggestions, emergency contacts, visa and entry requirements (informational only), and travel FAQ. |

### P3 · Nice to have

Trip sharing for group planning · advanced multi-language support

---

## Team Responsibilities and Delivery Ownership

Each member owns their assigned work from requirements clarification through design, implementation, testing, integration, documentation and handover. Ownership includes resolving defects in the assigned module and reporting dependencies or delivery risks.

### Chen Jia — Backend Developer and Project Coordinator

- **Requirements and planning:** Maintain the consolidated requirements, Requirements Traceability Matrix (RTM), integration milestones and dependency tracking. Coordinate scope changes and confirm technical decisions with the team and supervisor.
- **Design:** Define the shared backend architecture, database schema, application API contracts and common data models with input from the module owners.
- **Implementation:** Develop authentication, access controls, user and trip management, persistence, candidate filtering and ranking, itinerary constraint validation, booking management, budget calculations and expense splitting.
- **Integration:** Coordinate the application workflow across frontend, external-data and LLM modules. Implement backend orchestration of data retrieval, candidate selection, itinerary generation, validation, repair and storage.
- **Testing:** Own backend unit tests and database integration tests. Coordinate system integration testing and maintain requirement-to-test traceability.
- **Deployment and handover:** Coordinate backend and database deployment, environment configuration, database migrations and release integration. Document setup, application endpoints, backup and recovery procedures, and known limitations.

### Chan Eunice — LLM Engineer

- **Requirements and design:** Define supported conversational planning and revision scenarios, LLM input/output schemas, context handling and failure behaviour with the backend and frontend developers.
- **Technology evaluation:** Compare candidate models using consistent planning requests and document output validity, constraint compliance, response time and cost.
- **Implementation:** Develop model invocation, prompt templates, conversational context handling, preference extraction, structured itinerary generation and targeted itinerary revision.
- **Integration:** Consume the agreed backend inputs, including candidate places and travel constraints. Return structured proposals and handle backend validation feedback through bounded repair attempts.
- **Testing:** Maintain evaluation cases covering incomplete or conflicting requests, malformed outputs, unsupported places and failed revisions. Test the LLM module with fixed external-data fixtures before live integration.
- **Deployment and handover:** Document model configuration, prompt versions, evaluation results, usage limits and failure handling. Support deployment configuration and investigate defects caused by model behaviour.

### Tom Wong Ren Syuen — External API Integration Developer

- **Requirements and design:** Identify the external data required for places, routes, weather, exchange rates and place verification. Agree required fields and internal response formats with the backend and LLM developers.
- **Provider evaluation:** Compare providers for destination coverage, data quality, freshness, reliability, cost, quotas and permitted data use. Record provider limitations and selection decisions.
- **Implementation:** Develop backend integration modules for third-party authentication, requests, response normalisation and permitted caching. Handle timeouts, rate limits, unavailable services, missing fields and duplicate place records.
- **Integration:** Supply consistent travel data to the backend, including source identifiers and relevant timestamps. Provide fixtures so that other modules can be developed without live service access.
- **Testing:** Test response mapping, error handling and provider integration. Check that the supplied data supports recommendation, itinerary validation and travel assistance.
- **Deployment and handover:** Document credential configuration, quotas, attribution and storage restrictions, provider dependencies and troubleshooting. Monitor integration failures during testing and delivery.

### Ting Jing Hao — Web Frontend Developer

- **Requirements and design:** Define web user journeys and screen designs with the team, covering account access, trip preferences, conversational planning, itinerary editing, bookings, budgets, shared expenses and travel assistance.
- **Implementation:** Develop the responsive web interface and reusable web components. Connect the interface to the shared backend and implement loading, empty, validation and error states.
- **Integration:** Coordinate request/response handling with backend developers and present recommendations, maps, itinerary revisions and financial information consistently.
- **Testing:** Own web component and interaction tests, browser compatibility checks, responsive layout checks and accessibility checks. Resolve web defects identified during user testing.
- **Deployment and handover:** Prepare the web build and hosting configuration with Chen Jia. Document web setup, supported browsers, interface behaviour and known limitations.

### Hu Longxi — Mobile Frontend Developer

- **Requirements and design:** Define mobile user journeys and screen designs consistent with the web application, with particular attention to on-trip use and smaller screens.
- **Implementation:** Develop the React Native mobile application, including the shared core features and mobile location input, nearby suggestions and notification interfaces.
- **Integration:** Connect the mobile application to the shared backend. Implement permission handling, navigation, loading states, network failure messages and consistent presentation of backend data.
- **Testing:** Own mobile component and interaction tests, device layout checks, accessibility checks and testing of location and notification behaviour on the agreed target platforms.
- **Deployment and handover:** Prepare installable test builds and document mobile setup, permissions, supported platforms, build instructions and known limitations.

### Shared Responsibilities

All members will:

- Clarify assigned requirements and agree measurable acceptance criteria before implementation.
- Keep implementation, tests and documentation aligned with the agreed API contracts.
- Review another member’s changes and resolve feedback before integration.
- Participate in end-to-end testing, supervisor demonstrations and user acceptance testing.
- Record defects, limitations, dependencies and changes affecting other modules.
- Contribute evidence and documentation for the report, demonstration and handover.

Chen Jia coordinates delivery and integration; each module owner remains responsible for the quality and completion of their assigned work.

## Lifecycle Checkpoints

| Stage | Coordinator / Accountable Owner | Required Contributions and Outputs |
|---|---|---|
| Requirements and scope | Chen Jia | All members clarify assigned features, acceptance criteria, dependencies and RTM entries. |
| Architecture and interface design | Chen Jia | All module owners agree data schemas, API contracts, failure behaviour and integration boundaries. Jing Hao and Longxi agree shared interface conventions. |
| Technology and provider evaluation | Relevant module owner | Eunice evaluates LLMs; Tom evaluates external providers; frontend owners evaluate platform tools; Chen Jia evaluates backend and database choices. Decisions are documented. |
| Implementation | Each module owner | Working code, module documentation and relevant automated tests for assigned features. |
| Code review | A reviewer other than the author | Review correctness, maintainability, data handling and compatibility with agreed interfaces. Specialist changes receive review from the relevant integration partner. |
| Integration and system testing | Chen Jia | All owners connect their modules, run cross-module scenarios and fix defects in their components. |
| User acceptance testing | Jing Hao and Longxi coordinate sessions | The team prepares scenarios linked to requirements, records feedback and confirms fixes. Chen Jia maintains the consolidated results. |
| Deployment and release | Chen Jia coordinates | Module owners provide configuration and verification steps. Jing Hao prepares the web release; Longxi prepares mobile builds; Eunice and Tom verify live service configuration. |
| Monitoring and defect resolution | Relevant module owner | Chen Jia triages cross-module issues; each owner investigates failures and maintains their component through the agreed project delivery period. |
| Report, demonstration and handover | Chen Jia coordinates | Each owner supplies implementation evidence, test results, setup instructions, limitations and documentation for their component. |

## Integration Boundaries

- **Tom owns external data retrieval and normalisation.** He supplies travel data rather than implementing the application's FastAPI endpoints or generating itineraries.
- **Eunice owns LLM behaviour.** Her module interprets requests and proposes structured itineraries using supplied data. It does not replace deterministic backend validation.
- **Chen Jia owns application business rules and orchestration.** The backend filters and ranks candidates, validates itinerary and financial constraints, controls access and persists accepted changes.
- **Jing Hao owns the web client; Longxi owns the mobile client.** Both use the same application API contracts and coordinate user-facing behaviour.

For each integration, the contributing owners will agree on example inputs, successful outputs, failure responses and acceptance criteria before connecting live services.

## Development Workflow

One long-lived branch (`main`), plus short branches that merge back as soon as a feature is done.

```bash
git switch main && git pull
git switch -c feat/be-trip-crud
# work, commit
git push -u origin feat/be-trip-crud
# open a PR on GitHub → Squash and merge
```

Branch names follow `type/scope-description` — for example `feat/be-trip-crud`, `fix/web-date-picker`, `chore/infra-ci`.

Full conventions: Quick guide (中英对照): [`docs/git-guide.pdf`](docs/git-guide.pdf)

---

## Academic Notice

This repository is coursework for FIT3161 / FIT3162 at Monash University. It is not a production service. Payment processing, visa and passport applications, travel insurance purchasing, and human travel-agent services are not part of this project.