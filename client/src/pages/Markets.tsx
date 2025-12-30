import React, { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MarketsHero } from "@/components/markets/MarketsHero";
import { MarketsContent } from "@/components/markets/MarketsContent";
import { ContactForm } from "@/components/home/ContactForm";

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
