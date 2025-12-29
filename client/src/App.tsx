import { Switch, Route } from "wouter";
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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/markets" component={Markets} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/partners" component={Partners} />
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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
