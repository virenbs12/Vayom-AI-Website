import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import leakageMap from "@assets/generated_images/b2c_revenue_leakage_map_diagram.png";
import { ArrowRight, Check, Database, FileText, AlertCircle, Search, User, Ship, CreditCard, Headphones, Repeat, RotateCcw, TrendingDown, ClipboardCheck, History, ShieldCheck, Users } from "lucide-react";
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
                   <div className="col-span-2 text-[10px] font-bold text-red-600 bg-red-50 py-1.5 px-3 rounded-lg text-center">
                     MATCH: Same customer / same amount / close timestamp
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
                   <div className="flex items-center gap-1.5 text-[10px] bg-amber-50 text-amber-800 px-2 py-1 rounded border border-amber-100">
                      <TrendingDown className="w-3 h-3" />
                      <span>Repeat behavior: Account rep has 4 similar deviations this quarter.</span>
                   </div>
                </div>
             </div>

             {/* B2B Function 3 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 3: Transaction deduplication (B2B)</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Duplicate invoices and payments are direct cash leakage. Detects duplicates across AR activity.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Detects potential duplicates across invoices, credits, and payments.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Groups duplicates into a review bundle with record links.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Reduces write-offs by catching issues before disputes.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Duplicate Cluster</span>
                      <Button size="sm" className="h-6 text-[9px] bg-red-600">Mark as Duplicate</Button>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between p-2 bg-slate-50 rounded border border-slate-100 text-[10px]">
                         <span>Invoice #INV-202</span>
                         <span className="font-bold">$8,400.00</span>
                      </div>
                      <div className="flex justify-between p-2 bg-red-50 rounded border border-red-100 text-[10px]">
                         <span>Invoice #INV-203</span>
                         <span className="font-bold text-red-600">$8,400.00</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* B2B Function 4 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 4: Transaction validation</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Prevents incorrect billing before it becomes customer friction. Checks against contracted price lists.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Validates price and discount logic against active agreements.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights exceptions with specific contract references.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs an "Approve / Flag / Resolve" queue for finance.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-3 shadow-sm text-[9px] overflow-hidden">
                   <div className="grid grid-cols-4 gap-2 font-bold uppercase text-slate-400 border-b pb-2 mb-2">
                      <div>Account</div>
                      <div>Rule</div>
                      <div>Evidence</div>
                      <div>Status</div>
                   </div>
                   <div className="grid grid-cols-4 gap-2 items-center">
                      <div className="font-bold">Global Ltd</div>
                      <div className="text-red-600">Price Drift</div>
                      <div className="text-primary cursor-pointer hover:underline">View Proof</div>
                      <div><Badge className="bg-amber-100 text-amber-700 border-none text-[8px] h-4">Flagged</Badge></div>
                   </div>
                </div>
             </div>

             {/* B2B Function 5 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 5: Rebates and incentives control</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Rebate claims can quietly drain cash when documentation is inconsistent. Ties claims to contract terms.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies claims that lack support or exceed eligibility.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights increasing deduction patterns for accounts.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Provides clean recovery packages for conversations.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm text-[10px]">
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                         <div className="font-bold text-slate-400 border-b pb-1 mb-2">Program Summary</div>
                         <div className="bg-slate-50 p-2 rounded">Volume Rebate: Tier 2 (3.5%)</div>
                      </div>
                      <div>
                         <div className="font-bold text-slate-400 border-b pb-1 mb-2">Claim Lines</div>
                         <div className="text-red-600 font-bold underline">Claim #882: 5% (OVER-LIMIT)</div>
                      </div>
                   </div>
                   <div className="mt-4 pt-2 border-t text-red-600 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Missing: Signed amendment for 2025
                   </div>
                </div>
             </div>

             {/* B2B Function 6 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 6: Payment terms and collection leakage</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Late payments and inconsistent enforcement create cash flow drag. Surfaces patterns early.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies early-pay discounts taken incorrectly.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights accounts with frequent short-pays.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs prioritized AR follow-up lists with evidence.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold">Acme Corp Collection</span>
                      <Badge className="bg-red-100 text-red-600 border-none text-[9px]">TRENDING LATE</Badge>
                   </div>
                   <div className="flex justify-between items-center text-[10px] relative px-2">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2" />
                      <div className="relative bg-white z-10 text-slate-400">Inv: 01/01</div>
                      <div className="relative bg-white z-10 text-slate-400">Due: 02/01</div>
                      <div className="relative bg-red-100 text-red-600 font-bold z-10 px-1 rounded">Paid: 02/15</div>
                   </div>
                </div>
             </div>

             {/* B2B Function 7 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 7: Channel partner compliance</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Channel leakage happens when partner terms are not followed. Monitors adherence and exposes exceptions.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Flags transactions violating territory or pricing.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Aggregates exceptions by partner and region.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Supports partner conversations with clear evidence.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm grid grid-cols-3 gap-2">
                   <div className="text-center">
                      <div className="text-[8px] uppercase font-bold text-slate-400">Compliance</div>
                      <div className="text-lg font-bold text-red-600">62%</div>
                   </div>
                   <div className="text-center border-x border-slate-100 px-2">
                      <div className="text-[8px] uppercase font-bold text-slate-400">Top Violation</div>
                      <div className="text-[10px] font-bold">Territory Shift</div>
                   </div>
                   <div className="text-center">
                      <div className="text-[8px] uppercase font-bold text-slate-400">At-Risk</div>
                      <div className="text-[10px] font-bold">Global Dist.</div>
                   </div>
                </div>
             </div>

             {/* B2B Function 8 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 8: Revenue readiness</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Close gets painful when teams cannot show the "why". Keeps revenue decisions traceable.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Captures a clear trail of changes and approvals.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Resolves mismatches earlier instead of at close.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Provides audit-ready summaries without spreadsheets.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-3 shadow-sm space-y-2">
                   {[
                     { label: "Detected", icon: Search },
                     { label: "Reviewed", icon: User },
                     { label: "Approved", icon: ShieldCheck }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[9px]">
                         <item.icon className="w-3 h-3 text-primary" />
                         <span className="font-bold">{item.label}</span>
                         <span className="text-slate-400">02/12/25 - Ref #292</span>
                      </div>
                   ))}
                </div>
             </div>
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
