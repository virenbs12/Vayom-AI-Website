import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Shield, BarChart3, Globe, Database, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardingModal } from "@/components/pricing/OnboardingModal";

const pricingData = [
  {
    country: "US",
    flag: "🇺🇸",
    currency: "USD",
    symbol: "$",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "69", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "$29.00 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "$0.3 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "119", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "$29.00 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "$0.1 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "249", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "$0.1 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "$3,000.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  },
  {
    country: "UK",
    flag: "🇬🇧",
    currency: "GBP",
    symbol: "£",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "49", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "£19.00 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "£0.2 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "89", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "£19.00 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "£0.1 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "189", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "£0.1 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "£2,250.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  },
  {
    country: "EU",
    flag: "🇪🇺",
    currency: "EUR",
    symbol: "€",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "59", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "€29.00 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "€0.3 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "99", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "€29.00 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "€0.1 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "219", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "€0.1 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "€2,500.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    symbol: "A$",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "109", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "A$49.00 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "A$0.05 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "179", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "A$49.00 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "A$0.02 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "379", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "A$0.02 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "A$4,600.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    symbol: "AED ",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "249", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "AED 109.00 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "AED 0.11 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "439", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "AED 109.00 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "AED 0.04 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "919", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "AED 0.04 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "AED 11,000.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  },
  {
    country: "India",
    flag: "🇮🇳",
    currency: "INR",
    symbol: "₹",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "900", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "₹500 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "₹0.50 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "2,100", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "₹500 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "₹0.25 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "4,500", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "₹0.25 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "₹20,000.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    symbol: "S$",
    plans: [
      { 
        name: "Starter (2 systems)", 
        price: "89", 
        desc: "Essential revenue intelligence",
        features: {
          structuredSources: "2 included",
          extraSource: "S$39.00 / mo per user",
          documents: "Unlimited",
          streaming: "Not included",
          prompts: "20 / day",
          extraPrompts: "S$0.04 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Growth (5 systems + feeds)", 
        price: "159", 
        desc: "For expanding businesses",
        popular: true,
        features: {
          structuredSources: "5 included",
          extraSource: "S$39.00 / mo per user",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "100 / day",
          extraPrompts: "S$0.01 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Power (all systems + feeds)", 
        price: "319", 
        desc: "Full platform scale",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "250 / day",
          extraPrompts: "S$0.01 per prompt",
          sessions: "1 active session"
        }
      },
      { 
        name: "Enterprise", 
        price: "Custom", 
        desc: "Tailored for large organizations",
        features: {
          structuredSources: "Unlimited",
          extraSource: "No extra charge",
          documents: "Unlimited",
          streaming: "Included",
          prompts: "Unlimited",
          extraPrompts: "Not applicable",
          sessions: "Up to 3 active sessions"
        }
      }
    ],
    implementation: [
      { item: "Daily implementation fee", value: "S$3,900.00 per project day" },
      { item: "Minimum project length", value: "5 days" },
      { item: "Typical project range", value: "10-15 days" },
      { item: "Scope", value: "Connection, configuration, and basic team training across chosen systems and documents" }
    ]
  }
];

export default function Pricing() {
  const [activeCountry, setActiveCountry] = useState("US");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleChoosePlan = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#0D1B1E] dark:text-[#F1F4F5]">Simple, transparent pricing</h1>
            <p className="text-xl text-muted-foreground">
              Select your region to see localized pricing and plans tailored for your market.
            </p>
          </div>

          <Tabs defaultValue="US" className="w-full" onValueChange={setActiveCountry}>
            <div className="flex justify-center mb-12">
              <TabsList className="h-14 p-1 bg-muted/50 rounded-full border border-border overflow-x-auto scrollbar-hide">
                {pricingData.map((data) => (
                  <TabsTrigger 
                    key={data.country} 
                    value={data.country}
                    className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm text-lg flex items-center gap-2"
                  >
                    <span className="flex items-center justify-center w-8 h-6 bg-slate-100 rounded text-sm font-bold text-slate-500 uppercase shrink-0">
                      {data.country.substring(0, 2)}
                    </span>
                    <span className="font-semibold text-slate-700 whitespace-nowrap">
                      {data.country}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {pricingData.map((data) => (
              <TabsContent key={data.country} value={data.country} className="animate-in fade-in-50 duration-500">
                <div className="space-y-12">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.plans.map((plan) => (
                      <Card 
                        key={plan.name} 
                        className={cn(
                          "relative flex flex-col border-2 transition-all duration-300 group cursor-pointer",
                          plan.popular 
                            ? "border-primary shadow-md bg-primary/[0.02]" 
                            : "border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-slate-950",
                          selectedPlan === plan.name && "border-primary ring-2 ring-primary/20 shadow-xl bg-primary/[0.04]"
                        )}
                        onClick={() => setSelectedPlan(plan.name)}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 z-20 overflow-visible">
                            <div className="bg-primary text-primary-foreground text-[10px] font-bold uppercase py-1 px-10 rotate-45 translate-x-[32px] translate-y-[12px] shadow-md border-b border-white/20 whitespace-nowrap">
                              Popular
                            </div>
                          </div>
                        )}
                        <CardHeader className="pb-4">
                          <CardTitle className={cn(
                            "text-lg font-bold transition-colors",
                            (selectedPlan === plan.name || plan.popular) ? "text-primary" : "text-foreground"
                          )}>
                            {plan.name}
                          </CardTitle>
                          <CardDescription className="text-xs h-8">{plan.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col">
                          <div className="mb-6">
                            {plan.price === "Custom" ? (
                              <span className="text-2xl font-bold">Contact us</span>
                            ) : (
                              <>
                                <span className="text-3xl font-bold">{data.symbol}{plan.price}</span>
                                <span className="text-xs text-muted-foreground ml-1">/ user / mo</span>
                              </>
                            )}
                          </div>
                          
                          <div className="space-y-4 mb-6 text-xs flex-grow">
                            <div className="pb-3 border-b border-border/50">
                              <div className="font-semibold flex items-center gap-1.5 mb-1">
                                <Database className={cn("w-3 h-3 transition-colors", (selectedPlan === plan.name || plan.popular) ? "text-primary" : "text-muted-foreground")} /> Data Sources
                              </div>
                              <div className="text-muted-foreground">{plan.features.structuredSources}</div>
                              <div className="text-[10px] text-muted-foreground mt-0.5">{plan.features.extraSource}</div>
                            </div>
                            <div className="pb-3 border-b border-border/50">
                              <div className="font-semibold flex items-center gap-1.5 mb-1">
                                <FileText className={cn("w-3 h-3 transition-colors", (selectedPlan === plan.name || plan.popular) ? "text-primary" : "text-muted-foreground")} /> Documents
                              </div>
                              <div className="text-muted-foreground">{plan.features.documents}</div>
                            </div>
                            <div className="pb-3 border-b border-border/50">
                              <div className="font-semibold flex items-center gap-1.5 mb-1">
                                <Zap className={cn("w-3 h-3 transition-colors", (selectedPlan === plan.name || plan.popular) ? "text-primary" : "text-muted-foreground")} /> Streaming Feeds
                              </div>
                              <div className="text-muted-foreground">{plan.features.streaming}</div>
                            </div>
                            <div className="pb-3 border-b border-border/50">
                              <div className="font-semibold flex items-center gap-1.5 mb-1">
                                <Check className={cn("w-3 h-3 transition-colors", (selectedPlan === plan.name || plan.popular) ? "text-primary" : "text-muted-foreground")} /> Daily Prompts
                              </div>
                              <div className="text-muted-foreground">{plan.features.prompts}</div>
                              <div className="text-[10px] text-muted-foreground mt-0.5">Extra: {plan.features.extraPrompts}</div>
                            </div>
                            <div>
                              <div className="font-semibold flex items-center gap-1.5 mb-1">
                                <Globe className={cn("w-3 h-3 transition-colors", (selectedPlan === plan.name || plan.popular) ? "text-primary" : "text-muted-foreground")} /> Sessions
                              </div>
                              <div className="text-muted-foreground">{plan.features.sessions}</div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full h-10 rounded-lg text-sm font-semibold transition-all group-hover:scale-[1.02]" 
                            variant={(selectedPlan === plan.name || plan.popular) ? "default" : "outline"}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleChoosePlan(plan.name);
                            }}
                          >
                            {plan.price === "Custom" ? "Contact Sales" : "Choose Plan"}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Implementation Section */}
                  <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 border border-border dark:bg-slate-900">
                    <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" /> Implementation & Setup
                    </h3>
                    <div className="grid gap-4">
                      {data.implementation?.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white rounded-xl border border-border/50 shadow-sm gap-2 dark:bg-slate-800">
                          <div className="font-semibold text-sm text-slate-600 dark:text-slate-300">{item.item}</div>
                          <div className="text-sm font-bold text-primary sm:text-right max-w-md">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <OnboardingModal 
            open={modalOpen} 
            onOpenChange={setModalOpen}
            selectedPlan={selectedPlan}
            country={activeCountry}
          />

          {/* ROI Section */}
          <div className="mt-32 p-12 bg-slate-50 rounded-3xl border border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Designed for Enterprise ROI</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Vayom AI typically identifies 2-5% in recovered revenue within the first 30 days of deployment. Our pricing is designed to scale with your recovery impact.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex gap-4 items-start">
                    <Zap className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <div className="font-bold">Fast Setup</div>
                      <div className="text-sm text-muted-foreground">Deploy in days, not months.</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Shield className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <div className="font-bold">Secure</div>
                      <div className="text-sm text-muted-foreground">Enterprise-grade security.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <div className="text-sm font-bold text-slate-400 uppercase mb-6">Typical Recovery Path</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Revenue Scanned</span>
                    <span className="font-bold">$10.0M</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full">
                    <div className="h-full bg-primary rounded-full w-full" />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-600 font-bold">Leakage Identified</span>
                    <span className="text-red-600 font-bold">$420k</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full">
                    <div className="h-full bg-red-500 rounded-full w-[42%]" />
                  </div>
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
