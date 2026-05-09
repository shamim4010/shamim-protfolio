"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Started Programming Journey",
    company: "Hero Programming Course",
    period: "2026 - Present",
    type: "Learning Phase",
    description:
      "Started my full-stack development journey. Currently learning HTML, CSS, JavaScript, React and modern web fundamentals with consistent practice and real projects.",
  },
  {
    title: "Frontend Foundation",
    company: "Self Practice + Projects",
    period: "2026",
    type: "Building Phase",
    description:
      "Built small UI projects using HTML, CSS, JavaScript and React. Focused on understanding components, state, and responsive design.",
  },
  {
    title: "Full Stack Exploration",
    company: "Learning Stage",
    period: "2026 - Ongoing",
    type: "Growing Phase",
    description:
      "Exploring backend with Node.js, Express and MongoDB. Learning APIs, authentication systems, and database architecture.",
  },
];

const Experience = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[#050505]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            My
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              Learning Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400"
          >
            From zero → full-stack developer (2026 → ongoing)
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">

          {/* ANIMATED LINE */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#00ff88]/0 via-[#00ff88]/40 to-transparent"
          />

          <div className="space-y-16">

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* CARD */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="w-full md:w-[45%]"
                >
                  <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#00ff88]/30 transition-all duration-300 shadow-[0_0_40px_rgba(0,255,136,0.05)]">

                    {/* TYPE */}
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#00ff88]">
                      {exp.type}
                    </span>

                    <h3 className="text-xl font-bold text-white mt-2">
                      {exp.title}
                    </h3>

                    <p className="text-zinc-400 text-sm mt-1">
                      {exp.company}
                    </p>

                    <p className="text-zinc-500 text-xs mt-2">
                      {exp.period}
                    </p>

                    <p className="text-zinc-300 text-sm mt-4 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>

                {/* CENTER DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">

                  {/* PULSE RING */}
                  <motion.div
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute w-8 h-8 rounded-full bg-[#00ff88]/20 blur-xl"
                  />

                  {/* MAIN DOT */}
                  <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.7)] z-10" />
                </div>

                {/* EMPTY SIDE */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOOT NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 backdrop-blur-xl">
            🌱 Growing daily → Next goal: Advanced Full Stack + AI Engineer
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;