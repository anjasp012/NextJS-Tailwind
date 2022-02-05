import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
}
