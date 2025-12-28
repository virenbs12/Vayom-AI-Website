import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, User, AlertCircle, Search } from "lucide-react";
import { Link } from "wouter";

export function MarketsHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50 border-b border-border">
      <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-display font-bold leading-tight">
            Solutions by market
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Stop sending cash out the door. Find revenue leakage early across systems, documents, and recurring reports.
          </p>
          <p className="text-sm font-medium text-primary">
            Start with one scoped workflow. Prove value in 6–12 weeks.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8" onClick={() => window.location.href='/#contact'}>
              Request a workflow demo
            </Button>
          </div>
        </div>

        {/* 4-Tile Market Selector Visual */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-border">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button onClick={() => scrollTo('b2c')} className="p-4 rounded-xl bg-slate-50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all text-left group">
              <span className="font-bold text-lg group-hover:text-primary block mb-1">B2C</span>
              <span className="text-xs text-muted-foreground">High-volume commerce</span>
            </button>
            <button onClick={() => scrollTo('b2b')} className="p-4 rounded-xl bg-slate-50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all text-left group">
              <span className="font-bold text-lg group-hover:text-primary block mb-1">B2B</span>
              <span className="text-xs text-muted-foreground">Contract alignment</span>
            </button>
            <button onClick={() => scrollTo('riaa')} className="p-4 rounded-xl bg-slate-50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all text-left group">
              <span className="font-bold text-lg group-hover:text-primary block mb-1">RIAA</span>
              <span className="text-xs text-muted-foreground">Evidence engine</span>
            </button>
            <button onClick={() => scrollTo('business-functions')} className="p-4 rounded-xl bg-slate-50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all text-left group">
              <span className="font-bold text-lg group-hover:text-primary block mb-1">Functions</span>
              <span className="text-xs text-muted-foreground">Finance & Ops</span>
            </button>
          </div>

          {/* Mini Mock Results Panel */}
          <div className="border-t border-border pt-6">
            <div className="flex items-center gap-3 mb-4 bg-slate-100 p-2 rounded-lg text-sm text-slate-500">
               <Search className="w-4 h-4" />
               <span>Revenue leakage in Q4 promotions?</span>
            </div>
            <div className="space-y-3">
               <div className="flex items-start gap-3 p-3 rounded-lg border border-red-100 bg-red-50/50">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-red-900">Promo Stacking Detected</div>
                    <div className="text-xs text-red-700 mt-1">Order #8821 applied 'WELCOME20' + 'CyberMonday' (Incompatible)</div>
                    <div className="flex items-center gap-2 mt-2">
                       <span className="text-[10px] px-1.5 py-0.5 bg-white border border-red-200 rounded text-red-600 font-mono">LINKED EVIDENCE</span>
                       <ArrowRight className="w-3 h-3 text-red-400" />
                       <span className="text-[10px] font-medium text-red-800">Owner: Merchandising</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
