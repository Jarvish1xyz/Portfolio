import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Layers3,
    Server,
    Database,
    Wrench,
    Sparkles,
} from "lucide-react";

export default function Skills({ sectionRef }) {
    const techStack = [
        {
            title: "Frontend",
            icon: <Layers3 size={22} />,
            color: "from-blue-500 to-cyan-400",
            tech: [
                "React.js",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "Bootstrap",
                "Responsive UI",
            ],
        },
        {
            title: "Backend",
            icon: <Server size={22} />,
            color: "from-cyan-400 to-blue-500",
            tech: [
                "Node.js",
                "Express.js",
                "Nest.js",
                "REST APIs",
                "JWT Auth",
                "MVC Pattern",
            ],
        },
        {
            title: "Database",
            icon: <Database size={22} />,
            color: "from-indigo-500 to-blue-500",
            tech: [
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Neon",
                "Firebase",
            ],
        },
        {
            title: "Tools",
            icon: <Wrench size={22} />,
            color: "from-cyan-300 to-sky-500",
            tech: [
                "Git",
                "GitHub",
                "Github Codespaces",
                "Postman",
                "VS Code",
                "Vercel",
                "Render",
                "Netlify",
            ],
        },
    ];

    const strengths = [
        "Clean Code",
        "Modern UI",
        "Fast Learner",
        "Problem Solving",
        "API Building",
        "Team Work",
        "Creative Thinking",
        "Debugging",
    ];

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="min-h-screen bg-[#050505] text-white px-4 sm:px-6 md:px-16 py-16 md:py-24 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-5 right-110 w-72 h-72 bg-blue-500/20 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-blue-400 tracking-[4px] uppercase text-sm md:text-base mb-3">
                        What I Use
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold">
                        My{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Skills
                        </span>
                    </h2>

                    <p className="text-white/50 mt-5 max-w-2xl mx-auto">
                        Tools, technologies and strengths I use to craft modern digital
                        products.
                    </p>
                </motion.div>

                {/* Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6 auto-rows-auto md:auto-rows-[220px]">

                    {/* Big Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-3 md:row-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-8 h-auto"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-black flex items-center justify-center">
                                <Code2 size={26} />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold">
                                    Full Stack Builder
                                </h3>
                                <p className="text-white/50 text-sm md:text-base">
                                    Frontend + Backend + Growth
                                </p>
                            </div>
                        </div>

                        <p className="text-white/65 leading-relaxed mb-8">
                            I build premium websites using React ecosystem, scalable backend
                            APIs, modern databases and clean UI systems with performance in
                            mind.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                ["Projects", "2+"],
                                ["Tech Stack", "15+"],
                                ["Learning", "Daily"],
                                ["Focus", "Quality"],
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl bg-white/5 border border-white/10 p-4"
                                >
                                    <p className="text-white/45 text-sm md:text-base">
                                        {item[0]}
                                    </p>
                                    <h4 className="text-2xl font-bold text-cyan-300 mt-2">
                                        {item[1]}
                                    </h4>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skill Cards */}
                    {techStack.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="md:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-6 h-auto hover:scale-[1.02] transition"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} text-black flex items-center justify-center`}
                                >
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.tech.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-2 rounded-full bg-white/10 text-sm md:text-base text-white/80 hover:bg-white/15 transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Strength Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 md:p-6"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <Sparkles className="text-cyan-300" />
                            <h3 className="text-xl font-semibold">
                                Strengths & Work Style
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {strengths.map((item, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-white/80 hover:scale-105 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}