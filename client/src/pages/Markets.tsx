import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsContent } from "@/components/markets/MarketsContent";
import { ContactForm } from "@/components/home/ContactForm";

export default function Markets() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
