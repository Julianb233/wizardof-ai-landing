import type { Metadata } from "next";
import { getAudienceBySlug, getAllAudienceSlugs } from "@/app/lib/audiences-data";

interface Props {
  params: Promise<{ audience: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { audience } = await params;
  const audienceData = getAudienceBySlug(audience);

  if (!audienceData) {
    return {
      title: "Audience Not Found | WizardOf.ai",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: audienceData.metaTitle,
    description: audienceData.metaDescription,
    keywords: audienceData.keywords,
    openGraph: {
      title: audienceData.metaTitle,
      description: audienceData.metaDescription,
      type: "website",
      url: `https://wizardof.ai/for/${audienceData.slug}`,
      siteName: "WizardOf.ai",
    },
    twitter: {
      card: "summary_large_image",
      title: audienceData.metaTitle,
      description: audienceData.metaDescription,
    },
    alternates: {
      canonical: `https://wizardof.ai/for/${audienceData.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllAudienceSlugs();
  return slugs.map((audience) => ({ audience }));
}

export default function AudienceLayout({ children }: Props) {
  return <>{children}</>;
}
