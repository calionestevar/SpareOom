import React, { useState } from 'react';
import { BookOpen, Palette, Sparkles, Compass, Zap } from 'lucide-react';
import { useTheme } from '../../context/littlehouse/themeContext';
import ThemeSelector from './ThemeSelector';

const WelcomeScreen = ({ onGetStarted }) => {
  const { theme } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  // Get theme-specific icon
  const getThemeIcon = () => {
    const iconClass = `w-20 h-20 mx-auto mb-6 text-${theme.colors.primary}`;
    switch (theme.id) {
      case 'startrek':
        return <Zap className={iconClass} strokeWidth={2.5} />;
      case 'lotr':
        return <Compass className={iconClass} strokeWidth={1.5} />;
      case 'narnia':
        return <Sparkles className={iconClass} strokeWidth={1.5} />;
      default:
        return <BookOpen className={iconClass} strokeWidth={1.5} />;
    }
  };

  const containerStyle = {
    fontFamily: theme.fonts.primary,
  };

  const titleStyle = {
    fontFamily: theme.fonts.primary,
  };

  const taglineStyle = {
    fontFamily: theme.fonts.accent,
  };

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${theme.colors.background} p-8 ${theme.animations.transition}`}
      style={containerStyle}
    >
      <div className="max-w-2xl mx-auto">
        <div className={`${theme.styles.cardStyle} p-10 text-center ${theme.animations.transition}`}>
          {getThemeIcon()}
          
          <h1 
            className={`text-4xl md:text-5xl font-bold text-${theme.colors.textPrimary} mb-3 ${theme.styles.headerStyle}`}
            style={titleStyle}
          >
            {theme.text.appName}
          </h1>
          
          <p 
            className={`text-${theme.colors.secondary} text-sm uppercase tracking-widest mb-4 font-semibold`}
          >
            {theme.text.tagline}
          </p>
          
          <div className={`my-6 h-1 w-24 mx-auto bg-${theme.colors.secondary} opacity-50`}></div>
          
          <p 
            className={`text-2xl md:text-3xl text-${theme.colors.textPrimary} mb-3 italic`}
            style={taglineStyle}
          >
            "{theme.text.welcome}"
          </p>
          
          <p className={`text-${theme.colors.textSecondary} mb-4 text-lg`}>
            {theme.text.welcomeSubtext}
          </p>
          
          <p className={`text-${theme.colors.textSecondary} text-sm mb-8 opacity-75`}>
            Let's begin by adding your {theme.text.childrenLabel.toLowerCase()}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onGetStarted}
              className={`bg-${theme.colors.primary} hover:bg-${theme.colors.primaryHover} text-white px-8 py-4 ${theme.styles.buttonStyle} ${theme.animations.transition} shadow-xl font-bold text-lg`}
              style={{ fontFamily: theme.fonts.secondary }}
            >
              {theme.id === 'startrek' ? 'INITIALIZE' : 'Get Started'}
            </button>
            <button
              onClick={() => setShowThemeSelector(true)}
              className={`bg-gray-200 hover:bg-gray-300 text-${theme.colors.textPrimary} px-8 py-4 ${theme.styles.buttonStyle} ${theme.animations.transition} flex items-center justify-center gap-2 shadow-lg font-semibold text-lg`}
              style={{ fontFamily: theme.fonts.secondary }}
            >
              <Palette className="w-5 h-5" />
              Choose Theme
            </button>
          </div>
          
          {/* Theme-specific decorative elements */}
          {theme.id === 'narnia' && (
            <div className="mt-8 text-indigo-300 text-6xl opacity-20">❄️ 🦁 ❄️</div>
          )}
          {theme.id === 'startrek' && (
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          )}
          {theme.id === 'lotr' && (
            <div className="mt-8 text-amber-600 text-4xl opacity-30">✶ ✦ ✶</div>
          )}
          {theme.id === 'anne' && (
            <div className="mt-8 text-rose-300 text-5xl opacity-30">🌸 ✿ 🌸</div>
          )}
          {theme.id === 'littlehouse' && (
            <div className="mt-8 text-amber-600 text-4xl opacity-30">🌾 🏠 🌾</div>
          )}
        </div>
      </div>
      <ThemeSelector isOpen={showThemeSelector} onClose={() => setShowThemeSelector(false)} />
    </div>
  );
};

export default WelcomeScreen;