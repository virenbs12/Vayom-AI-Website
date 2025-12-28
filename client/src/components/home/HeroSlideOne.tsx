import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Search, FileText, Database, CheckCircle, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";

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
            <Button size="lg" className="rounded-full px-8 text-lg h-12">
              Request a workflow demo
            </Button>
            <Link href="/markets">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-12 border-2">
                Explore markets
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground font-medium pt-4">
            Deploy as SaaS or in your VPC. Start with one scoped workflow in 6 to 12 weeks.
          </p>
        </div>

        {/* Product UI Mock */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden max-w-xl mx-auto lg:ml-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Header */}
            <div className="bg-slate-50 border-b border-border p-4 flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="flex-1 bg-white border border-border rounded-md px-3 py-1.5 flex items-center gap-2 text-sm text-muted-foreground shadow-sm">
                <Search className="w-4 h-4" />
                <span>Which customers are billed on outdated pricing?</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-slate-50/30 min-h-[300px] relative">
              <div className="space-y-4">
                {/* Result Card */}
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Acme Corp - Enterprise Plan</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">Variance Detected</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Billed at $29/user (Legacy 2023) but active contract specifies $45/user effective Jan 1, 2024.
                  </p>
                  
                  {/* Source Chips */}
                  <div className="flex gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded-md cursor-pointer hover:bg-blue-100 transition-colors">
                      <Database className="w-3 h-3" />
                      ERP Record #9921
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2 py-1 rounded-md cursor-pointer hover:bg-purple-100 transition-colors">
                      <FileText className="w-3 h-3" />
                      Contract Excerpt (Pg 4)
                    </span>
                  </div>
                </div>

                {/* Result Card 2 */}
                <div className="bg-white p-4 rounded-lg border border-border shadow-sm opacity-60">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Global Systems Inc</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">Verified</span>
                  </div>
                  <div className="h-2 w-3/4 bg-slate-100 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-slate-100 rounded" />
                </div>
              </div>

              {/* Side Drawer (Visual Only) */}
              <div className="absolute top-4 bottom-4 right-4 w-1/3 bg-white border border-border shadow-lg rounded-lg p-4 flex flex-col animate-in slide-in-from-right-10 duration-700">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Evidence</span>
                  <X className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 mb-2 border border-slate-100">
                  "Effective Jan 1, 2024, the per-seat rate shall increase to $45.00 USD..."
                </div>
                <div className="mt-auto pt-2 border-t border-border">
                  <Button size="sm" variant="ghost" className="w-full text-xs h-8 justify-between">
                    View full contract <ChevronRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
