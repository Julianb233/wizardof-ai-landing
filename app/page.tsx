import { Navigation } from "@/app/components/layout/Navigation";
import { Hero } from "@/app/components/sections/Hero";
import { WhatIDo } from "@/app/components/sections/WhatIDo";
import { Services } from "@/app/components/sections/Services";
import { Results } from "@/app/components/sections/Results";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatIDo />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
