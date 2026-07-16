"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="px-4 py-24 md:px-6 md:py-32">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-softer bg-gradient-to-br from-terracotta via-terracotta to-terracotta-dark px-6 py-16 text-center text-white shadow-lift md:px-12 md:py-20">
          <div
            className="pointer-events-none absolute left-6 top-6 text-white/30"
            aria-hidden="true"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
            </svg>
          </div>
          <div
            className="pointer-events-none absolute bottom-6 right-6 text-white/30"
            aria-hidden="true"
          >
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
            </svg>
          </div>

          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium leading-tight md:text-4xl lg:text-5xl text-balance">
            Dê o Primeiro Passo Para Entender Sua Mente.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/85 md:text-lg">
            Agende sua avaliação comigo pelo WhatsApp e comece um processo de
            clareza, acolhimento e respostas concretas.
          </p>
          <div className="mt-8">
            <Button href={WHATSAPP_URL} external variant="white" size="lg">
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
