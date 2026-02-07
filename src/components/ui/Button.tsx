import { ButtonHTMLAttributes } from "react";
import { useTheme } from "../../theme/ThemeProvider";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const { theme } = useTheme();

  const base =
    "font-ui rounded-xl px-6 py-3 transition-all duration-200 hover:scale-[1.02]";


  const styles =
    variant === "primary"
      ? {
          backgroundColor: theme.colors.accent,
          color: theme.colors.textInverse,
          boxShadow: `0 0 20px ${theme.colors.accentSoft}`,
        }
      : {
          backgroundColor: "transparent",
          color: theme.colors.textPrimary,
          border: `1px solid ${theme.colors.primarySoft}`,
        };

  return (
    <button
      className={[base, className].join(" ")}
      style={styles}
      {...props}
    />
  );
}
