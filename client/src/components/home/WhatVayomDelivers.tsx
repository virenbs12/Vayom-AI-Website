import React from "react";
import { Search, Link as LinkIcon, Layers, BarChart } from "lucide-react";

export function WhatVayomDelivers() {
  return (
    <section className="container-width py-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          One interface for databases, documents, and recurring updates
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Search,
            text: "Search across ERP, CRM, contract PDFs, and shared reports in one place"
          },
          {
            icon: LinkIcon,
            text: "Every output includes clickable source references to the exact record or excerpt used"
          },
          {
            icon: Layers,
            text: "Works on top of what you already run. No rip-and-replace"
          },
          {
            icon: BarChart,
            text: "Designed to show measurable value in weeks, not quarters"
          }
        ].map((item, i) => (
          <div key={i} className="group p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-border">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <item.icon className="w-6 h-6" />
            </div>
            <p className="font-medium text-foreground leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
