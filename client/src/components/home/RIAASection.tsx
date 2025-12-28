import React from "react";
import { Database, FileText, Rss, ArrowRight, CheckCircle, FileCheck, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
            <div className="bg-[#FCFBF8] backdrop-blur-md border border-[#E8E2D9] rounded-[3rem] p-12 lg:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] relative">
               <div className="absolute inset-0 bg-radial-gradient(from_top_left,_circle,_rgba(255,255,255,0.8),_transparent) pointer-events-none" />
               
               <div className="flex flex-col gap-16 relative z-10 items-center">
                 
                 {/* Sources Layer */}
                 <div className="w-full flex flex-col items-center">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-8 text-center opacity-70">Sources</div>
                    <div className="flex justify-center gap-6">
                      <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center border border-[#E8E2D9] shadow-md hover:shadow-xl hover:border-primary/40 transition-all hover:-translate-y-1">
                        <Database className="w-10 h-10 text-[#0D1B1E]" />
                      </div>
                      <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center border border-[#E8E2D9] shadow-md hover:shadow-xl hover:border-accent/40 transition-all hover:-translate-y-1">
                        <FileText className="w-10 h-10 text-accent" />
                      </div>
                      <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center border border-[#E8E2D9] shadow-md hover:shadow-xl hover:border-vayom-green-500/40 transition-all hover:-translate-y-1">
                        <Rss className="w-10 h-10 text-[#0D1B1E]" />
                      </div>
                    </div>
                 </div>

                 {/* Connection Arrows */}
                 <div className="relative h-16 flex justify-center items-center">
                   <div className="w-px h-full bg-linear-to-b from-[#E8E2D9] to-[#E8E2D9]/20" />
                   <div className="absolute top-1/2 -translate-y-1/2 bg-white border border-[#E8E2D9] rounded-full p-2.5 z-10 shadow-sm">
                     <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                   </div>
                 </div>

                 {/* RIAA Core */}
                 <div className="w-full max-w-md bg-linear-to-br from-primary/90 to-vayom-green-800 border border-primary/20 rounded-[2rem] p-12 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(14,124,107,0.3)] group">
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-4xl font-display font-bold text-white relative z-10 tracking-tight mb-2">RIAA</h3>
                    <p className="text-base text-vayom-mint-100/90 relative z-10 font-medium">Revenue Intelligence Agentic Atlas</p>
                 </div>

                 {/* Output Arrows */}
                 <div className="relative h-16 flex justify-center items-center">
                   <div className="w-px h-full bg-linear-to-b from-[#E8E2D9]/20 to-[#E8E2D9]" />
                   <div className="absolute top-1/2 -translate-y-1/2 bg-white border border-[#E8E2D9] rounded-full p-2.5 z-10 shadow-sm">
                     <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                   </div>
                 </div>

                 {/* Outputs Layer */}
                 <div className="w-full flex flex-col items-center">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-8 text-center opacity-70">Outputs</div>
                    <div className="grid gap-4 w-full max-w-sm">
                      <div className="bg-white border border-[#E8E2D9] text-foreground p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-between group cursor-default">
                         <span className="font-semibold text-base">Evidence-linked Answer</span>
                         <div className="w-6 h-6 rounded-full bg-vayom-mint-100 flex items-center justify-center">
                           <CheckCircle className="w-4 h-4 text-primary" />
                         </div>
                      </div>
                      <div className="bg-white border border-[#E8E2D9] text-foreground p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-between group cursor-default">
                         <span className="font-semibold text-base">Action Queue</span>
                         <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
                           <FileCheck className="w-4 h-4 text-accent" />
                         </div>
                      </div>
                      <div className="bg-white border border-[#E8E2D9] text-foreground p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-between group cursor-default">
                         <span className="font-semibold text-base">Audit Trail</span>
                         <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center">
                           <ShieldCheck className="w-4 h-4 text-slate-400" />
                         </div>
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
