import React from "react";
import { ArrowRight, Link as LinkIcon, MessageSquare, Zap } from "lucide-react";
import { Link } from "wouter";

export function HowItWorks() {
  return (
    <section className="container-width py-24" id="how-it-works">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">From question to action, with proof attached</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: LinkIcon,
            title: "1. Connect sources",
            desc: "Start with ERP + CRM + contract repository."
          },
          {
            icon: MessageSquare,
            title: "2. Ask a question",
            desc: "Use plain language your teams already use."
          },
          {
            icon: Zap,
            title: "3. Act with confidence",
            desc: "Get a prioritized output with sources linked for review, approval, and follow-through."
          }
        ].map((item, i) => (
          <div key={i} className="relative p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all group">
            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
              <item.icon className="w-7 h-7 text-slate-600 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-6 h-6 text-slate-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/markets">
          <a className="inline-flex items-center text-primary font-semibold hover:underline text-lg">
            See markets <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Link>
      </div>
    </section>
  );
}
