import React from "react";
import { Logo } from "@/components/layout/Logo";
import skyTexture from "@assets/generated_images/subtle_boundless_sky_gradient_texture_for_background.png";

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
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-slate-100">
           <img 
            src={skyTexture} 
            alt="Boundless Sky Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent" />
          
          <div className="relative z-10 bg-white/10 backdrop-blur-xl p-16 rounded-[2rem] border border-white/40 shadow-xl">
            <Logo className="text-white scale-[2] h-32" />
          </div>
        </div>
      </div>
    </section>
  );
}
