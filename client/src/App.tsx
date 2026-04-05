import { Switch, Route, useLocation, Router } from "wouter";
import { useEffect, useRef } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RIAA from "@/pages/RIAA";
import { RIAAReasoningWidget, RIAAChatWidget } from "@/components/RIAAReasoningWidget";
import Markets from "@/pages/Markets";
import BusinessFunctions from "@/pages/BusinessFunctions";
import Pricing from "@/pages/Pricing";
import Partners from "@/pages/Partners";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";
import SMSNotificationsConsent from "@/pages/SMSNotificationsConsent";
import Terms from "@/pages/Terms";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function ScrollToTop() {
  const [location] = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      // Only scroll to top when navigating to a different page
      if (prevLocation.current !== location) {
        window.scrollTo(0, 0);
        prevLocation.current = location;
      }
    }
  }, [location]);

  return null;
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/riaa" component={RIAA} />
      <Route path="/markets" component={Markets} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/partners" component={Partners} />
      <Route path="/resources" component={Resources} />
      <Route path="/company" component={Company} />
      <Route path="/business-functions" component={BusinessFunctions} />
      <Route
        path="/sms-notifications-consent"
        component={SMSNotificationsConsent}
      />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

interface AppProps {
  ssrLocation?: string;
}

function App({ ssrLocation }: AppProps = {}) {
  // Static location hook for SSR
  const staticLocationHook = (): [string, (path: string) => void] => {
    const path = ssrLocation || "/";
    return [path, () => {}];
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router hook={ssrLocation ? staticLocationHook : undefined}>
          <Toaster />
          <SonnerToaster />
          <ScrollToTop />
          <Routes />
          <RIAAChatWidget />
          <RIAAReasoningWidget />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
