import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
// @ts-ignore
import Flag from "react-world-flags";
import { Check, Shield, Zap, Clock, UserCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingPlan {
  Plan: string;
  Price: string;
  Billing: string;
  Description: string;
  Features: string[];
  Button: string;
  Recommended: boolean;
}

const PRICING_DATA: Record<string, PricingPlan[]> = {
  "USA": [
    {
      "Plan": "Starter",
      "Price": "$1,999",
      "Billing": "per month",
      "Description": "Perfect for high-growth startups optimizing early revenue streams.",
      "Features": [
        "Up to $1M monthly revenue scan",
        "B2C Promo & Discount Integrity",
        "Duplicate Charge Detection",
        "Standard RIAA Intelligence",
        "Weekly Leakage Reports"
      ],
      "Button": "Start Free Trial",
      "Recommended": false
    },
    {
      "Plan": "Professional",
      "Price": "$4,999",
      "Billing": "per month",
      "Description": "Advanced leakage prevention for mid-market enterprises.",
      "Features": [
        "Up to $10M monthly revenue scan",
        "All Starter features",
        "B2B Contract-to-Invoice Compliance",
        "Shipping & Fulfillment Leakage",
        "Priority Agentic Support",
        "Custom Action Queues"
      ],
      "Button": "Get Started",
      "Recommended": true
    },
    {
      "Plan": "Enterprise",
      "Price": "Custom",
      "Billing": "contact sales",
      "Description": "Full-scale revenue intelligence for global organizations.",
      "Features": [
        "Unlimited revenue scanning",
        "Full RIAA Suite access",
        "Custom Agent training",
        "Dedicated Revenue Engineer",
        "On-premise deployment options",
        "SLA-backed performance"
      ],
      "Button": "Contact Sales",
      "Recommended": false
    }
  ],
  "UK": [
    {
      "Plan": "Starter",
      "Price": "£1,599",
      "Billing": "per month",
      "Description": "Optimized for UK startups and growing digital brands.",
      "Features": [
        "Up to £800k monthly revenue scan",
        "B2C Promo & Discount Integrity",
        "VAT Compliance Checks",
        "Standard RIAA Intelligence",
        "Weekly Reports"
      ],
      "Button": "Start Free Trial",
      "Recommended": false
    },
    {
      "Plan": "Professional",
      "Price": "£3,999",
      "Billing": "per month",
      "Description": "Comprehensive recovery for UK enterprises.",
      "Features": [
        "Up to £8M monthly revenue scan",
        "All Starter features",
        "B2B Contract Compliance",
        "Fulfillment Leakage",
        "Multi-currency Support",
        "Priority Support"
      ],
      "Button": "Get Started",
      "Recommended": true
    },
    {
      "Plan": "Enterprise",
      "Price": "Custom",
      "Billing": "contact sales",
      "Description": "Tailored intelligence for global UK-based firms.",
      "Features": [
        "Unlimited revenue scanning",
        "Custom Agentic Workflows",
        "Dedicated Success Manager",
        "Audit-ready Reporting",
        "Advanced Data Residency"
      ],
      "Button": "Contact Sales",
      "Recommended": false
    }
  ],
  "EU": [
    {
      "Plan": "Starter",
      "Price": "€1,899",
      "Billing": "per month",
      "Description": "Ideal for European scale-ups and e-commerce leaders.",
      "Features": [
        "Up to €900k monthly revenue scan",
        "Promo & Discount Audit",
        "GDPR-compliant processing",
        "Standard RIAA Intelligence",
        "Weekly Insight Reports"
      ],
      "Button": "Start Free Trial",
      "Recommended": false
    },
    {
      "Plan": "Professional",
      "Price": "€4,599",
      "Billing": "per month",
      "Description": "Advanced revenue recovery for EU enterprises.",
      "Features": [
        "Up to €9M monthly revenue scan",
        "All Starter features",
        "B2B Contract Compliance",
        "Intra-EU Tax Logic Validation",
        "Priority Support",
        "Custom Dashboards"
      ],
      "Button": "Get Started",
      "Recommended": true
    },
    {
      "Plan": "Enterprise",
      "Price": "Custom",
      "Billing": "contact sales",
      "Description": "Full RIAA capability for European multinationals.",
      "Features": [
        "Unlimited revenue volume",
        "Multi-language Agent support",
        "Custom local compliance rules",
        "Dedicated Solutions Architect",
        "Premium Support Tier"
      ],
      "Button": "Contact Sales",
      "Recommended": false
    }
  ]
};

const COUNTRY_CONFIG: Record<string, { flag: string; label: string; currency: string }> = {
  "USA": { flag: "US", label: "United States", currency: "USD" },
  "UK": { flag: "GB", label: "United Kingdom", currency: "GBP" },
  "EU": { flag: "EU", label: "European Union", currency: "EUR" }
};

export default function Pricing() {
  const [selectedCountry, setSelectedCountry] = useState("USA");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container-width px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 py-1 px-4 border-primary/30 text-primary">
              Pricing & Plans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Invest in your <span className="text-primary italic">recovered</span> revenue
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transparent, performance-driven pricing designed to pay for itself within the first 30 days of deployment.
            </p>
          </div>

          {/* Country Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-muted rounded-2xl border border-border shadow-inner">
              {Object.entries(COUNTRY_CONFIG).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCountry(key)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300",
                    selectedCountry === key
                      ? "bg-white text-foreground shadow-sm scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  )}
                >
                  <Flag code={config.flag} className="w-6 h-auto rounded-sm shadow-sm" />
                  {config.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20">
            {PRICING_DATA[selectedCountry].map((plan: PricingPlan, idx: number) => (
              <Card 
                key={idx} 
                className={cn(
                  "relative flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-border/60",
                  plan.Recommended && "border-primary shadow-xl md:scale-105 z-10"
                )}
              >
                {plan.Recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 rounded-full shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl font-display">{plan.Plan}</CardTitle>
                  <CardDescription className="min-h-[3rem] mt-2">
                    {plan.Description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-8">
                    <span className="text-5xl font-display font-bold">{plan.Price}</span>
                    <span className="text-muted-foreground ml-2">{plan.Billing}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      What's Included
                    </div>
                    {plan.Features.map((feature: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-primary/10 rounded-full p-0.5 group-hover:bg-primary/20 transition-colors">
                          <Check className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-sm leading-tight text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant={plan.Recommended ? "default" : "outline"} 
                    className={cn(
                      "w-full h-12 rounded-xl font-bold transition-all duration-300",
                      plan.Recommended ? "shadow-lg shadow-primary/20" : "hover:bg-primary hover:text-white hover:border-primary"
                    )}
                  >
                    {plan.Button}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Value Section */}
          <div className="bg-slate-50 rounded-[2.5rem] border border-border p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Why Vayom AI's pricing works</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We don't just charge for software. We charge for <span className="text-foreground font-semibold">guaranteed revenue recovery</span>. Our agentic platform is built to identify, validate, and stop leakage at scale.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Zap, label: "Instant ROI", desc: "Most clients recover 5x their annual fee in month one." },
                    { icon: Shield, label: "Audit Proof", desc: "Every recovered dollar comes with a full RIAA evidence trail." },
                    { icon: Clock, label: "Fast Setup", desc: "Integrate with your ERP in days, not months." },
                    { icon: UserCheck, label: "Expert Guided", desc: "Dedicated engineers help tune your recovery agents." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-border">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-sm mb-1">{item.label}</div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-border shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
                <div className="flex justify-between items-center mb-8 pb-6 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Projected Recovery</div>
                      <div className="font-bold text-sm">Professional Plan</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">$142,500</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Est. Monthly Recovery</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 font-medium">B2C Promo Stacking</span>
                    <span className="font-bold text-primary">$42,300</span>
                  </div>
                  <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]" />
                  </div>
                  
                  <div className="flex justify-between text-xs pt-2">
                    <span className="text-slate-500 font-medium">B2B Contract Drift</span>
                    <span className="font-bold text-primary">$88,200</span>
                  </div>
                  <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]" />
                  </div>
                  
                  <div className="flex justify-between text-xs pt-2">
                    <span className="text-slate-500 font-medium">Shipping Overcharges</span>
                    <span className="font-bold text-primary">$12,000</span>
                  </div>
                  <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[40%]" />
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-slate-900 text-white rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Total Monthly Recovery</div>
                    <div className="text-xl font-bold">$142,500</div>
                  </div>
                  <Button size="sm" className="bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl px-6">
                    Run Scan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
