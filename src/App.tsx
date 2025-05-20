
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MessageAndLeaders from "./pages/MessageAndLeaders";
import DuHeads from "./pages/DuHeads";
import TableOfContents from "./pages/TableOfContents";
import NotFound from "./pages/NotFound";
import Segments from "./pages/Segments";
import IpCaseStudies from "./pages/segments/IpCaseStudies";
import PeCaseStudies from "./pages/segments/PeCaseStudies";
import HighTechCaseStudies from "./pages/segments/HighTechCaseStudies";
import MedTechCaseStudies from "./pages/segments/MedTechCaseStudies";
import MobilityCaseStudies from "./pages/segments/MobilityCaseStudies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/message-leaders" element={<MessageAndLeaders />} />
          <Route path="/du-heads" element={<DuHeads />} />
          <Route path="/table-of-contents" element={<TableOfContents />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/segments/ip" element={<IpCaseStudies />} />
          <Route path="/segments/pe" element={<PeCaseStudies />} />
          <Route path="/segments/high-tech" element={<HighTechCaseStudies />} />
          <Route path="/segments/med-tech" element={<MedTechCaseStudies />} />
          <Route path="/segments/mobility" element={<MobilityCaseStudies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
