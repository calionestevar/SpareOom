import { useState } from "react";
import { themes } from "../../theme";
import { useTheme } from "../../theme/ThemeProvider";

export function ThemeSelector() {
  const { themeId, setThemeId } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 rounded-lg border text-sm"
      >
        Theme: {themeId}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg border bg-white z-50">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setThemeId(t.id);
                setOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-black/5"
            >
              {t.name}
              {t.comingSoon && (
                <span className="ml-2 text-xs opacity-50">(coming soon)</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
