import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PrescriptionUpload from "./pages/PrescriptionUpload";
import BuyHold from "./pages/BuyHold";
import LabTests from "./pages/LabTests";
import HealthInsights from "./pages/HealthInsights";
import ScrollShop from "./pages/ScrollShop";
import Wallet from "./pages/Wallet";
import RemedReturn from "./pages/RemedReturn";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prescription-upload" element={<PrescriptionUpload />} />
            <Route path="/buy-hold" element={<BuyHold />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/health-insights" element={<HealthInsights />} />
            <Route path="/scroll-shop" element={<ScrollShop />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/remed-return" element={<RemedReturn />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
