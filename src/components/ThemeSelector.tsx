// src/components/theme/ThemeSelector.tsx
import { useState } from "react";
import { themeRegistry } from "../theme/registry";
import { useTheme } from "../theme/ThemeProvider";
import { Button } from "../components/ui/Button";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="secondary"
        onClick={() => setOpen((v) => !v)}
        className="px-4 py-2"
      >
        Theme: {theme.name}
      </Button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-56 rounded-xl z-50
            backdrop-blur-md
          "
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.55)",
            border: "1px solid rgb(var(--border))",
          }}
        >

          {themeRegistry.map(({ theme: t, available }) => {
            const isActive = t.id === theme.id;

            return (
              <button
                key={t.id}
                disabled={!available}
                onClick={() => {
                  if (available) {
                    setTheme(t);
                    setOpen(false);
                  }
                }}
                className={`
                  w-full text-left px-4 py-2 text-sm
                  flex justify-between items-center
                  font-ui
                  transition-colors
                  ${
                    isActive
                      ? "bg-white/10 font-semibold"
                      : "hover:bg-white/10"
                  }
                  ${
                    available
                      ? ""
                      : "opacity-40 cursor-not-allowed"
                  }
                `}
              >
                <span>{t.name}</span>
                {!available && (
                  <span className="text-xs italic">(coming soon)</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
