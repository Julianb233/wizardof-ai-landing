import type { Metadata } from "next";
import { getTemplateById, templates } from "@/app/lib/template-data";

// Generate static params for all templates
export function generateStaticParams() {
  return templates.map((template) => ({
    id: template.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params;
  const template = getTemplateById(id);

  if (!template) {
    return {
      title: "Template Not Found | Wizard of AI",
      description: "The template you are looking for could not be found.",
    };
  }

  return {
    title: `${template.title} | AI Agent Templates | Wizard of AI`,
    description: template.description,
    keywords: [
      template.category,
      "AI agent template",
      "automation",
      "AI workflow",
      "agent orchestration",
      ...template.technologies.slice(0, 5),
    ],
    openGraph: {
      title: `${template.title} | AI Agent Templates`,
      description: template.description,
      type: "website",
      url: `https://wizardof.ai/templates/${template.id}`,
      images: [
        {
          url: `/og-template-${template.id}.png`,
          width: 1200,
          height: 630,
          alt: template.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${template.title} | AI Agent Templates`,
      description: template.description,
      images: [`/og-template-${template.id}.png`],
      creator: "@wizardofai"
    },
    alternates: {
      canonical: `https://wizardof.ai/templates/${template.id}`
    }
  };
}

export default function TemplateDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
