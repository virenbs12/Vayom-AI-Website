import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import leakageMap from "@assets/generated_images/b2c_revenue_leakage_map_diagram.png";
import { ArrowRight, Check, Database, FileText, Rss, FileCheck, ShieldCheck, AlertCircle, Search, User, Zap, BarChart, Layers, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
             <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold mb-4 text-center text-sm uppercase text-muted-foreground">Leakage Map</h3>
                <img src={leakageMap} alt="Leakage Map" className="w-full h-auto rounded-lg" />
             </div>

             <div className="space-y-6">
                {/* B2C Function 1 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-3">Function 1: Promo and discount integrity</h3>
                  <p className="text-muted-foreground mb-4">
                    Promo stacking and policy drift quietly push margin down. This workflow shows where discounts exceed policy, where promo codes are abused, and where channel pricing breaks consistency.
                  </p>
                  <ul className="space-y-2 text-sm mb-6">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Surfaces orders where applied discounts do not align to current rules.</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Groups repeat patterns by code, customer segment, and channel.</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs a clean list ready for merchandising or finance review.</li>
                  </ul>
                  <div className="bg-white border border-border rounded-lg p-4 shadow-sm text-sm">
                    <div className="flex justify-between items-center mb-4 border-b pb-2">
                      <span className="font-bold">Promo Audit</span>
                      <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded uppercase font-semibold">Policy Reference</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2 font-semibold text-[10px] text-muted-foreground mb-2">
                      <div>Order ID</div>
                      <div>Code</div>
                      <div>Expected</div>
                      <div>Applied</div>
                      <div>Variance</div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 py-1 items-center text-[11px]">
                      <div className="font-mono text-slate-700">#9921</div>
                      <div><span className="bg-slate-100 px-1 rounded">WINTER25</span></div>
                      <div>15%</div>
                      <div className="text-red-600 font-bold">25%</div>
                      <div className="text-red-600 font-bold">+10%</div>
                    </div>
                  </div>
                </div>

                {/* B2C Function 2 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-border">
                   <h3 className="text-xl font-bold mb-3">Function 2: Duplicate charges and duplicate refunds</h3>
                   <p className="text-muted-foreground mb-4">
                     High volume payment retries, gateway timeouts, and repeat submissions can create duplicate charges or duplicate refunds.
                   </p>
                   <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-3 border border-border rounded-lg text-[10px]">
                        <div className="font-bold mb-1 border-b pb-1">Original Transaction</div>
                        <div>ID: TXN_881</div>
                        <div>Amount: $49.00</div>
                        <div>Time: 10:45:01</div>
                      </div>
                      <div className="bg-white p-3 border border-red-200 rounded-lg text-[10px] relative">
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5"><AlertCircle className="w-3 h-3" /></div>
                        <div className="font-bold mb-1 border-b pb-1">Potential Duplicate</div>
                        <div>ID: TXN_882</div>
                        <div>Amount: $49.00</div>
                        <div>Time: 10:45:03</div>
                      </div>
                   </div>
                   <div className="mt-3 text-center text-[10px] font-bold text-red-600 bg-red-50 py-1 rounded">
                     MATCH: Same customer / same amount / close timestamp
                   </div>
                </div>

                {/* B2C Function 3 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-border">
                   <h3 className="text-xl font-bold mb-3">Function 3: Returns and refund accuracy</h3>
                   <p className="text-muted-foreground mb-4">
                     Returns are where margin disappears if policies are inconsistent. This workflow highlights repeat refunds and out-of-policy approvals.
                   </p>
                   <div className="space-y-2">
                      {[
                        { label: "Wrong Size", amount: "$12,400", rate: "12%" },
                        { label: "Damaged", amount: "$8,200", rate: "8%" },
                        { label: "Changed Mind", amount: "$5,100", rate: "5%" }
                      ].map((bar, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between text-[10px] font-medium">
                            <span>{bar.label}</span>
                            <span>{bar.amount} ({bar.rate})</span>
                          </div>
                          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: bar.rate }} />
                          </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Stop sending cash out the door across contracts, pricing, and billing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              In B2B, cash walks out the door when contract terms live in PDFs, pricing lives in spreadsheets, and invoices live in ERP. Vayom AI brings them together.
            </p>
          </div>
          
          <div className="mb-16 bg-white p-8 rounded-2xl border border-border shadow-sm">
             <h3 className="font-semibold mb-8 text-center text-sm uppercase text-muted-foreground">Deal-to-Cash Timeline</h3>
             <div className="flex justify-between items-center max-w-4xl mx-auto relative">
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
                    <div className="mt-2 text-sm font-bold">{step.label}</div>
                    {step.sub && <div className="mt-1 text-[10px] text-red-500 font-medium whitespace-nowrap bg-red-50 px-2 py-0.5 rounded">{step.sub}</div>}
                  </div>
                ))}
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-slate-50 p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Function 1: Contract-to-invoice compliance</h3>
                <div className="grid grid-cols-3 gap-3 text-[10px] h-48">
                   <div className="bg-white p-3 border border-border rounded-lg overflow-hidden">
                      <div className="font-bold border-b mb-2 pb-1 text-slate-400">CONTRACT TERM</div>
                      <div className="italic text-slate-500">"...per-seat rate shall increase to $45.00 USD effective Jan 1..."</div>
                   </div>
                   <div className="bg-white p-3 border border-border rounded-lg">
                      <div className="font-bold border-b mb-2 pb-1 text-slate-400">ERP INVOICE</div>
                      <div>Item: License</div>
                      <div>Rate: <span className="text-red-600 font-bold">$29.00</span></div>
                   </div>
                   <div className="bg-white p-3 border border-primary/20 bg-primary/5 rounded-lg">
                      <div className="font-bold border-b mb-2 pb-1 text-primary">VARIANCE</div>
                      <div className="text-primary font-bold mb-1">-$16.00 Variance</div>
                      <Button size="sm" variant="outline" className="h-6 text-[8px] w-full mt-2">Copy Evidence Link</Button>
                   </div>
                </div>
             </div>

             <div className="bg-slate-50 p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-4">Function 2: Discount governance</h3>
                <div className="bg-white p-6 border border-border rounded-lg shadow-sm">
                   <div className="flex justify-between mb-4">
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase font-bold">Deal Review</div>
                        <div className="font-bold">Global Systems Inc</div>
                      </div>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-[10px]">Flagged: Policy Deviation</Badge>
                   </div>
                   <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-slate-50 p-2 rounded">
                         <div className="text-[9px] text-muted-foreground uppercase">Requested</div>
                         <div className="font-bold text-red-600">35%</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded">
                         <div className="text-[9px] text-muted-foreground uppercase">Policy Max</div>
                         <div className="font-bold">20%</div>
                      </div>
                      <div className="bg-slate-50 p-2 rounded">
                         <div className="text-[9px] text-muted-foreground uppercase">Margin Impact</div>
                         <div className="font-bold">-$12.4k</div>
                      </div>
                   </div>
                   <div className="mt-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-[10px] font-medium text-amber-800">Repeat behavior for this rep (3rd occurrence)</span>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* RIAA Section */}
        <section id="riaa" className="scroll-mt-40 border-t border-border pt-20">
          <div className="mb-12">
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Platform: RIAA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Revenue Intelligence Agentic Atlas</h2>
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

          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold mb-8">Provenance-first outputs</h3>
            <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                     <div className="bg-slate-50 p-4 rounded-lg border border-border">
                        <div className="font-bold text-sm mb-2">Answer Summary</div>
                        <p className="text-sm text-muted-foreground">"Acme Corp is billed on the 2023 legacy rate. Active contract specified an increase to $45.00 effective Jan 1."</p>
                        <div className="flex gap-2 mt-4">
                           <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex gap-1 items-center"><Database className="w-3 h-3" /> ERP Record</Badge>
                           <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 flex gap-1 items-center"><FileText className="w-3 h-3" /> Contract Excerpt</Badge>
                        </div>
                     </div>
                  </div>
                  <div className="md:w-64 space-y-3">
                     <div className="text-xs text-muted-foreground uppercase font-bold">Owner</div>
                     <div className="flex items-center gap-2 text-sm font-semibold"><div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px]"><User className="w-3 h-3" /></div> Finance Manager</div>
                     <div className="text-xs text-muted-foreground uppercase font-bold pt-2">Next Step</div>
                     <Badge className="bg-primary text-white">Approve: Bill Correction</Badge>
                  </div>
               </div>
            </div>
          </div>

          <div>
             <h3 className="text-2xl font-display font-bold mb-8">Rapid deployment and continuous optimization</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { time: "~3 Days", title: "Structured data onboarding", sub: "Integrate a new structured source quickly." },
                  { time: "~10 mins", title: "Document ingestion", sub: "Bring in new documents and updates rapidly." },
                  { time: "~10 Days", title: "RIAA training", sub: "Tune RIAA to perform reliably on added sources." },
                  { time: "~10 Days", title: "Agent build", sub: "Develop and train specialized agents for the workflow." },
                  { time: "~6 Hours", title: "New user training", sub: "Get teams productive quickly with guided onboarding." },
                  { time: "~5–10 Days", title: "External integration", sub: "Connect to platforms like Agentforce and Azure Copilot." },
                  { time: "~5 Days", title: "New entity onboarding", sub: "Add new entities and naming patterns for matching." },
                  { time: "~5–10 Days", title: "Refinement cycles", sub: "Regular improvement cycles to tighten outcomes." }
                ].map((card, i) => (
                  <div key={i} className="p-4 bg-white border border-border rounded-xl shadow-sm text-center">
                    <div className="text-2xl font-display font-bold text-primary mb-1">{card.time}</div>
                    <div className="text-xs font-bold mb-2 uppercase tracking-tight">{card.title}</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{card.sub}</div>
                  </div>
                ))}
             </div>
             <p className="mt-6 text-[10px] text-muted-foreground italic">All timeframes refer to business days. Rapid Deployment & Continuous Optimization.</p>
          </div>
        </section>

        {/* Business Functions Section */}
        <section id="business-functions" className="scroll-mt-40 border-t border-border pt-20 pb-20">
           <div className="mb-12">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Business Functions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Unified truth for every leader</h2>
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
