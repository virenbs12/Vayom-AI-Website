import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HeroSlideOne } from "./HeroSlideOne";
import { HeroSlideTwo } from "./HeroSlideTwo";
import { HeroSlideThree } from "./HeroSlideThree";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
    setIsPlaying(false);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
    setIsPlaying(false);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 7000);
    }

    return () => clearInterval(interval);
  }, [emblaApi, isPlaying, onSelect]);

  return (
    <div 
      className="relative w-full overflow-hidden bg-white pt-20"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex-[0_0_100%] min-w-0">
            <HeroSlideOne />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <HeroSlideTwo />
          </div>
          <div className="flex-[0_0_100%] min-w-0">
            <HeroSlideThree />
          </div>
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-8 left-0 right-0 container-width flex justify-between items-end pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                selectedIndex === idx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => {
                emblaApi?.scrollTo(idx);
                setIsPlaying(false);
              }}
            />
          ))}
        </div>
        
        <div className="flex gap-2 pointer-events-auto">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white"
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/50 backdrop-blur-sm border-white/20 hover:bg-white"
            onClick={scrollNext}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
