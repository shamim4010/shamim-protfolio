"use client";

import React from "react";
import { motion } from "framer-motion";

/* ---------------- SAFE EASING (IMPORTANT FIX) ---------------- */
const smoothEase = (t: number) =>
  t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

/* ---------------- DATA ---------------- */
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

/* ---------------- VARIANTS ---------------- */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = (i: number) => {
  const isLeft = i % 2 === 0;

  return {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: 40,
      scale: 0.95,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: smoothEase, // ✅ FIXED HERE
      },
    },
  };
};

const textVariant = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: smoothEase, // ✅ FIXED HERE
    },
  },
};

/* ---------------- COMPONENT ---------------- */
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
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
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
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400"
          >
            From zero → full-stack developer (2026 → ongoing)
          </motion.p>
        </div>

        {/* TIMELINE */}
        <div className="relative max-w-5xl mx-auto">

          {/* LINE */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 1.4,
              ease: smoothEase, // ✅ FIXED HERE
            }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#00ff88]/0 via-[#00ff88]/40 to-transparent"
          />

          {/* CARDS */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-20"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={cardVariant(i)}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* CARD */}
                <div className="w-full md:w-[45%]">
                  <div className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

                    <motion.span
                      variants={textVariant}
                      className="text-[10px] tracking-[0.3em] uppercase text-[#00ff88]"
                    >
                      {exp.type}
                    </motion.span>

                    <motion.h3
                      variants={textVariant}
                      className="text-xl font-bold text-white mt-2"
                    >
                      {exp.title}
                    </motion.h3>

                    <motion.p
                      variants={textVariant}
                      className="text-zinc-400 text-sm mt-1"
                    >
                      {exp.company}
                    </motion.p>

                    <motion.p
                      variants={textVariant}
                      className="text-zinc-500 text-xs mt-2"
                    >
                      {exp.period}
                    </motion.p>

                    <motion.p
                      variants={textVariant}
                      className="text-zinc-300 text-sm mt-4 leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>

                  </div>
                </div>

                {/* DOT */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">

                  <motion.div
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="absolute w-10 h-10 rounded-full bg-[#00ff88]/20 blur-xl"
                  />

                  <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-[#00ff88]" />
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FOOT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: smoothEase }}
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