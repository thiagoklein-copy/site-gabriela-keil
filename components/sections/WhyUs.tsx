"use client";

import { type ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    title: "Escuta Real, Sem Julgamento",
    description:
      "Um espaço seguro que ofereço para você se expressar livremente, com acolhimento genuíno em cada encontro.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: "Base Científica e Atualizada",
    description:
      "Trabalho com métodos validados e formação contínua em neuropsicologia para avaliações precisas e confiáveis.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Laudos Completos e Acessíveis",
    description:
      "Entrego devolutivas detalhadas, explicadas em linguagem clara — para você entender e saber o que fazer.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-cream-dark/40 px-4 py-24 md:px-6 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-terracotta/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="O que me torna referência"
          title="Cuidado Técnico com Escuta Humana"
          description="Três pilares que guiam cada avaliação e cada conversa no meu consultório."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card hover className="flex h-full flex-col gap-4 p-7 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-olive/10 text-olive">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-muted md:text-base">
                  {feature.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
