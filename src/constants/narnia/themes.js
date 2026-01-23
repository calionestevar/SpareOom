// Enhanced theme definitions with custom fonts, layouts, and visual styles

export const THEMES = {
  NARNIA: {
    id: 'narnia',
    name: 'Narnia',
    fonts: {
      primary: "'Cormorant Garamond', serif",
      secondary: "'Crimson Pro', serif",
      accent: "'Cinzel Decorative', serif",
      body: "'Lora', serif",
      googleFonts: 'Cormorant+Garamond:wght@300;400;600;700|Crimson+Pro:wght@400;600;700|Cinzel+Decorative:wght@400;700;900|Lora:wght@400;600'
    },
    colors: {
      primary: 'indigo-600',
      primaryHover: 'indigo-700',
      secondary: 'amber-500',
      accent: 'purple-500',
      background: 'from-blue-50 via-indigo-50 to-purple-50',
      cardBg: 'white',
      cardBorder: 'border-indigo-200',
      textPrimary: 'gray-800',
      textSecondary: 'gray-600',
      shadowColor: 'shadow-indigo-200/50',
    },
    styles: {
      cardStyle: 'border-2 border-indigo-200 shadow-lg shadow-indigo-100',
      buttonStyle: 'rounded-lg font-semibold tracking-wide',
      headerStyle: 'font-bold tracking-wide',
      inputStyle: 'border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-400',
      pattern: 'snowflake', // Background pattern
    },
    text: {
      appName: 'Spare Oom',
      tagline: 'A Magical Learning Space',
      welcome: 'Further Up & Further In',
      welcomeSubtext: 'Where every lesson is an adventure',
      weeklyPlanner: 'Weekly Adventures',
      lessonLabel: 'Lessons',
      childrenLabel: 'Kindred Spirits',
      addLesson: 'Plan an Adventure',
      completeLesson: 'Quest Complete!',
    },
    animations: {
      transition: 'transition-all duration-300 ease-in-out',
      hover: 'hover:scale-105 hover:shadow-xl',
    }
  },
  
  STARTREK: {
    id: 'startrek',
    name: 'Star Trek',
    fonts: {
      primary: "'Michroma', sans-serif",
      secondary: "'Saira Condensed', sans-serif",
      accent: "'Oxanium', sans-serif",
      body: "'Exo 2', sans-serif",
      googleFonts: 'Michroma:wght@400|Saira+Condensed:wght@400;600;700;900|Oxanium:wght@400;600;700|Exo+2:wght@400;600'
    },
    colors: {
      primary: 'blue-500',
      primaryHover: 'blue-600',
      secondary: 'yellow-400',
      accent: 'red-500',
      background: 'from-slate-900 via-blue-900 to-slate-800',
      cardBg: 'slate-800',
      cardBorder: 'border-blue-400',
      textPrimary: 'blue-100',
      textSecondary: 'slate-300',
      shadowColor: 'shadow-blue-500/30',
    },
    styles: {
      cardStyle: 'bg-slate-800 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20',
      buttonStyle: 'rounded-none skew-x-[-5deg] uppercase tracking-widest font-bold',
      headerStyle: 'uppercase tracking-widest font-black',
      inputStyle: 'bg-slate-700 border border-blue-400 rounded-none text-blue-100 focus:ring-2 focus:ring-yellow-400',
      pattern: 'lcars', // LCARS-style panels
    },
    text: {
      appName: 'ACADEMY LOGS',
      tagline: 'Starfleet Educational Division',
      welcome: 'ENGAGE!',
      welcomeSubtext: 'Mission planning for educational excellence',
      weeklyPlanner: 'BRIDGE - Weekly Scan',
      lessonLabel: 'Mission Objectives',
      childrenLabel: 'Crew Members',
      addLesson: 'Log Mission',
      completeLesson: 'Mission Accomplished',
    },
    animations: {
      transition: 'transition-all duration-200 ease-linear',
      hover: 'hover:border-yellow-400 hover:shadow-yellow-400/40',
    }
  },
  
  LOTR: {
    id: 'lotr',
    name: 'Lord of the Rings',
    fonts: {
      primary: "'Cinzel', serif",
      secondary: "'IM Fell English', serif",
      accent: "'MedievalSharp', serif",
      body: "'Lusitana', serif",
      googleFonts: 'Cinzel:wght@400;600;700;900|IM+Fell+English:wght@400|MedievalSharp:wght@400|Lusitana:wght@400;700'
    },
    colors: {
      primary: 'green-700',
      primaryHover: 'green-800',
      secondary: 'amber-600',
      accent: 'orange-700',
      background: 'from-green-50 via-emerald-50 to-amber-50',
      cardBg: 'amber-50',
      cardBorder: 'border-amber-600',
      textPrimary: 'green-900',
      textSecondary: 'green-700',
      shadowColor: 'shadow-green-600/30',
    },
    styles: {
      cardStyle: 'bg-amber-50 border-4 border-double border-amber-600 shadow-2xl',
      buttonStyle: 'rounded-full border-2 border-amber-600 font-bold',
      headerStyle: 'font-bold text-shadow',
      inputStyle: 'bg-amber-50 border-2 border-green-600 rounded-md focus:ring-2 focus:ring-amber-500',
      pattern: 'parchment', // Parchment texture
    },
    text: {
      appName: 'The Learning Fellowship',
      tagline: 'One Does Not Simply Skip Lessons',
      welcome: 'Not All Who Wander Are Lost',
      welcomeSubtext: 'Your journey through knowledge begins',
      weeklyPlanner: 'Quest Log of the Shire',
      lessonLabel: 'Quests',
      childrenLabel: 'Fellowship Members',
      addLesson: 'Embark on Quest',
      completeLesson: 'Quest Fulfilled',
    },
    animations: {
      transition: 'transition-all duration-500 ease-out',
      hover: 'hover:scale-[1.02] hover:shadow-2xl',
    }
  },

  STARGATE: {
    id: 'stargate',
    name: 'Stargate',
    fonts: {
      primary: "'Rajdhani', sans-serif",
      secondary: "'Saira', sans-serif",
      accent: "'Chakra Petch', sans-serif",
      body: "'Titillium Web', sans-serif",
      googleFonts: 'Rajdhani:wght@400;600;700|Saira:wght@400;600;700|Chakra+Petch:wght@400;600;700|Titillium+Web:wght@400;600'
    },
    colors: {
      primary: 'cyan-600',
      primaryHover: 'cyan-700',
      secondary: 'blue-500',
      accent: 'indigo-600',
      background: 'from-slate-800 via-cyan-900 to-blue-900',
      cardBg: 'slate-800',
      cardBorder: 'border-cyan-400',
      textPrimary: 'cyan-100',
      textSecondary: 'slate-300',
      shadowColor: 'shadow-cyan-500/40',
    },
    styles: {
      cardStyle: 'bg-slate-800 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 relative overflow-hidden',
      buttonStyle: 'rounded-lg uppercase tracking-wide font-bold border border-cyan-400',
      headerStyle: 'uppercase tracking-widest font-bold',
      inputStyle: 'bg-slate-700 border-2 border-cyan-400 rounded text-cyan-100 focus:ring-2 focus:ring-blue-400',
      pattern: 'chevron', // Chevron symbols
    },
    text: {
      appName: 'GATE ROOM ACADEMY',
      tagline: 'SGC Educational Command',
      welcome: 'Chevron 7 Locked',
      welcomeSubtext: 'Establishing stable learning wormhole',
      weeklyPlanner: 'Gate Mission Roster',
      lessonLabel: 'Off-World Missions',
      childrenLabel: 'SG Team Members',
      addLesson: 'Dial New Mission',
      completeLesson: 'Mission Success',
    },
    animations: {
      transition: 'transition-all duration-300 ease-in-out',
      hover: 'hover:border-blue-300 hover:shadow-blue-400/50',
    }
  },

  ANNE: {
    id: 'anne',
    name: 'Anne of Green Gables',
    fonts: {
      primary: "'Libre Baskerville', serif",
      secondary: "'Lora', serif",
      accent: "'Satisfy', cursive",
      body: "'Crimson Text', serif",
      googleFonts: 'Libre+Baskerville:wght@400;700|Lora:wght@400;600;700|Satisfy:wght@400|Crimson+Text:wght@400;600'
    },
    colors: {
      primary: 'rose-500',
      primaryHover: 'rose-600',
      secondary: 'green-600',
      accent: 'pink-400',
      background: 'from-rose-50 via-pink-50 to-green-50',
      cardBg: 'white',
      cardBorder: 'border-rose-300',
      textPrimary: 'gray-800',
      textSecondary: 'gray-600',
      shadowColor: 'shadow-rose-200/50',
    },
    styles: {
      cardStyle: 'bg-white border-2 border-rose-300 shadow-lg rounded-xl',
      buttonStyle: 'rounded-full shadow-md',
      headerStyle: 'font-bold italic',
      inputStyle: 'border-2 border-rose-300 rounded-full focus:ring-2 focus:ring-pink-400',
      pattern: 'floral', // Floral pattern
    },
    text: {
      appName: 'Green Gables Academy',
      tagline: 'Where Imagination Blooms',
      welcome: 'Scope for Imagination',
      welcomeSubtext: 'Each day holds wonderful possibilities',
      weeklyPlanner: 'The Avonlea Weekly',
      lessonLabel: 'Studies',
      childrenLabel: 'Kindred Spirits',
      addLesson: 'Plan a Lesson',
      completeLesson: 'Splendidly Done!',
    },
    animations: {
      transition: 'transition-all duration-400 ease-in-out',
      hover: 'hover:scale-105 hover:shadow-xl hover:shadow-rose-200',
    }
  },

  LITTLEHOUSE: {
    id: 'littlehouse',
    name: 'Little House on the Prairie',
    fonts: {
      primary: "'Covered By Your Grace', cursive",
      secondary: "'Della Respira', serif",
      accent: "'Schoolbell', cursive",
      body: "'Neuton', serif",
      googleFonts: 'Covered+By+Your+Grace:wght@400|Della+Respira:wght@400|Schoolbell:wght@400|Neuton:wght@400;700'
    },
    colors: {
      primary: 'amber-700',
      primaryHover: 'amber-800',
      secondary: 'orange-600',
      accent: 'yellow-600',
      background: 'from-amber-50 via-orange-50 to-yellow-50',
      cardBg: 'orange-50',
      cardBorder: 'border-amber-600',
      textPrimary: 'amber-900',
      textSecondary: 'amber-800',
      shadowColor: 'shadow-amber-400/40',
    },
    styles: {
      cardStyle: 'bg-orange-50 border-4 border-amber-700 shadow-xl',
      buttonStyle: 'rounded-md border-2 border-amber-700',
      headerStyle: 'font-bold',
      inputStyle: 'bg-yellow-50 border-2 border-amber-600 rounded focus:ring-2 focus:ring-orange-400',
      pattern: 'wood', // Wood grain texture
    },
    text: {
      appName: 'Prairie Schoolhouse',
      tagline: 'Simple Living, High Thinking',
      welcome: 'A Harvest of Learning',
      welcomeSubtext: 'Tending your family garden of knowledge',
      weeklyPlanner: 'The Weekly Almanac',
      lessonLabel: 'Daily Studies',
      childrenLabel: 'Students',
      addLesson: 'Record Lesson',
      completeLesson: 'Well Done!',
    },
    animations: {
      transition: 'transition-all duration-300 ease-out',
      hover: 'hover:shadow-lg hover:shadow-amber-300',
    }
  }
};

export const DEFAULT_THEME = THEMES.NARNIA;

export const getThemeClasses = (theme) => {
  return {
    // Button classes
    primaryButton: `bg-${theme.colors.primary} hover:bg-${theme.colors.primaryHover} text-white px-6 py-3 ${theme.styles.buttonStyle} ${theme.animations.transition} shadow-lg`,
    secondaryButton: `bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 ${theme.styles.buttonStyle} ${theme.animations.transition}`,
    
    // Card classes
    card: `${theme.styles.cardStyle} ${theme.animations.transition}`,
    
    // Text classes
    heading: `${theme.styles.headerStyle} text-${theme.colors.textPrimary}`,
    subheading: `text-${theme.colors.textSecondary}`,
    
    // Input classes
    input: theme.styles.inputStyle,
    
    // Background
    background: `bg-gradient-to-br ${theme.colors.background}`,
  };
};

// Helper function to load Google Fonts dynamically
export const loadThemeFonts = (theme) => {
  const linkId = 'theme-fonts';
  let link = document.getElementById(linkId);
  
  if (!link) {
    link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  
  link.href = `https://fonts.googleapis.com/css2?family=${theme.fonts.googleFonts}&display=swap`;
};

// Apply theme fonts to document
export const applyThemeFonts = (theme) => {
  document.documentElement.style.setProperty('--font-primary', theme.fonts.primary);
  document.documentElement.style.setProperty('--font-secondary', theme.fonts.secondary);
  document.documentElement.style.setProperty('--font-accent', theme.fonts.accent);
};