import React, { useRef } from "react";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Contact from "./component/Contact";

export default function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-x-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-0 w-44 md:w-72 h-44 md:h-72 bg-blue-500/30 blur-[80px] rounded-full" />
      <div className="absolute top-[35%] right-0 w-44 md:w-72 h-44 md:h-72 bg-purple-500/30 blur-[80px] rounded-full" />
      <div className="absolute bottom-20 left-10 w-44 md:w-72 h-44 md:h-72 bg-cyan-500/30 blur-[80px] rounded-full" />
      
      
      {/* Navbar */}
      <Navbar refs={{
        homeRef,
        aboutRef,
        projectsRef,
        skillsRef,
        contactRef,
      }} />

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Hero />
      </section>

      <section ref={aboutRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <About />
      </section>

      <section ref={projectsRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Projects />
      </section>

      <section ref={skillsRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Skills />
      </section>

      <section ref={contactRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Contact />
      </section>

    </div>
  );
}