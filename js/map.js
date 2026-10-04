/**
 * VoyAgent Map Controller - Road-Snapped Navigation Engine
 * FIT3161 - Personal AI Travel Companion
 * Professional navigation experience with road-following geometry, multi-modal styling & interactive legs.
 */

class VoyAgentMap {
  constructor(containerId) {
    this.containerId = containerId;
    this.map = null;
    this.tileLayer = null;
    this.markersGroup = null;
    this.routesGroup = null;
    this.segmentLayers = new Map();
    this.activeHighlightedKey = null;
    this.markersMap = new Map();
  }

  init() {
    if (this.map) return;

    const container = document.getElementById(this.containerId);
    if (!container) return;

    // Center on Kuala Lumpur by default
    this.map = L.map(this.containerId, {
      zoomControl: false
    }).setView([3.1486, 101.6944], 13);

    // High-performance clean daytime street map tiles (Unified daylight view across all themes)
    const daylightTileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}";
    this.tileLayer = L.tileLayer(daylightTileUrl, {
      attribution: '&copy; <a href="https://www.esri.com/">Esri</a> &middot; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(this.map);

    // Zoom control at bottom right (adjusted above navigation bar via CSS)
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    // Layer groups for routes (bottom) and markers (top)
    this.routesGroup = L.featureGroup().addTo(this.map);
    this.markersGroup = L.featureGroup().addTo(this.map);
  }

  updateTheme(theme) {
    // Keep daylight street map style consistently active across all themes
  }

  renderDayRoute(slots, dayNumber = 1, tripKey = "kl", isReplanned = false) {
    if (!this.map) this.init();
    if (!slots || slots.length === 0) return;

    // Clear previous elements
    this.markersGroup.clearLayers();
    this.routesGroup.clearLayers();
    this.segmentLayers.clear();
    this.markersMap.clear();
    this.activeHighlightedKey = null;

    // Resolve pre-computed road navigation data
    let routeKey = tripKey;
    if (isReplanned && tripKey === "kl" && dayNumber === 2) {
      routeKey = `${tripKey}_replanned_2`;
    }

    const allRoutes = window.VOYAGENT_ROUTES || {};
    let dayRouteData = null;
    if (allRoutes[routeKey]) {
      if (allRoutes[routeKey][dayNumber]) {
        dayRouteData = allRoutes[routeKey][dayNumber];
      } else if (allRoutes[routeKey].segments) {
        dayRouteData = allRoutes[routeKey];
      }
    }

    // Dynamic segment synthesis for Malaysian destinations without hardcoded road traces
    if (!dayRouteData || !dayRouteData.segments || dayRouteData.segments.length === 0) {
      const synSegments = [];
      let totalDist = 0;
      let totalDur = 0;
      for (let i = 0; i < slots.length - 1; i++) {
        const fromSlot = slots[i];
        const toSlot = slots[i + 1];
        if (fromSlot.coords && toSlot.coords) {
          const dLat = (toSlot.coords[0] - fromSlot.coords[0]) * 111;
          const dLng = (toSlot.coords[1] - fromSlot.coords[1]) * 111 * Math.cos(fromSlot.coords[0] * Math.PI / 180);
          const rawDist = Math.sqrt(dLat * dLat + dLng * dLng) * 1.35;
          const distKm = Math.max(0.6, Math.round(rawDist * 10) / 10);
          const transit = fromSlot.transitNext || {};
          const isWalk = transit.mode === 'footprints' || distKm <= 1.2;
          const mode = transit.mode === 'train' || transit.mode === 'subway' ? 'transit' : (isWalk ? 'walking' : 'driving');
          const durMin = Math.max(4, Math.round(distKm * (mode === 'walking' ? 12 : (mode === 'transit' ? 4 : 2.5))));
          
          totalDist += distKm;
          totalDur += durMin;

          synSegments.push({
            fromId: fromSlot.id,
            toId: toSlot.id,
            fromTitle: fromSlot.title,
            toTitle: toSlot.title,
            mode: mode,
            transitInfo: transit.info || `${mode === 'walking' ? 'Walk' : 'Transit'} to ${toSlot.title.split('&')[0].trim()} (${distKm} km)`,
            distanceKm: distKm,
            durationMin: durMin,
            coordinates: [fromSlot.coords, toSlot.coords]
          });
        }
      }
      if (synSegments.length > 0) {
        dayRouteData = {
          summary: {
            totalDistance: `${Math.round(totalDist * 10) / 10} km`,
            totalDuration: `${totalDur} min`,
            segmentsCount: synSegments.length
          },
          segments: synSegments
        };
      }
    }

    const allRoutePoints = [];

    // 1. Render Road-Snapped Route Segments
    if (dayRouteData && dayRouteData.segments && dayRouteData.segments.length > 0) {
      dayRouteData.segments.forEach((seg, idx) => {
        const segKey = `${seg.fromId}_${seg.toId}`;
        const coords = seg.coordinates || [];
        if (coords.length === 0) return;

        coords.forEach(pt => allRoutePoints.push(pt));

        // Styling based on travel mode
        let casingColor = 'rgba(2, 132, 199, 0.35)';
        let coreColor = '#0ea5e9';
        let dashPattern = null;
        let coreWeight = 4.5;
        let modeIcon = 'footprints';

        if (seg.mode === 'walking') {
          casingColor = 'rgba(14, 165, 233, 0.3)';
          coreColor = '#0284c7';
          dashPattern = '7, 8';
          coreWeight = 4;
          modeIcon = 'footprints';
        } else if (seg.mode === 'transit') {
          casingColor = 'rgba(16, 185, 129, 0.35)';
          coreColor = '#059669';
          coreWeight = 5;
          modeIcon = 'train';
        } else {
          // driving / highway
          casingColor = 'rgba(3, 105, 161, 0.4)';
          coreColor = '#0284c7';
          coreWeight = 5;
          modeIcon = 'navigation';
        }

        // Outer glow/casing line for road contrast
        const casing = L.polyline(coords, {
          color: casingColor,
          weight: coreWeight + 4,
          opacity: 0.8,
          lineCap: 'round',
          lineJoin: 'round'
        }).addTo(this.routesGroup);

        // Core path line
        const core = L.polyline(coords, {
          color: coreColor,
          weight: coreWeight,
          opacity: 0.95,
          dashArray: dashPattern,
          lineCap: 'round',
          lineJoin: 'round'
        }).addTo(this.routesGroup);

        // Wide transparent hit-area corridor (28px) for effortless, non-flickering hover detection
        const hitArea = L.polyline(coords, {
          weight: 28,
          opacity: 0.0001,
          color: '#000',
          lineCap: 'round',
          lineJoin: 'round',
          className: 'route-hit-corridor'
        }).addTo(this.routesGroup);

        // Interactive segment hover & click bound to generous hitArea
        const tooltipHtml = `
          <div class="map-route-tooltip">
            <div class="tooltip-header">
              <span class="tooltip-badge ${seg.mode}">
                ${seg.mode.toUpperCase()}
              </span>
              <span class="tooltip-leg-title">${seg.fromTitle.split('&')[0].trim()} ➔ ${seg.toTitle.split('&')[0].trim()}</span>
            </div>
            <div class="tooltip-info-row">
              <span>${seg.transitInfo}</span>
            </div>
            <div class="tooltip-meta-row">
              <span><strong>${seg.distanceKm} km</strong></span>
              <span>·</span>
              <span><strong>~${seg.durationMin} min</strong></span>
            </div>
          </div>
        `;

        hitArea.bindTooltip(tooltipHtml, {
          sticky: true,
          direction: 'top',
          className: 'leaflet-nav-tooltip',
          offset: [0, -10]
        });

        let hoverDebounce = null;
        const handleHover = (isEnter) => {
          if (this.activeHighlightedKey === segKey) return;
          if (isEnter) {
            clearTimeout(hoverDebounce);
            casing.setStyle({ weight: coreWeight + 7, color: 'rgba(245, 158, 11, 0.65)' });
            core.setStyle({ color: '#f59e0b', weight: coreWeight + 1.5 });
          } else {
            hoverDebounce = setTimeout(() => {
              if (this.activeHighlightedKey === segKey) return;
              casing.setStyle({ weight: coreWeight + 4, color: casingColor });
              core.setStyle({ color: coreColor, weight: coreWeight });
            }, 100);
          }
        };

        hitArea.on('mouseover', () => handleHover(true));
        hitArea.on('mouseout', () => handleHover(false));
        hitArea.on('click', () => this.highlightSegment(seg.fromId, seg.toId, true));

        this.segmentLayers.set(segKey, {
          casing,
          core,
          hitArea,
          defaultCasingColor: casingColor,
          defaultCoreColor: coreColor,
          defaultCoreWeight: coreWeight,
          segData: seg,
          modeIcon
        });
      });
    } else {
      // Fallback: draw straight dashed line if no road coords
      const latLngs = [];
      slots.forEach(slot => {
        if (slot.coords) {
          latLngs.push(slot.coords);
          allRoutePoints.push(slot.coords);
        }
      });
      if (latLngs.length > 1) {
        L.polyline(latLngs, {
          color: '#0284C7',
          weight: 4,
          opacity: 0.85,
          dashArray: '8, 8',
          lineCap: 'round'
        }).addTo(this.routesGroup);
      }
    }

    // 2. Render Navigation Pins (Start, Waypoints, Destination)
    slots.forEach((slot, index) => {
      if (!slot.coords) return;
      const [lat, lng] = slot.coords;
      allRoutePoints.push([lat, lng]);

      const isStart = index === 0;
      const isEnd = index === slots.length - 1;

      let markerClass = "custom-map-marker waypoint-marker";
      let markerLabel = `${index + 1}`;
      let pinTypeLabel = `Stop ${index + 1}`;

      if (isStart) {
        markerClass = "custom-map-marker start-marker";
        markerLabel = "START";
        pinTypeLabel = "Starting Point";
      } else if (isEnd) {
        markerClass = "custom-map-marker end-marker";
        markerLabel = "DEST";
        pinTypeLabel = "Final Destination";
      }

      if (slot.replanned) {
        markerClass += " replanned-marker";
      }

      const customIcon = L.divIcon({
        className: 'custom-pin-wrapper',
        html: `
          <div class="${markerClass}" id="map-pin-${slot.id}">
            <span class="marker-pulse-ring"></span>
            <span class="marker-number">${markerLabel}</span>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36]
      });

      const marker = L.marker([lat, lng], { icon: customIcon });

      const nextSlot = slots[index + 1];
      const nextLegAction = nextSlot ? `
        <button class="btn-popup-nav" onclick="voyAgentApp.map.highlightSegment('${slot.id}', '${nextSlot.id}', true)">
          <span>Follow road to next stop ➔</span>
        </button>
      ` : `<div style="font-size: 0.72rem; color: #10b981; font-weight: 700; margin-top: 4px;">✓ End of Day ${dayNumber} Journey</div>`;

      const popupHtml = `
        <div class="map-popup-inner">
          <div class="popup-header-row">
            <span class="popup-role-pill">${pinTypeLabel}</span>
            <span class="popup-tag">${slot.category}</span>
          </div>
          <div class="popup-title">${slot.title}</div>
          <div class="popup-time" style="font-size: 0.75rem; color: #64748b; display: flex; align-items: center; gap: 4px; margin-top: 3px;">
            ${window.VoyAgentIcons ? window.VoyAgentIcons.get('clock', { size: 12 }) : ''}
            <span>${slot.time}</span>
          </div>
          <div class="popup-cost" style="font-size: 0.76rem; font-weight: 600; color: #0284c7; display: flex; align-items: center; gap: 4px; margin-top: 3px;">
            ${window.VoyAgentIcons ? window.VoyAgentIcons.get('tag', { size: 12 }) : ''}
            <span>${slot.cost}</span>
          </div>
          <div class="popup-nav-action-wrapper" style="margin-top: 8px;">
            ${nextLegAction}
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);
      this.markersGroup.addLayer(marker);
      this.markersMap.set(slot.id, marker);
    });

    // 3. Update Floating Navigation Summary & Bottom Legs Quick-Bar
    this.updateNavigationUI(dayRouteData, slots, dayNumber);

    // 4. Auto fit bounds to show full road itinerary
    if (allRoutePoints.length > 0) {
      this.map.fitBounds(L.latLngBounds(allRoutePoints).pad(0.18), {
        animate: true,
        duration: 0.9
      });
    }

    // Refresh size
    setTimeout(() => {
      if (this.map) this.map.invalidateSize();
    }, 200);
  }

  updateNavigationUI(dayRouteData, slots, dayNumber) {
    const statsEl = document.getElementById("map-route-stats");
    const titleEl = document.getElementById("map-nav-title");
    const legsBar = document.getElementById("map-bottom-legs-bar");

    if (titleEl) {
      titleEl.textContent = `Day ${dayNumber} Route Navigation`;
    }

    if (statsEl) {
      if (dayRouteData && dayRouteData.summary) {
        statsEl.innerHTML = `
          <span>${slots.length} Stops</span>
          <span>·</span>
          <span>${dayRouteData.summary.totalDistance}</span>
          <span>·</span>
          <span>~${dayRouteData.summary.totalDuration}</span>
        `;
      } else {
        statsEl.innerHTML = `<span>${slots.length} Stops Synchronized</span>`;
      }
    }

    if (legsBar) {
      if (dayRouteData && dayRouteData.segments && dayRouteData.segments.length > 0) {
        legsBar.innerHTML = `
          <div class="legs-nav-container">
            <button class="leg-pill-btn reset-btn active" id="leg-btn-all" onclick="voyAgentApp.map.resetHighlight(true)" title="View full day route overview">
              <span class="leg-mode-icon">${window.VoyAgentIcons ? window.VoyAgentIcons.get('refresh-cw', { size: 11 }) : ''}</span>
              <span>All Legs</span>
            </button>
            <div class="legs-nav-divider"></div>
            <div class="legs-scroll-track">
              ${dayRouteData.segments.map((seg, i) => {
                const segKey = `${seg.fromId}_${seg.toId}`;
                const isWalk = seg.mode === 'walking';
                const modeIconSvg = window.VoyAgentIcons ? window.VoyAgentIcons.get(isWalk ? 'footprints' : 'navigation', { size: 11 }) : '';
                return `
                  <button class="leg-pill-btn" id="leg-btn-${segKey}" onclick="voyAgentApp.map.highlightSegment('${seg.fromId}', '${seg.toId}', true)">
                    <span class="leg-mode-icon">${modeIconSvg}</span>
                    <span class="leg-name">${i + 1}➔${i + 2}</span>
                    <span class="leg-metric">${seg.distanceKm}km</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        `;
        legsBar.style.display = "flex";
      } else {
        legsBar.innerHTML = "";
        legsBar.style.display = "none";
      }
    }
  }

  highlightSegment(fromId, toId, flyToBounds = true) {
    const segKey = `${fromId}_${toId}`;
    const target = this.segmentLayers.get(segKey);
    if (!target) return;

    // Reset previous highlight
    this.resetHighlight(false);
    this.activeHighlightedKey = segKey;

    // Highlight target polyline with gold/cyan electric glow
    target.casing.setStyle({
      color: '#f59e0b',
      weight: 10,
      opacity: 0.85
    });
    target.core.setStyle({
      color: '#ffffff',
      weight: 6,
      opacity: 1
    });

    // Dim other segments slightly for spotlight contrast
    this.segmentLayers.forEach((layer, key) => {
      if (key !== segKey) {
        layer.casing.setStyle({ opacity: 0.15 });
        layer.core.setStyle({ opacity: 0.3 });
      }
    });

    // Highlight leg button in bottom bar
    document.querySelectorAll(".leg-pill-btn").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`leg-btn-${segKey}`);
    if (activeBtn) {
      activeBtn.classList.add("active");
      if (typeof activeBtn.scrollIntoView === 'function') {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      }
    }

    // Fly camera to road bounds
    if (flyToBounds && target.core) {
      this.map.flyToBounds(target.core.getBounds().pad(0.35), {
        duration: 0.9,
        easeLinearity: 0.25
      });
      if (target.hitArea) target.hitArea.openTooltip();
    }
  }

  resetHighlight(refitAll = false) {
    this.activeHighlightedKey = null;

    this.segmentLayers.forEach((layer) => {
      layer.casing.setStyle({
        color: layer.defaultCasingColor,
        weight: layer.defaultCoreWeight + 4,
        opacity: 0.8
      });
      layer.core.setStyle({
        color: layer.defaultCoreColor,
        weight: layer.defaultCoreWeight,
        opacity: 0.95
      });
      if (layer.hitArea) layer.hitArea.closeTooltip();
    });

    document.querySelectorAll(".leg-pill-btn").forEach(btn => btn.classList.remove("active"));
    const allBtn = document.getElementById("leg-btn-all");
    if (allBtn) allBtn.classList.add("active");

    if (refitAll && this.markersGroup && this.markersGroup.getLayers().length > 0) {
      this.map.fitBounds(this.markersGroup.getBounds().pad(0.2), {
        animate: true,
        duration: 0.8
      });
    }
  }

  focusSlot(slotId, coords) {
    if (!this.map || !coords) return;
    this.map.flyTo(coords, 15, { duration: 1.2 });

    const marker = this.markersMap.get(slotId);
    if (marker) {
      setTimeout(() => marker.openPopup(), 450);
    }
  }
}

window.VoyAgentMap = VoyAgentMap;
