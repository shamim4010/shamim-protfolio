"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

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

/* ---------------- MASTER ---------------- */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

/* ---------------- SAFE VARIANT (FIXED) ---------------- */
const cardVariant = (i: number): Variants => {
  const isLeft = i % 2 === 0;

  return {
    hidden: {
      opacity: 0,
      x: isLeft ? -100 : 100,
      y: 40,
      scale: 0.95,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: "easeOut", // ✅ FIXED (NO ARRAY)
      },
    },
  };
};

/* ---------------- TEXT ---------------- */
const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // ✅ FIXED
    },
  },
};

const Experience = () => {
  return (
    <section className="py-28 relative overflow-hidden bg-[#050505]">

      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            My
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              Learning Journey
            </span>
          </motion.h2>
        </div>

        {/* TIMELINE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-20 max-w-5xl mx-auto relative"
        >

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariant(i)}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                i % 2 ? "md:flex-row-reverse" : ""
              }`}
            >

              <div className="w-full md:w-[45%]">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                >
                  <motion.span variants={textVariant} className="text-[#00ff88] text-xs">
                    {exp.type}
                  </motion.span>

                  <motion.h3 variants={textVariant} className="text-white text-xl font-bold mt-2">
                    {exp.title}
                  </motion.h3>

                  <motion.p variants={textVariant} className="text-zinc-400 text-sm">
                    {exp.company}
                  </motion.p>

                  <motion.p variants={textVariant} className="text-zinc-500 text-xs">
                    {exp.period}
                  </motion.p>

                  <motion.p variants={textVariant} className="text-zinc-300 text-sm mt-3">
                    {exp.description}
                  </motion.p>
                </motion.div>
              </div>

              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default Experience;