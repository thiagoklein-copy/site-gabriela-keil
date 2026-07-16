"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

// TODO: replace with real photo of Dra. Gabriela and clinic space
const HERO_MAIN =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80";

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
            <div className="relative aspect-[3/4] overflow-hidden rounded-softer shadow-lift">
              <Image
                src={HERO_MAIN}
                alt="Ambiente acolhedor de consultório para avaliação neuropsicológica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
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
