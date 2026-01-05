import React, { useEffect, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/home/ContactForm";
import { cn, scrollToDemo } from "@/lib/utils";
import { SEO } from "@/components/SEO";
import { 
  Search, 
  Database, 
  FileText, 
  User, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight, 
  LineChart, 
  Target, 
  Settings, 
  ShieldCheck, 
  LayoutDashboard,
  Zap,
  Network,
  Users,
  Briefcase,
  History
} from "lucide-react";
import { Link } from "wouter";

export default function BusinessFunctions() {
  const [activeSection, setActiveSection] = useState("finance");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["finance", "revops", "sales", "marketing", "operations", "leadership", "it-security"];
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
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Revenue Intelligence for Finance, Sales & Operations | Vayom AI"
        description="Role-specific revenue intelligence for Finance, RevOps, Sales, Marketing, Operations & Leadership. Get actionable insights with linked evidence."
        keywords="finance revenue intelligence, sales operations, RevOps, marketing analytics, operations optimization, leadership insights"
        canonicalUrl="https://vayomai.org/business-functions"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-slate-50 border-b border-border">
          <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-display font-bold leading-tight">
                Business Functions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                One truth across teams, with proof attached. Reduce leakage, speed up reviews, and eliminate spreadsheet handoffs.
              </p>
              <p className="text-sm font-medium text-primary">
                Built on RIAA (Revenue Intelligence Agentic Atlas). Deploy as SaaS or in your VPC.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="rounded-full px-8" 
                  onClick={scrollToDemo}
                  data-testid="button-request-demo-functions-hero"
                >
                  Request a Demo
                </Button>
                <Link href="/markets#riaa">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    See how RIAA works
                  </Button>
                </Link>
              </div>
            </div>

            {/* Role-based Workbench Mock */}
            <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="bg-slate-100 p-4 border-b flex justify-between items-center">
                 <div className="flex gap-2">
                    {["Finance", "RevOps", "Sales"].map(role => (
                       <Badge key={role} variant={role === "Finance" ? "default" : "outline"} className="cursor-pointer">
                         {role}
                       </Badge>
                    ))}
                 </div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Workbench View</div>
              </div>
              <div className="p-6">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-border">
                       <AlertCircle className="w-5 h-5 text-red-500" />
                       <div className="flex-1">
                          <div className="text-xs font-bold">Unreconciled Rebate Claim</div>
                          <div className="text-[10px] text-slate-500">Acme Corp - $12,400.00</div>
                       </div>
                       <Badge variant="outline" className="text-[9px]">EXC-992</Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-border opacity-60">
                       <CheckCircle className="w-5 h-5 text-green-500" />
                       <div className="flex-1">
                          <div className="text-xs font-bold">Price Drift Corrected</div>
                          <div className="text-[10px] text-slate-500">Global Ltd - $45/seat verified</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* [SECTION] Why this page exists */}
        <section className="py-20 container-width border-b border-border">
           <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-display font-bold mb-6">Different teams, same problem: the evidence is scattered</h2>
              <p className="text-lg text-muted-foreground">
                Finance, commercial ops, and leadership often chase the same question across different tools and files. Time gets spent reconciling, not resolving. This page shows how each function uses the same RIAA foundation to move from question to verified action.
              </p>
           </div>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto py-12 border border-slate-100 rounded-3xl bg-slate-50/50">
              {[
                { label: "Systems", sub: "ERP/CRM", icon: Database },
                { label: "Documents", sub: "Contracts/Policies", icon: FileText },
                { label: "Feeds", sub: "Updates/Reports", icon: Zap }
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-border flex items-center justify-center mb-3">
                       <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground">{item.sub}</div>
                  </div>
                  {i < 2 && <ArrowRight className="hidden md:block w-4 h-4 text-slate-300" />}
                </React.Fragment>
              ))}
              <ArrowRight className="hidden md:block w-4 h-4 text-primary" />
              <div className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                 Verified Outputs
              </div>
           </div>
        </section>

        {/* Sticky Jump Bar */}
        <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur border-b border-border shadow-sm">
          <div className="container-width flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {[
              { id: "finance", label: "Finance" },
              { id: "revops", label: "RevOps & Deal Desk" },
              { id: "sales", label: "Sales" },
              { id: "marketing", label: "Marketing" },
              { id: "operations", label: "Operations" },
              { id: "leadership", label: "Leadership" },
              { id: "it-security", label: "IT & Security" },
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
          {/* Finance Section */}
          <section id="finance" className="scroll-mt-40">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-bold">Finance: close-ready answers with a clean evidence trail</h2>
                   <p className="text-muted-foreground">Finance teams lose days to reconciliation when contract terms, billing activity, credits, and deductions live in different places. RIAA brings the proof into one view so review cycles compress and leakage gets caught earlier.</p>
                   <p className="text-muted-foreground">This is designed for action, not reporting. Every flagged item carries its supporting records and excerpts, plus an owner and next step, so teams can resolve, document, and move on.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Contract-to-invoice compliance checks</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Duplicate credits, payments, and repeated adjustments review</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Deductions and claims packaging (what is valid, what is not, and why)</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Close readiness queue</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs Finance gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Prioritized exception queue with evidence links</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Reviewable packet for each issue (records + excerpts)</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Full resolution trail (detected → reviewed → corrected → approved)</li>
                         </ul>
                      </div>
                   </div>
                   <Button 
                     className="rounded-full px-8 mt-4" 
                     onClick={scrollToDemo}
                     data-testid="button-request-demo-finance"
                   >
                     Request a Demo
                   </Button>
                </div>
                
                {/* Finance Visual */}
                <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden relative group">
                   <div className="p-4 bg-slate-50 border-b font-bold text-xs flex justify-between">
                      <span>Close Readiness Queue</span>
                      <span className="text-primary font-mono">FIN-01</span>
                   </div>
                   <div className="p-6 overflow-x-auto">
                      <table className="w-full text-[10px]">
                         <thead>
                            <tr className="text-left text-slate-400 border-b">
                               <th className="pb-2 pr-4">Account</th>
                               <th className="pb-2 pr-4">Amount</th>
                               <th className="pb-2 pr-4">Issue Type</th>
                               <th className="pb-2 pr-4">Evidence</th>
                               <th className="pb-2">Status</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y">
                            <tr className="group/row">
                               <td className="py-3 pr-4 font-bold">Global Ltd</td>
                               <td className="py-3 pr-4">$8,400.00</td>
                               <td className="py-3 pr-4"><span className="text-red-600">Rebate Drift</span></td>
                               <td className="py-3 pr-4">
                                  <div className="flex gap-1">
                                     <Badge variant="outline" className="text-[8px] h-4">ERP</Badge>
                                     <Badge variant="outline" className="text-[8px] h-4">PDF</Badge>
                                  </div>
                               </td>
                               <td className="py-3"><Badge className="bg-amber-100 text-amber-700 text-[8px] h-4">Pending</Badge></td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                   {/* Flyout Drawer Mockup */}
                   <div className="absolute top-0 right-0 w-1/3 h-full bg-white border-l border-border p-4 translate-x-full group-hover:translate-x-0 transition-transform hidden lg:block shadow-xl">
                      <div className="text-[10px] font-bold border-b pb-2 mb-4 uppercase text-slate-400">Source record + excerpt</div>
                      <div className="space-y-4">
                         <div className="bg-slate-50 p-2 rounded border border-border">
                            <div className="font-bold text-[9px] mb-1">ERP Record #992</div>
                            <div className="text-[8px] text-slate-500">Tier 2 Rebate: 3.5%</div>
                         </div>
                         <div className="bg-slate-50 p-2 rounded border border-border">
                            <div className="font-bold text-[9px] mb-1">Contract Pg 14</div>
                            <div className="text-[8px] text-slate-500 italic">"Rebates capped at $50k annually..."</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* RevOps Section */}
          <section id="revops" className="scroll-mt-40 border-t border-border pt-20">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="lg:order-2 space-y-6">
                   <h2 className="text-3xl font-display font-bold">RevOps & Deal Desk: keep pricing and approvals consistent at scale</h2>
                   <p className="text-muted-foreground">RevOps teams manage guardrails, not just exceptions. RIAA highlights where pricing drift, discount exceptions, and approval gaps are creating margin leakage, then makes the "why" immediately reviewable.</p>
                   <p className="text-muted-foreground">This helps standardize execution across regions and teams without forcing every check into manual review. The output is a consistent workflow: flag, verify, approve, resolve.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Discount governance (policy thresholds, approvals, non-standard exceptions)</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Transaction validation against price lists and effective dates</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Deal-to-cash alignment checks before close</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Root-cause summaries (where drift is repeating and why)</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs RevOps gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Exception list by rep, region, product, and account</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Approval-ready summaries with supporting proof</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Prevent-next-cycle recommendations</li>
                         </ul>
                      </div>
                   </div>
                   <Button variant="outline" className="rounded-full px-8 mt-4" onClick={() => window.location.href='/markets'}>See markets for B2B workflows</Button>
                </div>
                
                {/* RevOps Visual */}
                <div className="lg:order-1 bg-white border border-border rounded-2xl shadow-xl p-8 group relative overflow-hidden">
                   <div className="flex justify-between mb-8">
                      <h3 className="font-bold">Deal Guardrails</h3>
                      <Badge className="bg-amber-100 text-amber-700 border-none">FLAGGED</Badge>
                   </div>
                   <div className="grid grid-cols-2 gap-6 text-center mb-8">
                      <div className="p-4 bg-slate-50 rounded-xl border border-border">
                         <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Policy Threshold</div>
                         <div className="text-lg font-bold">20% Max</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-border">
                         <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Requested</div>
                         <div className="text-lg font-bold text-red-600">35%</div>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm border-b pb-2">
                         <span className="text-slate-500">Approval Status</span>
                         <span className="font-bold text-amber-600">Unauthorized</span>
                      </div>
                      <div className="flex justify-between items-center text-sm border-b pb-2">
                         <span className="text-slate-500">Margin Impact</span>
                         <span className="font-bold text-red-600">-$4,200/mo</span>
                      </div>
                   </div>
                   {/* Expandable Evidence Area */}
                   <div className="mt-6 pt-4 border-t border-slate-100">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Expandable Evidence</div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-[10px] text-slate-600 italic">
                         "Discount requested by rep exceeds regional threshold for non-enterprise accounts."
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Sales Section */}
          <section id="sales" className="scroll-mt-40 border-t border-border pt-20">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-bold">Sales: account answers you can trust, tied back to sources</h2>
                   <p className="text-muted-foreground">Sales teams need fast clarity without chasing internal threads and outdated notes. RIAA unifies account context across CRM fields, contract terms, and recent updates, then shows the supporting proof so reps act with confidence.</p>
                   <p className="text-muted-foreground">This is especially valuable in renewals and expansions, where pricing, terms, and recent account changes directly impact outcomes.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Renewal prep: current terms, exceptions, and billing signals</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Account brief: key changes with references</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Deal risk checks: non-standard terms, missing approvals</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Stakeholder alignment with clickable sources</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs Sales gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Source-linked account brief</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Renewal evidence checklist</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Clean escalation packages</li>
                         </ul>
                      </div>
                   </div>
                   <Button 
                     className="rounded-full px-8 mt-4" 
                     onClick={scrollToDemo}
                     data-testid="button-request-demo-sales"
                   >
                     Request a Demo
                   </Button>
                </div>
                
                {/* Sales Visual: Shareable Account Brief */}
                <div className="bg-white border border-border rounded-2xl shadow-xl overflow-hidden">
                   <div className="bg-slate-900 text-white p-6">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Shareable Account Brief</div>
                      <h3 className="text-xl font-bold">Acme Corp Renewal Q1</h3>
                   </div>
                   <div className="p-8 space-y-8">
                      <div className="space-y-4">
                         <h4 className="font-bold text-xs uppercase text-slate-400 border-b pb-2">Key Terms</h4>
                         <div className="space-y-3">
                            <div className="text-sm font-medium flex justify-between items-center">
                               <span>Enterprise License (500 seats)</span>
                               <span className="font-bold">$45,000/yr</span>
                            </div>
                            <div className="flex gap-2">
                               <Badge variant="outline" className="bg-slate-50 text-[9px] h-5"><FileText className="w-3 h-3 mr-1 text-primary" /> Contract Pg 4</Badge>
                               <Badge variant="outline" className="bg-slate-50 text-[9px] h-5"><Database className="w-3 h-3 mr-1 text-primary" /> Salesforce</Badge>
                            </div>
                         </div>
                      </div>
                      
                      <div className="space-y-4">
                         <h4 className="font-bold text-xs uppercase text-slate-400 border-b pb-2">Recent Changes</h4>
                         <div className="space-y-3">
                            <div className="text-sm font-medium text-amber-600">3 Service Escalations detected this month</div>
                            <div className="flex gap-2">
                               <Badge variant="outline" className="bg-slate-50 text-[9px] h-5"><Zap className="w-3 h-3 mr-1 text-primary" /> News Feed</Badge>
                               <Badge variant="outline" className="bg-slate-50 text-[9px] h-5"><Briefcase className="w-3 h-3 mr-1 text-primary" /> Zendesk</Badge>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Marketing Section */}
          <section id="marketing" className="scroll-mt-40 border-t border-border pt-20">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="lg:order-2 space-y-6">
                   <h2 className="text-3xl font-display font-bold">Marketing: target with consistent signals, not guesswork</h2>
                   <p className="text-muted-foreground">Marketing performance improves when targeting is aligned to reality: what customers bought, what they are contracted for, and what changed recently. RIAA keeps signals consistent by tying each insight to a source.</p>
                   <p className="text-muted-foreground">This enables cleaner segmentation, stronger account-based programs, and faster response to market-moving events.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Source-backed account segmentation</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Trigger monitoring from updates & reports</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Campaign readiness: validate account lists</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Messaging alignment with active agreements</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs Marketing gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Target account trigger feed</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Segment lists with explainable logic</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Shared Sales/Marketing view</li>
                         </ul>
                      </div>
                   </div>
                   <Button variant="ghost" className="rounded-full px-8 mt-4 text-primary font-bold" onClick={() => scrollTo('operations')}>See Business Functions in action <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
                
                {/* Marketing Visual */}
                <div className="lg:order-1 grid grid-cols-2 gap-4">
                   <div className="bg-white border border-border rounded-2xl shadow-lg p-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Trigger Feed</div>
                      <div className="space-y-3">
                         {[
                           { label: "New Expansion", account: "Global Ltd", time: "2h ago" },
                           { label: "Renewal Pending", account: "Acme Corp", time: "5h ago" }
                         ].map((item, i) => (
                           <div key={i} className="p-3 bg-slate-50 rounded-lg border border-border text-[9px]">
                              <div className="font-bold text-primary">{item.label}</div>
                              <div className="font-medium">{item.account}</div>
                              <div className="text-slate-400 mt-1 flex items-center gap-1">
                                 <Badge variant="outline" className="text-[7px] h-3">Evidence</Badge> {item.time}
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="bg-white border border-border rounded-2xl shadow-lg p-4 flex flex-col">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Segment Builder</div>
                      <div className="flex-1 space-y-2">
                         <div className="text-[9px] font-bold">Expansion Candidates</div>
                         <div className="space-y-1">
                            {["Acme Corp", "Tech Solutions", "Global Systems"].map(acc => (
                               <div key={acc} className="flex items-center justify-between p-2 bg-primary/5 rounded border border-primary/10 text-[8px]">
                                  <span>{acc}</span>
                                  <CheckCircle className="w-2.5 h-2.5 text-primary" />
                               </div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Operations Section */}
          <section id="operations" className="scroll-mt-40 border-t border-border pt-20">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-bold">Operations: link operational events to financial impact</h2>
                   <p className="text-muted-foreground">Operational friction becomes financial leakage when the connection is not visible. RIAA ties service issues, fulfillment exceptions, and recurring operational signals to the downstream impact, with evidence.</p>
                   <p className="text-muted-foreground">This helps ops teams prioritize fixes that reduce real costs, not just noise.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Recurring exception tracking tied to credits/refunds</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Fulfillment mismatch investigations with records</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Root cause grouping by warehouse or route</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Action routing with proof</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs Operations gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Ranked list of issues by financial impact</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Drill-down to supporting records</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Repeat-pattern prevention view</li>
                         </ul>
                      </div>
                   </div>
                   <Button 
                     className="rounded-full px-8 mt-4" 
                     onClick={scrollToDemo}
                     data-testid="button-request-demo-operations"
                   >
                     Request a Demo
                   </Button>
                </div>
                
                {/* Operations Visual: Issue-to-Impact Map */}
                <div className="bg-white border border-border rounded-2xl shadow-xl p-8">
                   <div className="text-[10px] font-bold text-slate-400 uppercase mb-8">Issue-to-Impact Map</div>
                   <div className="space-y-6">
                      {[
                        { category: "Late Fulfilment", count: 142, impact: "$42,400" },
                        { category: "Carrier Overcharge", count: 88, impact: "$12,100" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                           <div className="flex-1 p-3 bg-slate-50 rounded-lg border border-border text-[9px] text-center font-bold group-hover:border-primary transition-colors">{item.category}</div>
                           <ArrowRight className="w-4 h-4 text-slate-300" />
                           <div className="flex-1 p-3 bg-red-50 rounded-lg border border-red-100 text-[9px] text-center">
                              <div className="text-red-600 font-bold">{item.count} Impacted Txns</div>
                              <div className="text-[10px] font-black text-red-700 mt-1 uppercase">{item.impact} TOTAL IMPACT</div>
                           </div>
                           <div className="flex gap-1">
                              <Badge variant="outline" className="text-[7px] h-4 px-1">Evidence</Badge>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="scroll-mt-40 border-t border-border pt-20">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="lg:order-2 space-y-6">
                   <h2 className="text-3xl font-display font-bold">Leadership: a clear view of leakage, owners, and outcomes</h2>
                   <p className="text-muted-foreground">Leadership needs clarity without debate. RIAA provides a consistent executive view of where leakage is occurring, what actions are underway, and what changed.</p>
                   <p className="text-muted-foreground">This is not a dashboard of static numbers. It is an operating view: what is verified, what is unresolved, and what will move outcomes this quarter.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Leakage overview by category</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> "Top 10" action list with owners</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Trend view: resolving vs recurring</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Board-ready evidence summaries</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs Leadership gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Weekly operating summary</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Clear accountability: owner/status</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Finance & commercial alignment</li>
                         </ul>
                      </div>
                   </div>
                   <Button variant="ghost" className="rounded-full px-8 mt-4 text-primary font-bold" onClick={() => scrollTo('finance')}>See how RIAA works <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
                
                {/* Leadership Visual: Executive Cockpit */}
                <div className="lg:order-1 bg-slate-900 text-white border border-slate-800 rounded-2xl shadow-2xl p-8">
                   <div className="text-[10px] font-bold text-slate-500 uppercase mb-8 tracking-widest">Executive Cockpit</div>
                   <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                         <div className="text-[8px] text-slate-400 uppercase font-bold mb-1">Total Exposure</div>
                         <div className="text-lg font-bold text-red-400">$242k</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                         <div className="text-[8px] text-slate-400 uppercase font-bold mb-1">Resolved</div>
                         <div className="text-lg font-bold text-green-400">$118k</div>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                         <div className="text-[8px] text-slate-400 uppercase font-bold mb-1">Top Recurring</div>
                         <div className="text-lg font-bold text-blue-400">14%</div>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <div className="text-[9px] font-bold text-slate-500 uppercase pb-2 border-b border-white/10">Top Actions</div>
                      {[
                        { action: "Billing Correction", owner: "Finance", status: "Ongoing" },
                        { action: "Policy Enforcement", owner: "RevOps", status: "New" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-lg text-xs border border-white/5">
                           <div>
                              <div className="font-bold">{item.action}</div>
                              <div className="text-[9px] text-slate-400">{item.owner}</div>
                           </div>
                           <Badge variant="outline" className="text-[8px] border-white/20 text-white">{item.status}</Badge>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </section>

          {/* IT & Security Section */}
          <section id="it-security" className="scroll-mt-40 border-t border-border pt-20">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                   <h2 className="text-3xl font-display font-bold">IT & Security: controlled access, governed outputs, flexible deployment</h2>
                   <p className="text-muted-foreground">RIAA is designed to fit enterprise control expectations. It supports role-based access patterns and deployment options that match your environment requirements.</p>
                   <p className="text-muted-foreground">Teams get value without opening uncontrolled paths to sensitive systems. Outputs stay tied to approved sources and reviewers.</p>
                   
                   <div className="grid md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Common workflows</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Source connection governance</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Permissions & role mapping</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Deployment planning: SaaS or VPC</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Usage, workflows, and adoption monitoring</li>
                         </ul>
                      </div>
                      <div className="space-y-3">
                         <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">Outputs IT/Security gets</h4>
                         <ul className="space-y-2 text-sm">
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Clear access model aligned to roles</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Traceable usage patterns</li>
                            <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Deployment options that fit internal reqs</li>
                         </ul>
                      </div>
                   </div>
                   <Button 
                     className="rounded-full px-8 mt-4" 
                     onClick={scrollToDemo}
                     data-testid="button-request-demo-it-security"
                   >
                     Request a Demo
                   </Button>
                </div>
                
                {/* IT Visual: Permissions + Sources Console */}
                <div className="bg-slate-50 border border-border rounded-2xl p-6 shadow-inner">
                   <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">Permissions + Sources Console</div>
                      <div className="grid grid-cols-2 gap-8 mb-6">
                         <div>
                            <div className="text-[9px] font-bold mb-2">Connected Sources</div>
                            <div className="space-y-2">
                               {[
                                 { name: "NetSuite ERP", type: "System" },
                                 { name: "Salesforce CRM", type: "System" },
                                 { name: "S3 Documents", type: "Feeds" }
                               ].map(s => (
                                  <div key={s.name} className="flex items-center justify-between text-[9px] border-b border-slate-50 pb-1">
                                     <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> {s.name}</div>
                                     <span className="text-[7px] text-slate-400 uppercase">{s.type}</span>
                                  </div>
                               ))}
                            </div>
                         </div>
                         <div>
                            <div className="text-[9px] font-bold mb-2">Role Selector</div>
                            <div className="p-2 bg-slate-50 rounded border border-border text-[9px] flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors">
                               <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary" /> Security Admin</div>
                               <Settings className="w-2.5 h-2.5 text-slate-400" />
                            </div>
                         </div>
                      </div>
                      <div className="pt-4 border-t border-slate-100">
                         <div className="text-[8px] text-slate-400 font-bold mb-2 uppercase flex justify-between">
                            <span>Activity Timeline</span>
                            <History className="w-2.5 h-2.5" />
                         </div>
                         <div className="space-y-1.5">
                            <div className="text-[7px] bg-slate-50 p-1.5 rounded flex justify-between items-center">
                               <span className="font-medium">VPC Source Re-indexed</span>
                               <span className="text-slate-400">14:02:22</span>
                            </div>
                            <div className="text-[7px] bg-slate-50 p-1.5 rounded flex justify-between items-center">
                               <span className="font-medium">New Role Assigned: Finance Auditor</span>
                               <span className="text-slate-400">11:15:01</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* Shared Foundation Section */}
          <section className="scroll-mt-40 border-t border-border pt-20">
             <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-display font-bold mb-6">The same output pattern, everywhere</h2>
                <p className="text-muted-foreground">No matter the function, RIAA standardizes the output so teams do not reinvent workflows each time.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "1. Issue list", desc: "Prioritized, grouped, and assignable lists of deviations." },
                  { title: "2. Evidence links", desc: "Direct references to record and excerpt proof." },
                  { title: "3. Next actions", desc: "Clear paths to approve, flag, resolve, or document." }
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white border border-border rounded-2xl shadow-sm text-center group hover:border-primary transition-colors">
                     <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="font-bold text-lg">{i + 1}</span>
                     </div>
                     <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                     <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
             </div>
             
             {/* Cross-role Issue Card Visual */}
             <div className="mt-16 grid md:grid-cols-3 gap-4 opacity-80 scale-95 grayscale hover:grayscale-0 hover:scale-100 transition-all">
                {["Finance View", "Sales View", "Leadership View"].map((view, i) => (
                   <div key={i} className="bg-white border border-border rounded-xl p-4 shadow-sm">
                      <div className="text-[8px] font-bold text-slate-400 uppercase mb-3 border-b pb-1">{view}</div>
                      <div className="space-y-2">
                         <div className="h-2 w-3/4 bg-slate-100 rounded" />
                         <div className="h-2 w-1/2 bg-slate-50 rounded" />
                         <div className="flex gap-1 pt-2">
                            <Badge className="text-[6px] h-3 px-1">Evidence</Badge>
                            <Badge variant="outline" className="text-[6px] h-3 px-1">Action</Badge>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </section>
        </div>

        {/* Bottom CTA Strip */}
        <section className="bg-primary text-white py-24 text-center mt-20">
           <div className="container-width max-w-3xl">
              <h2 className="text-4xl font-display font-bold mb-6">Launch in weeks. Improve continuously.</h2>
              <p className="text-lg text-primary-foreground/80 mb-10">Start with one workflow for one team, then expand once trust is established.</p>
              <div className="flex justify-center gap-4">
                 <Button size="lg" variant="secondary" className="rounded-full px-8" onClick={() => window.location.href='/#contact'}>
                    Request a workflow demo
                 </Button>
                 <Link href="/markets">
                    <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10">
                       Explore Markets
                    </Button>
                 </Link>
              </div>
           </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
