import { type ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  children,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div className={`mb-12 flex max-w-2xl flex-col gap-4 md:mb-16 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit rounded-full bg-terracotta/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-terracotta">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-serif text-3xl font-medium leading-tight text-charcoal md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-charcoal-muted md:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
