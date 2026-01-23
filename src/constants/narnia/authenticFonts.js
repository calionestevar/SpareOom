// Authentic, Theme-Accurate Fonts
// All fonts are free for commercial use via Google Fonts

export const AUTHENTIC_THEME_FONTS = {
  NARNIA: {
    // Narnia uses classical, literary, magical fonts
    primary: "'Cormorant Garamond', serif",      // Elegant, bookish, reminiscent of classic literature
    secondary: "'Crimson Pro', serif",            // Readable yet magical
    accent: "'Cinzel Decorative', serif",         // Ornate, for special text (like "Aslan")
    body: "'Lora', serif",                        // Warm, readable for body text
    googleFonts: 'Cormorant+Garamond:wght@300;400;600;700|Crimson+Pro:wght@400;600;700|Cinzel+Decorative:wght@400;700;900|Lora:wght@400;600',
    description: 'Classical British literature aesthetic with magical warmth'
  },

  STARTREK: {
    // Star Trek uses clean, futuristic, technical fonts
    primary: "'Michroma', sans-serif",            // Geometric, futuristic (very TNG/DS9)
    secondary: "'Saira Condensed', sans-serif",   // Condensed technical readouts
    accent: "'Oxanium', sans-serif",              // Digital, tech displays
    body: "'Exo 2', sans-serif",                  // Modern sci-fi readability
    googleFonts: 'Michroma:wght@400|Saira+Condensed:wght@400;600;700;900|Oxanium:wght@400;600;700|Exo+2:wght@400;600',
    description: 'Clean Federation technology aesthetic with LCARS influences'
  },

  LOTR: {
    // LOTR uses medieval, elvish, ancient fonts
    primary: "'Cinzel', serif",                   // Roman inscriptions, very Middle-earth
    secondary: "'IM Fell English', serif",        // Old English, Fellowship feeling
    accent: "'MedievalSharp', serif",             // Medieval manuscripts
    body: "'Lusitana', serif",                    // Elegant medieval readability
    googleFonts: 'Cinzel:wght@400;600;700;900|IM+Fell+English:wght@400|MedievalSharp:wght@400|Lusitana:wght@400;700',
    description: 'Medieval manuscripts and ancient inscriptions of Middle-earth'
  },

  STARGATE: {
    // Stargate uses military, technical, Egyptian-influenced fonts
    primary: "'Rajdhani', sans-serif",            // Angular, military (SGC aesthetic)
    secondary: "'Saira', sans-serif",             // Technical military displays
    accent: "'Chakra Petch', sans-serif",         // Angular, alien technology
    body: "'Titillium Web', sans-serif",          // Military technical manuals
    googleFonts: 'Rajdhani:wght@400;600;700|Saira:wght@400;600;700|Chakra+Petch:wght@400;600;700|Titillium+Web:wght@400;600',
    description: 'Military-technical with subtle ancient alien influences'
  },

  ANNE: {
    // Anne uses romantic, Victorian, handwritten feminine fonts
    primary: "'Libre Baskerville', serif",        // Classic literature, Anne's era
    secondary: "'Lora', serif",                   // Warm, romantic readability
    accent: "'Satisfy', cursive",                 // Handwritten, diary-like (not Dancing Script - too common)
    body: "'Crimson Text', serif",                // Victorian novel aesthetic
    googleFonts: 'Libre+Baskerville:wght@400;700|Lora:wght@400;600;700|Satisfy:wght@400|Crimson+Text:wght@400;600',
    description: 'Victorian literature with romantic handwritten touches'
  },

  LITTLEHOUSE: {
    // Little House uses rustic, handwritten, prairie fonts
    primary: "'Covered By Your Grace', cursive",  // Handwritten prairie diary
    secondary: "'Della Respira', serif",          // Old typewriter, almanac feel
    accent: "'Schoolbell', cursive",              // One-room schoolhouse
    body: "'Neuton', serif",                      // Warm, readable, rustic
    googleFonts: 'Covered+By+Your+Grace:wght@400|Della+Respira:wght@400|Schoolbell:wght@400|Neuton:wght@400;700',
    description: 'Handwritten prairie diaries and one-room schoolhouse'
  }
};

// Enhanced color palettes with authentic theme colors
export const AUTHENTIC_THEME_COLORS = {
  NARNIA: {
    // Winter wonderland meets golden Narnia
    gradient: 'from-slate-50 via-blue-50 to-indigo-100',
    primary: 'indigo-700',        // Deep Narnian blue
    secondary: 'amber-500',       // Aslan's golden mane
    accent: 'blue-300',           // Ice and snow
    dark: 'slate-800',            // Deep forest
    light: 'blue-50',             // Snow
    glow: 'amber-200',            // Magical glow
  },

  STARTREK: {
    // LCARS and Federation colors
    gradient: 'from-slate-950 via-blue-950 to-slate-900',
    primary: 'blue-500',          // Federation blue
    secondary: 'yellow-400',      // Command gold
    accent: 'red-500',            // Engineering/Security red
    dark: 'slate-950',            // Space black
    light: 'cyan-400',            // LCARS highlights
    glow: 'cyan-300',             // Warp core glow
  },

  LOTR: {
    // Middle-earth naturals with Elvish elegance
    gradient: 'from-stone-100 via-amber-50 to-green-100',
    primary: 'emerald-700',       // Shire green
    secondary: 'amber-600',       // Ring gold
    accent: 'orange-500',         // Mount Doom
    dark: 'stone-800',            // Moria depths
    light: 'amber-50',            // Parchment
    glow: 'green-300',            // Elvish light
  },

  STARGATE: {
    // Military grays with chevron blue
    gradient: 'from-slate-900 via-blue-900 to-slate-800',
    primary: 'cyan-500',          // Event horizon blue
    secondary: 'blue-400',        // Chevron lock
    accent: 'orange-500',         // Dialing sequence
    dark: 'slate-900',            // SGC concrete
    light: 'cyan-300',            // Gate shimmer
    glow: 'blue-400',             // Active chevron
  },

  ANNE: {
    // Prince Edward Island pastels
    gradient: 'from-rose-50 via-pink-100 to-green-50',
    primary: 'rose-600',          // Anne's red hair
    secondary: 'green-600',       // Green Gables
    accent: 'pink-400',           // Cherry blossoms
    dark: 'rose-900',             // Deep romantic
    light: 'pink-50',             // Delicate femininity
    glow: 'rose-200',             // Romantic glow
  },

  LITTLEHOUSE: {
    // Prairie earth tones
    gradient: 'from-yellow-50 via-amber-100 to-orange-50',
    primary: 'amber-700',         // Prairie wheat
    secondary: 'orange-600',      // Sunset over plains
    accent: 'yellow-600',         // Sunflowers
    dark: 'amber-900',            // Rich soil
    light: 'yellow-50',           // Bright prairie sky
    glow: 'amber-300',            // Golden hour
  }
};

// Authentic design elements per theme
export const AUTHENTIC_DESIGN_ELEMENTS = {
  NARNIA: {
    patterns: {
      snowflake: '❄',
      tree: '🌲',
      lion: '🦁',
      lamp: '🕯',
    },
    effects: {
      cardBorder: 'border-4 border-double border-indigo-200',
      headerStyle: 'tracking-wide uppercase text-shadow',
      buttonStyle: 'rounded-lg border-2 border-amber-500 shadow-lg hover:shadow-amber-200',
      // Magical sparkle effect
      magicalGlow: 'shadow-2xl shadow-amber-200/50',
    }
  },

  STARTREK: {
    patterns: {
      delta: '▲',
      chevron: '⟨',
      slash: '/',
    },
    effects: {
      cardBorder: 'border-l-4 border-blue-500',
      headerStyle: 'uppercase tracking-widest font-black',
      buttonStyle: 'clip-path-pentagon uppercase tracking-wider',
      // LCARS panel effect
      lcarsPanel: 'rounded-r-full border-l-8 border-blue-500 bg-gradient-to-r from-blue-500/10',
    }
  },

  LOTR: {
    patterns: {
      ring: '○',
      leaf: '🍃',
      tree: '🌳',
      sword: '⚔',
    },
    effects: {
      cardBorder: 'border-4 border-double border-amber-700 rounded-sm',
      headerStyle: 'tracking-tight font-bold drop-shadow-lg',
      buttonStyle: 'rounded-full border-2 border-amber-700',
      // Parchment effect
      parchment: 'bg-gradient-to-br from-amber-50 to-yellow-50 shadow-inner',
    }
  },

  STARGATE: {
    patterns: {
      chevron: '⟨',
      gate: '◯',
      pyramid: '△',
    },
    effects: {
      cardBorder: 'border-2 border-cyan-500 rounded-none',
      headerStyle: 'uppercase tracking-widest font-bold',
      buttonStyle: 'rounded-sm border-2 border-cyan-500 uppercase',
      // Chevron lock effect
      chevronGlow: 'shadow-lg shadow-cyan-500/50 border-cyan-400',
    }
  },

  ANNE: {
    patterns: {
      flower: '🌸',
      book: '📖',
      heart: '♥',
      leaf: '🍂',
    },
    effects: {
      cardBorder: 'border-2 border-rose-300 rounded-2xl',
      headerStyle: 'italic font-bold',
      buttonStyle: 'rounded-full shadow-md border border-rose-300',
      // Delicate feminine effect
      delicate: 'shadow-lg shadow-rose-100 border-rose-200',
    }
  },

  LITTLEHOUSE: {
    patterns: {
      wheat: '🌾',
      house: '🏠',
      sun: '☀',
      star: '⭐',
    },
    effects: {
      cardBorder: 'border-4 border-amber-700 rounded-md',
      headerStyle: 'font-bold',
      buttonStyle: 'rounded-md border-2 border-amber-700',
      // Wood grain effect
      woodGrain: 'bg-gradient-to-br from-amber-100 to-orange-100 shadow-inner',
    }
  }
};

// Load authentic fonts
export const loadAuthenticFonts = (themeId) => {
  const theme = AUTHENTIC_THEME_FONTS[themeId.toUpperCase()];
  if (!theme) return;

  const linkId = 'authentic-theme-fonts';
  let link = document.getElementById(linkId);
  
  if (!link) {
    link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  
  link.href = `https://fonts.googleapis.com/css2?family=${theme.googleFonts}&display=swap`;
};

// Apply authentic fonts to document
export const applyAuthenticFonts = (themeId) => {
  const theme = AUTHENTIC_THEME_FONTS[themeId.toUpperCase()];
  if (!theme) return;

  document.documentElement.style.setProperty('--font-primary', theme.primary);
  document.documentElement.style.setProperty('--font-secondary', theme.secondary);
  document.documentElement.style.setProperty('--font-accent', theme.accent);
  document.documentElement.style.setProperty('--font-body', theme.body);
};