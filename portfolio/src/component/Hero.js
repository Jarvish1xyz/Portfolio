import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import image from '../assets/image.jpg';
import resume from '../public/Milan-Resume.pdf'

const roles = [
    "Frontend Developer",
    "React Developer",
    "Creative UI Designer",
    "Future Full-Stack Dev",
];

export default function Hero({ sectionRef }) {

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const timer = setTimeout(() => {
            if (!deleting) {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex === currentRole.length) {
                    setDeleting(true);
                }
            } else {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, deleting ? 50 : 100);

        return () => clearTimeout(timer);
    }, [charIndex, deleting, roleIndex]);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="min-h-screen bg-[#050505] text-white px-4 sm:px-6 md:px-16 pt-28 md:pt-32 pb-14 md:pb-20 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="order-2 md:order-1"
                >

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Milan
                        </span>
                    </h1>

                    {/* Typing Text */}
                    <h2 className="text-xl sm:text-2xl md:text-4xl mt-5 text-white/80 min-h-[50px]">
                        {text}
                        <span className="text-blue-400 animate-pulse">|</span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg mt-6 text-white/60 leading-relaxed max-w-xl">
                        I build modern, clean and interactive websites with React.js,
                        Tailwind CSS and smooth premium user experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href={resume}
                            download={resume}
                        >
                            <button className="px-7 cursor-pointer py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition flex items-center gap-2">
                                Resume <Download size={18} />
                            </button>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 grid grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-400">3+</h3>
                            <p className="text-white/50 text-sm mt-1">Projects</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-300">2+</h3>
                            <p className="text-white/50 text-sm mt-1">Years Learning</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white">100%</h3>
                            <p className="text-white/50 text-sm mt-1">Dedication</p>
                        </div>
                    </div>

                    {/* Currently Learning */}
                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 max-w-xl">
                        <p className="text-sm text-blue-300 mb-2">Currently Learning</p>

                        <div className="flex flex-wrap gap-2">
                            {["Cybersecurity", "Linux", "Backend Systems"].map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-2 rounded-full bg-white/10 text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center order-1 md:order-2"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut",
                        }}
                        className="w-full max-w-[360px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] p-6"
                    >
                        {/* Image */}
                        <img
                            src={image}
                            alt="profile"
                            className="w-full h-60 sm:h-72 object-cover rounded-2xl border border-white/10"
                        />

                        {!isMobile && (
                            <>
                                <h3 className="text-2xl font-semibold mt-5">Milan</h3>
                                <p className="text-white/50 mt-1">Creative Developer</p>

                                <div className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-4 text-sm font-mono">
                                    <p className="text-green-400">$ npm run career</p>
                                    <p className="text-white/70 mt-2">✔ Build UI</p>
                                    <p className="text-white/70">✔ Write Clean Code</p>
                                    <p className="text-white/70">✔ Keep Learning</p>
                                </div>
                            </>
                        )}

                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}