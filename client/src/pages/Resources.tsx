import React, { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { BlogsTab } from "@/components/resources/BlogsTab";
import { EventsTab } from "@/components/resources/EventsTab";
import { DemosTab } from "@/components/resources/DemosTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { scrollToDemo } from "@/lib/utils";
import { SEO } from "@/components/SEO";

export default function Resources() {
  const [globalSearch, setGlobalSearch] = useState("");

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO
        title="Resources - Blogs, Events & Demos | Vayom AI"
        description="Explore revenue intelligence insights, upcoming events, and product demos. Learn how to detect and prevent revenue leakage in your business."
        keywords="revenue intelligence blog, revenue leakage demos, finance events, RevOps resources"
        canonicalUrl="https://vayomai.com/resources"
      />
      <Header />
      
      <main className="pt-20">
        <ResourceHero searchValue={globalSearch} onSearchChange={setGlobalSearch} />

        <div className="container-width py-12">
          <Tabs defaultValue="blogs" className="space-y-12">
            <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-border -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="bg-slate-100 p-1 rounded-full h-12 w-full max-w-md mx-auto grid grid-cols-3">
                <TabsTrigger value="blogs" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Blogs</TabsTrigger>
                <TabsTrigger value="events" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Events</TabsTrigger>
                <TabsTrigger value="demos" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Demos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="blogs" className="focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
              <BlogsTab searchQuery={globalSearch} />
            </TabsContent>

            <TabsContent value="events" className="focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
              <EventsTab searchQuery={globalSearch} />
            </TabsContent>

            <TabsContent value="demos" className="focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-500">
              <DemosTab searchQuery={globalSearch} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Bottom CTA Strip */}
        <section className="bg-primary py-20 text-white mt-12">
          <div className="container-width">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Want a guided walk-through for your workflow?
              </h2>
              <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                Tell us your systems and what you need to verify. We will show the output format and the evidence trail.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-12"
                  onClick={scrollToDemo}
                  data-testid="button-request-demo-resources"
                >
                  Request a Demo
                </Button>
                <Link href="/markets">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 h-12">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
