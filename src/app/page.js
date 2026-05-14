import HeroSection from "../components/shared/HeroSection";
import AboutMe from "@/components/shared/AboutMe";
import Technologies from "@/components/shared/Technologies";
import Skills from "@/components/shared/Skills";
import Services from "@/components/shared/Services";
import NavbarDefault from "@/components/shared/NavbarDefault";
import Education from "@/components/shared/Education";
import ProjectsSection from "@/components/shared/ProjectsSection";
import ClientReview from "@/components/shared/ClientReview"; 
import Contact from "@/components/shared/Contact";
import Footer from "@/components/shared/Footer";

export default function Home() {
  
  return (
    <main className="relative">
      <NavbarDefault></NavbarDefault>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/50 blur-[500px]  " />
        <div className="absolute top-[30%] -right-[10%] w-[35%] h-[35%] rounded-full bg-green-400/50 blur-[500px]   duration-[15s]" />
        <div className="absolute top-[70%] left-[30%] w-[35%] h-[35%] rounded-full bg-cyan-400/40 blur-[580px]   duration-[15s]" />
        <div className="absolute top-[90%] left-[10%] w-[35%] h-[35%] rounded-full bg-pink-400/50 blur-[580px]   duration-[15s]" />
      </div>
      <HeroSection />
      <AboutMe />
      <Skills  />
      <Technologies />
      <Services />
      <Education />
      <ProjectsSection />
      <ClientReview />
      <Contact />
      <Footer />
    </main>
  );
}
