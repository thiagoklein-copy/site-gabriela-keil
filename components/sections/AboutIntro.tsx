"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

// TODO: replace with real photo of Dra. Gabriela and clinic space
const ABOUT_PHOTO =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";

const CREDENTIALS = [
  "Credenciada na Polícia Federal",
  "Formada em Neuropsicologia Hospitalar (HCPA)",
  "Coach para Pais — The Parent Practice (Londres)",
] as const;

export function AboutIntro() {
  return (
    <section id="sobre" className="px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-softer shadow-soft lg:max-w-none">
            <Image
              src={ABOUT_PHOTO}
              alt="Meu retrato em ambiente clínico"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <Badge variant="olive">Sobre mim</Badge>

            <h2 className="font-serif text-3xl font-medium leading-tight text-charcoal md:text-4xl lg:text-5xl text-balance">
              Você Merece Entender Sua Mente
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-charcoal-muted md:text-lg">
              <p>
                Sou mestranda em Neuropsicologia e pós-graduada em
                Neuropsicologia e Psicologia Hospitalar, com formação
                especializada no Hospital de Clínicas de Porto Alegre. Meu
                trabalho une rigor científico e acolhimento genuíno em cada
                avaliação.
              </p>
              <p>
                Além da avaliação e da reabilitação neuropsicológica, atuo com
                psicoterapia e mentoria para mães e pais — como Coach para Pais
                licenciada pela The Parent Practice, de Londres. Meu objetivo é
                sempre o mesmo: clareza, autonomia e cuidado.
              </p>
              <p>
                Meu trabalho é te ajudar a enxergar além do diagnóstico e
                reconhecer suas potencialidades.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {CREDENTIALS.map((item) => (
                <Badge key={item} variant="cream" className="text-[11px] md:text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
