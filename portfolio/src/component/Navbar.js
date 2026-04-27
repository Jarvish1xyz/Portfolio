import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ refs }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = useMemo(
    () => [
      { name: "Home", key: "home", ref: refs.homeRef },
      { name: "About", key: "about", ref: refs.aboutRef },
      { name: "Projects", key: "projects", ref: refs.projectsRef },
      { name: "Skills", key: "skills", ref: refs.skillsRef },
      { name: "Contact", key: "contact", ref: refs.contactRef },
    ],
    [refs]
  );

  /* Scroll To Section */
  const scrollToSection = (ref, key) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActive(key);
      setOpen(false);
    }
  };

  /* Active Link on Scroll */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 220;

      navLinks.forEach((item) => {
        const section = item.ref?.current;

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPos >= top &&
            scrollPos < top + height
          ) {
            setActive(item.key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed top-0 left-0 w-full z-50 px-3 md:px-10 pt-3 text-xl md:text-2xl font-bold"
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl border border-white/10 backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "bg-black/70 py-2 px-5 shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
            : "bg-white/5 py-3   px-6"
        }`}
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() =>
              scrollToSection(refs.homeRef, "home")
            }
            className="text-2xl font-bold"
          >
            <span className="text-blue-400">&lt;</span>
            Milan
            <span className="text-cyan-300"> /&gt;</span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-3 bg-white/[0.03] p-2 rounded-full border border-white/10">

            {navLinks.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() =>
                    scrollToSection(item.ref, item.key)
                  }
                  className={`relative cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active === item.key
                      ? "text-black"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {/* Background changes with active section */}
                  {active === item.key && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                    />
                  )}

                  <span className="relative z-10">
                    {item.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition">
            Hire me!
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-xl bg-white/5"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-2">

                {navLinks.map((item) => (
                  <button
                    key={item.key}
                    onClick={() =>
                      scrollToSection(item.ref, item.key)
                    }
                    className={`text-left px-4 py-3 rounded-2xl transition ${
                      active === item.key
                        ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold"
                        : "bg-white/5 text-white/70"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}