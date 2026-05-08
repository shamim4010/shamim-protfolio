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
      "Exploring backend with Node.js, Express and MongoDB. Learning how APIs work, authentication systems and database structure.",
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-6xl font-black text-white">
            My
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              Learning Journey
            </span>
          </h2>

          <p className="mt-6 text-zinc-400">
            From zero coding knowledge → full-stack developer journey (2026 → ongoing)
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#00ff88]/30 to-transparent" />

          <div className="space-y-14">

            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center justify-between gap-8 ${
                  i % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >

                {/* CARD */}
                <div className="w-[45%]">

                  <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#00ff88]/30 transition">

                    {/* TYPE BADGE */}
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
                </div>

                {/* CENTER DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.6)] z-10" />

                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300">
            🌱 Currently growing from beginner to full-stack developer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;