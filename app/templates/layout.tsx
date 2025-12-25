import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agent Templates | WizardOf.ai - Ready-to-Deploy AI Solutions",
  description: "Browse our library of production-ready AI agent templates. Deploy customer support, sales, data analysis, and workflow automation agents in minutes. Free with subscription.",
  keywords: [
    "AI agent templates",
    "AI automation templates",
    "pre-built AI agents",
    "AI customer support",
    "AI sales agents",
    "AI workflow automation",
    "ready-to-deploy AI",
    "AI agent library",
    "business automation templates",
    "AI integration templates"
  ],
  openGraph: {
    title: "AI Agent Templates | WizardOf.ai",
    description: "Ready-to-deploy AI agent templates for every business need. Deploy in minutes, customize to perfection.",
    type: "website",
    url: "https://wizardof.ai/templates",
    images: [
      {
        url: "/og-templates.png",
        width: 1200,
        height: 630,
        alt: "WizardOf.ai AI Agent Templates"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Templates | WizardOf.ai",
    description: "Ready-to-deploy AI agent templates for every business need. Deploy in minutes, customize to perfection.",
    images: ["/og-templates.png"],
    creator: "@wizardofai"
  },
  alternates: {
    canonical: "https://wizardof.ai/templates"
  }
};

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
