import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Shield, BarChart3, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    country: "US",
    flag: "🇺🇸",
    currency: "USD",
    symbol: "$",
    plans: [
      { name: "Starter", price: "2,500", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "10,000", desc: "For high-volume global operations" }
    ]
  },
  {
    country: "UK",
    flag: "🇬🇧",
    currency: "GBP",
    symbol: "£",
    plans: [
      { name: "Starter", price: "2,000", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "8,000", desc: "For high-volume global operations" }
    ]
  },
  {
    country: "EU",
    flag: "🇪🇺",
    currency: "EUR",
    symbol: "€",
    plans: [
      { name: "Starter", price: "2,300", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "9,200", desc: "For high-volume global operations" }
    ]
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    symbol: "A$",
    plans: [
      { name: "Starter", price: "3,800", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "15,200", desc: "For high-volume global operations" }
    ]
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    currency: "AED",
    symbol: "د.إ",
    plans: [
      { name: "Starter", price: "9,200", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "36,700", desc: "For high-volume global operations" }
    ]
  },
  {
    country: "India",
    flag: "🇮🇳",
    currency: "INR",
    symbol: "₹",
    plans: [
      { name: "Starter", price: "1,50,000", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "6,00,000", desc: "For high-volume global operations" }
    ]
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    currency: "SGD",
    symbol: "S$",
    plans: [
      { name: "Starter", price: "3,400", desc: "Perfect for emerging brands" },
      { name: "Enterprise", price: "13,600", desc: "For high-volume global operations" }
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Simple, transparent pricing</h1>
            <p className="text-xl text-muted-foreground">
              Select your region to see localized pricing and plans tailored for your market.
            </p>
          </div>

          <Tabs defaultValue="US" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="h-14 p-1 bg-muted/50 rounded-full border border-border overflow-x-auto scrollbar-hide">
                {pricingData.map((data) => (
                  <TabsTrigger 
                    key={data.country} 
                    value={data.country}
                    className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm text-lg"
                  >
                    <span className="mr-2">{data.flag}</span>
                    <span className="hidden sm:inline">{data.country}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {pricingData.map((data) => (
              <TabsContent key={data.country} value={data.country} className="animate-in fade-in-50 duration-500">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {data.plans.map((plan) => (
                    <Card key={plan.name} className={cn(
                      "relative overflow-hidden border-2 transition-all hover:shadow-xl",
                      plan.name === "Enterprise" ? "border-primary shadow-lg" : "border-border"
                    )}>
                      {plan.name === "Enterprise" && (
                        <div className="absolute top-0 right-0">
                          <div className="bg-primary text-primary-foreground text-[10px] font-bold uppercase py-1 px-8 rotate-45 translate-x-6 translate-y-2">
                            Popular
                          </div>
                        </div>
                      )}
                      <CardHeader className="pb-8">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <CardDescription className="text-base">{plan.desc}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-8">
                          <span className="text-4xl font-bold">{data.symbol}{plan.price}</span>
                          <span className="text-muted-foreground ml-2">/ month</span>
                        </div>
                        
                        <div className="space-y-4 mb-8">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">What's included</h4>
                          <ul className="space-y-3">
                            {[
                              "Full RIAA Platform Access",
                              "Revenue Leakage Scanning",
                              "Evidence-linked Outputs",
                              "Custom Workflow Deployment",
                              "Priority Support",
                              "Unlimited Agents"
                            ].map((feature) => (
                              <li key={feature} className="flex items-center gap-3 text-sm">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                  <Check className="w-3 h-3" />
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button className="w-full h-12 rounded-xl text-lg font-semibold" variant={plan.name === "Enterprise" ? "default" : "outline"}>
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

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
