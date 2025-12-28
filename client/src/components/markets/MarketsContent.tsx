import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import leakageMap from "@assets/generated_images/b2c_revenue_leakage_map_diagram.png";
import { ArrowRight, Check } from "lucide-react";

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
      // Offset for sticky header + sticky nav
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Stop sending cash out the door in high-volume commerce</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              B2C leakage is rarely one big mistake. It is thousands of small ones: promo stacking, duplicate charges, inconsistent refunds, shipping cost drift, and subscription billing noise. Vayom AI highlights the exact transactions driving margin loss, with evidence you can click back to.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
             {/* Leakage Map Visual */}
             <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <h3 className="font-semibold mb-4 text-center text-sm uppercase text-muted-foreground">Leakage Map</h3>
                <img src={leakageMap} alt="Leakage Map" className="w-full h-auto rounded-lg" />
             </div>

             {/* Function 1: Promo Integrity */}
             <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold mb-3">Function 1: Promo and discount integrity</h3>
                  <p className="text-muted-foreground mb-4">
                    Promo stacking and policy drift quietly push margin down. This workflow shows where discounts exceed policy.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Surfaces orders where applied discounts do not align to policy.</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Groups repeat patterns by code and channel.</li>
                    <li className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Outputs a clean list ready for finance review.</li>
                  </ul>
                  
                  {/* Promo Audit Card */}
                  <div className="mt-6 bg-white border border-border rounded-lg p-4 shadow-sm text-sm">
                    <div className="grid grid-cols-4 gap-2 font-semibold text-xs text-muted-foreground mb-2 border-b pb-2">
                      <div>Order ID</div>
                      <div>Code</div>
                      <div>Expected</div>
                      <div>Applied</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 py-1 items-center">
                      <div className="font-mono text-slate-700">#9921</div>
                      <div><span className="bg-slate-100 px-1 rounded">SUMMER20</span></div>
                      <div>20%</div>
                      <div className="text-red-600 font-bold">40%</div>
                    </div>
                  </div>
                </div>

                {/* Function 2 */}
                <div className="bg-slate-50 p-6 rounded-xl border border-border">
                   <h3 className="text-xl font-bold mb-3">Function 2: Duplicate charges and refunds</h3>
                   <p className="text-muted-foreground">
                     High volume payment retries and gateway timeouts create duplicates. This workflow prevents cash from leaving twice.
                   </p>
                </div>
             </div>
          </div>
        </section>

        {/* B2B Section */}
        <section id="b2b" className="scroll-mt-40 border-t border-border pt-20">
          <div className="mb-12">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Market: B2B</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Align contracts, invoices, and revenue</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ensure every invoice matches the executed contract terms. Catch pricing errors before they become disputes or churn risks.
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
          <div className="bg-slate-900 rounded-3xl p-12 text-white">
            <span className="text-blue-400 font-bold tracking-wide uppercase text-sm">Platform: RIAA</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Evidence-first answer system</h2>
            <p className="text-lg text-slate-300 max-w-3xl mb-8">
              RIAA doesn't just guess. It retrieves, reads, and links. Every output comes with a clickable path back to the source truth.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold mb-2">1. Retrieval</h4>
                 <p className="text-sm text-slate-300">Connects to structured (SQL) and unstructured (PDF) data simultaneously.</p>
               </div>
               <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                 <h4 className="font-bold mb-2">2. Reasoning</h4>
                 <p className="text-sm text-slate-300">Agents apply your specific business rules to validate findings.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Business Functions Section */}
        <section id="business-functions" className="scroll-mt-40 border-t border-border pt-20 pb-20">
           <div className="mb-12">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Business Functions</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">Unified truth for every leader</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Finance", desc: "Automate reconciliation and audit prep." },
              { title: "Sales", desc: "Verify commissions and pricing compliance." },
              { title: "Operations", desc: "Track inventory drift and fulfillment costs." },
              { title: "Legal", desc: "Monitor contract obligations and renewals." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-xl border border-border">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
