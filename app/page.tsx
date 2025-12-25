import { Navigation } from "@/app/components/layout/Navigation";
import { Hero } from "@/app/components/sections/Hero";
import { WhatIDo } from "@/app/components/sections/WhatIDo";
import { WhoIServe } from "@/app/components/sections/WhoIServe";
import { Services } from "@/app/components/sections/Services";
import { Results } from "@/app/components/sections/Results";
import { GoldenTicket } from "@/app/components/sections/GoldenTicket";
import { Contact } from "@/app/components/sections/Contact";
import { Footer } from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatIDo />
        <WhoIServe />
        <Services />
        <Results />
        <GoldenTicket />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
