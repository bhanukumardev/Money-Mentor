import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FirePlanner from "./pages/FirePlanner.tsx";
import MoneyScore from "./pages/MoneyScore.tsx";
import LifeEvents from "./pages/LifeEvents.tsx";
import TaxWizard from "./pages/TaxWizard.tsx";
import CouplesPlanner from "./pages/CouplesPlanner.tsx";
import MFXray from "./pages/MFXray.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fire-planner" element={<FirePlanner />} />
          <Route path="/money-score" element={<MoneyScore />} />
          <Route path="/life-events" element={<LifeEvents />} />
          <Route path="/tax-wizard" element={<TaxWizard />} />
          <Route path="/couples-planner" element={<CouplesPlanner />} />
          <Route path="/mf-xray" element={<MFXray />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
