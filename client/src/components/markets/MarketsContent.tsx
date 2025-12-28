import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import leakageMap from "@assets/generated_images/b2c_revenue_leakage_map_diagram.png";
import { ArrowRight, Check, Database, FileText, AlertCircle, Search, User, Ship, CreditCard, Headphones, Repeat, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MarketsContent() {
  const [activeSection, setActiveSection] = useState("b2c");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["b2c", "b2b", "riaa", "business-functions"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140; 
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Sub-Nav */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container-width flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          {[
            { id: "b2c", label: "B2C" },
            { id: "b2b", label: "B2B" },
            { id: "riaa", label: "RIAA" },
            { id: "business-functions", label: "Business Functions" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeSection === item.id 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-width py-12 space-y-32">
        {/* B2C Section */}
        <section id="b2c" className="scroll-mt-40">
          <div className="mb-12">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Market: B2C</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-foreground">Stop sending cash out the door in high-volume commerce</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              B2C leakage is rarely one big mistake. It is thousands of small ones: promo stacking, duplicate charges, inconsistent refunds, shipping cost drift, and subscription billing noise. Vayom AI highlights the exact transactions driving margin loss, with evidence you can click back to.
            </p>
          </div>

          {/* B2C Header Visual: Leakage Map */}
          <div className="mb-16 bg-white p-8 rounded-2xl border border-border shadow-sm">
             <h3 className="font-semibold mb-8 text-center text-sm uppercase text-muted-foreground">Leakage Map</h3>
             <div className="flex justify-between items-center max-w-4xl mx-auto relative px-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                {[
                  { label: "Promo", leakage: true },
                  { label: "Checkout", leakage: true },
                  { label: "Fulfillment", leakage: true },
                  { label: "Returns", leakage: true },
                  { label: "Subscription", leakage: true }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm relative">
                      {step.leakage && (
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                      )}
                    </div>
                    <div className="mt-4 text-xs font-bold text-slate-600">{step.label}</div>
                  </div>
                ))}
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
             {/* B2C Function 1: Promo */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 1: Promo and discount integrity</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Promo stacking and policy drift quietly push margin down. This workflow shows where discounts exceed policy, where promo codes are abused, and where channel pricing breaks consistency.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Surfaces orders where applied discounts do not align to current promo rules and eligibility.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Groups repeat patterns by code, customer segment, product, and channel so teams fix root cause.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs a clean list of "what happened, where, and why," ready for review.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-border p-3 text-[10px] transform translate-x-full group-hover:translate-x-0 transition-transform hidden md:block">
                      <div className="font-bold border-b pb-1 mb-2">Policy Reference</div>
                      <div className="text-slate-500 italic">"Rule PR-01: Discounts cannot be combined with 'WELCOME20' code..."</div>
                   </div>
                   <div className="text-[10px] font-bold uppercase text-muted-foreground mb-3 flex justify-between">
                     <span>Promo Audit</span>
                     <span className="text-primary cursor-pointer hover:underline">View Policy →</span>
                   </div>
                   <div className="grid grid-cols-5 gap-2 font-bold text-[9px] text-slate-400 border-b pb-2 mb-2">
                      <div>Order ID</div>
                      <div>Code</div>
                      <div>Expected</div>
                      <div>Applied</div>
                      <div>Var.</div>
                   </div>
                   <div className="grid grid-cols-5 gap-2 text-[10px] items-center">
                      <div className="font-mono">#9921</div>
                      <div><Badge variant="outline" className="text-[9px] h-4">SUMMER</Badge></div>
                      <div>15%</div>
                      <div className="text-red-600 font-bold">25%</div>
                      <div className="text-red-600 font-bold">+10%</div>
                   </div>
                </div>
             </div>

             {/* B2C Function 2: Duplicate */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 2: Duplicate charges and refunds</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  High volume payment retries, gateway timeouts, and repeat submissions can create duplicate charges or duplicate refunds.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies potential duplicates across payment processors and order systems.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Ties each flagged item to the original order, payment event, and refund transaction.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Reduces customer frustration by routing only high-confidence exceptions to review.</li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                   <div className="bg-white p-4 border border-border rounded-xl">
                      <div className="text-[10px] font-bold text-slate-400 mb-2">ORIGINAL TRANSACTION</div>
                      <div className="space-y-1 text-[11px]">
                         <div className="font-bold">$124.50</div>
                         <div className="text-slate-500">Card ending 4242</div>
                         <div className="text-slate-400">14:22:01</div>
                      </div>
                   </div>
                   <div className="bg-white p-4 border border-red-200 rounded-xl relative">
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"><AlertCircle className="w-3 h-3" /></div>
                      <div className="text-[10px] font-bold text-red-400 mb-2 uppercase">Potential Duplicate</div>
                      <div className="space-y-1 text-[11px]">
                         <div className="font-bold">$124.50</div>
                         <div className="text-slate-500">Card ending 4242</div>
                         <div className="text-slate-400">14:22:04</div>
                      </div>
                   </div>
                   <div className="col-span-2 text-[10px] font-bold text-red-600 bg-red-50 py-1.5 px-3 rounded-lg text-center">
                     MATCH: Same customer / same amount / close timestamp
                   </div>
                </div>
             </div>

             {/* B2C Function 3: Returns */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 3: Returns and refund accuracy</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Returns are where margin disappears if reasons, policies, and outcomes are inconsistent. This workflow highlights outliers and repeat behavior.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Summarizes return reasons and outcomes with clear evidence for each case.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights outliers by product, warehouse, carrier route, and customer segment.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Flags cases for investigation for repeat behavior or process gaps.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Reason-to-Cost Dashboard</div>
                   <div className="space-y-4">
                      {[
                        { label: "Damaged", amount: "$42.1k", rate: "14%", color: "bg-red-500" },
                        { label: "Sizing", amount: "$38.5k", rate: "12%", color: "bg-primary" },
                        { label: "Changed Mind", amount: "$12.4k", rate: "4%", color: "bg-slate-400" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-1 group cursor-pointer">
                           <div className="flex justify-between text-[11px] font-medium">
                              <span>{item.label}</span>
                              <span className="text-slate-500">{item.amount} ({item.rate})</span>
                           </div>
                           <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div className={cn("h-full rounded-full transition-all group-hover:opacity-80", item.color)} style={{ width: item.rate }} />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* B2C Function 4: Shipping */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 4: Shipping cost and fulfillment leakage</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Shipping overcharges and fulfillment mismatches quietly drain cash. This workflow compares expected vs actual costs.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Finds shipments where carrier charges exceed expected rates based on zone/weight.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights fulfillment exceptions (split shipments, wrong service level).</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs an action list: dispute, renegotiate, or tighten shipping rules.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm text-[10px]">
                   <div className="flex justify-between mb-4">
                      <span className="font-bold uppercase text-slate-400">Carrier Reconciliation</span>
                      <div className="flex gap-2">
                         <Badge variant="secondary" className="text-[8px] h-4">UPS</Badge>
                         <Badge variant="secondary" className="text-[8px] h-4">Zone 4</Badge>
                      </div>
                   </div>
                   <div className="grid grid-cols-4 gap-2 font-bold border-b pb-2 mb-2">
                      <div>Shipment</div>
                      <div>Expected</div>
                      <div>Actual</div>
                      <div>Variance</div>
                   </div>
                   <div className="grid grid-cols-4 gap-2 py-1 items-center border-b border-slate-50">
                      <div className="font-mono">#SH-442</div>
                      <div>$12.50</div>
                      <div className="text-red-600 font-bold">$18.20</div>
                      <div className="text-red-600 font-bold">+$5.70</div>
                   </div>
                </div>
             </div>

             {/* B2C Function 5: Subscription */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 5: Subscription billing hygiene</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Subscription businesses leak cash through failed renewals, duplicate retries, and mismatched plan terms.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies renewals that failed and subscriptions that received duplicate credits.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Groups issues by plan, cohort, and payment method to fix biggest drivers first.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Creates prioritized "recover now" and "prevent next cycle" lists.</li>
                </ul>
                <div className="grid grid-cols-3 gap-2">
                   {[
                     { label: "Failed Renewals", count: "142", icon: RotateCcw, color: "text-red-500" },
                     { label: "Duplicate Retries", count: "28", icon: Repeat, color: "text-amber-500" },
                     { label: "Credit Issues", count: "12", icon: CreditCard, color: "text-blue-500" }
                   ].map((item, i) => (
                     <div key={i} className="bg-white p-3 border border-border rounded-xl text-center group cursor-pointer hover:border-primary transition-colors">
                        <item.icon className={cn("w-4 h-4 mx-auto mb-2", item.color)} />
                        <div className="text-lg font-bold leading-none mb-1">{item.count}</div>
                        <div className="text-[8px] font-bold text-slate-400 uppercase">{item.label}</div>
                     </div>
                   ))}
                </div>
             </div>

             {/* B2C Function 6: Impact Mapping */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 6: Customer service impact mapping</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Support tickets and complaints are early indicators of future refunds and churn. This workflow connects service signals to revenue impact.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Links common complaint themes to downstream outcomes like refunds and chargebacks.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights accounts and products with rising service friction before costs spike.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Produces weekly "top drivers" summary with drill-down to interactions.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Service-to-Impact</div>
                   <div className="space-y-3">
                      {[
                        { theme: "Late Delivery", outcome: "Refund Request", count: 48, impact: "High" },
                        { theme: "Pricing Confusion", outcome: "Cancellation", count: 22, impact: "Med" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-[11px] group cursor-pointer">
                           <div className="flex-1 bg-slate-50 p-2 rounded border border-transparent group-hover:border-primary/20">{item.theme}</div>
                           <ArrowRight className="w-3 h-3 text-slate-300" />
                           <div className="flex-1 bg-primary/5 p-2 rounded text-primary font-bold border border-transparent group-hover:border-primary/20">{item.outcome} ({item.count})</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* B2B Section */}
        <section id="b2b" className="scroll-mt-40 border-t border-border pt-20">
          <div className="mb-12">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Market: B2B</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-foreground">Stop sending cash out the door across contracts, pricing, and billing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              In B2B, cash walks out the door when contract terms live in PDFs, pricing lives in spreadsheets, and invoices live in ERP. Vayom AI brings them together.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
             {["Contract Compliance", "Invoice Verification", "Credit Note Audit"].map((title, i) => (
               <div key={i} className="p-6 rounded-xl bg-white border border-border shadow-sm hover:border-primary/50 transition-colors">
                 <h3 className="font-bold text-lg mb-2">{title}</h3>
                 <p className="text-sm text-muted-foreground">Automatically verify against source documents and system records.</p>
               </div>
             ))}
          </div>
        </section>

        {/* RIAA Section */}
        <section id="riaa" className="scroll-mt-40 border-t border-border pt-20">
          <div className="mb-12">
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Platform: RIAA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-foreground">Revenue Intelligence Agentic Atlas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              RIAA is the system that makes multi-source answers usable in real operations. It coordinates retrieval across databases, documents, and feeds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
             {[
               { title: "1. Connect", desc: "Pre-built connectors for ERP/CRM and recurring feeds. No rip-and-replace." },
               { title: "2. Normalize", desc: "Align entities across sources (customers, products, aliases) so linking stays reliable." },
               { title: "3. Coordinate", desc: "A web of specialized agents handles discrete work: domain checks, extraction, governance." },
               { title: "4. Prove + Act", desc: "Every output includes evidence links, a clear rationale trail, and an action queue." }
             ].map((layer, i) => (
               <div key={i} className="p-6 bg-slate-900 text-white rounded-xl border border-slate-800 flex flex-col h-full">
                 <h4 className="font-bold text-lg mb-4 text-primary">{layer.title}</h4>
                 <p className="text-sm text-slate-400 leading-relaxed">{layer.desc}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Business Functions Section */}
        <section id="business-functions" className="scroll-mt-40 border-t border-border pt-20 pb-20">
           <div className="mb-12">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Business Functions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-foreground">Unified truth for every leader</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Finance, Sales, Ops, and leaders get the same truth, with sources linked for review, approval, and follow-through.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Finance", desc: "Automate reconciliation and audit prep with a clean evidence trail." },
              { title: "Sales", desc: "Verify commissions and pricing compliance during expansion cycles." },
              { title: "Operations", desc: "Track fulfillment leakage and shipping cost drift in real-time." },
              { title: "Leadership", desc: "Audit-ready summaries across every functional silo." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-border group hover:bg-primary/5 transition-colors">
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-200 text-[10px] font-bold text-primary uppercase flex items-center gap-1">
                   View Workflow <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
