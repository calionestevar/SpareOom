import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
  className?: string;
}

export const Page = ({ children, className = "" }: PageProps) => {
  return (
    <div
      className={[
        "mx-auto",
        "max-w-6xl",
        "px-4 sm:px-6 lg:px-8",
        "py-12",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
