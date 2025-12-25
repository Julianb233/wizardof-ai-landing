import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/app/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | WizardOf.ai",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
      url: `https://wizardof.ai/services/${service.slug}`,
      siteName: "WizardOf.ai",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
    alternates: {
      canonical: `https://wizardof.ai/services/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ServiceLayout({ children }: Props) {
  return <>{children}</>;
}
