import { useTheme } from "../theme/ThemeProvider";

export const PublicShell = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  const isAnne = theme.backgroundStyle === "anne-gradient";

  return (
    <div
      className="min-h-screen text-[rgb(var(--text-primary))] relative overflow-hidden"
      style={{
        backgroundColor: !isAnne
          ? `rgb(${theme.colors.background})`
          : undefined,
      }}
    >
      {isAnne && (
        <div className="fixed inset-0 -z-10">
          {/* Base paper */}
          <div
            className="absolute inset-0"
            style={{
              background: theme.backgroundGradient,
            }}
          />

          {/* Soft animated wash */}
          <div
            className="absolute inset-0 animate-blob blur-2xl"
            style={{
              background: `
          radial-gradient(
            circle at 30% 20%,
            rgb(${theme.colors.accentSoft} / 0.35),
            transparent 60%
          )
        `,
            }}
          />

          {/* Gentle grain */}
          <div className="absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />
        </div>
      )}

      {/* Page content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};
