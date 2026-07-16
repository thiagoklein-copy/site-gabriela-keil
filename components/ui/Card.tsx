import { type ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "li";
}

export function Card({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={`rounded-softer border border-charcoal/5 bg-white/70 shadow-card backdrop-blur-sm ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
