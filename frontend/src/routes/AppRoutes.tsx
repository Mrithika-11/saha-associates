import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Services from "@/pages/Services/Services";
import Projects from "@/pages/Projects/Projects";
import ProjectDetail from "@/pages/ProjectDetail/ProjectDetail";
import KnowledgeCenter from "@/pages/KnowledgeCenter/KnowledgeCenter";
import ArticleDetail from "@/pages/ArticleDetail/ArticleDetail";
import Careers from "@/pages/Careers/Careers";
import Contact from "@/pages/Contact/Contact";
import NotFound from "@/pages/NotFound/NotFound";

import StructuralDesign from "@/pages/ServicesDetail/StructuralDesign";
import ArchitecturalConsultancy from "@/pages/ServicesDetail/ArchitecturalConsultancy";
import ConstructionManagement from "@/pages/ServicesDetail/ConstructionManagement";
import ProjectPlanning from "@/pages/ServicesDetail/ProjectPlanning";
import BuildingApproval from "@/pages/ServicesDetail/BuildingApproval";
import SiteSupervision from "@/pages/ServicesDetail/SiteSupervision";
import QuantitySurveying from "@/pages/ServicesDetail/QuantitySurveying";
import InteriorConsultation from "@/pages/ServicesDetail/InteriorConsultation";

import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";

import Terms from "@/pages/Terms/Terms";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public site */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/structural-design"
          element={<StructuralDesign />}
        />
        <Route
          path="/services/architectural-consultancy"
          element={<ArchitecturalConsultancy />}
        />
        <Route
          path="/services/construction-management"
          element={<ConstructionManagement />}
        />
        <Route
          path="/services/project-planning"
          element={<ProjectPlanning />}
        />
        <Route
          path="/services/building-approval"
          element={<BuildingApproval />}
        />
        <Route
          path="/services/site-supervision"
          element={<SiteSupervision />}
        />
        <Route
          path="/services/quantity-surveying"
          element={<QuantitySurveying />}
        />
        <Route
          path="/services/interior-consultation"
          element={<InteriorConsultation />}
        />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/knowledge-center" element={<KnowledgeCenter />} />
        <Route path="/knowledge-center/:slug" element={<ArticleDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
