import { useState } from "react";
import { startOfWeek, addWeeks } from "date-fns";

import { useTheme } from "../../theme/ThemeProvider";
import { BridgeHeader } from "./BridgeHeader";
import { BridgeWeekGrid } from "./BridgeWeekGrid";
import { PrepNotesPanel } from "../../components/bridge/PrepNotesPanel";

export type BridgeMode = "read-only" | "interactive";

export function BridgePage() {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  // Bridge is intentionally read-only in v1.
  // All mutations must be gated behind "interactive" mode.
  const [mode] = useState<BridgeMode>("read-only");
  const { theme } = useTheme();

  return (
    <div className="min-h-screen px-6 py-8"
        style={{ backgroundColor: `rgb(${theme.colors.background})` }}
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <BridgeHeader
          weekStart={currentWeekStart}
          onPrevWeek={() => setCurrentWeekStart(addWeeks(currentWeekStart, -1))}
          onNextWeek={() => setCurrentWeekStart(addWeeks(currentWeekStart, 1))}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <BridgeWeekGrid
              weekStart={currentWeekStart}
              mode={mode}
            />
          </div>

          <PrepNotesPanel />
        </div>
      </div>
    </div>
  );
}
