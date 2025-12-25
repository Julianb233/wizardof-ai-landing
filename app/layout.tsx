import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WizardOf.ai - AI Automation Expert | Julian Bradley",
  description: "Transforming businesses through the magic of artificial intelligence. 10+ years of innovation. Proven results in AI automation and digital transformation.",
  openGraph: {
    title: "WizardOf.ai - AI Automation Expert | Julian Bradley",
    description: "Transforming businesses through the magic of artificial intelligence. 10+ years of innovation. Proven results in AI automation and digital transformation.",
    url: "https://wizardof-ai-landing.vercel.app",
    siteName: "WizardOf.ai",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Julian Bradley - The Wizard of AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WizardOf.ai - AI Automation Expert | Julian Bradley",
    description: "Transforming businesses through the magic of artificial intelligence. 10+ years of innovation. Proven results in AI automation and digital transformation.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
