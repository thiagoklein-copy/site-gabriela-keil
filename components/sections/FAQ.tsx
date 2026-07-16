"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  // TODO: confirm exact answer with Dra. Gabriela
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quanto tempo dura uma avaliação neuropsicológica?",
    // TODO: confirm exact answer with Dra. Gabriela
    answer:
      "O tempo varia conforme a complexidade do caso e a idade do paciente. Em geral, a avaliação completa envolve algumas sessões de aplicação de testes, além de uma sessão de devolutiva com o laudo. No primeiro contato, eu alinho uma estimativa mais precisa para o seu caso.",
  },
  {
    question: "Preciso de encaminhamento médico para agendar?",
    // TODO: confirm exact answer with Dra. Gabriela
    answer:
      "Não é obrigatório ter encaminhamento médico para agendar. Muitas pessoas buscam a avaliação por iniciativa própria. Quando houver indicação de um médico ou outro profissional, o documento me ajuda a orientar o foco da investigação.",
  },
  {
    question: "As sessões são sigilosas?",
    // TODO: confirm exact answer with Dra. Gabriela
    answer:
      "Sim. Todo o processo que conduzo segue o Código de Ética do psicólogo e as normas de sigilo profissional. Informações só são compartilhadas com terceiros mediante autorização formal, salvo as situações previstas em lei.",
  },
  {
    question: "Você atende crianças, adolescentes e adultos?",
    // TODO: confirm exact answer with Dra. Gabriela
    answer:
      "Sim. Adapto a avaliação e a reabilitação neuropsicológica à faixa etária e às demandas de cada pessoa — crianças, adolescentes e adultos. Também ofereço mentoria parental para famílias em diferentes fases do desenvolvimento.",
  },
  {
    question: "Como funciona a avaliação para porte de arma de fogo?",
    // TODO: confirm exact answer with Dra. Gabriela
    answer:
      "É uma avaliação psicológica credenciada pela Polícia Federal, com entrevistas e instrumentos específicos exigidos pela legislação. Conduzo o processo com agilidade, sigilo e rigor técnico; no agendamento, explico documentos e prazos.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas comuns"
          title="Perguntas Frequentes"
          description="Respostas claras para as dúvidas mais comuns antes de agendar."
        />

        <Reveal>
          <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-terracotta md:py-6"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span className="font-medium text-charcoal md:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-terracotta text-white border-terracotta" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100 md:pb-6" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-12 text-sm leading-relaxed text-charcoal-muted md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
