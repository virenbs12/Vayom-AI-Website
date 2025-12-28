import React from "react";
import { Database, FileText, Rss, ArrowRight, CheckCircle, FileCheck, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function RIAASection() {
  return (
    <section className="bg-background text-foreground py-24 overflow-hidden relative border-y border-border/50" id="riaa">
      {/* Background Elements - Organic & Soft */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-vayom-mint-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/50 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-vayom-mint-100 text-primary hover:bg-vayom-mint-200 border-none px-6 py-2.5 text-lg font-bold tracking-wide shadow-md mb-4 uppercase">
              Meet RIAA: Revenue Intelligence Agentic Atlas
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-foreground">
              Launch in weeks.<br/>Improve continuously.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              RIAA is the platform behind Vayom AI. It connects your systems and documents, links every result back to proof, and turns "we think" into "we can show." The goal is simple: stop sending cash out the door because the evidence was trapped in silos.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-card border border-border/60 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-primary/30 transition-colors">
                <Database className="w-4 h-4 text-primary" />
                <span>Systems: ERP & CRM</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border/60 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-primary/30 transition-colors">
                <FileText className="w-4 h-4 text-primary" />
                <span>Documents: Contracts & Policies</span>
              </div>
              <div className="flex items-center gap-2 bg-card border border-border/60 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-primary/30 transition-colors">
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
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card hover:bg-white transition-all border border-border/40 hover:border-primary/20 shadow-sm hover:shadow-md group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary flex items-center justify-center text-primary group-hover:text-white text-xs font-bold transition-colors shadow-xs">{i + 1}</span>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed pt-1.5 font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagram Visual - Premium Organic Style */}
          <div className="relative">
            <div className="bg-card/40 backdrop-blur-sm border border-border/60 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative">
               <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent rounded-[2.5rem] pointer-events-none" />
               
               <div className="flex flex-col gap-14 relative z-10">
                 
                 {/* Sources Layer */}
                 <div className="grid grid-cols-1 gap-4">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Sources</div>
                    <div className="flex gap-5">
                      <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center border border-border/50 shadow-lg hover:border-primary/40 transition-all hover:scale-105">
                        <Database className="w-10 h-10 text-vayom-green-600" />
                      </div>
                      <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center border border-border/50 shadow-lg hover:border-accent/40 transition-all hover:scale-105">
                        <FileText className="w-10 h-10 text-accent" />
                      </div>
                      <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center border border-border/50 shadow-lg hover:border-vayom-green-500/40 transition-all hover:scale-105">
                        <Rss className="w-10 h-10 text-vayom-green-500" />
                      </div>
                    </div>
                 </div>

                 {/* Connection Arrows */}
                 <div className="relative h-14 flex justify-center">
                   <div className="absolute top-0 w-px h-full bg-linear-to-b from-border to-primary/40" />
                   <div className="absolute top-1/2 -translate-y-1/2 bg-white border border-border/50 rounded-full p-2 z-10 shadow-md">
                     <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                   </div>
                 </div>

                 {/* RIAA Core */}
                 <div className="bg-linear-to-br from-primary to-vayom-green-900 border border-primary/20 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-3xl font-display font-bold text-white relative z-10 tracking-tight">RIAA</h3>
                    <p className="text-sm text-vayom-mint-100/90 relative z-10 font-medium mt-1">Revenue Intelligence Agentic Atlas</p>
                 </div>

                 {/* Output Arrows */}
                 <div className="relative h-14 flex justify-center">
                   <div className="absolute top-0 w-px h-full bg-linear-to-b from-primary/40 to-border" />
                   <div className="absolute top-1/2 -translate-y-1/2 bg-white border border-border/50 rounded-full p-2 z-10 shadow-md">
                     <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                   </div>
                 </div>

                 {/* Outputs Layer */}
                 <div className="grid grid-cols-1 gap-4">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2 text-right">Outputs</div>
                    <div className="grid gap-4">
                      <div className="bg-white border border-border/40 text-foreground p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
                         <span className="font-semibold text-sm">Evidence-linked Answer</span>
                         <CheckCircle className="w-5 h-5 text-vayom-green-500 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="bg-white/80 border border-border/40 text-foreground p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between opacity-95 group">
                         <span className="font-semibold text-sm">Action Queue</span>
                         <FileCheck className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="bg-white/60 border border-border/40 text-foreground p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-between opacity-80 group">
                         <span className="font-semibold text-sm">Audit Trail</span>
                         <ShieldCheck className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                 </div>

               </div>
            </div>
            
            {/* Decorative orbit/ring element */}
            <div className="absolute -inset-4 border border-primary/5 rounded-[3rem] -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

