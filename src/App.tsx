
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Documentation from "./pages/Documentation";
import Career from "./pages/Career";
import API from "./pages/API";
import Reviews from "./pages/Reviews";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/career" element={<Career />} />
          <Route path="/api" element={<API />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
