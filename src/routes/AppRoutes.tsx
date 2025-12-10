// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";

import { PageLayout } from "@/components/layout/PageLayout";
import Index from "@/pages/Index";
import HtmlIndex from "@/pages/html/Index";
import ComputerIndex from "@/pages/computer/Index";
import AzureIndex from "@/pages/azure/Index";
import MsWordIndex from "@/pages/msword/Index";
import MsPowerPointIndex from "@/pages/mspowerpoint/Index";

// MS PowerPoint Pages
import InvokingMicrosoftPowerPoint from "@/pages/mspowerpoint/invoking_microsoft_powerpoint";
import GettingAheadWithPowerPoint from "@/pages/mspowerpoint/getting_ahead_with_powerpoint";
import SlideLayouts from "@/pages/mspowerpoint/slide_layouts";
import GettingMoreFamiliarWithPowerPoint from "@/pages/mspowerpoint/getting_more_familiar_with_powerpoint";
import EditingASlide from "@/pages/mspowerpoint/editing_a_slide";
import WorkingWithSlides from "@/pages/mspowerpoint/working_with_slides";
import SlideBackground from "@/pages/mspowerpoint/slide_background";
import ApplyingThemes from "@/pages/mspowerpoint/applying_themes";
import PowerPointViews from "@/pages/mspowerpoint/powerpoint_views";
import WorkingWithObjects from "@/pages/mspowerpoint/working_with_objects";
import InsertingBulletedOrNumberedLists from "@/pages/mspowerpoint/inserting_bulleted_or_numbered_lists";
import InsertingClipArtPictures from "@/pages/mspowerpoint/inserting_clip_art_pictures";
import Charts from "@/pages/mspowerpoint/charts";
import CreatingTables from "@/pages/mspowerpoint/creating_tables";
import OrganizationChart from "@/pages/mspowerpoint/organization_chart";
import UsingSlideTransitions from "@/pages/mspowerpoint/using_slide_transitions";
import Animations from "@/pages/mspowerpoint/animations";
import SlideShowOptions from "@/pages/mspowerpoint/slide_show_options";
import ActionButtons from "@/pages/mspowerpoint/action_buttons";
import RehearseTimings from "@/pages/mspowerpoint/rehearse_timings";
import CustomShow from "@/pages/mspowerpoint/custom_show";
import HeaderAndFooter from "@/pages/mspowerpoint/header_and_footer";
import HideOrShowSlide from "@/pages/mspowerpoint/hide_or_show_slide";
import SoundMusicAndVideo from "@/pages/mspowerpoint/sound_music_and_video";
import Printing from "@/pages/mspowerpoint/printing";
import Exercises from "@/pages/mspowerpoint/exercises";
import SlideShow from "@/pages/mspowerpoint/slide_show";

import Privacy from "@/pages/Privacy";
import Service from "@/pages/Service";
import Copyright from "@/pages/Copyright";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

import tutorials from "@/data/tutorials.json";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import UserLogin from "@/pages/auth/UserLogin";
import UserSignup from "@/pages/auth/UserSignup";
import AdminLogin from "@/pages/auth/AdminLogin";
import AdminDashboard from "@/pages/dashboard/admin/Index";
import UserDashboard from "@/pages/dashboard/user/Index";
import TutorialManagement from "@/pages/dashboard/admin/tutorials/Index";

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

      {/* Dashboards - Protected Routes */}
      <Route path="dashboard/admin" element={
        <ProtectedRoute requireAdmin>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      <Route path="dashboard/admin/tutorials" element={
        <ProtectedRoute requireAdmin>
          <TutorialManagement />
        </ProtectedRoute>
      } />
      <Route path="dashboard/user" element={
        <ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>
      } />

      {/* Static informational pages */}
      <Route path="privacy" element={<Privacy />} />
      <Route path="service" element={<Service />} />
      <Route path="copyright" element={<Copyright />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />


      <Route path="/" element={<PageLayout />}>
        {/* Section landing pages */}
        <Route path="computer" element={<ComputerIndex />} />
        <Route path="azure" element={<AzureIndex />} />
        <Route path="html" element={<HtmlIndex />} />
        {/* Redirect legacy paths containing spaces (e.g. '/Azure Cloud/...') to '/azure' */}
        <Route path="Azure Cloud/*" element={<Navigate to="/azure" replace />} />
        <Route path="msword" element={<MsWordIndex />} />

        {/* MS PowerPoint Routes */}
        <Route path="mspowerpoint/introduction" element={<MsPowerPointIndex />} />
        <Route path="mspowerpoint" element={<MsPowerPointIndex />} />
        <Route path="mspowerpoint/invoking_microsoft_powerpoint" element={<InvokingMicrosoftPowerPoint />} />
        <Route path="mspowerpoint/getting_ahead_with_powerpoint" element={<GettingAheadWithPowerPoint />} />
        <Route path="mspowerpoint/slide_layouts" element={<SlideLayouts />} />
        <Route path="mspowerpoint/getting_more_familiar_with_powerpoint" element={<GettingMoreFamiliarWithPowerPoint />} />
        <Route path="mspowerpoint/editing_a_slide" element={<EditingASlide />} />
        <Route path="mspowerpoint/working_with_slides" element={<WorkingWithSlides />} />
        <Route path="mspowerpoint/slide_background" element={<SlideBackground />} />
        <Route path="mspowerpoint/applying_themes" element={<ApplyingThemes />} />
        <Route path="mspowerpoint/powerpoint_views" element={<PowerPointViews />} />
        <Route path="mspowerpoint/working_with_objects" element={<WorkingWithObjects />} />
        <Route path="mspowerpoint/inserting_bulleted_or_numbered_lists" element={<InsertingBulletedOrNumberedLists />} />
        <Route path="mspowerpoint/inserting_clip_art_pictures" element={<InsertingClipArtPictures />} />
        <Route path="mspowerpoint/charts" element={<Charts />} />
        <Route path="mspowerpoint/creating_tables" element={<CreatingTables />} />
        <Route path="mspowerpoint/organization_chart" element={<OrganizationChart />} />
        <Route path="mspowerpoint/using_slide_transitions" element={<UsingSlideTransitions />} />
        <Route path="mspowerpoint/animations" element={<Animations />} />
        <Route path="mspowerpoint/slide_show_options" element={<SlideShowOptions />} />
        <Route path="mspowerpoint/action_buttons" element={<ActionButtons />} />
        <Route path="mspowerpoint/rehearse_timings" element={<RehearseTimings />} />
        <Route path="mspowerpoint/custom_show" element={<CustomShow />} />
        <Route path="mspowerpoint/header_and_footer" element={<HeaderAndFooter />} />
        <Route path="mspowerpoint/hide_or_show_slide" element={<HideOrShowSlide />} />
        <Route path="mspowerpoint/sound_music_and_video" element={<SoundMusicAndVideo />} />
        <Route path="mspowerpoint/printing" element={<Printing />} />
        <Route path="mspowerpoint/exercises" element={<Exercises />} />
        <Route path="mspowerpoint/slide_show" element={<SlideShow />} />

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
