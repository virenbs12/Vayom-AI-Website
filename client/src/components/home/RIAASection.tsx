import React from "react";
import { Database, FileText, Rss, ArrowRight, CheckCircle, FileCheck, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function RIAASection() {
  return (
    <section className="bg-slate-900 text-white py-24 overflow-hidden relative" id="riaa">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-primary/20 text-primary-foreground hover:bg-primary/30 border-none px-4 py-1.5 text-sm">
              Meet RIAA: Revenue Intelligence Agentic Atlas
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Launch in weeks.<br/>Improve continuously.
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              RIAA is the platform behind Vayom AI. It connects your systems and documents, links every result back to proof, and turns "we think" into "we can show." The goal is simple: stop sending cash out the door because the evidence was trapped in silos.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
                <Database className="w-4 h-4 text-primary" />
                <span>Systems: ERP & CRM</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
                <FileText className="w-4 h-4 text-primary" />
                <span>Documents: Contracts & Policies</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
                <Rss className="w-4 h-4 text-primary" />
                <span>Feeds: Reports & Updates</span>
              </div>
            </div>

            <div className="grid gap-4 pt-8">
              {[
                "Pre-built connectors bring in structured records and key metadata without rip-and-replace.",
                "Evidence-linked answers cite the exact record or excerpt used, so reviewers can verify fast.",
                "Specialized agents coordinate across tasks (data retrieval, domain checks, governance) so outputs are consistent."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">{i + 1}</span>
                  <p className="text-sm text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagram Visual */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
               <div className="flex flex-col gap-12">
                 
                 {/* Sources Layer */}
                 <div className="grid grid-cols-1 gap-4">
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">Sources</div>
                    <div className="flex gap-4">
                      <div className="h-16 w-16 bg-slate-700 rounded-xl flex items-center justify-center border border-white/5 shadow-lg">
                        <Database className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="h-16 w-16 bg-slate-700 rounded-xl flex items-center justify-center border border-white/5 shadow-lg">
                        <FileText className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="h-16 w-16 bg-slate-700 rounded-xl flex items-center justify-center border border-white/5 shadow-lg">
                        <Rss className="w-8 h-8 text-green-400" />
                      </div>
                    </div>
                 </div>

                 {/* Connection Arrows */}
                 <div className="relative h-12 flex justify-center">
                   <div className="absolute top-0 w-px h-full bg-linear-to-b from-slate-600 to-primary/50" />
                   <div className="absolute top-1/2 bg-slate-900 border border-slate-600 rounded-full p-1 z-10">
                     <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                   </div>
                 </div>

                 {/* RIAA Core */}
                 <div className="bg-gradient-to-br from-primary/20 to-blue-900/20 border border-primary/30 rounded-xl p-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                    <h3 className="text-2xl font-display font-bold text-white relative z-10">RIAA</h3>
                    <p className="text-sm text-primary-foreground/80 relative z-10">Revenue Intelligence Agentic Atlas</p>
                 </div>

                 {/* Output Arrows */}
                 <div className="relative h-12 flex justify-center">
                   <div className="absolute top-0 w-px h-full bg-linear-to-b from-primary/50 to-slate-600" />
                   <div className="absolute top-1/2 bg-slate-900 border border-slate-600 rounded-full p-1 z-10">
                     <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                   </div>
                 </div>

                 {/* Outputs Layer */}
                 <div className="grid grid-cols-1 gap-4">
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2 text-right">Outputs</div>
                    <div className="grid gap-3">
                      <div className="bg-white text-slate-900 p-3 rounded-lg shadow-lg flex items-center justify-between">
                         <span className="font-semibold text-sm">Evidence-linked Answer</span>
                         <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="bg-white text-slate-900 p-3 rounded-lg shadow-lg flex items-center justify-between opacity-90">
                         <span className="font-semibold text-sm">Action Queue</span>
                         <FileCheck className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-white text-slate-900 p-3 rounded-lg shadow-lg flex items-center justify-between opacity-80">
                         <span className="font-semibold text-sm">Audit Trail</span>
                         <ShieldCheck className="w-4 h-4 text-slate-600" />
                      </div>
                    </div>
                 </div>

               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
