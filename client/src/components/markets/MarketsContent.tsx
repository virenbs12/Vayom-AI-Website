import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import leakageMap from "@assets/generated_images/b2c_revenue_leakage_map_diagram.png";
import { 
  ArrowRight, 
  Check, 
  Database, 
  FileText, 
  AlertCircle, 
  Search, 
  User, 
  Ship, 
  CreditCard, 
  Headphones, 
  Repeat, 
  RotateCcw, 
  TrendingDown, 
  ClipboardCheck, 
  History, 
  ShieldCheck, 
  Users, 
  Link as LinkIcon, 
  Network, 
  Briefcase, 
  BarChart3, 
  Fingerprint, 
  Lock, 
  Zap,
  Layers,
  Clock,
  LayoutGrid,
  CheckCircle2,
  Calendar,
  Briefcase as BriefcaseIcon,
  Globe,
  Truck,
  RefreshCcw,
  MessageSquare,
  BarChart,
  ListFilter,
  Target
} from "lucide-react";
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
             {/* B2C Function 1 */}
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

             {/* B2C Function 2 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 2: Duplicate charges and duplicate refunds</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  High volume payment retries, gateway timeouts, and repeat submissions can create duplicate charges or duplicate refunds.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies potential duplicates across payment processors and order systems.</li>
                  <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Ties each flagged item to the original order, payment event, and refund transaction.</li>
                  <li className="flex gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Reduces customer frustration by routing only high-confidence exceptions to review.</li>
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

             {/* B2C Function 3 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 3: Returns and refund accuracy</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Returns are where margin disappears if reasons, policies, and outcomes are inconsistent. This workflow highlights repeat refunds and out-of-policy approvals.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Summarizes return reasons and outcomes with clear evidence for each case.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights outliers by product, warehouse, carrier, and customer segment.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Flags cases for repeat behavior, process gaps, or policy misalignment.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Reason-to-Cost Dashboard</div>
                   <div className="space-y-3">
                      {[
                        { reason: "Sizing", amount: "$42k", rate: "14%", color: "bg-primary" },
                        { reason: "Defective", amount: "$12k", rate: "4%", color: "bg-amber-500" },
                        { reason: "Not as Described", amount: "$8k", rate: "2%", color: "bg-slate-400" }
                      ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="flex justify-between text-[10px] mb-1">
                              <span className="font-bold">{item.reason}</span>
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

             {/* B2C Function 4 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 4: Shipping cost and fulfillment leakage</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Shipping overcharges and fulfillment mismatches quietly drain cash. This workflow compares expected vs actual shipping costs.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Finds shipments where carrier charges exceed expected rates by zone and weight.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights split shipments and service level errors tied to refund impact.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs an action list for logistics teams: dispute or renegotiate.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
                   <div className="p-3 bg-slate-50 border-b flex justify-between items-center">
                      <div className="text-[9px] font-bold">Carrier Reconciliation</div>
                      <div className="flex gap-2">
                         <Badge variant="outline" className="text-[7px] h-4">FedEx</Badge>
                         <Badge variant="outline" className="text-[7px] h-4">Zone 5</Badge>
                      </div>
                   </div>
                   <div className="p-3">
                      <table className="w-full text-[9px]">
                         <thead>
                            <tr className="text-left text-slate-400">
                               <th className="pb-2">Expected</th>
                               <th className="pb-2">Actual</th>
                               <th className="pb-2">Variance</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr className="border-t border-slate-50">
                               <td className="py-2">$8.40</td>
                               <td className="py-2 font-bold text-red-600">$12.50</td>
                               <td className="py-2 font-bold text-red-600">+$4.10</td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </div>
             </div>

             {/* B2C Function 5 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 5: Subscription billing hygiene</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Subscription businesses leak cash through failed renewals and billing noise that reduces retained revenue.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies failed renewals, repeated charge attempts, and duplicate credits.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Groups issues by plan and cohort to fix the biggest drivers first.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Creates prioritized "recover now" and "prevent next cycle" lists.</li>
                </ul>
                <div className="grid grid-cols-3 gap-2">
                   {[
                     { label: "Failed Renewals", count: "142", color: "text-red-600" },
                     { label: "Duplicate Retries", count: "28", color: "text-amber-600" },
                     { label: "Credit Issues", count: "14", color: "text-primary" }
                   ].map((card, i) => (
                     <div key={i} className="bg-white p-3 rounded-xl border border-border shadow-sm text-center cursor-pointer hover:border-primary transition-colors">
                        <div className="text-[8px] font-bold text-slate-400 uppercase mb-1">{card.label}</div>
                        <div className={cn("text-sm font-bold", card.color)}>{card.count}</div>
                        <div className="text-[7px] mt-1 text-primary">View Evidence →</div>
                     </div>
                   ))}
                </div>
             </div>

             {/* B2C Function 6 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2C Function 6: Customer service impact mapping</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Support tickets and complaints are early indicators of future refunds and churn. This workflow connects signals to revenue impact.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Links complaint themes to downstream outcomes like refunds and chargebacks.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights accounts and products with rising service friction.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Produces weekly "top drivers" summary with interaction drill-down.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Service-to-impact Mapping</div>
                   <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                         <div className="p-2 bg-slate-50 rounded border border-slate-100 text-[9px] font-bold">"Late Delivery"</div>
                         <div className="p-2 bg-slate-50 rounded border border-slate-100 text-[9px] font-bold">"Wrong Item"</div>
                      </div>
                      <div className="text-slate-300"><ArrowRight className="w-4 h-4" /></div>
                      <div className="flex-1 space-y-2">
                         <div className="p-2 bg-red-50 rounded border border-red-100 text-[9px] font-bold text-red-600">82 Refunds</div>
                         <div className="p-2 bg-amber-50 rounded border border-amber-100 text-[9px] font-bold text-amber-600">14 Cancellations</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* B2C Function 7 */}
             <div className="lg:col-span-2 bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <span className="text-[10px] font-bold uppercase text-primary mb-2">B2C workflows (overview)</span>
                <h3 className="text-xl font-bold mb-4">Customer Service Data Signals</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Turn support conversations into early-warning signals for churn, refunds, and reputation.
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Traditional reporting tracks handle time and SLAs, but misses what customers actually experienced. This converts calls, tickets, and chats into structured signals that downstream teams can act on.
                </p>
                
                <div className="mb-6">
                   <div className="text-[11px] font-bold text-slate-600 mb-4">What Vayom AI flags:</div>
                   <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-border">
                         <h4 className="font-bold text-sm mb-2">Experience risk signals</h4>
                         <p className="text-[11px] text-muted-foreground">from transcripts and text artifacts across channels (voice, tickets, messaging, chatbots).</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-border">
                         <h4 className="font-bold text-sm mb-2">Consistency, not anecdotes</h4>
                         <p className="text-[11px] text-muted-foreground">a fixed set of metrics per interaction, including agent tactics tied to outcomes.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-border">
                         <h4 className="font-bold text-sm mb-2">Actionable patterns</h4>
                         <p className="text-[11px] text-muted-foreground">like confusion, escalation intent, empathy, clarity, and de-escalation signals.</p>
                      </div>
                   </div>
                </div>

                <div>
                   <div className="text-[11px] font-bold text-slate-600 mb-4">What teams do next:</div>
                   <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-border">
                         <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <ListFilter className="w-4 h-4 text-primary" />
                         </div>
                         <h4 className="font-bold text-sm mb-2">Prioritize fixes</h4>
                         <p className="text-[11px] text-muted-foreground">by theme, product, policy, or segment using the structured interaction signals.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-border">
                         <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <Users className="w-4 h-4 text-primary" />
                         </div>
                         <h4 className="font-bold text-sm mb-2">Route at-risk customers</h4>
                         <p className="text-[11px] text-muted-foreground">and high-friction issues to the right owner before they cascade.</p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-border">
                         <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                            <Target className="w-4 h-4 text-primary" />
                         </div>
                         <h4 className="font-bold text-sm mb-2">Coach and standardize</h4>
                         <p className="text-[11px] text-muted-foreground">service motion using tactic effectiveness outcomes (what worked, what did not).</p>
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

             {/* B2B Function 3 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 3: Transaction deduplication (B2B)</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Duplicate invoices, duplicate credits, and repeated payments are direct cash leakage. This workflow detects duplicates across AR activity and stops cash from leaving twice.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Detects potential duplicates across invoices, credit memos, payments, even without perfect reference matches.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Groups duplicates into a single review bundle with supporting record links.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Reduces write-offs by catching issues before they cascade into disputes.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm relative group overflow-hidden">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="text-[10px] font-bold uppercase text-slate-400">Duplicate Cluster: CL-902</h4>
                      <Button size="sm" className="h-6 text-[8px] rounded-full">Mark as Duplicate</Button>
                   </div>
                   <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100 text-[9px]">
                         <span className="font-bold">Invoice #8821</span>
                         <span>$14,200.00</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-100 text-[9px] translate-x-1">
                         <span className="font-bold">Invoice #8821-B</span>
                         <span>$14,200.00</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-100 text-[9px] translate-x-2">
                         <span className="font-bold text-red-600">Credit Memo #CM-92</span>
                         <span className="text-red-600">($14,200.00)</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* B2B Function 4 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 4: Transaction validation (B2B)</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Validation prevents incorrect billing before it becomes customer friction. This workflow checks invoice lines against contracted price lists, discount rules, and effective dates.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Validates price, discount, and fee logic against the active agreement.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights exceptions with specific contract reference and failed fields.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs an "Approve / Flag / Resolve" queue for quick resolution.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl overflow-hidden text-[9px]">
                   <table className="w-full">
                      <thead className="bg-slate-50 border-b">
                         <tr className="text-left">
                            <th className="p-2 font-bold text-slate-400 uppercase text-[8px]">Account</th>
                            <th className="p-2 font-bold text-slate-400 uppercase text-[8px]">Rule Violated</th>
                            <th className="p-2 font-bold text-slate-400 uppercase text-[8px]">Status</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                         <tr className="hover:bg-slate-50 cursor-pointer">
                            <td className="p-2 font-bold">Global Ltd</td>
                            <td className="p-2 text-red-600">Mismatched Tier Price</td>
                            <td className="p-2"><Badge className="h-4 text-[7px] bg-amber-100 text-amber-700">Flagged</Badge></td>
                         </tr>
                      </tbody>
                   </table>
                   <div className="p-2 flex gap-1 border-t border-slate-100">
                      <Button variant="ghost" className="h-5 text-[8px] p-1 px-2">View Rule</Button>
                      <Button variant="ghost" className="h-5 text-[8px] p-1 px-2">View Evidence</Button>
                   </div>
                </div>
             </div>

             {/* B2B Function 5 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 5: Rebates, incentives, and deductions control</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Rebate claims and deductions can quietly drain cash when eligibility and documentation are inconsistent. This workflow ties claims to contract terms and records.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies unsupported claims or those exceeding eligibility.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights deduction patterns increasing for specific accounts or product lines.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Provides a clean package for recovery: what is valid, what is not, and why.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl flex h-40 overflow-hidden shadow-sm">
                   <div className="w-1/3 bg-slate-900 text-white p-3 text-[8px]">
                      <div className="font-bold mb-2 uppercase text-slate-400">Program Summary</div>
                      <div className="space-y-1">
                         <div className="flex justify-between"><span>Annual Cap</span><span>$50k</span></div>
                         <div className="flex justify-between"><span>Base Rate</span><span>3.5%</span></div>
                      </div>
                   </div>
                   <div className="flex-1 p-3 text-[8px] flex flex-col">
                      <div className="font-bold mb-2 uppercase text-slate-400">Claim Lines</div>
                      <div className="space-y-1 flex-1">
                         <div className="flex justify-between border-b pb-1"><span>Line 102</span><span className="font-bold">$12,400</span></div>
                         <div className="text-red-500 font-bold mt-2">Missing Docs:</div>
                         <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 border border-red-500 rounded-sm" /> Proof of Delivery</div>
                         <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 border border-red-500 rounded-sm" /> Inventory Report</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* B2B Function 6 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 6: Payment terms and cash collection leakage</h3>
                <p className="text-sm text-muted-foreground mb-6">
                   Late payments and missed early-pay discounts create cash flow drag. This workflow surfaces patterns early and ties them back to accounts and terms.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Identifies incorrectly taken early-pay discounts and worsening late-pay behavior.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Highlights accounts with frequent short-pays or recurring deductions.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs a prioritized AR follow-up list with supporting evidence.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                   <div className="flex justify-between items-center mb-4">
                      <h4 className="text-[10px] font-bold">Acme Corp Timeline</h4>
                      <Badge className="bg-red-100 text-red-700 h-4 text-[7px]">Late (Avg 12d)</Badge>
                   </div>
                   <div className="flex justify-between items-center relative py-4">
                      <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2" />
                      {[
                        { label: "Inv. Date", date: "Jan 01", active: true },
                        { label: "Due Date", date: "Jan 30", active: true },
                        { label: "Pmt. Date", date: "Feb 11", active: true, late: true }
                      ].map((p, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center">
                           <div className={cn("w-2 h-2 rounded-full", p.late ? "bg-red-500" : "bg-primary")} />
                           <div className="mt-2 text-[8px] font-bold">{p.label}</div>
                           <div className="text-[7px] text-slate-400">{p.date}</div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* B2B Function 7 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 7: Channel partner compliance</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Channel leakage happens when partner terms, pricing, and territory rules are not followed. This workflow monitors adherence and exposes exceptions.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Flags transactions violating channel pricing, territory, or agreement terms.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Aggregates exceptions by partner and region to spot systematic drift.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Supports partner conversations with shareable, evidence-backed reviews.</li>
                </ul>
                <div className="grid grid-cols-3 gap-2">
                   <div className="bg-white p-3 rounded-xl border border-border text-center shadow-sm">
                      <div className="text-[7px] font-bold text-slate-400 uppercase mb-1">Compliance</div>
                      <div className="text-sm font-bold text-green-600">92%</div>
                   </div>
                   <div className="bg-white p-3 rounded-xl border border-border text-center shadow-sm">
                      <div className="text-[7px] font-bold text-slate-400 uppercase mb-1">Top Violation</div>
                      <div className="text-sm font-bold text-red-600">Pricing</div>
                   </div>
                   <div className="bg-white p-3 rounded-xl border border-border text-center shadow-sm">
                      <div className="text-[7px] font-bold text-slate-400 uppercase mb-1">At-Risk Partners</div>
                      <div className="text-sm font-bold">14</div>
                   </div>
                </div>
             </div>

             {/* B2B Function 8 */}
             <div className="bg-slate-50 p-8 rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-4">B2B Function 8: Revenue readiness and audit trail</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Close gets painful when teams cannot show the "why" behind numbers. This workflow keeps revenue-relevant decisions traceable and review-ready.
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Captures trail of what changed, who reviewed it, and supporting records.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Helps resolve mismatches early instead of during high-pressure close cycles.</li>
                  <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary shrink-0" /> Provides audit-ready summaries without spreadsheet back-and-forth.</li>
                </ul>
                <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
                   <div className="text-[9px] font-bold text-slate-400 uppercase mb-4">Evidence Timeline</div>
                   <div className="space-y-4">
                      {[
                        { label: "Detected", sub: "RIAA Scan: Pricing Mismatch", icon: Search },
                        { label: "Reviewed", sub: "Finance Mgr: Confirmed deviation", icon: User },
                        { label: "Approved", sub: "Controller: Validated resolution", icon: CheckCircle2 }
                      ].map((ev, i) => (
                        <div key={i} className="flex gap-3 items-center">
                           <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                              <ev.icon className="w-3 h-3 text-primary" />
                           </div>
                           <div>
                              <div className="text-[9px] font-bold">{ev.label}</div>
                              <div className="text-[8px] text-slate-500">{ev.sub}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* RIAA Section */}
        <section id="riaa" className="scroll-mt-40 border-t border-border pt-20">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Solutions Page: RIAA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6 text-foreground">RIAA: Revenue Intelligence Agentic Atlas (the core solution)</h2>
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

          {/* Out of the Box Integrations */}
          <div className="mb-24">
            <h3 className="text-2xl font-display font-bold mb-4">Out of the Box Integrations</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl">Pre-built connectors for the systems your teams already use. No rip-and-replace required.</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {[
                "Salesforce", "MySQL", "PostgreSQL", "MongoDB", "Databricks", "Snowflake",
                "Azure Blob Storage", "Amazon S3", "SAP", "Trino", "Microsoft Dynamics 365", "Microsoft 365",
                "Slack", "Jira", "Azure DevOps", "Tally", "Zoho CRM", "Facebook Ads",
                "Google Ads", "Shopify", "FreshDesk", "ZenDesk", "Zoom", "HubSpot"
              ].map((system, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900 text-white px-3 py-4 rounded-xl text-center text-xs font-medium hover:bg-slate-800 transition-colors cursor-default border border-slate-700"
                >
                  {system}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 text-center">
              Additional connectors available on request. Custom integrations supported.
            </p>
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
                 { time: "~5–10 Days", title: "Quarterly refinement cycles", desc: "Regular improvement cycles to tighten outcomes." }
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-border group hover:border-primary transition-colors">
                    <div className="text-xs font-bold text-primary mb-2 flex items-center gap-2"><Clock className="w-3 h-3" /> {item.time}</div>
                    <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Business Functions Preview */}
        <section id="business-functions" className="scroll-mt-40 border-t border-border pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold">One truth across teams, with proof attached</h2>
              <p className="text-lg text-muted-foreground">
                Revenue Intelligence is not just for Finance. RIAA unifies the evidence layer across the entire business, so every function moves from question to action with the same trusted foundation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Finance", desc: "Close-ready answers" },
                  { label: "RevOps", desc: "Governance at scale" },
                  { label: "Sales", desc: "Account-level truth" },
                  { label: "Leadership", desc: "Clear impact view" }
                ].map((f, i) => (
                  <div key={i} className="p-4 bg-white border border-border rounded-xl">
                    <div className="font-bold text-sm">{f.label}</div>
                    <div className="text-xs text-muted-foreground">{f.desc}</div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full px-8" onClick={() => window.location.href='/business-functions'}>
                Explore Business Functions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="bg-slate-50 border border-border rounded-3xl p-8 relative overflow-hidden">
               <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
               <div className="relative space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-border flex gap-4 items-center animate-in slide-in-from-left-4 duration-500">
                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Users className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Cross-team Signal</div>
                        <div className="text-xs font-bold">Pricing drift detected in Region B</div>
                     </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-border flex gap-4 items-center translate-x-8 animate-in slide-in-from-left-8 duration-700">
                     <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600"><ClipboardCheck className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Evidence Check</div>
                        <div className="text-xs font-bold">Contract #992 vs NetSuite Invoice</div>
                     </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg border border-border flex gap-4 items-center translate-x-4 animate-in slide-in-from-left-6 duration-1000">
                     <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600"><CheckCircle2 className="w-5 h-5" /></div>
                     <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Actioned</div>
                        <div className="text-xs font-bold">$42k leakage prevented this cycle</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
