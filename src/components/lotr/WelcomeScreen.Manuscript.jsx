/**
 * WelcomeScreen.Manuscript - LOTR Theme
 * 
 * Epic welcome screen with parchment, medieval styling, and LOTR aesthetic.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scroll, Palette, ArrowRight, Shield, Sword, Crown } from 'lucide-react';
import { useTheme } from '../../context/littlehouse/themeContext';
import ThemeSelector from '../shared/ThemeSelector';

const WelcomeScreenManuscript = ({ onGetStarted }) => {
  const { theme } = useTheme();
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 relative overflow-hidden flex items-center justify-center p-4"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97706' fill-opacity='0.06'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <Scroll className="absolute top-20 left-20 w-32 h-32 text-amber-400" />
        <Sword className="absolute bottom-20 right-20 w-28 h-28 text-orange-400 rotate-45" />
        <Shield className="absolute top-1/3 right-1/4 w-24 h-24 text-yellow-400" />
        <Crown className="absolute bottom-1/3 left-1/4 w-20 h-20 text-amber-500" />
      </div>

      {/* Animated golden glow */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(217, 119, 6, 0.4), transparent)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Parchment card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg p-8 md:p-12 border-4 border-double border-amber-700 shadow-2xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23F5E6D3' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.3'/%3E%3C/svg%3E")`,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.3)'
          }}
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 border-4 border-amber-900 flex items-center justify-center shadow-xl">
              <Scroll className="w-8 h-8 text-yellow-50" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-6 mt-4">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-4"
                style={{ 
                  fontFamily: theme.fonts.primary,
                  textShadow: '3px 3px 0px rgba(217, 119, 6, 0.2)'
                }}
              >
                {theme.text.appName}
              </h1>
              
              <div className="flex items-center justify-center gap-4 my-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-700"></div>
                <Sword className="w-6 h-6 text-amber-700" />
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-700"></div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p 
                className="text-3xl md:text-4xl text-amber-900 italic mb-4"
                style={{ fontFamily: theme.fonts.accent }}
              >
                "{theme.text.welcome}"
              </p>
              
              <p 
                className="text-lg md:text-xl text-amber-800 max-w-2xl mx-auto"
                style={{ fontFamily: theme.fonts.body }}
              >
                Chart your journey through the vast landscape of knowledge. Begin your quest and watch your fellowship grow in wisdom.
              </p>
            </motion.div>

            {/* Ornamental divider */}
            <div className="flex items-center justify-center gap-3 py-4">
              <div className="w-12 h-12 border-2 border-amber-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-700 rounded-full"></div>
              </div>
              <div className="w-8 h-8 border-2 border-amber-600 rotate-45"></div>
              <div className="w-12 h-12 border-2 border-amber-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-700 rounded-full"></div>
              </div>
            </div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStarted}
                className="group px-8 py-4 rounded-lg bg-gradient-to-br from-amber-600 to-orange-700 border-2 border-amber-800 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                style={{ fontFamily: theme.fonts.secondary }}
              >
                <span className="flex items-center justify-center gap-2">
                  Embark on Quest
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowThemeSelector(true)}
                className="px-8 py-4 rounded-lg bg-amber-100 border-2 border-amber-700 text-amber-900 font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: theme.fonts.secondary }}
              >
                <Palette className="w-5 h-5" />
                Choose Realm
              </motion.button>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3 justify-center pt-6"
            >
              {[
                '⚔ Quest Tracking',
                '🍃 Year Planning', 
                '○ Cloud Storage',
                '🌳 Open Source'
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-200 to-amber-200 border border-amber-600 text-amber-900 text-sm font-medium shadow-sm"
                >
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom seal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 pt-6 border-t-2 border-amber-700 text-center"
          >
            <p 
              className="text-amber-700 italic text-sm"
              style={{ fontFamily: theme.fonts.accent }}
            >
              "Crafted in the halls of learning, for the Fellowship of Homeschoolers"
            </p>
          </motion.div>
        </motion.div>
      </div>

      <ThemeSelector isOpen={showThemeSelector} onClose={() => setShowThemeSelector(false)} />
    </div>
  );
};

export default WelcomeScreenManuscript;