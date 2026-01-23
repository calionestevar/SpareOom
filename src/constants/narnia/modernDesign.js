// Modern Design System - Professional UI Enhancements

export const MODERN_STYLES = {
  // Card styles with depth and modern shadows
  card: {
    base: 'bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300',
    elevated: 'bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100',
    glass: 'bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20',
  },

  // Modern button styles
  button: {
    primary: 'px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200',
    secondary: 'px-6 py-3 rounded-xl font-semibold border-2 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200',
    ghost: 'px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200',
    icon: 'p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-110',
  },

  // Modern input styles
  input: {
    base: 'px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none',
    search: 'px-4 py-3 pl-12 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 outline-none',
  },

  // Modern badge/chip styles
  badge: {
    base: 'px-3 py-1.5 rounded-full text-sm font-medium shadow-sm',
    outlined: 'px-3 py-1.5 rounded-full text-sm font-medium border-2',
  },

  // Modern modal/overlay
  modal: {
    overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn',
    container: 'bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-slideUp',
    header: 'px-6 py-4 border-b border-gray-100 flex items-center justify-between',
    body: 'px-6 py-4 overflow-y-auto',
    footer: 'px-6 py-4 border-t border-gray-100 flex gap-3',
  },

  // Modern animations
  animation: {
    fadeIn: 'animate-fadeIn',
    slideUp: 'animate-slideUp',
    slideDown: 'animate-slideDown',
    scaleIn: 'animate-scaleIn',
    shimmer: 'animate-shimmer',
  },

  // Gradient backgrounds
  gradient: {
    primary: 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    secondary: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500',
    warm: 'bg-gradient-to-br from-orange-400 via-red-400 to-pink-500',
    cool: 'bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600',
    subtle: 'bg-gradient-to-br from-gray-50 via-white to-gray-50',
  },

  // Modern spacing
  spacing: {
    section: 'py-12 px-4 md:px-8',
    container: 'max-w-7xl mx-auto',
    tight: 'space-y-2',
    normal: 'space-y-4',
    relaxed: 'space-y-6',
    loose: 'space-y-8',
  },

  // Typography
  typography: {
    h1: 'text-4xl md:text-5xl font-bold tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold tracking-tight',
    h3: 'text-2xl md:text-3xl font-bold',
    h4: 'text-xl md:text-2xl font-semibold',
    body: 'text-base text-gray-700 leading-relaxed',
    small: 'text-sm text-gray-600',
    tiny: 'text-xs text-gray-500',
  },
};

// Modern color palettes with better gradients
export const MODERN_COLORS = {
  narnia: {
    gradient: 'from-indigo-50 via-purple-50 to-pink-50',
    primary: 'indigo-600',
    accent: 'purple-500',
    light: 'indigo-50',
  },
  startrek: {
    gradient: 'from-slate-900 via-blue-900 to-indigo-900',
    primary: 'blue-500',
    accent: 'cyan-400',
    light: 'blue-900',
  },
  lotr: {
    gradient: 'from-emerald-50 via-green-50 to-teal-50',
    primary: 'emerald-600',
    accent: 'amber-500',
    light: 'emerald-50',
  },
  stargate: {
    gradient: 'from-cyan-900 via-blue-900 to-indigo-900',
    primary: 'cyan-500',
    accent: 'blue-400',
    light: 'cyan-900',
  },
  anne: {
    gradient: 'from-rose-50 via-pink-50 to-fuchsia-50',
    primary: 'rose-500',
    accent: 'pink-400',
    light: 'rose-50',
  },
  littlehouse: {
    gradient: 'from-amber-50 via-orange-50 to-yellow-50',
    primary: 'amber-600',
    accent: 'orange-500',
    light: 'amber-50',
  },
};

// CSS animations to add to index.css
export const ANIMATIONS_CSS = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from { 
    opacity: 0;
    transform: translateY(-20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.95);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.animate-slideUp {
  animation: slideUp 0.4s ease-out;
}

.animate-slideDown {
  animation: slideDown 0.4s ease-out;
}

.animate-scaleIn {
  animation: scaleIn 0.3s ease-out;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  background-size: 1000px 100%;
}
`;