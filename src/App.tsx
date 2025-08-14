
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Consultations from "./pages/Consultations";
import LifestylePlans from "./pages/LifestylePlans";
import Lab2Life from "./pages/Lab2Life";

import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ChatBot";

import PathOLife from "./pages/patholife";
import Founder from "./pages/founder";
import AdminDashboard from "./pages/AdminDashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnsRefundPolicy from "./pages/ReturnsRefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import { WorkshopProvider } from "./contexts/WorkshopContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WorkshopProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/consultations" element={<Consultations />} />
            <Route path="/wellness-plans" element={<LifestylePlans />} />
            <Route path="/lab2life" element={<Lab2Life />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/patholife" element={<PathOLife />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/returns-refund-policy" element={<ReturnsRefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/doctor-panel" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </WorkshopProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
