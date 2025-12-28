import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import leakageMap from "@assets/generated_images/b2c_revenue_leakage_map_diagram.png";
import { ArrowRight, Check, Database, FileText, AlertCircle, Search, User, Ship, CreditCard, Headphones, Repeat, RotateCcw, TrendingDown, ClipboardCheck, History, ShieldCheck, Users, Link as LinkIcon, Network, Briefcase, BarChart3, Fingerprint, Lock, Zap } from "lucide-react";
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

             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 2: Duplicate charges and duplicate refunds</h3>
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
                      <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Original Transaction</div>
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
              In B2B, cash walks out the door when contract terms live in PDFs, pricing lives in spreadsheets, and invoices live in ERP. Vayom AI brings them together so teams can spot leakage early, fix it before close, and keep a clean trail of proof.
            </p>
          </div>
          
          <div className="mb-16 bg-white p-8 rounded-2xl border border-border shadow-sm">
             <h3 className="font-semibold mb-8 text-center text-sm uppercase text-muted-foreground">Deal-to-cash timeline</h3>
             <div className="flex justify-between items-center max-w-4xl mx-auto relative px-4">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                {[
                  { label: "Deal", sub: "" },
                  { label: "Contract", sub: "Pricing drift" },
                  { label: "Order", sub: "Duplicate credits" },
                  { label: "Invoice", sub: "Deductions" },
                  { label: "Payment", sub: "Rebate errors" }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                    <div className="mt-4 text-xs font-bold text-slate-600">{step.label}</div>
                    {step.sub && (
                       <div className="absolute -top-8 bg-red-50 text-red-600 text-[9px] px-2 py-0.5 rounded border border-red-100 font-bold whitespace-nowrap">
                         {step.sub}
                       </div>
                    )}
                  </div>
                ))}
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
             {/* B2B Function 1 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 1: Contract-to-invoice compliance</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  This workflow confirms that what you billed matches what you agreed to. It highlights pricing drift, expired discounts, and missed surcharges.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Shows contract excerpt next to invoice line items that deviate.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Handles naming variations across customers and subsidiaries.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs a prioritized list to correct before financial close.</li>
                </ul>
                <div className="grid grid-cols-3 gap-2 h-40">
                   <div className="bg-white p-3 border border-border rounded-xl text-[9px]">
                      <div className="font-bold mb-2 uppercase text-slate-400 border-b pb-1">Contract Term</div>
                      <div className="italic">"...rate shall increase to $45.00 effective Jan 1..."</div>
                   </div>
                   <div className="bg-white p-3 border border-border rounded-xl text-[9px]">
                      <div className="font-bold mb-2 uppercase text-slate-400 border-b pb-1">ERP Invoice Line</div>
                      <div>Item: Cloud Core</div>
                      <div>Rate: <span className="text-red-600 font-bold">$29.00</span></div>
                   </div>
                   <div className="bg-primary/5 p-3 border border-primary/20 rounded-xl text-[9px]">
                      <div className="font-bold mb-2 uppercase text-primary border-b pb-1">Variance</div>
                      <div className="text-red-600 font-bold">-$16.00 Variance</div>
                      <Button size="sm" variant="outline" className="h-6 w-full text-[8px] mt-4">Copy Evidence Link</Button>
                   </div>
                </div>
             </div>

             {/* B2B Function 2 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 2: Discount governance</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Unauthorized discounts create margin leakage. This workflow surfaces exceptions early and makes cumulative impact visible.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Flags discounts exceeding policy thresholds.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Summarizes exposure by region, segment, and rep.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Supports faster approvals by showing deviations.</li>
                </ul>
                <div className="bg-white p-5 border border-border rounded-xl shadow-sm">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Deal Review</div>
                         <div className="font-bold text-sm">TechCorp Enterprise</div>
                      </div>
                      <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-[10px] h-5">Review Required</Badge>
                   </div>
                   <div className="grid grid-cols-3 gap-3 text-center mb-4">
                      <div className="bg-slate-50 p-2 rounded">
                         <div className="text-[8px] uppercase font-bold text-slate-400">Req vs Max</div>
                         <div className="text-red-600 font-bold">35% / 20%</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded">
                         <div className="text-[8px] uppercase font-bold text-slate-400">Status</div>
                         <div className="font-bold">Pending</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded">
                         <div className="text-[8px] uppercase font-bold text-slate-400">Impact</div>
                         <div className="font-bold">-$4.2k</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* RIAA Section */}
        <section id="riaa" className="scroll-mt-40 border-t border-border pt-20">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Solutions Page: RIAA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-foreground">RIAA: Revenue Intelligence Agentic Atlas (the core platform)</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              RIAA is the system that makes multi-source answers usable in real operations. It coordinates retrieval across databases, documents, and feeds, then returns results with proof attached. Teams can validate fast, act fast, and stop sending cash out the door due to slow verification and execution drift.
            </p>
          </div>

          {/* Technology framework */}
          <div className="mb-24">
            <h3 className="text-2xl font-display font-bold mb-12">Technology framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0 hidden md:block" />
              {[
                { title: "Connect", icon: Network, desc: "Pre-built connectors for ERP/CRM, contract repositories, and recurring feeds. No rip-and-replace." },
                { title: "Normalize", icon: Fingerprint, desc: "Align entities across sources (customers, products, subsidiaries, aliases) so cross-system linking stays reliable." },
                { title: "Coordinate", icon: Briefcase, desc: "A web of specialized agents handles discrete work: domain checks, data extraction, governance, and orchestration." },
                { title: "Prove + Act", icon: Zap, desc: "Every output includes evidence links, a clear rationale trail, and an action-ready queue (approve, flag, resolve)." }
              ].map((layer, i) => (
                <div key={i} className="relative z-10 bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col h-full group hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <layer.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-3">{i + 1}. {layer.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
                </div>
              ))}
              <div className="md:col-span-4 mt-8 flex justify-center">
                 <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-[11px] font-medium text-slate-500">
                   Patent-pending multi-modal architecture for coordinated extraction across databases, documents, and feeds.
                 </div>
              </div>
            </div>
          </div>

          {/* Provenance-first outputs */}
          <div className="mb-24">
            <h3 className="text-2xl font-display font-bold mb-8">Provenance-first outputs</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
               <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg">RIAA outputs are designed for reviewers, not just viewers:</p>
                  <ul className="space-y-4">
                     <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <div><strong>Evidence-linked by default:</strong> every result includes links back to the exact record or excerpt used</div></li>
                     <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <div><strong>Cross-source context:</strong> results are not isolated; they are linked across systems and documents</div></li>
                     <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <div><strong>Audit-ready trail:</strong> what was checked, what was flagged, and what was approved is preserved</div></li>
                     <li className="flex gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> <div><strong>Permission-aware:</strong> role-based access patterns for who can see what, aligned to enterprise expectations</div></li>
                  </ul>
               </div>

               <div className="bg-white border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 bg-primary h-full" />
                  <div className="space-y-4">
                     <div className="flex justify-between items-start mb-2">
                        <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Answer Summary</div>
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none">Flagged: Policy Deviation</Badge>
                     </div>
                     <p className="text-sm font-medium leading-relaxed">"The applied discount (25%) on Order #9921 exceeds the current policy maximum (15%) for the 'Winter Promo' period."</p>
                     
                     <div className="flex flex-wrap gap-2 pt-2 pb-4 border-b">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex gap-1 items-center h-6"><Database className="w-3 h-3" /> ERP Record #9921</Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 flex gap-1 items-center h-6"><FileText className="w-3 h-3" /> Contract Pg 12</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center h-6"><LinkIcon className="w-3 h-3" /> News Feed: Q1 Promo</Badge>
                     </div>

                     <div className="grid grid-cols-3 gap-4 pt-2">
                        <div>
                           <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Owner</div>
                           <div className="flex items-center gap-1.5 text-xs font-semibold">
                              <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px]"><User className="w-3 h-3" /></div>
                              Finance Manager
                           </div>
                        </div>
                        <div>
                           <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Status</div>
                           <div className="text-xs font-semibold text-amber-600">Pending Review</div>
                        </div>
                        <div>
                           <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">Next Step</div>
                           <div className="text-xs font-bold text-primary cursor-pointer hover:underline">Bill Correction</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Rapid deployment and continuous optimization */}
          <div className="mb-24">
            <h3 className="text-2xl font-display font-bold mb-8">Rapid deployment and continuous optimization</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
               {[
                 { time: "~3 Days", title: "Structured data onboarding", desc: "Integrate a new structured source quickly." },
                 { time: "~10 mins", title: "Document and news feed ingestion", desc: "Bring in new documents and updates rapidly." },
                 { time: "~10 Days", title: "RIAA training on new sources", desc: "Tune RIAA to perform reliably on added sources." },
                 { time: "~10 Days", title: "Agent build and training", desc: "Develop and train specialized agents for the workflow." },
                 { time: "~6 Hours", title: "New user training and onboarding", desc: "Get teams productive quickly with guided onboarding." },
                 { time: "~5–10 Days", title: "External agent integration", desc: "Connect to platforms like Agentforce and Azure Copilot." },
                 { time: "~5 Days", title: "New entity onboarding (NER)", desc: "Add new entities and naming patterns for matching." },
                 { time: "~5–10 Days", title: "Quarterly refinement cycles", desc: "Regular improvement cycles to tighten outcomes." }
               ].map((item, i) => (
                 <div key={i} className="p-5 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
                    <div className="text-2xl font-display font-bold text-primary mb-2">{item.time}</div>
                    <div className="text-xs font-bold mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</div>
                    <div className="text-[11px] text-muted-foreground leading-snug">{item.desc}</div>
                 </div>
               ))}
            </div>
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-[10px] text-muted-foreground italic">All timeframes refer to business days. Rapid Deployment & Continuous Optimization.</p>
               <div className="flex gap-4">
                  <Button className="rounded-full px-8" onClick={() => window.location.href='/#contact'}>Request a workflow demo</Button>
                  <Button variant="ghost" className="rounded-full" onClick={() => scrollTo('b2c')}>See Markets →</Button>
               </div>
            </div>
          </div>

          {/* Why it matters */}
          <div className="bg-slate-50 p-12 rounded-3xl border border-border">
             <h3 className="text-2xl font-display font-bold mb-10 text-center">Why it matters</h3>
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Faster verification", desc: "When terms are in documents and transactions are in systems." },
                  { title: "Fewer leakage events", desc: "Because exceptions are surfaced earlier across the funnel." },
                  { title: "Less reconciliation", desc: "Reduce spreadsheet-driven work and handoff failures." },
                  { title: "Internal alignment", desc: "Stronger trust because everyone can see the same proof." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                     <div className="w-10 h-10 bg-white rounded-lg border border-border flex items-center justify-center shadow-sm">
                        <BarChart3 className="w-5 h-5 text-primary" />
                     </div>
                     <h4 className="font-bold text-base">{item.title}</h4>
                     <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
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
