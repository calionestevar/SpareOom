import { ReactNode } from "react";

type HeadingLevel = "display" | "h1" | "h2" | "h3";

interface HeadingProps {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
}

export const Heading = ({
  level = "h1",
  children,
  className = "",
}: HeadingProps) => {
  const styles: Record<HeadingLevel, string> = {
    display:
      "font-[var(--font-title)] text-4xl sm:text-5xl lg:text-6xl tracking-wide",
    h1: "font-[var(--font-heading)] text-3xl sm:text-4xl",
    h2: "font-[var(--font-heading)] text-2xl sm:text-3xl",
    h3: "font-[var(--font-heading)] text-xl sm:text-2xl",
  };

  const Tag =
    level === "display" ? "h1" : level;

  return (
    <Tag
      className={[
        styles[level],
        "text-[rgb(var(--text-primary))]",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
};
