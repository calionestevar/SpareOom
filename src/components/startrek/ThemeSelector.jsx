import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../../context/littlehouse/themeContext';

const ThemeSelector = ({ isOpen, onClose }) => {
  const { theme, changeTheme, availableThemes } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-bold">Choose Your Theme</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          Select a theme to customize your experience
        </p>

        <div className="space-y-2 mb-6">
          {availableThemes.map(t => (
            <button
              key={t.id}
              onClick={() => changeTheme(t.id)}
              className={`w-full p-4 rounded-lg border-2 text-left transition ${
                theme.id === t.id
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-800">{t.name}</div>
                  <div className="text-sm text-gray-600 italic">{t.text.welcome}</div>
                </div>
                {theme.id === t.id && (
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;