import React, { useState } from "react";
import { demos, Demo } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { Play, Clock, ArrowRight, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DemoModal } from "./DemoModal";

interface DemosTabProps {
  searchQuery?: string;
}

export function DemosTab({ searchQuery = "" }: DemosTabProps) {
  const [selectedDemo, setSelectedDemo] = useState<Demo | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [track, setTrack] = useState("all");
  const [duration, setDuration] = useState("all");

  const handleWatch = (demo: Demo) => {
    setSelectedDemo(demo);
    setModalOpen(true);
  };

  const filteredDemos = demos.filter((demo) => {
    if (track !== "all" && demo.track !== track) return false;
    if (searchQuery && !demo.title.toLowerCase().includes(searchQuery.toLowerCase()) && !demo.summary.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary">Demos</h2>
          <p className="text-muted-foreground">
            Short videos that show the workflow, the evidence, and the output format.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select value={track} onValueChange={setTrack}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Track" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tracks</SelectItem>
              <SelectItem value="RIAA">RIAA</SelectItem>
              <SelectItem value="B2B">B2B</SelectItem>
              <SelectItem value="B2C">B2C</SelectItem>
              <SelectItem value="Partner delivery">Partner delivery</SelectItem>
            </SelectContent>
          </Select>

          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any duration</SelectItem>
              <SelectItem value="short">Under 3 min</SelectItem>
              <SelectItem value="medium">3–7 min</SelectItem>
              <SelectItem value="long">7+ min</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredDemos.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDemos.map((demo) => (
            <div key={demo.id} className="group cursor-pointer" onClick={() => handleWatch(demo)}>
              {/* Thumbnail */}
              <div className="relative aspect-video bg-slate-900 rounded-lg overflow-hidden border border-border shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-current" />
                  </div>
                </div>
                {/* Mock UI Frame lines */}
                <div className="absolute top-0 w-full h-2 bg-white/10" />
                <div className="absolute left-0 h-full w-16 bg-white/5" />
                
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-medium text-white flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" />
                  {demo.duration}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                   <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                    {demo.track}
                  </span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {demo.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {demo.summary}
                </p>
                <div className="pt-2">
                  <Button variant="link" className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:translate-x-1 transition-transform">
                    Watch now <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-slate-50 rounded-xl border border-dashed border-border">
          <Filter className="w-8 h-8 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">
            {searchQuery ? `No demos found for "${searchQuery}"` : "No demos match your filters."}
          </p>
        </div>
      )}

      <DemoModal 
        demo={selectedDemo} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />
    </div>
  );
}
