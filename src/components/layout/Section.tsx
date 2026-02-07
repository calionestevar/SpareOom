import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section
      className={[
        "mb-16 last:mb-0",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
};
