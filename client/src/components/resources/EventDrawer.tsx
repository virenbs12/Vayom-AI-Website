import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User, ArrowRight } from "lucide-react";
import { Event } from "@/data/resources";
import { format } from "date-fns";

interface EventDrawerProps {
  event: Event | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EventDrawer({ event, open, onOpenChange }: EventDrawerProps) {
  if (!event) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl p-0 overflow-y-auto">
        <div className="bg-slate-50 p-8 border-b border-border">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
              {event.type}
            </span>
          </div>
          <SheetTitle className="text-2xl font-bold font-display mb-2 text-primary">
            {event.name}
          </SheetTitle>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(new Date(event.start_datetime), "EEEE, MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{format(new Date(event.start_datetime), "h:mm a")} {event.timezone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{event.location_mode}</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">About this session</h3>
            <SheetDescription className="text-base text-foreground leading-relaxed">
              {event.full_description}
            </SheetDescription>
          </div>

          {event.agenda && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Agenda</h3>
              <ul className="space-y-3">
                {event.agenda.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-border">
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Duration</h3>
              <p className="font-medium">{event.duration}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Host</h3>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <p className="font-medium">{event.host}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Who should attend</h3>
            <p className="text-sm text-muted-foreground leading-relaxed bg-slate-50 p-4 rounded-lg border border-border">
              {event.who_should_attend}
            </p>
          </div>

          <div className="pt-8 pb-4 sticky bottom-0 bg-white border-t border-border mt-auto">
            <Button size="lg" className="w-full rounded-full text-lg h-12 gap-2">
              Register for this event
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
