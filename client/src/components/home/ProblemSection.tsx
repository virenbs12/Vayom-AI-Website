import React from "react";

export function ProblemSection() {
  return (
    <section className="bg-slate-50 py-24 border-y border-border">
      <div className="container-width max-w-5xl text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold">
          Answers are scattered. Teams pay for it in time and drift.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            "Terms live in documents. Transactions live in systems. Verification becomes slow and inconsistent.",
            "Teams export data, reconcile manually, and operate in spreadsheets.",
            "Critical checks slip until close, renewals, or audits force a fire drill.",
            "Decisions get delayed because no one can prove the \"why\" behind the numbers."
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-border flex gap-4">
              <span className="text-primary font-bold text-lg">0{i + 1}</span>
              <p className="text-muted-foreground font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
