
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MessageAndLeaders from "./pages/MessageAndLeaders";
import DuHeads from "./pages/DuHeads";
import EditorialBoard from "./pages/EditorialBoard";
import TableOfContents from "./pages/TableOfContents";
import NotFound from "./pages/NotFound";

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
          <Route path="/editorial-board" element={<EditorialBoard />} />
          <Route path="/table-of-contents" element={<TableOfContents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
