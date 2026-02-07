import { addDays, format } from "date-fns";
import { BridgeMode } from "./BridgePage";
import { Card } from "../../components/ui/Card";
import { BridgeDayStatus } from "../../components/bridge/BridgeDayStatus";
import { ReadinessLevel } from "../../models/readiness";

interface BridgeWeekGridProps {
  weekStart: Date;
  mode: BridgeMode;
}

const demoLevels: ReadinessLevel[] = [
  "ready",
  "partial",
  "not-ready",
  "partial",
  "ready",
];

export function BridgeWeekGrid({
  weekStart,
  mode,
}: BridgeWeekGridProps) {
  const days = Array.from({ length: 5 }).map((_, i) =>
    addDays(weekStart, i)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
      {days.map((date, i) => {
        const readiness = demoLevels[i];

        return (
          <Card
            key={date.toISOString()}
            className="
              space-y-4
              p-5
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]
            "
          >
            {/* Day header */}
            <div>
              <div className="text-xs uppercase tracking-widest text-muted opacity-70">
                {format(date, "EEE")}
              </div>
              <div className="text-lg font-heading font-semibold tracking-wide">
                {format(date, "MMM d")}
              </div>
            </div>

            {/* Readiness indicator */}
            <BridgeDayStatus level={readiness} />
            {mode === "read-only" && (
              <div className="text-[11px] text-muted opacity-50 italic">
                Read-only
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
