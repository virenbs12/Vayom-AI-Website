import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { WhyVayom } from "@/components/home/WhyVayom";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhatVayomDelivers } from "@/components/home/WhatVayomDelivers";
import { RIAASection } from "@/components/home/RIAASection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MarketsPreview } from "@/components/home/MarketsPreview";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroCarousel />
        <WhyVayom />
        <ProblemSection />
        <RIAASection />
        <WhatVayomDelivers />
        <HowItWorks />
        <MarketsPreview />
        <ComparisonSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
