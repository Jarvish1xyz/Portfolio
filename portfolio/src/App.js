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
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-5 w-72 h-72 bg-blue-500/40 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-10 right-5 w-72 h-72 bg-purple-500/40 blur-[90px] rounded-full"></div>
      <div className="absolute top-180 right-5 w-72 h-72 bg-blue-500/40 blur-[90px] rounded-full"></div>
      <div className="absolute top-330 left-5 w-72 h-72 bg-purple-500/40 blur-[90px] rounded-full"></div>
      <div className="absolute top-400 right-5 w-72 h-72 bg-blue-500/40 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-520 right-5 w-72 h-72 bg-blue-500/40 blur-[90px] rounded-full"></div>
      <div className="absolute bottom-320 left-5 w-72 h-72 bg-purple-500/40 blur-[90px] rounded-full"></div>

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
        <Hero/>
      </section>

      <section ref={aboutRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <About />
      </section>
      
      <section ref={projectsRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Projects/>
      </section>
      
      <section ref={skillsRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Skills/>
      </section>
      
      <section ref={contactRef} className="min-h-screen flex items-center justify-center px-6 md:px-16 relative z-10">
        <Contact/>
      </section>

    </div>
  );
}