

export default function Home() {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">

                {/* Left Content */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hi, I'm{" "}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Milan Sinha
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl mt-4 text-white/70">
                        Full-Stack Developer
                    </h2>

                    <p className="mt-6 text-white/50 max-w-lg leading-relaxed">
                        I create stylish, modern and highly interactive websites using
                        React.js & Tailwind CSS with smooth animations and premium UI.
                    </p>

                    <div className="mt-8 flex gap-4 flex-wrap">
                        <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition">
                            View Work
                        </button>

                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold hover:scale-105 transition">
                            Hire Me
                        </button>
                    </div>
                </div>

                {/* Right Glass Card */}
                <div className="flex justify-center">
                    <div className="w-[340px] h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] p-6 relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full"></div>

                        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                            <img
                                src="https://i.pravatar.cc/300"
                                alt="profile"
                                className="w-36 h-36 rounded-full border-4 border-white/20 object-cover"
                            />

                            <p className="text-white/60 mt-2">Creative Web Developer</p>

                            <div className="mt-6 flex gap-3">
                                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                                    React
                                </span>
                                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                                    Tailwind
                                </span>
                                <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                                    UI/UX
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}