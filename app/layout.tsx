import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriela Keil — Psicóloga e Neuropsicóloga em Novo Hamburgo",
  description:
    "Sou psicóloga e neuropsicóloga em Novo Hamburgo. Ofereço avaliação e reabilitação com laudos completos, escuta cuidadosa e atendimento para crianças, adolescentes e adultos. Agende pelo WhatsApp.",
  keywords: [
    "neuropsicologia",
    "avaliação neuropsicológica",
    "psicóloga Novo Hamburgo",
    "TDAH",
    "porte de arma",
    "NR-35",
    "Gabriela Keil",
  ],
  authors: [{ name: "Gabriela Keil" }],
  openGraph: {
    title: "Gabriela Keil — Psicóloga e Neuropsicóloga em Novo Hamburgo",
    description:
      "Ofereço avaliação e reabilitação neuropsicológica com laudos completos e escuta cuidadosa. Novo Hamburgo — RS.",
    locale: "pt_BR",
    type: "website",
    siteName: "Gabriela Keil — Neuropsicóloga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriela Keil — Psicóloga e Neuropsicóloga em Novo Hamburgo",
    description:
      "Ofereço avaliação e reabilitação neuropsicológica com laudos completos e escuta cuidadosa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
