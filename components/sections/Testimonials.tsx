"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface Testimonial {
  name: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Camila M.",
    quote:
      "A avaliação neuropsicológica foi transformadora, com um atendimento humano do início ao fim.",
  },
  {
    name: "Leandro D.",
    quote:
      "Fiz a avaliação por suspeita de TDAH e o resultado foi surpreendente, conduzido com muita leveza.",
  },
  {
    name: "Ana Cláudia S.",
    quote:
      "Fizemos a avaliação para investigar TDAH e o laudo saiu extremamente completo e bem explicado.",
  },
  {
    name: "Melissa M.",
    quote:
      "Chegamos a um diagnóstico padrão ouro, com uma devolutiva técnica e minuciosa.",
  },
  {
    name: "Lívia G.",
    quote:
      "O trabalho dela me ajudou a enxergar meus filhos com mais leveza no dia a dia.",
  },
  {
    name: "Cintia L.",
    quote:
      "Profissional incrível — a avaliação por múltiplos testes trouxe um parecer muito completo para minha filha.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-terracotta" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="w-[300px] shrink-0 p-6 md:w-[340px] md:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-medium text-charcoal">{testimonial.name}</p>
        <Stars />
      </div>
      <p className="text-sm leading-relaxed text-charcoal-muted md:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </Card>
  );
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="overflow-hidden px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem Passou Pela Avaliação Recomenda"
        />
      </div>

      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent md:w-24" />

          <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
            {loop.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-12 max-w-6xl text-center text-base font-medium text-charcoal md:text-lg">
          <span aria-hidden="true">⭐</span> 5,0 de avaliação — 50 avaliações no
          Google
        </p>
      </Reveal>
    </section>
  );
}
