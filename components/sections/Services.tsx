"use client";

import { type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "Avaliação Neuropsicológica",
    description:
      "Mapeamento completo do perfil cognitivo, investigando suspeitas de TDAH, TEA, dificuldades de aprendizagem e outras alterações neurológicas.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.025-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.025.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Reabilitação Neuropsicológica",
    description:
      "Sessões voltadas à recuperação e ao fortalecimento das funções cognitivas, emocionais e comportamentais, para mais autonomia no dia a dia.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Avaliação Psicológica para Porte de Arma de Fogo",
    description:
      "Avaliação credenciada pela Polícia Federal. Conduzo com agilidade, sigilo e todo o rigor técnico exigido.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Avaliação Psicossocial NR-35 / NR-33",
    description:
      "Avaliação de fatores de risco psicossocial para trabalho em altura, espaço confinado e com inflamáveis, atendendo às exigências das normas regulamentadoras.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.15 1.46a.75.75 0 01-.95-.95l1.46-5.15a4.5 4.5 0 015.96-2.76l2.21.74a4.5 4.5 0 012.76 5.96l-.74 2.21a4.5 4.5 0 01-5.55 2.49z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9l3-3m0 0l-1.5-1.5M18 6l1.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Mentoria para Mães e Pais",
    description:
      "Apoio prático e acolhedor para lidar com os desafios do desenvolvimento dos filhos, com base em coaching parental.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-cream-dark/40 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Como posso te ajudar"
          title="Avaliação e Cuidado com Base Científica"
          description="Conduzo cada processo com técnica, escuta e um laudo detalhado que te dá respostas reais."
        />

        <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const isBottomRow = index >= 3;
            return (
              <StaggerItem
                key={service.title}
                className={`h-full sm:col-span-1 lg:col-span-2 ${
                  isBottomRow && index === 3 ? "lg:col-start-2" : ""
                }`}
              >
                <Card
                  hover
                  className="flex h-full min-h-[22rem] flex-col gap-4 p-6 md:min-h-[24rem] md:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
                    {service.icon}
                  </div>
                  <h3 className="min-h-[3.5rem] font-serif text-xl font-medium text-charcoal md:min-h-[4rem]">
                    {service.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-charcoal-muted md:text-base">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-charcoal/5 pt-4">
                    <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-medium text-olive">
                      Sob consulta
                    </span>
                    <Button
                      href={WHATSAPP_URL}
                      external
                      variant="ghost"
                      size="sm"
                      className="!px-4 !py-2 text-xs"
                    >
                      Saiba mais no WhatsApp
                    </Button>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
