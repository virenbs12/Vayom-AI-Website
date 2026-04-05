import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { scrollToDemo } from "@/lib/utils";
import { BookOpen, Brain, Database, ArrowRight, ArrowDown, RotateCcw } from "lucide-react";

export function HeroSlideThree() {
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
              Knowledge is the System.<br />
              <span className="text-primary">System is the Knowledge.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
              When your rules, expertise, and data live inside one governed platform, every answer already knows the business. No handoffs. No translation. No guesswork.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 text-lg h-12"
              onClick={scrollToDemo}
              data-testid="button-request-demo-hero-three"
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
            Capture what your best people know. Apply it everywhere, every day.
          </p>
        </div>

        {/* Knowledge Loop Visual */}
        <motion.div
          className="relative h-[400px] w-full rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 border border-border shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background subtle grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle, #1d4ed8 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="relative w-72 h-72">

              {/* Top node: Rules */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white border border-primary/20 rounded-xl px-4 py-3 shadow-md flex items-center gap-2 backdrop-blur-sm">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Rules</span>
                </div>
              </motion.div>

              {/* Bottom-left node: Expertise */}
              <motion.div
                className="absolute bottom-0 left-0 flex flex-col items-center gap-1"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="bg-white border border-primary/20 rounded-xl px-4 py-3 shadow-md flex items-center gap-2 backdrop-blur-sm">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Expertise</span>
                </div>
              </motion.div>

              {/* Bottom-right node: Data */}
              <motion.div
                className="absolute bottom-0 right-0 flex flex-col items-center gap-1"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="bg-white border border-primary/20 rounded-xl px-4 py-3 shadow-md flex items-center gap-2 backdrop-blur-sm">
                  <div className="p-1.5 rounded-lg bg-primary/10">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">Data</span>
                </div>
              </motion.div>

              {/* SVG connectors forming a triangle loop */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 288 288" fill="none">
                {/* Rules → Data (top to bottom-right) */}
                <path
                  d="M 144 52 L 240 220"
                  stroke="#1d4ed820"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                {/* Data → Expertise (bottom-right to bottom-left) */}
                <path
                  d="M 240 220 L 48 220"
                  stroke="#1d4ed820"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                {/* Expertise → Rules (bottom-left to top) */}
                <path
                  d="M 48 220 L 144 52"
                  stroke="#1d4ed820"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />

                {/* Animated flow dots */}
                <circle r="4" fill="#1d4ed8" opacity="0.7">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 144 52 L 240 220 L 48 220 Z" />
                </circle>
                <circle r="3" fill="#3b82f6" opacity="0.5">
                  <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 144 52 L 240 220 L 48 220 Z" />
                </circle>
                <circle r="2.5" fill="#93c5fd" opacity="0.4">
                  <animateMotion dur="3s" begin="2s" repeatCount="indefinite" path="M 144 52 L 240 220 L 48 220 Z" />
                </circle>
              </svg>

              {/* Center badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  className="bg-primary text-white rounded-full p-3 shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <RotateCcw className="h-5 w-5" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-border">
              One governed platform
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
