import { ReadinessLevel } from "../../models/readiness";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {
  level: ReadinessLevel;
}

export function BridgeDayStatus({ level }: Props) {
  const { theme } = useTheme();

  const config = {
    ready: {
      label: "Ready",
      color: theme.colors.success,
      pulse: true,
    },
    partial: {
      label: "Needs Prep",
      color: theme.colors.warning,
      pulse: false,
    },
    "not-ready": {
      label: "Not Ready",
      color: theme.colors.danger,
      pulse: false,
    },
  }[level];

  return (
    <div
      className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 text-xs rounded-full border"
      style={{
        backgroundColor: `rgba(${config.color}, 0.12)`,
        borderColor: `rgba(${config.color}, 0.35)`,
        color: `rgb(${config.color})`,
        fontFamily: theme.fonts.ui,
      }}
    >
      {config.pulse && (
        <span
          className="inline-block animate-pulse"
          style={{ color: `rgb(${config.color})` }}
        >
          ●
        </span>
      )}
      {config.label}
    </div>
  );
}
