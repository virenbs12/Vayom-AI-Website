import React, { useState, useEffect } from "react";
import { placeholderEvents, Event } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { EventDrawer } from "./EventDrawer";

interface EventsTabProps {
  searchQuery?: string;
}

export function EventsTab({ searchQuery = "" }: EventsTabProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Filters
  const [type, setType] = useState("all");
  const [timezone, setTimezone] = useState("local");
  const [dateRange, setDateRange] = useState("all");

  // Simulate API fetch
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setEvents(placeholderEvents);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event);
    setDrawerOpen(true);
  };

  const filteredEvents = events.filter((event) => {
    if (type !== "all" && event.type !== type) return false;
    if (searchQuery && !event.name.toLowerCase().includes(searchQuery.toLowerCase()) && !event.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-display font-bold text-primary">Events</h2>
          <p className="text-muted-foreground">
            Live briefings and walk-throughs focused on real workflows and output formats.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-[160px] bg-white">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Webinar">Webinar</SelectItem>
              <SelectItem value="Workshop">Workshop</SelectItem>
              <SelectItem value="Product briefing">Product briefing</SelectItem>
              <SelectItem value="Partner briefing">Partner briefing</SelectItem>
            </SelectContent>
          </Select>

          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="local">Local Time</SelectItem>
              <SelectItem value="eastern">Eastern Time</SelectItem>
              <SelectItem value="utc">UTC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-border text-muted-foreground font-medium uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 w-1/4">Name</th>
                <th className="px-6 py-4 w-1/3">Description</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading ? (
                // Loading Skeleton
                [1, 2, 3].map((i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 rounded w-3/4"></div></td>
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 rounded w-full mb-2"></div><div className="h-3 bg-slate-50 rounded w-1/2"></div></td>
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 rounded w-20"></div></td>
                    <td className="px-6 py-4"><div className="h-4 bg-slate-100 rounded w-32"></div></td>
                    <td className="px-6 py-4"><div className="h-8 bg-slate-100 rounded w-24 ml-auto"></div></td>
                  </tr>
                ))
              ) : filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <tr key={event.event_id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-foreground">
                      {event.name}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      <p className="line-clamp-2 mb-1">{event.description}</p>
                      <button 
                        onClick={() => handleViewDetails(event)}
                        className="text-primary text-xs font-medium hover:underline opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View details
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {event.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">
                          {format(new Date(event.start_datetime), "MMM d, yyyy")}
                        </span>
                        <span className="text-xs">
                          {format(new Date(event.start_datetime), "h:mm a")}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button size="sm" className="rounded-full px-6">
                        Register
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                    <Filter className="w-8 h-8 mx-auto mb-3 opacity-20" />
                    {searchQuery ? `No events found for "${searchQuery}"` : "No events match your filters."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <EventDrawer 
        event={selectedEvent} 
        open={drawerOpen} 
        onOpenChange={setDrawerOpen} 
      />
    </div>
  );
}
