import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtsPage from "./pages/academics/arts";
import CommercePage from "./pages/academics/commerce";
import SciencePage from "./pages/academics/science";
// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import CalendarPage from "./pages/academics/calender";
import CommitteePage from "./pages/administration/CommitteePage";
import Downloads from "./pages/Downloads";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ApplyNow from "./pages/ApplyNow";
import GenericPage from "./pages/GenericPage";
import NotFound from "./pages/NotFound";

// Human Capital Pages
import TeachingStaff from "./pages/human-capital/TeachingStaff";

// Academics Pages
import FeeStructure from "./pages/academics/FeeStructure";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* About Us */}
          <Route path="/about/:page" element={<About />} />
          <Route path="/academics/calendar/:type" element={<CalendarPage />} />
          <Route path="/academics/calendar" element={<CalendarPage />} /> {/* optional: show list */}
         {/*  Administration routes */}
<Route path="/administration/committees/:type" element={<CommitteePage />} />
<Route path="/administration/committees" element={<CommitteePage />} />
<Route path="/administration/*" element={<GenericPage />} />




          {/* Downloads */}
          <Route path="/downloads" element={<Downloads />} />
          
          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Apply Now */}
          <Route path="/apply-now" element={<ApplyNow />} />
          
          {/* Human Capital */}
          <Route path="/human-capital/teaching-staff" element={<TeachingStaff />} />
          
          {/* Academics - Fee Structure */}
          <Route path="/academics/fee-structure/:program" element={<FeeStructure />} />
          <Route path="/academics/arts" element={<ArtsPage />} />
          <Route path="/academics/commerce" element={<CommercePage />} />
           <Route path="//academics/science" element={<SciencePage />} />

          {/* Generic Pages for all other navigation items */}
          <Route path="/administration/*" element={<GenericPage />} />
          <Route path="/human-capital/*" element={<GenericPage />} />
          <Route path="/academics/*" element={<GenericPage />} />
          

          <Route path="/student-corner/*" element={<GenericPage />} />
          <Route path="/information/*" element={<GenericPage />} />
          <Route path="/research/*" element={<GenericPage />} />
          <Route path="/placement/*" element={<GenericPage />} />
          <Route path="/iqac/*" element={<GenericPage />} />
          <Route path="/library/*" element={<GenericPage />} />
          <Route path="/reports/*" element={<GenericPage />} />
          <Route path="/feedback" element={<GenericPage />} />
          <Route path="/student-login" element={<GenericPage />} />
          <Route path="/staff-login" element={<GenericPage />} />
          <Route path="/privacy" element={<GenericPage />} />
          <Route path="/terms" element={<GenericPage />} />
          <Route path="/sitemap" element={<GenericPage />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
