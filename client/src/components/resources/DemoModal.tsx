import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Demo } from "@/data/resources";
import { scrollToDemo } from "@/lib/utils";
import { X } from "lucide-react";

interface DemoModalProps {
  demo: Demo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DemoModal({ demo, open, onOpenChange }: DemoModalProps) {
  if (!demo) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none text-white [&>button]:bg-red-500 [&>button]:text-white [&>button]:hover:bg-red-600 [&>button]:hover:text-white [&>button]:rounded-full [&>button]:p-1">
        <div className="aspect-video bg-slate-900 w-full flex items-center justify-center relative group">
          {demo.gifUrl ? (
            <img 
              src={demo.gifUrl} 
              alt={demo.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-500 font-mono text-lg opacity-50">
                [{demo.videoPlaceholder}]
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
        
        <div className="p-8 bg-background text-foreground">
          <div className="flex items-start justify-between gap-8">
            <div className="space-y-2">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {demo.track}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    {demo.duration}
                  </span>
                </div>
                <DialogTitle className="text-2xl font-display font-bold">
                  {demo.title}
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {demo.summary}
              </p>
            </div>
            
            <div className="shrink-0">
               <Button 
                 size="lg" 
                 className="rounded-full px-8"
                 onClick={() => {
                   onOpenChange(false);
                   scrollToDemo();
                 }}
                 data-testid="button-request-demo-modal"
               >
                 Request a Workflow Demo
               </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
