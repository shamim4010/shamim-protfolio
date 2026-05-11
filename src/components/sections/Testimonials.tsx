"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

/* ---------------- DATA ---------------- */
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
    text: "Consistency matters more than speed. Even small daily coding practice is helping me grow toward becoming a full-stack developer.",
    type: "Mindset Growth",
  },
];

/* ---------------- TYPING HOOK (SMOOTH + NATURAL) ---------------- */
const useTyping = (text: string, active: boolean) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplay("");
      return;
    }

    let i = 0;

    const type = () => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i < text.length) {
        setTimeout(type, 12 + Math.random() * 25); // 👈 human typing feel
      }
    };

    type();
  }, [text, active]);

  return display;
};

/* ---------------- CARD ---------------- */
const TestimonialCard = ({ item, index }: any) => {
  const [active, setActive] = useState(false);
  const typedText = useTyping(item.text, active);

  return (
    <motion.div
      onViewportEnter={() => setActive(true)}
      onViewportLeave={() => setActive(false)}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15, // 👈 stagger
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: false, amount: 0.4 }}
      className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-[#00ff88]/30 transition-all duration-300"
    >
      {/* ICON */}
      <Quote className="absolute top-6 right-6 text-[#00ff88]/20 w-10 h-10" />

      {/* TYPE */}
      <span className="text-[10px] tracking-[0.3em] uppercase text-[#00ff88]">
        {item.type}
      </span>

      {/* NAME */}
      <h3 className="text-white font-bold text-xl mt-3">
        {item.name}
      </h3>

      <p className="text-zinc-500 text-sm">{item.role}</p>

      {/* TYPING TEXT */}
      <p className="text-zinc-300 mt-6 leading-relaxed min-h-[100px]">
        “{typedText}”
        <span className="ml-1 animate-pulse text-[#00ff88]">|</span>
      </p>

      {/* STARS */}
      <div className="flex items-center gap-1 mt-6 text-[#00ff88]">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} />
        ))}
        <span className="text-xs text-zinc-500 ml-2">
          Growth Mode Active
        </span>
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN ---------------- */
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
            Real thoughts and growth insights from my developer journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* FOOT */}
        <div className="text-center mt-20">
          <p className="text-zinc-500 text-sm">
            These represent personal learning reflections, not client reviews.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;