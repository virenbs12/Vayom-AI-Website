import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Logo } from "@/components/layout/Logo";
import skyTexture from "@assets/generated_images/subtle_boundless_sky_gradient_texture_for_background.png";
import { motion } from "framer-motion";
import { scrollToDemo } from "@/lib/utils";

export function HeroSlideTwo() {
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
              Infinite space for <br/><span className="text-primary">better decisions.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
              From Sanskrit "Vyoma" meaning infinite space, boundless, sky.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full px-8 text-lg h-12"
              onClick={scrollToDemo}
              data-testid="button-request-demo-hero-two"
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
            Fortune 500-grade intelligence at middle-market pricing.
          </p>
        </div>

        {/* Brand Panel Visual */}
        <motion.div 
          className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={skyTexture} 
            alt="Vayom Boundless Sky" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px]" />
          
          <div className="relative z-10 bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 shadow-2xl">
            <Logo className="text-white scale-150 h-24" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
