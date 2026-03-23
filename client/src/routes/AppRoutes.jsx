import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import About from "../pages/About";
import Services from "../pages/Services";
import OurTeam from "../pages/OurTeam";
import IELTSCourse from "../pages/IELTSCourse";
import BlogPage from "../pages/BlogPage";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import CategoryPage from "../pages/CategoryPage";
import UniversitySection from "../pages/UniversitySection";
import ApplicationForm from "../pages/ApplicationForm";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/ielts" element={<IELTSCourse />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/University" element={<UniversitySection />} />
        <Route path="/University/apply/:type" element={<ApplicationForm />} />
        <Route path="/gallery/:category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
