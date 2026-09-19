/**
 * VoyAgent Itinerary Controller & Dynamic Replanning Simulation Engine
 * FIT3161 - Personal AI Travel Companion
 * High-polish presentation with unified SVG icons & clickable POI reviews trigger
 */

class VoyAgentItinerary {
  constructor(app) {
    this.app = app;
    this.currentTrip = null;
    this.activeDay = 1;
    this.isReplannedDay2 = false;
  }

  loadTrip(tripData) {
    this.currentTrip = JSON.parse(JSON.stringify(tripData)); // clone
    this.activeDay = 1;
    this.isReplannedDay2 = false;
    this.render();
  }

  render() {
    const container = document.getElementById("active-itinerary-root");
    if (!container || !this.currentTrip) return;

    const trip = this.currentTrip;
    const currentDayData = trip.days.find(d => d.dayNumber === this.activeDay) || trip.days[0];

    container.innerHTML = `
      <div class="itinerary-card-container">
        <!-- Trip Header -->
        <div class="trip-summary-header">
          <div class="trip-title-group">
            <h3 style="display: flex; align-items: center; gap: 8px;">
              ${window.VoyAgentIcons.get('map-pin', { size: 18, className: 'icon-primary' })}
              <span>${trip.title}</span>
            </h3>
            <div class="trip-subtitle">${trip.destination} · ${trip.duration} · Budget: ${trip.budget.total}</div>
          </div>
          <div class="trip-badges-row">
            ${trip.tags.map(t => `<span class="badge-tag">${t}</span>`).join('')}
            <span class="badge-tag accent" style="display: inline-flex; align-items: center; gap: 4px;">
              ${window.VoyAgentIcons.get('sparkles', { size: 12 })}
              <span>AI Tailored</span>
            </span>
          </div>
        </div>

        <!-- Day Selector Tabs -->
        <div class="itinerary-day-nav">
          ${trip.days.map(d => {
            const forecast = trip.weatherForecast[d.dayNumber - 1];
            const iconHtml = forecast ? window.VoyAgentIcons.get(forecast.icon || 'sun', { size: 13 }) : '';
            const tempStr = forecast ? forecast.temp.split('/')[0].trim() : '';

            return `
              <button class="day-tab-btn ${d.dayNumber === this.activeDay ? 'active' : ''}" onclick="voyAgentApp.itinerary.switchDay(${d.dayNumber})">
                <span>Day ${d.dayNumber}</span>
                <span class="day-tab-sub" style="display: inline-flex; align-items: center; gap: 4px;">
                  ${iconHtml} ${tempStr}
                </span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Dynamic Replanning Simulation Banner (Highlighting FYP Core Feature) -->
        ${this.activeDay === 2 && (trip.id === 'kyoto' || trip.id === 'kl') ? `
          <div class="replanning-simulation-banner">
            <div class="replanning-text">
              <span class="replanning-title" style="display: flex; align-items: center; gap: 6px;">
                ${window.VoyAgentIcons.get('cloud-rain', { size: 15 })}
                <span>Adaptive Trip Assistant · ${trip.id === 'kl' ? 'Monsoon Weather Simulation' : 'Weather Simulation'}</span>
              </span>
              <span class="replanning-desc">
                ${this.isReplannedDay2 
                  ? (trip.id === 'kl'
                      ? 'Active: Tropical monsoon detected. Outdoor KLCC park walk swapped with Aquaria oceanarium tunnel & sheltered Suria KLCC dining.'
                      : 'Active: Heavy rain detected. Outdoor mountain paths have been swapped with sheltered cultural highlights.')
                  : (trip.id === 'kl'
                      ? 'Test how VoyAgent automatically adapts your itinerary when a tropical afternoon monsoon shower is detected.'
                      : 'Test how VoyAgent automatically adapts your itinerary when sudden afternoon rain is detected.')}
              </span>
            </div>
            <div class="replanning-actions">
              ${!this.isReplannedDay2 ? `
                <button class="btn-simulate-event" onclick="voyAgentApp.itinerary.triggerRainReplanning()">
                  ${window.VoyAgentIcons.get('cloud-rain', { size: 14 })}
                  <span>${trip.id === 'kl' ? 'Simulate Tropical Monsoon (15:30)' : 'Simulate Afternoon Rain (14:00)'}</span>
                </button>
              ` : `
                <button class="btn-simulate-event" onclick="voyAgentApp.itinerary.revertDay2()">
                  ${window.VoyAgentIcons.get('refresh-cw', { size: 14 })}
                  <span>Revert to Original Plan</span>
                </button>
              `}
            </div>
          </div>
        ` : ''}

        <!-- Timeline Slots -->
        <div class="timeline-container">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-2);">
            ${currentDayData.dateTitle}
          </h4>

          ${currentDayData.slots.map((slot, index) => `
            <div class="timeline-item">
              <div class="timeline-left-marker">
                <div class="slot-circle">${index + 1}</div>
                ${index < currentDayData.slots.length - 1 ? '<div class="timeline-connector-line"></div>' : ''}
              </div>

              <div class="activity-card ${slot.replanned ? 'replanned-highlight' : ''}" id="card-${slot.id}">
                <div class="activity-header">
                  <div class="activity-time-slot">
                    <span style="display: inline-flex; align-items: center; gap: 4px;">
                      ${window.VoyAgentIcons.get('clock', { size: 12 })}
                      ${slot.time}
                    </span>
                    <span style="opacity: 0.6;">·</span>
                    <span>${slot.category}</span>
                  </div>
                  ${slot.replanned ? `
                    <span class="replanned-badge" style="display: inline-flex; align-items: center; gap: 4px;">
                      ${window.VoyAgentIcons.get('shield-alert', { size: 12 })}
                      <span>Replanned for Rain</span>
                    </span>
                  ` : ''}
                </div>

                <div class="activity-title">
                  <span>${slot.title}</span>
                </div>

                <div class="activity-desc">${slot.desc}</div>

                <div class="activity-footer">
                  <div class="activity-cost" style="display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-flex; align-items: center; gap: 4px;">
                      ${window.VoyAgentIcons.get('tag', { size: 12 })}
                      ${slot.cost}
                    </span>
                    <span style="opacity: 0.4;">|</span>
                    
                    <!-- Clickable Rating Button: Opens Verified Reviews & Social Sentiment Modal -->
                    <button 
                      class="rating-pill-btn" 
                      onclick="voyAgentApp.openReviewModal('${slot.id}')" 
                      title="Click to view verified traveler feedback and sentiment breakdown"
                    >
                      <svg class="rating-star-gold" width="13" height="13" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"></polygon>
                      </svg>
                      <span class="rating-score-bold">${slot.ratingScore || 4.8}</span>
                      <span class="rating-count-muted">(${slot.reviewCount || '10k'})</span>
                      <span class="rating-tag-label">Reviews</span>
                    </button>
                  </div>

                  <div class="activity-actions">
                    <button class="btn-card-action" onclick="voyAgentApp.itinerary.locateOnMap('${slot.id}', [${slot.coords}])" title="Locate on interactive route map">
                      ${window.VoyAgentIcons.get('navigation', { size: 13 })}
                      <span>Locate</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            ${slot.transitNext ? `
              <div class="transit-step">
                <span class="transit-icon">↳</span>
                <span class="transit-mode-icon" style="display: inline-flex; align-items: center; color: var(--primary-600); margin-right: 4px;">
                  ${window.VoyAgentIcons.get(slot.transitNext.mode || 'footprints', { size: 13 })}
                </span>
                <span class="transit-info">${slot.transitNext.info}</span>
              </div>
            ` : ''}
          `).join('')}
        </div>
      </div>
    `;

    // Sync map route
    if (this.app.map) {
      this.app.map.renderDayRoute(currentDayData.slots, this.activeDay);
    }
  }

  switchDay(dayNumber) {
    this.activeDay = dayNumber;
    this.render();
  }

  locateOnMap(slotId, coords) {
    if (this.app.map) {
      this.app.map.focusSlot(slotId, coords);
      this.app.switchWorkspaceTab("map");
      this.app.showToast("Focused on map: " + slotId);
    }
  }

  triggerRainReplanning() {
    this.app.showToast("Weather alert detected! Adapting afternoon schedule...", "info");

    const isKL = this.currentTrip && this.currentTrip.id === "kl";
    const replanData = isKL ? window.VOYAGENT_DATA.replannedKlDay2 : window.VOYAGENT_DATA.replannedKyotoDay2;
    
    if (this.app.chat) {
      if (isKL) {
        this.app.chat.appendAgentMessageWithTools({
          content: `**Monsoon Downpour Advisory for Day 2!** An intense afternoon tropical thunderstorm is forecast for Kuala Lumpur starting around **15:30**.\n\n` +
                   `To keep you dry and comfortable, I've dynamically adapted your afternoon schedule:\n` +
                   `- Replaced open **KLCC Park** walking trails with **Aquaria KLCC** (90m transparent underwater oceanarium tunnel).\n` +
                   `- Swapped exposed rooftop lounge dining with air-conditioned **Suria KLCC** fine dining overlooking the Symphony Lake fountains.\n` +
                   `- Connected all points via the direct sheltered underground air-conditioned tunnel.`
        });
      } else {
        this.app.chat.appendAgentMessageWithTools({
          content: `**Weather Advisory for Day 2!** An afternoon rainstorm is forecast for Kyoto starting around **14:00**.\n\n` +
                   `To keep your journey enjoyable and safe, I've adjusted your afternoon schedule:\n` +
                   `- Replaced the outdoor hike up **Iwatayama Monkey Park** and open grounds of **Kinkaku-ji** with the dry, climate-controlled **Kyoto National Museum** and the 400m covered **Nishiki Market** arcade.\n` +
                   `- Updated transit paths to use sheltered tram and subway connections.`
        });
      }
    }

    // Apply replanned slots
    const day2 = this.currentTrip.days.find(d => d.dayNumber === 2);
    if (day2 && replanData) {
      day2.slots = replanData.newSlots;
      this.isReplannedDay2 = true;
      this.render();
    }
  }

  revertDay2() {
    const originalTrip = window.VOYAGENT_DATA.trips[this.currentTrip.id];
    const day2 = this.currentTrip.days.find(d => d.dayNumber === 2);
    if (day2 && originalTrip && originalTrip.days[1]) {
      day2.slots = JSON.parse(JSON.stringify(originalTrip.days[1].slots));
      this.isReplannedDay2 = false;
      this.render();
      this.app.showToast("Reverted to original outdoor itinerary.");
    }
  }
}

window.VoyAgentItinerary = VoyAgentItinerary;
