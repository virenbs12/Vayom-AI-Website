import { Switch, Route, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Markets from "@/pages/Markets";
import BusinessFunctions from "@/pages/BusinessFunctions";
import Pricing from "@/pages/Pricing";
import Partners from "@/pages/Partners";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";
import SMSNotificationsConsent from "@/pages/SMSNotificationsConsent";

function ScrollToTop() {
  const [location] = useLocation();
  const prevLocation = useRef(location);
  
  useEffect(() => {
    // Only scroll to top when navigating to a different page
    if (prevLocation.current !== location) {
      window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/markets" component={Markets} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/partners" component={Partners} />
      <Route path="/resources" component={Resources} />
      <Route path="/company" component={Company} />
      <Route path="/business-functions" component={BusinessFunctions} />
      <Route path="/sms-notifications-consent" component={SMSNotificationsConsent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <SonnerToaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
