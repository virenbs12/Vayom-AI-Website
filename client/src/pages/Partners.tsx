import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Database, 
  FileText, 
  Zap, 
  ShieldCheck, 
  Users, 
  Settings, 
  ChevronRight,
  LayoutDashboard,
  Search,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PartnerApplicationModal } from "@/components/partners/PartnerApplicationModal";

export default function Partners() {
  const [activeTab, setActiveTab] = React.useState("advisory");
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 border-b border-border bg-white">
          <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] text-primary">
                Deliver verified revenue workflows without starting from scratch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Bring your clients evidence-linked answers across ERP, CRM, contracts, and feeds, then turn those outputs into clear actions and outcomes.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full px-8 text-lg h-12" onClick={() => setIsApplyModalOpen(true)}>
                  Apply to Partner
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 text-lg h-12 border-2" 
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/VayomAI@vayomai.com/bookings/', '_blank')}
                >
                  Book a Partner Briefing
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                SaaS or VPC deployment. Start with one scoped workflow and expand once trust is established.
              </p>
            </motion.div>

            {/* Partner Delivery Flow Visual */}
            <div className="relative p-8 bg-slate-50 rounded-3xl border border-border shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Connect sources", sub: "ERP, CRM, PDF", icon: Database },
                  { title: "Configure workflow", sub: "RIAA Intelligence", icon: Settings },
                  { title: "Evidence-linked outputs", sub: "Verified Answers", icon: LayoutDashboard, chips: true },
                  { title: "Client actions", sub: "Resolution & ROI", icon: CheckCircle },
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.sub}</div>
                    
                    {item.chips && (
                      <div className="mt-4 flex gap-1 flex-wrap">
                        <Badge variant="outline" className="text-[8px] bg-blue-50/50 text-blue-700 border-blue-100">Record</Badge>
                        <Badge variant="outline" className="text-[8px] bg-purple-50/50 text-purple-700 border-purple-100">Excerpt</Badge>
                        <Badge variant="outline" className="text-[8px] bg-amber-50/50 text-amber-700 border-amber-100">Feed</Badge>
                      </div>
                    )}
                    
                    {i < 3 && i % 2 === 0 && (
                      <ArrowRight className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 text-slate-300 hidden lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Jump Bar */}
        <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur border-b border-border shadow-sm overflow-x-auto">
          <div className="container-width flex gap-2 py-3">
            {[
              { id: "why", label: "Why Partner" },
              { id: "types", label: "Partner Types" },
              { id: "deliver", label: "What You Deliver" },
              { id: "enablement", label: "Enablement" },
              { id: "security", label: "Security" },
              { id: "model", label: "Commercial Model" },
              { id: "apply", label: "Apply" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Why Partner Section */}
        <section id="why" className="py-24 container-width scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold">Faster delivery. Cleaner proof. Better outcomes.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Partners win when delivery is repeatable and results are provable. Vayom AI helps you deliver cross-functional revenue workflows that connect systems and documents, so clients spend less time reconciling and more time resolving.
                </p>
              </div>
              
              <div className="grid gap-6">
                {[
                  { title: "Accelerate time-to-value", desc: "Start from proven workflow patterns instead of building custom logic for every engagement." },
                  { title: "Evidence-first outputs", desc: "Every result is backed by clickable sources so clients can review, approve, and act quickly." },
                  { title: "Flexible deployment", desc: "Offer SaaS for speed or VPC for tighter control requirements, without changing the workflow experience." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Issue List Mock UI */}
            <div className="bg-white rounded-2xl border border-border shadow-xl overflow-hidden">
              <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Partner Delivery Queue</span>
                <Badge variant="outline" className="bg-white">Active Engagement</Badge>
              </div>
              <div className="p-6">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-left text-slate-400 border-b">
                      <th className="pb-3 font-semibold">Issue</th>
                      <th className="pb-3 font-semibold">Evidence</th>
                      <th className="pb-3 font-semibold">Owner</th>
                      <th className="pb-3 font-semibold">Next Step</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y border-b">
                    <tr>
                      <td className="py-4 font-bold">Price Drift: Global Inc</td>
                      <td className="py-4">
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-[8px] h-4">ERP</Badge>
                          <Badge variant="outline" className="text-[8px] h-4">PDF</Badge>
                        </div>
                      </td>
                      <td className="py-4 text-slate-500">Sales Ops</td>
                      <td className="py-4 text-primary font-medium">Review Excerpt</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-bold">Promo Stacking: Q4</td>
                      <td className="py-4">
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-[8px] h-4">FEED</Badge>
                          <Badge variant="outline" className="text-[8px] h-4">ERP</Badge>
                        </div>
                      </td>
                      <td className="py-4 text-slate-500">Finance</td>
                      <td className="py-4 text-primary font-medium">Verify Stack</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types Tabs */}
        <section id="types" className="py-24 bg-white border-y border-border scroll-mt-32">
          <div className="container-width space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl font-display font-bold">Built for the way you deliver</h2>
              <p className="text-lg text-muted-foreground">Choose your partner model to see how Vayom AI fits your delivery motion.</p>
            </div>

            <Tabs defaultValue="advisory" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12">
                <TabsList className="bg-slate-100 p-1 rounded-full h-12">
                  <TabsTrigger value="advisory" className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:shadow-sm">Advisory & Consulting</TabsTrigger>
                  <TabsTrigger value="si" className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:shadow-sm">System Integrators</TabsTrigger>
                  <TabsTrigger value="bpo" className="rounded-full px-8 h-10 data-[state=active]:bg-white data-[state=active]:shadow-sm">BPO & Managed Services</TabsTrigger>
                </TabsList>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[500px]">
                <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                  <TabsContent value="advisory" className="m-0 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-display font-bold">Lead strategy with proof your clients can act on</h3>
                      <p className="text-lg text-muted-foreground">
                        Use Vayom AI to move from assessments to operational improvements quickly. Bring systems and contracts into one evidence-linked view, then guide prioritization and governance with a clean trail of proof.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Where it fits best</h4>
                        <ul className="grid gap-3 text-sm">
                          <li className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Revenue diagnostic and leakage discovery that produces a prioritized action plan with supporting evidence.</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Pricing and discount governance programs that reduce exceptions and improve consistency.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Partner deliverables</h4>
                        <ul className="grid gap-2 text-sm">
                          <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> Executive-ready summary tied to source-backed findings.</li>
                          <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> A prioritized resolution queue with owners and timelines.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="si" className="m-0 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-display font-bold">Implement once. Reuse across clients.</h3>
                      <p className="text-lg text-muted-foreground">
                        Use Vayom AI to connect client sources, configure the first workflow, and deliver review-ready outputs quickly. Keep delivery clean with consistent patterns, and expand scope as adoption grows.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Where it fits best</h4>
                        <ul className="grid gap-3 text-sm">
                          <li className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>ERP/CRM integrations with contract repositories and recurring feeds, delivered as a packaged workflow.</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Billing and contract alignment checks that reduce downstream disputes and write-offs.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Partner deliverables</h4>
                        <ul className="grid gap-2 text-sm">
                          <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> Working workflow with a validated output pack.</li>
                          <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> Role-based access setup and a clean operating handover.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="bpo" className="m-0 space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-display font-bold">Run revenue operations with consistent, provable outputs</h3>
                      <p className="text-lg text-muted-foreground">
                        Use Vayom AI as the operating layer for managed workflows. Standardize how checks are performed, how exceptions are reviewed, and how outcomes are documented.
                      </p>
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Where it fits best</h4>
                        <ul className="grid gap-3 text-sm">
                          <li className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Ongoing monitoring for billing accuracy, pricing drift, and deductions readiness.</span>
                          </li>
                          <li className="flex gap-3">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Exception management with clear review and resolution steps.</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Partner deliverables</h4>
                        <ul className="grid gap-2 text-sm">
                          <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> A managed queue with SLAs, owners, and evidence links.</li>
                          <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary" /> Trend summaries that show what improved and what is recurring.</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </div>

                {/* Tab Visual Panels */}
                <div className="bg-[#FAF5EF] rounded-3xl p-8 border border-border h-full flex items-center justify-center min-h-[400px]">
                  <TabsContent value="advisory" className="w-full m-0 animate-in zoom-in-95 duration-500">
                    <div className="bg-white rounded-2xl shadow-xl border border-border p-6 space-y-6">
                      <div className="flex justify-between items-start border-b pb-4">
                        <div>
                          <h4 className="font-bold text-lg">Q4 Revenue Diagnostic</h4>
                          <p className="text-xs text-muted-foreground">Prepared for: Global Enterprise Corp</p>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-none">94% Accuracy</Badge>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-slate-50 rounded-lg border border-border">
                          <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Top Drivers of Leakage</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-xs">
                              <span>Promo Stacking</span>
                              <span className="font-bold">$42k impact</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span>Legacy Pricing Drift</span>
                              <span className="font-bold">$128k impact</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-[10px] font-bold text-slate-400 uppercase">Evidence Links</div>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-[8px]"><FileText className="w-3 h-3 mr-1" /> Contract Pg 12</Badge>
                            <Badge variant="outline" className="text-[8px]"><Database className="w-3 h-3 mr-1" /> ERP Record</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="si" className="w-full m-0 animate-in zoom-in-95 duration-500">
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-border shadow-sm text-center">
                          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Connected Sources</div>
                          <div className="flex justify-center gap-2">
                             <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center"><Database className="w-4 h-4" /></div>
                             <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center"><Zap className="w-4 h-4" /></div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-border shadow-sm text-center">
                          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Outputs</div>
                          <div className="flex justify-center gap-2">
                             <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center"><LayoutDashboard className="w-4 h-4 text-primary" /></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-xl border border-border flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="text-sm font-bold">Workflow Deployment</div>
                          <div className="text-xs text-muted-foreground">Cross-Region Billing Audit</div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-slate-900 text-white border-none">SaaS</Badge>
                          <Badge variant="outline">VPC</Badge>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="bpo" className="w-full m-0 animate-in zoom-in-95 duration-500">
                    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
                       <div className="bg-slate-900 p-4 flex justify-between items-center">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Managed Workbench</span>
                          <span className="text-[10px] text-green-400 font-bold uppercase">SLA: 99.8%</span>
                       </div>
                       <div className="p-4 space-y-3">
                          {[
                            { item: "Billing Drift", status: "Resolved", owner: "Team A" },
                            { item: "Rebate Claim", status: "Pending", owner: "Team B" },
                            { item: "Margin Alert", status: "Review", owner: "Team A" },
                          ].map((row, i) => (
                            <div key={i} className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100">
                               <div className="text-xs font-bold">{row.item}</div>
                               <div className="flex gap-4 text-[10px]">
                                  <span className="text-slate-500">{row.owner}</span>
                                  <span className={cn(
                                    "font-medium",
                                    row.status === "Resolved" ? "text-green-600" : "text-amber-600"
                                  )}>{row.status}</span>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Capability Blocks */}
        <section id="deliver" className="py-24 container-width scroll-mt-32">
          <div className="space-y-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-display font-bold">Deliver measurable outcomes across B2B and B2C</h2>
              <p className="text-lg text-muted-foreground">
                Vayom AI supports workflows that stop cash leakage and reduce reconciliation. Partners can start with one workflow and expand as value is proven.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* B2B Workflows */}
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">Block A</Badge>
                  <h3 className="text-2xl font-bold">B2B workflows</h3>
                  <p className="text-muted-foreground">Keep contracts, pricing, and billing aligned</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Contract-to-invoice compliance checks that show the term excerpt next to the invoice line.",
                    "Transaction deduplication across invoices, credits, payments, and order entries to prevent repeat payouts.",
                    "Transaction validation against price lists, discount rules, and effective dates to catch exceptions early.",
                    "Deductions and rebate packaging that makes recovery conversations evidence-based.",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Deal-to-cash Timeline</div>
                  <div className="flex justify-between items-center relative">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -z-10" />
                    {["Deal", "Contract", "Invoice", "Payment"].map((step, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-primary" />
                        <span className="text-[10px] font-bold">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* B2C Workflows */}
              <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5">Block B</Badge>
                  <h3 className="text-2xl font-bold">B2C workflows</h3>
                  <p className="text-muted-foreground">Protect margin across every transaction</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "Promo integrity checks that surface stacking, drift, and abuse patterns.",
                    "Duplicate charges and duplicate refunds review with match-side panels for fast confirmation.",
                    "Returns and shipping cost checks that tie operational exceptions to financial impact.",
                    "Subscription hygiene checks for renewal failures, repeat retries, and credit inconsistencies.",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {text}
                    </li>
                  ))}
                </ul>
                <div className="pt-8 border-t border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Leakage Map</div>
                  <div className="grid grid-cols-5 gap-2">
                    {["Promo", "Checkout", "Fulfillment", "Returns", "Sub"].map((step, i) => (
                      <div key={i} className="h-12 bg-slate-50 rounded-lg flex flex-col items-center justify-center relative overflow-hidden group">
                        <span className="text-[8px] font-bold">{step}</span>
                        {i % 2 === 0 && <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enablement Section */}
        <section id="enablement" className="py-24 bg-slate-50 border-y border-border scroll-mt-32">
          <div className="container-width space-y-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-display font-bold">Launch in weeks. Improve continuously.</h2>
              <p className="text-lg text-muted-foreground">
                Partners can deliver the first workflow quickly, then expand coverage with steady refinement cycles. This keeps implementation practical and reduces long, expensive rebuilds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Scope the first workflow", desc: "Pick one high-impact question set and confirm sources and owners." },
                { step: "2", title: "Connect systems & docs", desc: "Bring in the client’s selected sources and validate access." },
                { step: "3", title: "Train RIAA on data", desc: "Align entities and patterns so outputs are consistent and review-ready." },
                { step: "4", title: "Handover and expand", desc: "Enable core users, validate outputs, then add the next workflow.", icon: true },
              ].map((item, i) => (
                <Card key={i} className="bg-white border-border shadow-sm relative group overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    {item.icon && (
                      <div className="mt-6 flex justify-end">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <LayoutDashboard className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-24 container-width scroll-mt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-display font-bold">Built for enterprise control and deployment choice</h2>
                <p className="text-lg text-muted-foreground">
                  Partners can meet client requirements without redesigning delivery. Vayom AI supports SaaS and VPC deployment, with role-based access patterns.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  "SaaS deployment for speed and simpler operations.",
                  "VPC deployment for environments that require tighter control.",
                  "Evidence-linked outputs so reviews are faster and decisions are easier to defend.",
                ].map((text, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-border shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#FAF5EF] rounded-3xl p-8 border border-border relative overflow-hidden">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-6 rounded-2xl border-2 border-primary shadow-lg flex flex-col items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold">SaaS</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="font-bold text-slate-400">VPC</span>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-border p-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Example Roles</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span>Finance Reviewer</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <span>RevOps Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Model Section */}
        <section id="model" className="py-24 bg-white border-y border-border scroll-mt-32">
          <div className="container-width space-y-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-display font-bold">Partner models that fit your motion</h2>
              <p className="text-lg text-muted-foreground">Choose the structure that matches how you sell and deliver.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Referral", 
                  desc: "You introduce qualified opportunities, Vayom AI closes and delivers with you looped in.",
                  lead: "Partner", delivery: "Vayom AI", support: "Vayom AI", fit: "Lead Gen"
                },
                { 
                  title: "Co-sell", 
                  desc: "Joint pursuit with clear roles. You lead delivery or support delivery depending on the engagement.",
                  lead: "Joint", delivery: "Flexible", support: "Vayom AI", fit: "Strategic"
                },
                { 
                  title: "Delivery partner", 
                  desc: "You implement and operate workflows using Vayom AI, with enablement and support paths defined.",
                  lead: "Partner/Vayom", delivery: "Partner", support: "Partner/Vayom", fit: "Full Ops"
                },
              ].map((model, i) => (
                <div key={i} className="p-8 rounded-3xl border border-border bg-slate-50/50 space-y-6 flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{model.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{model.desc}</p>
                  </div>
                  <div className="mt-auto space-y-3 pt-6 border-t border-border">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Lead ownership</span>
                      <span className="font-bold">{model.lead}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Delivery</span>
                      <span className="font-bold">{model.delivery}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Typical Fit</span>
                      <span className="font-bold">{model.fit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply CTA Section */}
        <section id="apply" className="py-32 container-width scroll-mt-32">
          <div className="bg-primary rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden group">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold">Build what’s next, together</h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  Apply to partner and we will schedule a briefing to align on your delivery model and first joint opportunity.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12" onClick={() => setIsApplyModalOpen(true)}>
                    Apply to partner
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 rounded-full px-8 h-12" 
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/VayomAI@vayomai.com/bookings/', '_blank')}
                  >
                    Book a partner briefing
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="text-xs font-bold uppercase tracking-widest mb-6 opacity-70">Partner Checklist</div>
                <ul className="space-y-4">
                  {[
                    "Partner type confirmed",
                    "Primary regions identified",
                    "Delivery model selected",
                    "First workflow target",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          </div>
        </section>
      </main>

      <Footer />
      <PartnerApplicationModal open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen} />
    </div>
  );
}
