import React, { useState } from 'react';
import { BookOpen, Palette, Sparkles, Zap, ArrowRight, Shield, Scroll, Radio, Flower, Home } from 'lucide-react';
import { useTheme } from '../../context/littlehouse/themeContext';
import { AUTHENTIC_THEME_FONTS, AUTHENTIC_THEME_COLORS, AUTHENTIC_DESIGN_ELEMENTS } from '../../constants/narnia/authenticFonts';
import ThemeSelector from './ThemeSelector';

const UltraAuthenticWelcomeScreen = ({ onGetStarted }) => {
  const { theme } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  const fonts = AUTHENTIC_THEME_FONTS[theme.id.toUpperCase()] || AUTHENTIC_THEME_FONTS.NARNIA;
  const colors = AUTHENTIC_THEME_COLORS[theme.id.toUpperCase()] || AUTHENTIC_THEME_COLORS.NARNIA;
  const design = AUTHENTIC_DESIGN_ELEMENTS[theme.id.toUpperCase()] || AUTHENTIC_DESIGN_ELEMENTS.NARNIA;

  const getThemeIcon = () => {
    const iconClass = "w-20 h-20";
    switch (theme.id) {
      case 'startrek':
        return <Shield className={iconClass} strokeWidth={1.5} />;
      case 'lotr':
        return <Scroll className={iconClass} strokeWidth={1.5} />;
      case 'stargate':
        return <Radio className={iconClass} strokeWidth={1.5} />;
      case 'anne':
        return <Flower className={iconClass} strokeWidth={1.5} />;
      case 'littlehouse':
        return <Home className={iconClass} strokeWidth={1.5} />;
      default:
        return <Sparkles className={iconClass} strokeWidth={1.5} />;
    }
  };

  // Theme-specific welcome content
  const getWelcomeContent = () => {
    switch (theme.id) {
      case 'narnia':
        return {
          subtitle: 'Where Education Becomes Adventure',
          description: 'Step through the wardrobe into a world where every lesson is a journey, every day an expedition into knowledge.',
          features: ['✨ Magical Planning', '🦁 Year-Long Vision', '❄️ Cloud Synced', '🕯️ Always Free']
        };
      case 'startrek':
        return {
          subtitle: 'Educational Mission Control',
          description: 'Engage your teaching systems. Set course for academic excellence. All stations report ready.',
          features: ['▲ Mission Logs', '⟨ Strategic Planning', '⟩ Real-Time Sync', '/ No Subscriptions']
        };
      case 'lotr':
        return {
          subtitle: 'The Fellowship of Learning',
          description: 'Not all who wander are lost. Chart your journey through the vast landscape of knowledge, one quest at a time.',
          features: ['⚔ Quest Tracking', '🍃 Year Planning', '○ Cloud Storage', '🌳 Open Source']
        };
      case 'stargate':
        return {
          subtitle: 'SGC Educational Command',
          description: 'Dialing sequence initiated. Chevrons locked. Establishing stable wormhole to academic success.',
          features: ['◯ Gate Protocol', '△ Mission Ready', '⟨ Sync Active', '⟩ Zero Cost']
        };
      case 'anne':
        return {
          subtitle: 'Where Imagination Blooms',
          description: 'Dear kindred spirit, welcome to your very own Green Gables of learning—a place of scope for imagination.',
          features: ['🌸 Beautiful Planning', '📖 Year Overview', '♥ Synced Perfectly', '🍂 Forever Free']
        };
      case 'littlehouse':
        return {
          subtitle: 'Prairie Schoolhouse Planner',
          description: 'Simple, honest, and true—just like life on the prairie. Your one-room schoolhouse in the digital age.',
          features: ['🌾 Harvest Planning', '🏠 Year Almanac', '☀ Cloud Stored', '⭐ No Cost Ever']
        };
      default:
        return {
          subtitle: 'Your Homeschool Planning Companion',
          description: 'Plan, track, and celebrate your homeschool journey.',
          features: ['📅 Planning', '📊 Tracking', '☁️ Synced', '💰 Free']
        };
    }
  };

  const content = getWelcomeContent();

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br ${colors.gradient} flex items-center justify-center p-4 sm:p-8 relative overflow-hidden`}
    >
      {/* Theme-specific background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {theme.id === 'narnia' && (
          <>
            <div className="absolute top-10 left-10 text-8xl">❄</div>
            <div className="absolute top-40 right-20 text-6xl">🦁</div>
            <div className="absolute bottom-20 left-1/4 text-7xl">🕯</div>
            <div className="absolute bottom-40 right-10 text-5xl">❄</div>
          </>
        )}
        {theme.id === 'startrek' && (
          <>
            <div className="absolute top-20 left-20 text-9xl text-blue-500">▲</div>
            <div className="absolute bottom-20 right-20 text-8xl text-cyan-500">⟨⟩</div>
          </>
        )}
        {theme.id === 'lotr' && (
          <>
            <div className="absolute top-20 right-20 text-8xl">🍃</div>
            <div className="absolute bottom-20 left-20 text-7xl">⚔</div>
            <div className="absolute top-1/2 left-1/3 text-6xl">○</div>
          </>
        )}
        {theme.id === 'stargate' && (
          <>
            <div className="absolute top-1/4 left-1/4 text-9xl text-cyan-500">◯</div>
            <div className="absolute bottom-1/4 right-1/4 text-8xl text-blue-500">△</div>
          </>
        )}
        {theme.id === 'anne' && (
          <>
            <div className="absolute top-10 right-10 text-7xl">🌸</div>
            <div className="absolute bottom-10 left-10 text-6xl">🌸</div>
            <div className="absolute top-1/3 left-1/3 text-5xl">📖</div>
          </>
        )}
        {theme.id === 'littlehouse' && (
          <>
            <div className="absolute top-10 left-10 text-8xl">🌾</div>
            <div className="absolute top-20 right-20 text-7xl">☀</div>
            <div className="absolute bottom-20 left-1/4 text-6xl">🏠</div>
          </>
        )}
      </div>

      <div className="max-w-5xl w-full relative z-10">
        {/* Main Card - Theme-specific styling */}
        <div 
          className={`
            bg-white/95 backdrop-blur-sm p-8 sm:p-12 md:p-16
            ${design.effects.cardBorder}
            ${theme.id === 'startrek' ? design.effects.lcarsPanel : ''}
            ${theme.id === 'lotr' ? design.effects.parchment : ''}
            ${theme.id === 'anne' ? design.effects.delicate : ''}
            ${theme.id === 'littlehouse' ? design.effects.woodGrain : ''}
            shadow-2xl
            animate-slideUp
          `}
        >
          {/* Icon with theme-specific styling */}
          <div className="flex justify-center mb-8">
            <div 
              className={`
                w-32 h-32 rounded-full
                bg-gradient-to-br from-${colors.primary} to-${colors.secondary}
                p-1 shadow-2xl
                ${theme.id === 'narnia' ? 'shadow-amber-300/50' : ''}
                ${theme.id === 'startrek' ? 'shadow-cyan-500/50 rounded-none' : ''}
                ${theme.id === 'lotr' ? 'shadow-amber-600/50 rounded-sm' : ''}
                ${theme.id === 'stargate' ? 'shadow-cyan-500/50 rounded-sm' : ''}
                ${theme.id === 'anne' ? 'shadow-rose-300/50' : ''}
                ${theme.id === 'littlehouse' ? 'shadow-amber-400/50 rounded-md' : ''}
              `}
            >
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <div className={`text-${colors.primary}`}>
                  {getThemeIcon()}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Title with theme-specific typography */}
            <div className="space-y-3">
              <h1 
                className={`
                  text-4xl sm:text-5xl md:text-6xl font-bold
                  bg-gradient-to-r from-${colors.primary} via-${colors.secondary} to-${colors.primary}
                  bg-clip-text text-transparent
                  ${design.effects.headerStyle}
                `}
                style={{ fontFamily: fonts.primary }}
              >
                {theme.text.appName}
              </h1>
              
              <p 
                className={`text-${colors.secondary} font-semibold text-sm sm:text-base uppercase tracking-widest`}
                style={{ fontFamily: fonts.secondary }}
              >
                {content.subtitle}
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className={`h-px w-20 bg-gradient-to-r from-transparent to-${colors.primary}`}></div>
              <div className={`text-${colors.accent} text-2xl`}>
                {design.patterns.flower || design.patterns.delta || design.patterns.leaf || '✦'}
              </div>
              <div className={`h-px w-20 bg-gradient-to-l from-transparent to-${colors.primary}`}></div>
            </div>

            {/* Welcome quote with accent font */}
            <p 
              className={`
                text-2xl sm:text-3xl md:text-4xl font-bold italic
                text-gray-800 max-w-3xl mx-auto
                ${theme.id === 'narnia' ? 'drop-shadow-md' : ''}
              `}
              style={{ fontFamily: fonts.accent }}
            >
              "{theme.text.welcome}"
            </p>

            {/* Description with body font */}
            <p 
              className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: fonts.body }}
            >
              {content.description}
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={onGetStarted}
                className={`
                  group px-8 py-4
                  bg-gradient-to-r from-${colors.primary} to-${colors.secondary}
                  text-white font-bold text-lg
                  ${design.effects.buttonStyle}
                  transform hover:-translate-y-1 hover:scale-105
                  transition-all duration-300
                  flex items-center justify-center gap-2
                  ${theme.id === 'narnia' ? design.effects.magicalGlow : ''}
                  ${theme.id === 'stargate' ? design.effects.chevronGlow : ''}
                `}
                style={{ fontFamily: fonts.secondary }}
              >
                {theme.id === 'startrek' ? 'ENGAGE' : 
                 theme.id === 'stargate' ? 'ACTIVATE GATE' :
                 theme.id === 'lotr' ? 'Begin Quest' :
                 theme.id === 'narnia' ? 'Enter Narnia' :
                 theme.id === 'anne' ? 'Start Planning' :
                 'Get Started'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setShowThemeSelector(true)}
                className={`
                  px-8 py-4
                  bg-white text-${colors.primary} font-semibold text-lg
                  border-2 border-${colors.primary}
                  ${design.effects.buttonStyle}
                  transform hover:-translate-y-1 hover:scale-105
                  transition-all duration-300
                  flex items-center justify-center gap-2
                `}
                style={{ fontFamily: fonts.secondary }}
              >
                <Palette className="w-5 h-5" />
                Choose Theme
              </button>
            </div>

            {/* Feature badges - theme specific */}
            <div className="flex flex-wrap gap-3 justify-center pt-10">
              {content.features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`
                    px-4 py-2
                    bg-${colors.light} text-${colors.dark}
                    text-sm font-medium rounded-full
                    border border-${colors.primary}/30
                    shadow-sm
                    ${theme.id === 'startrek' ? 'uppercase tracking-wider' : ''}
                  `}
                  style={{ fontFamily: fonts.body }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-8 text-center">
          <p 
            className={`text-sm text-${colors.dark} font-medium italic`}
            style={{ fontFamily: fonts.accent }}
          >
            {theme.id === 'narnia' ? 'Once a king or queen in Narnia, always a king or queen' :
             theme.id === 'startrek' ? 'To boldly go where no homeschooler has gone before' :
             theme.id === 'lotr' ? 'Even the smallest lesson can change the course of the future' :
             theme.id === 'stargate' ? 'The enemy\'s gate is down' :
             theme.id === 'anne' ? 'Tomorrow is always fresh, with no mistakes in it' :
             theme.id === 'littlehouse' ? 'Home is the nicest word there is' :
             'Your homeschool journey begins here'}
          </p>
        </div>
      </div>

      <ThemeSelector isOpen={showThemeSelector} onClose={() => setShowThemeSelector(false)} />
    </div>
  );
};

export default UltraAuthenticWelcomeScreen;