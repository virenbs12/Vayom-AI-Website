import React from "react";
import logoImage from "@assets/generated_images/vayom_ai_unified_output_flow_diagram.png";

export function WhyVayom() {
  return (
    <section className="container-width py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Why Vayom</h2>
            <p className="text-primary font-medium">From Sanskrit "Vyoma" meaning infinite space, boundless, sky.</p>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vayom AI is built on one simple belief: the best business decisions should not require Fortune 500 budgets or months of integration. "Vyoma" means infinite space, and it reflects what we deliver: evidence-linked answers across your systems and documents, so teams can move from question to verified action without friction.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our mission</h3>
            <ul className="space-y-3">
              {[
                "Enterprise-grade intelligence at middle-market pricing",
                "Cross-functional workflows with minimal data engineering",
                "Built for both B2B and B2C operations on one platform",
                "Evidence-linked outputs so teams can verify and act quickly",
                "SaaS or VPC deployment for control and scale"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-2xl font-display font-medium text-primary pt-4">
            The sky is no longer the limit.
          </p>
        </div>

        {/* Right Column: Brand Panel */}
        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-white group">
           <img 
            src={logoImage} 
            alt="Vayom AI Identity" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-vayom-mint-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-40 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
