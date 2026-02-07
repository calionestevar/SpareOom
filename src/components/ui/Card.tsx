import { ReactNode } from "react";
import { useTheme } from "../../theme/ThemeProvider";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  const { theme } = useTheme();

  return (
    <div
      className={[
        "rounded-2xl",
        "backdrop-blur-md",
        "p-5",
        "transition-all duration-200",
        "hover:-translate-y-1",
        className,
      ].join(" ")}
      style={{
        backgroundColor: `rgb(${theme.colors.surface})`,
        border: `1px solid rgb(${theme.colors.border})`,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
      }}
    >
      {children}
    </div>
  );
}
