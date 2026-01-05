import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsContent } from "@/components/markets/MarketsContent";
import { ContactForm } from "@/components/home/ContactForm";
import { SEO } from "@/components/SEO";

export default function Markets() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Revenue Leakage Solutions for B2B & B2C | Vayom AI"
        description="Detect revenue leakage in B2C commerce (promos, returns, subscriptions) and B2B contracts (pricing, billing, credits). Powered by RIAA technology."
        keywords="B2B revenue leakage, B2C revenue leakage, promo stacking, contract compliance, billing errors, subscription leakage"
        canonicalUrl="https://vayomai.com/markets"
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
