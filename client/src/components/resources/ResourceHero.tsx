import React from "react";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ResourceHeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function ResourceHero({ searchValue, onSearchChange }: ResourceHeroProps) {
  return (
    <div className="bg-slate-50 border-b border-border py-24 relative overflow-hidden">
      <div className="container-width relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-display font-bold text-primary">Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Practical reading, upcoming events, and short demos to help teams move from question to verified action.
            </p>
          </div>

          <div className="max-w-md space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                className="pl-10 h-12 bg-white rounded-lg border-border" 
                placeholder="Search blogs, events, and demos"
                value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)}
                data-testid="input-global-search"
              />
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground font-medium">
              <span className="opacity-60">Quick links:</span>
              <button className="hover:text-primary transition-colors">Browse blogs</button>
              <span className="opacity-30">|</span>
              <button className="hover:text-primary transition-colors">View events</button>
              <span className="opacity-30">|</span>
              <button className="hover:text-primary transition-colors">Watch demos</button>
            </div>
          </div>
        </div>

        {/* Visual Panel */}
        <div className="relative h-[300px] bg-white rounded-2xl shadow-sm border border-border p-8 flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          
          <div className="relative bg-white rounded-xl shadow-lg border border-border p-6 w-full max-w-sm space-y-4 transition-transform group-hover:-translate-y-2 duration-500">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-muted-foreground">Search Result</span>
            </div>
            <div className="space-y-1">
              <div className="h-5 w-3/4 bg-slate-100 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-slate-50 rounded animate-pulse" />
            </div>
            <div className="flex gap-2 pt-2">
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100">Blog</Badge>
              <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100">Event</Badge>
              <Badge variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-100">Demo</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
