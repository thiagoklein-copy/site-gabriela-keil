"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

interface PricingTier {
  name: string;
  description: string;
  featured?: boolean;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    name: "Avaliação Focal",
    description: "Para uma dúvida específica (ex: triagem inicial).",
    features: [
      "Atendimento individualizado",
      "Testes validados cientificamente",
      "Laudo completo por escrito",
      "Devolutiva explicativa",
    ],
  },
  {
    name: "Avaliação Neuropsicológica Completa",
    description: "Bateria completa de testes + laudo detalhado.",
    featured: true,
    features: [
      "Atendimento individualizado",
      "Testes validados cientificamente",
      "Laudo completo por escrito",
      "Devolutiva explicativa",
    ],
  },
  {
    name: "Avaliação Psicossocial (NR-35/NR-33 ou Porte de Arma)",
    description: "Processo específico para fins ocupacionais ou legais.",
    features: [
      "Atendimento individualizado",
      "Testes validados cientificamente",
      "Laudo completo por escrito",
      "Devolutiva explicativa",
    ],
  },
];

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-olive" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section className="bg-cream-dark/40 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Investimento"
          title="Planos de Avaliação"
          description="O valor final depende da complexidade do caso. Cada processo é personalizado. Fale comigo para uma orientação clara."
        />

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <Card
                hover
                className={`relative flex h-full flex-col gap-5 p-7 md:p-8 ${
                  tier.featured
                    ? "border-terracotta/30 bg-white shadow-lift ring-1 ring-terracotta/20"
                    : ""
                }`}
              >
                {tier.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-3 py-1 text-xs font-medium text-white">
                    Mais procurado
                  </span>
                ) : null}

                <div>
                  <h3 className="font-serif text-xl font-medium text-charcoal md:text-2xl">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-muted">
                    {tier.description}
                  </p>
                </div>

                <p className="font-serif text-3xl font-medium text-terracotta">
                  Sob consulta
                </p>

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-charcoal-muted">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={WHATSAPP_URL}
                  external
                  variant={tier.featured ? "primary" : "ghost"}
                  className="w-full"
                >
                  Consultar Valor no WhatsApp
                </Button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
