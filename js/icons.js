/**
 * VoyAgent Unified SVG Icon System
 * Standardized 24x24 stroke-based Lucide/Feather inspired SVGs
 */
window.VoyAgentIcons = {
  icons: {
    // Navigation & General
    "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
    "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
    "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    "route": '<circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a4.5 4.5 0 0 0 0-9H6"></path><path d="M18 10V5a2 2 0 0 0-2-2H9"></path><circle cx="6" cy="5" r="3"></circle>',
    "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
    "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
    "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
    "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
    "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
    "wallet": '<rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><circle cx="16" cy="15" r="1.5"></circle>',
    "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
    
    // Weather & Atmosphere
    "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="4.22" x2="19.78" y2="5.64"></line>',
    "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
    "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
    "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
    "cloud-sun": '<path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>',
    "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',

    // Personas & Categories
    "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
    "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    "utensils": '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3v7"></path>',
    "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
    "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
    "sparkles": '<path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z"></path><path d="M19 17l1.2 2.8L23 21l-2.8 1.2L19 25l-1.2-2.8L15 21l2.8-1.2L19 17z"></path>',
    "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
    "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline>',
    "shield-alert": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
    "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
    "landmark": '<line x1="2" y1="22" x2="22" y2="22"></line><line x1="12" y1="2" x2="20" y2="7"></line><line x1="12" y1="2" x2="4" y2="7"></line><polyline points="4 7 20 7 20 10 4 10"></polyline><line x1="6" y1="10" x2="6" y2="22"></line><line x1="10" y1="10" x2="10" y2="22"></line><line x1="14" y1="10" x2="14" y2="22"></line><line x1="18" y1="10" x2="18" y2="22"></line>',

    // Transit Modes
    "footprints": '<path d="M4 16v-2.38C4 11.5 5.5 9 8 9c2.38 0 4 2.12 4 4.62V16"></path><path d="M20 20v-2.38c0-2.12-1.5-4.62-4-4.62-2.38 0-4 2.5-4 4.62V20"></path>',
    "bus": '<rect x="3" y="3" width="18" height="14" rx="2"></rect><path d="M3 11h18"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h6"></path><circle cx="17" cy="18" r="2"></circle>',
    "train": '<rect x="4" y="3" width="16" height="16" rx="2"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="m8 19-2 3"></path><path d="m16 19 2 3"></path><circle cx="8" cy="15" r="1"></circle><circle cx="16" cy="15" r="1"></circle>',
    "subway": '<rect x="5" y="2" width="14" height="16" rx="3"></rect><line x1="5" y1="10" x2="19" y2="10"></line><circle cx="9" cy="14" r="1"></circle><circle cx="15" cy="14" r="1"></circle><line x1="8" y1="18" x2="6" y2="22"></line><line x1="16" y1="18" x2="18" y2="22"></line>',
    "car": '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8c-.5.3-.8.9-.8 1.5v3c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle>',
    "tram": '<rect x="4" y="3" width="16" height="15" rx="2"></rect><line x1="4" y1="11" x2="20" y2="11"></line><circle cx="8" cy="15" r="1"></circle><circle cx="16" cy="15" r="1"></circle><path d="m8 3-2-2"></path><path d="m16 3 2-2"></path><path d="M12 1v2"></path>',
    "boat": '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M12 10V4"></path><path d="M12 2v3"></path>',
    "ship": '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M12 10V4"></path><path d="M12 2v3"></path>',

    // Actions, Feedback & Ratings
    "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    "star-half": '<path d="M12 17.77V2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77z"></path><path d="M12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2" fill="none"></path>',
    "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
    "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
    "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
    "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
    "check": '<polyline points="20 6 9 17 4 12"></polyline>',
    "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
    "hotel": '<path d="M18 2H6a2 2 0 0 0-2 2v18h16V4a2 2 0 0 0-2-2Z"></path><path d="M9 16v6"></path><path d="M15 16v6"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M8 10h.01"></path><path d="M16 10h.01"></path><path d="M12 10h.01"></path>',
    "shopping-bag": '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path>'
  },

  /**
   * Render SVG markup
   * @param {string} name - Icon name from registry
   * @param {object} options - { size, className, strokeWidth, fill }
   */
  get(name, options = {}) {
    const iconInner = this.icons[name] || this.icons["compass"];
    const size = options.size || 16;
    const className = options.className ? `svg-icon ${options.className}` : "svg-icon";
    const strokeWidth = options.strokeWidth || 2;
    const fill = options.fill || "none";

    return `
      <svg 
        class="${className}" 
        width="${size}" 
        height="${size}" 
        viewBox="0 0 24 24" 
        fill="${fill}" 
        stroke="currentColor" 
        stroke-width="${strokeWidth}" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        aria-hidden="true"
      >
        ${iconInner}
      </svg>
    `.trim();
  }
};
