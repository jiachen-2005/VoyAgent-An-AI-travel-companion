/**
 * VoyAgent Main Application Controller
 * FIT3161 - Personal AI Travel Companion
 * Professional UI with unified SVG icons & verified POI review/feedback modal
 */

class VoyAgentApp {
  constructor() {
    this.currentTripKey = "kl";
    this.activeWorkspaceTab = "map";
    this.currentModalSlotId = null;
    this.selectedFeedbackRating = 5;
    this.helpfulVotes = new Set();

    // Module instances
    this.map = null;
    this.itinerary = null;
    this.chat = null;

    document.addEventListener("DOMContentLoaded", () => this.init());
  }

  init() {
    // 1. Initialize Leaflet Map
    if (window.VoyAgentMap) {
      this.map = new VoyAgentMap("leaflet-map");
      this.map.init();
    }

    // 2. Initialize Itinerary Engine
    if (window.VoyAgentItinerary) {
      this.itinerary = new VoyAgentItinerary(this);
    }

    // 3. Initialize Chat & Agent Stream
    if (window.VoyAgentChat) {
      this.chat = new VoyAgentChat(this);
      if (typeof this.chat.init === "function") {
        this.chat.init();
      }
    }

    // 4. Setup Theme Toggle
    this.initTheme();

    // 5. Setup UI Event Listeners
    this.setupEventListeners();

    // 6. Load Initial Trip (Kuala Lumpur Cultural Tapestry)
    this.loadTrip(this.currentTripKey);

    // 7. Global Keyboard Listeners
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeReviewModal();
      }
    });
  }

  setupEventListeners() {
    // Sidebar toggle (Mobile & Desktop collapse)
    const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
    const sidebar = document.getElementById("sidebar-panel");
    if (btnToggleSidebar && sidebar) {
      btnToggleSidebar.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
      });
    }

    // Right Workspace toggle
    const btnToggleWorkspace = document.getElementById("btn-toggle-workspace");
    const workspace = document.getElementById("workspace-panel");
    if (btnToggleWorkspace && workspace) {
      btnToggleWorkspace.addEventListener("click", () => {
        workspace.classList.toggle("collapsed");
        if (this.map && this.map.map) {
          setTimeout(() => this.map.map.invalidateSize(), 300);
        }
      });
    }

    // Workspace tab switching (Map, Budget, Weather)
    document.querySelectorAll(".workspace-nav-tabs .tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        this.switchWorkspaceTab(tab);
      });
    });

    // Theme toggle
    const btnTheme = document.getElementById("btn-theme-toggle");
    if (btnTheme) {
      btnTheme.addEventListener("click", () => this.toggleTheme());
    }

    // New Trip Button in Sidebar
    const btnNewTrip = document.getElementById("btn-new-trip");
    if (btnNewTrip) {
      btnNewTrip.addEventListener("click", () => this.startNewTrip());
    }

    // Persona Quick-Switch Chips
    document.querySelectorAll(".persona-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".persona-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const persona = chip.dataset.persona;
        this.showToast(`Switched traveler persona: ${persona}`);
      });
    });

    // Export Button
    const btnExport = document.getElementById("btn-export-trip");
    if (btnExport) {
      btnExport.addEventListener("click", () => this.exportCurrentTrip());
    }
  }

  initTheme() {
    const savedTheme = localStorage.getItem("voyagent-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeButton(savedTheme);
    if (this.map && typeof this.map.updateTheme === "function") {
      this.map.updateTheme(savedTheme);
    }
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("voyagent-theme", next);
    this.updateThemeButton(next);
    if (this.map && typeof this.map.updateTheme === "function") {
      this.map.updateTheme(next);
    }
  }

  updateThemeButton(theme) {
    const icon = document.getElementById("theme-icon");
    if (icon && window.VoyAgentIcons) {
      icon.innerHTML = window.VoyAgentIcons.get(theme === "dark" ? "moon" : "sun", { size: 15 });
    }
  }

  switchWorkspaceTab(tabName) {
    this.activeWorkspaceTab = tabName;

    // Update tab button classes
    document.querySelectorAll(".workspace-nav-tabs .tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    // Update view containers
    document.querySelectorAll(".workspace-view").forEach(view => {
      view.classList.toggle("active", view.id === `${tabName}-view-container`);
    });

    if (tabName === "map" && this.map && this.map.map) {
      setTimeout(() => this.map.map.invalidateSize(), 150);
    }
  }

  loadTrip(tripKey) {
    const tripData = window.VOYAGENT_DATA.trips[tripKey];
    if (!tripData) return;

    this.currentTripKey = tripKey;

    // Update trip title chip in header
    const titleChip = document.getElementById("header-trip-title");
    if (titleChip) titleChip.textContent = tripData.title;

    // Update active history item in sidebar
    document.querySelectorAll(".trip-item").forEach(item => {
      item.classList.toggle("active", item.dataset.trip === tripKey);
    });

    // Load Itinerary View
    this.itinerary.loadTrip(tripData);

    // Update Budget Panel
    this.renderBudgetPanel(tripData.budget);

    // Update Weather Radar Panel
    this.renderWeatherPanel(tripData.weatherForecast, tripData.destination);
  }

  renderBudgetPanel(budget) {
    const container = document.getElementById("budget-panel-root");
    if (!container || !budget) return;

    container.innerHTML = `
      <div class="budget-panel-content">
        <div class="budget-hero-stat">
          <span class="budget-total-label">Total Allocated Trip Budget</span>
          <span class="budget-total-amount">${budget.total}</span>
          <div class="budget-progress-track">
            <div class="budget-progress-fill" style="width: ${budget.percentUsed}%;"></div>
          </div>
          <div class="budget-meta-row">
            <span>Spent / Planned: ${budget.allocated}</span>
            <span>${budget.percentUsed}% Utilized</span>
          </div>
        </div>

        <div class="budget-category-list">
          <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
            Category Expense Breakdown
          </div>
          ${budget.breakdown.map(item => `
            <div class="budget-category-row">
              <div class="cat-info">
                <div class="cat-icon-box">
                  ${window.VoyAgentIcons.get(item.icon || 'tag', { size: 16 })}
                </div>
                <div>
                  <div class="cat-label">${item.category}</div>
                  <div class="cat-sub">${item.share} of total spending</div>
                </div>
              </div>
              <div class="cat-amount">${item.amount}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderWeatherPanel(forecast, destination) {
    const container = document.getElementById("weather-panel-root");
    if (!container || !forecast) return;

    const today = forecast[0] || {};

    container.innerHTML = `
      <div class="weather-panel-content">
        <div class="weather-current-card">
          <div>
            <div class="weather-temp">${today.temp ? today.temp.split('/')[0] : '20°C'}</div>
            <div class="weather-city" style="display: flex; align-items: center; gap: 5px;">
              ${window.VoyAgentIcons.get('map-pin', { size: 14 })}
              <span>${destination}</span>
            </div>
            <div style="font-size: 0.85rem; opacity: 0.9; margin-top: 4px;">${today.condition || 'Clear'}</div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; color: var(--primary-500);">
            ${window.VoyAgentIcons.get(today.icon || 'sun', { size: 48, strokeWidth: 1.75 })}
          </div>
        </div>

        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary); margin-top: var(--space-2);">
          Multi-Day Forecast & Safety Radar
        </div>

        <div class="weather-forecast-grid">
          ${forecast.map(item => `
            <div class="forecast-card ${item.alert ? 'alert-card' : ''}">
              <div class="forecast-day">
                <span>${item.day}</span>
                <span style="display: inline-flex; align-items: center; gap: 3px;">
                  <span>${item.rain}</span>
                  ${window.VoyAgentIcons.get('cloud-rain', { size: 12 })}
                </span>
              </div>
              <div class="forecast-condition" style="display: flex; align-items: center; gap: 6px;">
                ${window.VoyAgentIcons.get(item.icon || 'sun', { size: 16 })}
                <span style="font-size: 0.82rem; font-weight: 600;">${item.temp}</span>
              </div>
              ${item.alert ? `
                <div style="font-size: 0.7rem; color: var(--danger-500); font-weight: 700; display: flex; align-items: center; gap: 4px; margin-top: 4px;">
                  ${window.VoyAgentIcons.get('shield-alert', { size: 12 })}
                  <span>${item.alertText}</span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  startNewTrip() {
    // Clear itinerary and show hero
    const itineraryRoot = document.getElementById("active-itinerary-root");
    if (itineraryRoot) itineraryRoot.innerHTML = "";

    const hero = document.getElementById("welcome-hero-state");
    if (hero) hero.style.display = "flex";

    const titleChip = document.getElementById("header-trip-title");
    if (titleChip) titleChip.textContent = "New Trip Session";

    document.querySelectorAll(".trip-item").forEach(i => i.classList.remove("active"));
    this.showToast("Started new travel planning session!");
  }

  exportCurrentTrip() {
    const trip = window.VOYAGENT_DATA.trips[this.currentTripKey];
    if (!trip) return;

    let md = `# VoyAgent Travel Blueprint: ${trip.title}\n\n`;
    md += `- **Destination**: ${trip.destination}\n`;
    md += `- **Duration**: ${trip.duration}\n`;
    md += `- **Total Budget**: ${trip.budget.total}\n\n`;

    trip.days.forEach(d => {
      md += `## ${d.dateTitle}\n\n`;
      d.slots.forEach(s => {
        md += `### ${s.time} - ${s.title} (${s.category})\n`;
        md += `${s.desc}\n`;
        md += `- **Cost**: ${s.cost} | **Rating**: ${s.rating}\n\n`;
      });
    });

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `VoyAgent_${this.currentTripKey}_itinerary.md`;
    a.click();
    URL.revokeObjectURL(url);

    this.showToast("Exported itinerary as Markdown file!");
  }

  // =========================================================================
  // POI Ratings, Verified Traveler Reviews & Social Sentiment Modal Engine
  // =========================================================================

  openReviewModal(slotId) {
    const root = document.getElementById("review-modal-root");
    if (!root) return;

    this.currentModalSlotId = slotId;
    this.selectedFeedbackRating = 5;

    // Find POI review profile
    const reviewData = (window.VOYAGENT_DATA.reviews && window.VOYAGENT_DATA.reviews[slotId]) || this.generateFallbackReview(slotId);

    root.innerHTML = `
      <div class="review-modal-backdrop" id="review-modal-overlay" onclick="voyAgentApp.handleBackdropClick(event)">
        <div class="review-modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-poi-title">
          
          <!-- Modal Header -->
          <div class="review-modal-header">
            <div class="modal-header-left">
              <div class="modal-poi-title" id="modal-poi-title">
                ${window.VoyAgentIcons.get('map-pin', { size: 18, className: 'icon-primary' })}
                <span>${reviewData.poiName}</span>
              </div>
              <div class="modal-poi-category">
                <span>${reviewData.category}</span>
                <span>·</span>
                <span style="color: var(--primary-600); font-weight: 600;">Verified Traveler Insights</span>
              </div>
            </div>
            <button class="modal-close-btn" onclick="voyAgentApp.closeReviewModal()" title="Close (Esc)" aria-label="Close modal">
              ${window.VoyAgentIcons.get('x', { size: 16 })}
            </button>
          </div>

          <!-- Modal Body (Scrollable) -->
          <div class="review-modal-body">
            
            <!-- 1. Overall Score Hero & Star Distribution -->
            <div class="review-score-hero">
              <div class="score-hero-left">
                <div class="score-big-num">${reviewData.overallScore.toFixed(1)}</div>
                <div class="score-stars-row">
                  ${this.renderStarRow(reviewData.overallScore)}
                </div>
                <div class="score-total-count">${reviewData.totalReviews} global reviews</div>
                <div class="score-recommend-badge">
                  ${window.VoyAgentIcons.get('shield-check', { size: 12 })}
                  <span>${reviewData.recommendRate} recommend this spot</span>
                </div>
              </div>

              <div class="score-hero-right">
                ${reviewData.breakdown.map(b => `
                  <div class="star-dist-row">
                    <span class="star-dist-label">${b.stars}★</span>
                    <div class="star-dist-track">
                      <div class="star-dist-fill" style="width: ${b.pct}%;"></div>
                    </div>
                    <span class="star-dist-pct">${b.pct}%</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 2. Social Media Sentiment Analysis (Project Developing Guide 3.12) -->
            ${reviewData.socialSentiment ? `
              <div class="social-sentiment-card">
                <div class="social-header-row">
                  <div class="social-platform-pill">
                    ${window.VoyAgentIcons.get('sparkles', { size: 12 })}
                    <span>${reviewData.socialSentiment.platform} Trend Discovery</span>
                  </div>
                  <div class="social-sentiment-score">
                    ${window.VoyAgentIcons.get('thumbs-up', { size: 12 })}
                    <span>${reviewData.socialSentiment.sentimentScore}</span>
                  </div>
                </div>
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary-700);">
                  # ${reviewData.socialSentiment.trendTag}
                </div>
                <div class="social-summary-text">
                  ${reviewData.socialSentiment.summary}
                </div>
              </div>
            ` : ''}

            <!-- 3. Sub-Category Score Matrix -->
            <div class="sub-ratings-grid">
              <div class="sub-rating-item">
                <div class="sub-rating-name">Atmosphere</div>
                <div class="sub-rating-val">${reviewData.subRatings.atmosphere}★</div>
              </div>
              <div class="sub-rating-item">
                <div class="sub-rating-name">Photo Spots</div>
                <div class="sub-rating-val">${reviewData.subRatings.photoSpots}★</div>
              </div>
              <div class="sub-rating-item">
                <div class="sub-rating-name">Crowd Control</div>
                <div class="sub-rating-val">${reviewData.subRatings.crowdControl}★</div>
              </div>
              <div class="sub-rating-item">
                <div class="sub-rating-name">Value for Trip</div>
                <div class="sub-rating-val">${reviewData.subRatings.value}★</div>
              </div>
            </div>

            <!-- 4. Review Persona Filter Chips -->
            <div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-2); display: flex; align-items: center; justify-content: space-between;">
                <span>Traveler Reviews (${reviewData.reviews.length})</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal;">Updated daily</span>
              </div>
              <div class="review-filter-row">
                <button class="review-filter-chip active" onclick="voyAgentApp.filterReviews('all', this)">All Reviews</button>
                <button class="review-filter-chip" onclick="voyAgentApp.filterReviews('solo', this)">Solo Travelers</button>
                <button class="review-filter-chip" onclick="voyAgentApp.filterReviews('foodie', this)">Foodies</button>
                <button class="review-filter-chip" onclick="voyAgentApp.filterReviews('family', this)">Families & Leisure</button>
                <button class="review-filter-chip" onclick="voyAgentApp.filterReviews('guide', this)">Local Guides</button>
              </div>
            </div>

            <!-- 5. Reviews List -->
            <div class="review-cards-list" id="review-cards-container">
              ${this.renderReviewCards(reviewData.reviews)}
            </div>

            <!-- 6. Share Feedback Quick Form -->
            <div class="quick-feedback-box">
              <div class="quick-feedback-header">
                <span>Visited this place? Share feedback for AI traveler matching</span>
                <div class="feedback-stars-selector" id="feedback-star-picker">
                  ${[1, 2, 3, 4, 5].map(star => `
                    <span class="star-choice active" data-star="${star}" onclick="voyAgentApp.setFeedbackRating(${star})">★</span>
                  `).join('')}
                </div>
              </div>
              <textarea 
                class="feedback-textarea" 
                id="feedback-input-text" 
                placeholder="Write a quick tip on crowds, best photo angles, or rain shelter advice..."></textarea>
              <button class="btn-submit-feedback" onclick="voyAgentApp.submitQuickFeedback('${slotId}')">
                Submit Feedback
              </button>
            </div>

          </div>
        </div>
      </div>
    `;

    // Trigger entrance transition
    requestAnimationFrame(() => {
      const overlay = document.getElementById("review-modal-overlay");
      if (overlay) overlay.classList.add("open");
    });
  }

  handleBackdropClick(e) {
    if (e.target && e.target.id === "review-modal-overlay") {
      this.closeReviewModal();
    }
  }

  closeReviewModal() {
    const overlay = document.getElementById("review-modal-overlay");
    if (!overlay) return;

    overlay.classList.remove("open");
    setTimeout(() => {
      const root = document.getElementById("review-modal-root");
      if (root) root.innerHTML = "";
      this.currentModalSlotId = null;
    }, 220);
  }

  renderStarRow(rating) {
    const fullStars = Math.floor(rating);
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsHtml += `<svg class="rating-star-gold" width="14" height="14" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon></svg>`;
      } else {
        starsHtml += `<svg style="color: var(--border-strong);" width="14" height="14" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon></svg>`;
      }
    }
    return starsHtml;
  }

  renderReviewCards(reviews) {
    return reviews.map(rev => {
      const isVoted = this.helpfulVotes.has(rev.id);
      return `
        <div class="single-review-card" data-persona="${rev.persona.toLowerCase()}">
          <div class="review-author-row">
            <div class="author-info-left">
              <div class="author-avatar-badge">${rev.avatarText || 'TR'}</div>
              <div>
                <div class="author-name">${rev.author}</div>
                <div class="author-persona-tag">${rev.persona}</div>
              </div>
            </div>
            <div class="review-meta-right">
              <div class="review-stars">
                ${this.renderStarRow(rev.rating)}
              </div>
              <div class="review-date-text">${rev.date}</div>
            </div>
          </div>

          ${rev.tag ? `
            <div class="review-tip-tag">
              ${window.VoyAgentIcons.get('sparkles', { size: 10 })}
              <span>${rev.tag}</span>
            </div>
          ` : ''}

          <div class="review-comment-text">
            ${rev.text}
          </div>

          <div class="review-card-footer">
            <button 
              class="btn-helpful-upvote ${isVoted ? 'voted' : ''}" 
              onclick="voyAgentApp.toggleReviewHelpful('${rev.id}', this, ${rev.helpful})"
            >
              ${window.VoyAgentIcons.get('thumbs-up', { size: 11 })}
              <span>Helpful (${isVoted ? rev.helpful + 1 : rev.helpful})</span>
            </button>
            <span style="font-size: 0.7rem; color: var(--text-muted);">Verified Visit</span>
          </div>
        </div>
      `;
    }).join('');
  }

  filterReviews(type, buttonEl) {
    document.querySelectorAll(".review-filter-chip").forEach(b => b.classList.remove("active"));
    if (buttonEl) buttonEl.classList.add("active");

    const cards = document.querySelectorAll(".single-review-card");
    cards.forEach(card => {
      const persona = card.dataset.persona || "";
      if (type === "all") {
        card.style.display = "flex";
      } else if (type === "solo" && (persona.includes("solo") || persona.includes("couple"))) {
        card.style.display = "flex";
      } else if (type === "foodie" && persona.includes("foodie")) {
        card.style.display = "flex";
      } else if (type === "family" && persona.includes("family")) {
        card.style.display = "flex";
      } else if (type === "guide" && persona.includes("guide")) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  setFeedbackRating(rating) {
    this.selectedFeedbackRating = rating;
    const picker = document.getElementById("feedback-star-picker");
    if (!picker) return;

    picker.querySelectorAll(".star-choice").forEach(s => {
      const val = parseInt(s.dataset.star, 10);
      s.classList.toggle("active", val <= rating);
    });
  }

  toggleReviewHelpful(reviewId, btnEl, baseHelpful) {
    if (this.helpfulVotes.has(reviewId)) {
      this.helpfulVotes.delete(reviewId);
      btnEl.classList.remove("voted");
      btnEl.querySelector("span").textContent = `Helpful (${baseHelpful})`;
    } else {
      this.helpfulVotes.add(reviewId);
      btnEl.classList.add("voted");
      btnEl.querySelector("span").textContent = `Helpful (${baseHelpful + 1})`;
      this.showToast("Marked review as helpful!");
    }
  }

  submitQuickFeedback(slotId) {
    const input = document.getElementById("feedback-input-text");
    if (!input) return;

    const text = input.value.trim();
    if (!text) {
      this.showToast("Please enter your feedback comments.", "info");
      return;
    }

    const container = document.getElementById("review-cards-container");
    if (container) {
      const newCard = document.createElement("div");
      newCard.className = "single-review-card";
      newCard.dataset.persona = "solo traveler";
      newCard.innerHTML = `
        <div class="review-author-row">
          <div class="author-info-left">
            <div class="author-avatar-badge" style="background: var(--primary-600); color: white;">YOU</div>
            <div>
              <div class="author-name">You (VoyAgent Explorer)</div>
              <div class="author-persona-tag">Verified Traveler</div>
            </div>
          </div>
          <div class="review-meta-right">
            <div class="review-stars">
              ${this.renderStarRow(this.selectedFeedbackRating)}
            </div>
            <div class="review-date-text">Just now</div>
          </div>
        </div>
        <div class="review-tip-tag" style="background: var(--success-bg); color: var(--success-500); border-color: var(--success-500);">
          ${window.VoyAgentIcons.get('check', { size: 10 })}
          <span>Just Submitted</span>
        </div>
        <div class="review-comment-text">${this.escapeHtml(text)}</div>
        <div class="review-card-footer">
          <button class="btn-helpful-upvote">
            ${window.VoyAgentIcons.get('thumbs-up', { size: 11 })}
            <span>Helpful (1)</span>
          </button>
          <span style="font-size: 0.7rem; color: var(--success-500); font-weight: 600;">Saved to Itinerary Memory</span>
        </div>
      `;
      container.insertBefore(newCard, container.firstChild);
    }

    input.value = "";
    this.showToast("Thank you! Your verified feedback has been recorded.", "success");
  }

  generateFallbackReview(slotId) {
    return {
      poiName: "Featured Attraction",
      category: "Cultural Experience",
      overallScore: 4.8,
      totalReviews: "5,200",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.3, value: 4.7 },
      socialSentiment: {
        platform: "Xiaohongshu & TikTok",
        trendTag: "Popular Local Highlight",
        sentimentScore: "96% Positive Sentiment",
        summary: "Travelers commend the atmosphere and scenic photo viewpoints. Visiting outside peak hours is recommended."
      },
      breakdown: [
        { stars: 5, pct: 80 },
        { stars: 4, pct: 15 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "fallback-1",
          author: "Traveler Community",
          persona: "Explorer",
          avatarText: "TC",
          rating: 5,
          date: "Recently visited",
          tag: "Top Highlight",
          text: "An essential stop on this route. The layout, historic character, and local surroundings make it thoroughly memorable.",
          helpful: 12
        }
      ]
    };
  }

  escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  showToast(message, type = "normal") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    const iconName = type === 'info' ? 'cloud-rain' : (type === 'success' ? 'check' : 'shield-check');
    toast.innerHTML = `
      <span style="display: flex; align-items: center;">${window.VoyAgentIcons.get(iconName, { size: 15 })}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3800);
  }
}

window.voyAgentApp = new VoyAgentApp();
