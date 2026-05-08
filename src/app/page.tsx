import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/effects/CustomCursor";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

export default function Home() {
  return (
    <main className="relative bg-primary-black min-h-screen selection:bg-neon-green/30 selection:text-neon-green">
      {/* Cinematic Effects */}
      <CustomCursor />
      <NoiseOverlay />
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[50%] bg-cyan-glow/5 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
