"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-24 pt-32 md:px-6 md:pb-32 md:pt-40"
    >
      {/* Organic blobs */}
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-olive/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <Badge variant="terracotta">
              <span aria-hidden="true">⭐</span>
              5,0 — 50 avaliações no Google
            </Badge>

            <h1 className="font-serif text-4xl font-medium leading-[1.15] text-charcoal md:text-5xl lg:text-[3.5rem] text-balance">
              Entenda Sua Mente. Encontre Clareza para Agir.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-charcoal-muted md:text-lg">
              Ofereço avaliação e reabilitação neuropsicológica em Novo
              Hamburgo, com escuta cuidadosa e laudos completos para você
              entender de verdade o que está por trás das suas dificuldades.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={WHATSAPP_URL} external variant="primary" size="lg">
                Agendar pelo WhatsApp
              </Button>
              <Button href="#servicos" variant="ghost" size="lg">
                Conhecer os Serviços
              </Button>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
                ].map((src, i) => (
                  <div
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-cream"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="36px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
              <p className="max-w-[220px] text-sm leading-snug text-charcoal-muted">
                Pacientes de todas as idades confiam no meu trabalho.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} direction="left">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-softer bg-gradient-to-br from-cream-dark via-cream to-olive/15 shadow-lift">
              <div className="flex flex-col items-center gap-3 text-charcoal-soft">
                <svg
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.25}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
                <p className="text-sm font-medium tracking-wide">
                  Foto do consultório
                </p>
              </div>
              {/* Editable stat chip */}
              <div className="absolute bottom-6 right-4 rounded-full bg-white/95 px-4 py-2.5 text-sm font-medium text-charcoal shadow-soft backdrop-blur-sm md:bottom-10 md:right-8">
                {/* TODO: update evaluation count with real number */}
                +300 avaliações que já realizei
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
