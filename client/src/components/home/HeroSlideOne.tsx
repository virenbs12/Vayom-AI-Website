import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { scrollToDemo } from "@/lib/utils";
import heroImage from "@assets/Hero_Section_Image_1767263687194.png";

export function HeroSlideOne() {
  return (
    <div className="container-width py-20 min-h-[600px] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 pr-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold leading-[1.1] text-foreground mb-6">
              Ask once. Get <span className="text-primary">evidence-linked</span> answers across your systems.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
              Stop reconciling NetSuite, Salesforce, and contract documents by hand. Get one answer with clickable sources.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 text-lg h-12"
              onClick={scrollToDemo}
              data-testid="button-request-demo-hero-one"
            >
              Request a Demo
            </Button>
            <Link href="/markets" asChild>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 border-2">
                Explore Solutions
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground font-medium pt-4">
            Deploy as SaaS or in your VPC. Start with one scoped workflow in 6 to 12 weeks.
          </p>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={heroImage} 
            alt="Vayom Boundless Sky" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
