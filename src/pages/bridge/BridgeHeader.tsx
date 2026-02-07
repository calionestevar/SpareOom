import { format, addDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../theme/ThemeProvider";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { ThemeSelector } from "../../components/theme/ThemeSelector";

interface BridgeHeaderProps {
  weekStart: Date;
  onPrevWeek: () => void;
  onNextWeek: () => void;
}

export function BridgeHeader({
  weekStart,
  onPrevWeek,
  onNextWeek,
}: BridgeHeaderProps) {
  const { theme } = useTheme();

  const weekEnd = addDays(weekStart, 4);
  const label = `${format(weekStart, "MMM d")} – ${format(
    weekEnd,
    "MMM d, yyyy"
  )}`;

  return (
    <Card className="flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          onClick={onPrevWeek}
          aria-label="Previous week"
        >
          <ChevronLeft />
        </Button>

        <div>
          <div
            className="text-xs uppercase tracking-widest opacity-70"
            style={{ color: theme.colors.textMuted }}
          >
            School Week
          </div>
          <div
            className="text-lg font-[var(--font-heading)]"
            style={{ color: theme.colors.textPrimary }}
          >
            {label}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={onNextWeek}
          aria-label="Next week"
        >
          <ChevronRight />
        </Button>

        <ThemeSelector />
      </div>      
    </Card>
  );
}
