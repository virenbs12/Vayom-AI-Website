import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsContent } from "@/components/markets/MarketsContent";
import { ContactForm } from "@/components/home/ContactForm";
import { SEO } from "@/components/SEO";

export default function Markets() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Markets | Vayom AI - B2C, B2B & Revenue Intelligence Solutions"
        description="Explore Vayom AI's revenue intelligence solutions for B2C commerce, B2B contracts, and enterprise revenue operations."
        keywords="B2C revenue, B2B revenue, revenue intelligence, RIAA, commerce solutions"
        canonicalUrl="https://vayomai.org/markets"
      />
      <Header />
      <main>
        <MarketsHero />
        <MarketsContent />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
