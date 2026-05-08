"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Self Reflection",
    role: "Learning Journey (2026)",
    text: "Started learning web development from zero. At first everything felt complex, but step by step HTML, CSS, JavaScript started making sense. Now I can build real UI components confidently.",
    type: "Personal Growth",
  },

  {
    name: "Project Experience",
    role: "Frontend Practice",
    text: "Building React projects taught me how components, props and state actually work in real applications. Each project improved my problem solving skills.",
    type: "Skill Building",
  },

  {
    name: "Development Mindset",
    role: "Ongoing Learning",
    text: "I realized consistency is more important than speed. Even small daily coding practice is helping me grow toward becoming a full-stack developer.",
    type: "Mindset Growth",
  },
];

const Testimonials = () => {
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
            Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              Reflections
            </span>
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Real thoughts and growth insights from my journey as a developer in 2026.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#00ff88]/30 transition"
            >

              {/* QUOTE ICON */}
              <Quote className="absolute top-6 right-6 text-[#00ff88]/20 w-12 h-12" />

              {/* TYPE BADGE */}
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#00ff88]">
                {item.type}
              </span>

              {/* NAME */}
              <h3 className="text-white font-bold text-xl mt-3">
                {item.name}
              </h3>

              <p className="text-zinc-500 text-sm mt-1">
                {item.role}
              </p>

              {/* TEXT */}
              <p className="text-zinc-300 mt-6 leading-relaxed">
                “{item.text}”
              </p>

              {/* STARS (learning vibe) */}
              <div className="flex items-center gap-1 mt-6 text-[#00ff88]">
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
                <Star size={14} />
                <span className="text-xs text-zinc-500 ml-2">
                  Growth Mode Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOT NOTE */}
        <div className="text-center mt-20">
          <p className="text-zinc-500 text-sm">
            These are not client reviews — they represent my real learning journey and progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;