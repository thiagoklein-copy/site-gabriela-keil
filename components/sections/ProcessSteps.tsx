"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

// TODO: replace with real photo of Dra. Gabriela and clinic space
const PROCESS_IMAGE =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80";

const steps = [
  {
    number: "01",
    title: "Primeiro Contato",
    description:
      "Você entra em contato pelo WhatsApp e conversamos sobre o motivo da busca pela avaliação.",
  },
  {
    number: "02",
    title: "Sessões de Avaliação",
    description:
      "Aplico os testes neuropsicológicos no seu ritmo, em um ambiente acolhedor e sigiloso.",
  },
  {
    number: "03",
    title: "Devolutiva Detalhada",
    description:
      "Entrego o laudo completo, explico cada resultado com clareza e oriento os próximos passos.",
  },
] as const;

export function ProcessSteps() {
  return (
    <section className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal direction="right">
          <div className="relative aspect-[4/5] overflow-hidden rounded-softer shadow-soft">
            <Image
              src={PROCESS_IMAGE}
              alt="Consultório preparado para sessões de avaliação neuropsicológica"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <span className="mb-4 inline-flex rounded-full bg-terracotta/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-terracotta">
                Como funciona
              </span>
              <h2 className="font-serif text-3xl font-medium leading-tight text-charcoal md:text-4xl lg:text-5xl text-balance">
                Passos Rumo à Clareza e ao Entendimento
              </h2>
            </div>

            <ol className="flex flex-col gap-6">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-4">
                  <span className="font-serif text-2xl font-medium text-terracotta md:text-3xl">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-charcoal">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal-muted md:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rounded-softer bg-olive px-6 py-8 text-white md:px-8">
              <p className="font-serif text-2xl font-medium leading-snug md:text-3xl">
                Laudo Detalhado ao Final de Cada Processo
              </p>
              <p className="mt-2 text-sm text-white/80 md:text-base">
                Resultados claros para decisões reais.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
