"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4c-2.5 3.5-6 5.5-6 10a6 6 0 0012 0c0-4.5-3.5-6.5-6-10z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M10 18c1.5 2 3.5 3 6 3s4.5-1 6-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 22c1.2 1.5 2.8 2.2 4 2.2s2.8-.7 4-2.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6 md:pt-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border border-charcoal/5 bg-cream/85 shadow-soft backdrop-blur-md"
            : "bg-cream/40 backdrop-blur-sm"
        }`}
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2 text-charcoal transition-opacity hover:opacity-80"
        >
          <LogoIcon className="h-7 w-7 shrink-0 text-terracotta" />
          <span className="truncate font-serif text-sm font-medium leading-tight md:text-base">
            Gabriela Keil
            <span className="hidden text-charcoal-muted sm:inline">
              {" "}
              — Neuropsicóloga
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-charcoal-muted transition-colors hover:bg-cream-dark hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-dark sm:inline-flex"
          >
            Agendar Avaliação
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/10 text-charcoal lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="mt-2 rounded-softer border border-charcoal/5 bg-cream/95 p-4 shadow-lift backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-3 text-sm text-charcoal transition-colors hover:bg-cream-dark"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contato"
                className="block rounded-full bg-terracotta px-4 py-3 text-center text-sm font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                Agendar Avaliação
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
