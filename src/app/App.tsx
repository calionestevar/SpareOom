import { useState } from "react";
import { ThemeProvider } from "../theme/ThemeProvider";
import { PublicShell } from "../shells/PublicShell";
import { WelcomePage } from "../pages/public/WelcomePage";
import { BridgePage } from "../pages/bridge/BridgePage";

export default function App() {
  const [page, setPage] = useState<"welcome" | "bridge">("welcome");

  return (
    <ThemeProvider>
      <PublicShell>
        {page === "welcome" && (
          <WelcomePage onStart={() => setPage("bridge")} />
        )}
        {page === "bridge" && <BridgePage />}
      </PublicShell>
    </ThemeProvider>
  );
}
