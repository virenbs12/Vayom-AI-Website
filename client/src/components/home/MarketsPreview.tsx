import React from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function MarketsPreview() {
  return (
    <section className="bg-slate-50 py-24 border-y border-border">
      <div className="container-width">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Built for how each industry actually runs</h2>
          <p className="text-lg text-muted-foreground">Pick your sector to see the workflows Vayom AI supports end-to-end.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "B2C",
              desc: "Protect margin across promos, returns, shipping, and subscriptions.",
              link: "/markets#b2c",
              newTab: true
            },
            {
              title: "B2B",
              desc: "Keep contracts, pricing, invoices, and credits aligned before close.",
              link: "/markets#b2b",
              newTab: true
            },
            {
              title: "RIAA",
              desc: "Evidence-first answer system that links every result back to proof.",
              link: "/markets#riaa",
              newTab: true
            },
            {
              title: "Business Functions",
              desc: "Finance, Sales, Ops, and leaders get the same truth, with sources.",
              link: "/markets#business-functions",
              newTab: false
            }
          ].map((item, i) => (
            item.newTab ? (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm font-semibold text-primary flex items-center group-hover:underline">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </a>
            ) : (
              <Link key={i} href={item.link} className="block h-full group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm font-semibold text-primary flex items-center group-hover:underline">
                      Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
