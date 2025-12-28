import React from "react";
import { Check, X } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="container-width py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold">Designed for enterprise work, not generic chat or dashboards</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
          <h3 className="text-xl font-bold mb-4">Public chat tools</h3>
          <p className="text-muted-foreground">Useful for general knowledge, but cannot securely connect to your ERP/CRM or show auditable proof.</p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-border shadow-sm">
          <h3 className="text-xl font-bold mb-4">Dashboards & BI</h3>
          <p className="text-muted-foreground">Great for reporting, weak when answers require document-to-database verification.</p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl transform md:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-bold text-white">Vayom AI</h3>
            <span className="px-2 py-0.5 rounded bg-primary text-white text-xs font-bold">RECOMMENDED</span>
          </div>
          <p className="text-slate-300">Connects systems + documents + updates and returns answers with evidence links and clear follow-through.</p>
          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Check className="w-4 h-4" /> <span>Secure Connection</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Check className="w-4 h-4" /> <span>Auditable Proof</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Check className="w-4 h-4" /> <span>Verified Action</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
