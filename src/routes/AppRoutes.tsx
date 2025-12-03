// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";

import { PageLayout } from "@/components/layout/PageLayout";
import Index from "@/pages/Index";
import HtmlIndex from "@/pages/html/Index";
import ComputerIndex from "@/pages/computer/Index";
import AzureIndex from "@/pages/azure/Index";
import MsWordIndex from "@/pages/msword/Index";
import MsPowerPointIndex from "@/pages/mspowerpoint/Index";
import Privacy from "@/pages/Privacy";
import Service from "@/pages/Service";
import Copyright from "@/pages/Copyright";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

import tutorials from "@/data/tutorials.json";
import { Navigate } from "react-router-dom";
import UserLogin from "@/pages/auth/UserLogin";
import UserSignup from "@/pages/auth/UserSignup";
import AdminLogin from "@/pages/auth/AdminLogin";
import AdminDashboard from "@/pages/dashboard/admin/Index";
import UserDashboard from "@/pages/dashboard/user/Index";

// Generic placeholder for lesson pages
const LessonPage = ({ title }: { title: string }) => (
  <main style={{ padding: "5px", marginLeft: "15%", marginTop: "5%" }}>
    <h1 className="page-title">{title}</h1>
    <p className="page-subtitle">Content coming soon...</p>
  </main>
);

export const AppRoutes = () => {
  return (
    <Routes>
      {/* All pages are inside PageLayout */}

       <Route index element={<Index />} />
       {/* Auth routes */}
        <Route path="auth/login" element={<UserLogin />} />
        <Route path="auth/signup" element={<UserSignup />} />
        <Route path="auth/admin" element={<AdminLogin />} />

        {/* Dashboards */}
        <Route path="dashboard/admin" element={<AdminDashboard />} />
        <Route path="dashboard/user" element={<UserDashboard />} />

          {/* Static informational pages */}
  <Route path="privacy" element={<Privacy />} />
  <Route path="service" element={<Service />} />
  <Route path="copyright" element={<Copyright />} />
  <Route path="contact" element={<Contact />} />
  <Route path="about" element={<About />} />


      <Route path="/" element={<PageLayout />}>
        
        
        {/* Home page */}
       

        {/* Section landing pages */}
  <Route path="computer" element={<ComputerIndex />} />

  <Route path="azure" element={<AzureIndex />} />

  <Route path="html" element={<HtmlIndex />} />
  {/* Redirect legacy paths containing spaces (e.g. '/Azure Cloud/...') to '/azure' */}
  <Route path="Azure Cloud/*" element={<Navigate to="/azure" replace />} />
        <Route path="msword" element={<MsWordIndex />} />
        <Route path="mspowerpoint" element={<MsPowerPointIndex />} />



        {/* Lesson pages generated from tutorials.json */}
        {Object.entries(tutorials).map(([sectionKey, section]) =>
          section.pages.map((page, i) => (
            <Route
              key={`${sectionKey}-${i}`}
              path={page.path}
              element={<LessonPage title={page.title} />}
            />
          ))
        )}

        {/* Fallback 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
