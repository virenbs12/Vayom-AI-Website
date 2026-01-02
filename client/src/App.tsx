import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Markets from "@/pages/Markets";
import BusinessFunctions from "@/pages/BusinessFunctions";
import Pricing from "@/pages/Pricing";
import Partners from "@/pages/Partners";
import Resources from "@/pages/Resources";
import Company from "@/pages/Company";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <Route path="/functions" component={BusinessFunctions} />
      <Route path="/business-functions" component={BusinessFunctions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
