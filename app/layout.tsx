import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Método PRODUTO — Crie Artes Profissionais com ChatGPT",
  description: "Aprenda a transformar fotos comuns dos seus produtos em artes comerciais profissionais usando ChatGPT, mesmo sem saber design.",
  openGraph: {
    title: "Método PRODUTO — Crie Artes Profissionais com ChatGPT",
    description: "Transforme fotos comuns dos seus produtos em divulgações mais profissionais com uma estrutura simples para orientar o ChatGPT.",
    type: "website",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
