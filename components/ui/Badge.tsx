import { type ReactNode } from "react";

type BadgeVariant = "terracotta" | "olive" | "cream" | "outline";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  terracotta: "bg-terracotta/10 text-terracotta",
  olive: "bg-olive/10 text-olive",
  cream: "bg-cream-dark text-charcoal-muted",
  outline: "bg-transparent border border-charcoal/15 text-charcoal-muted",
};

export function Badge({
  children,
  variant = "terracotta",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
