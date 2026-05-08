"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Layout,
  Server,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Atom,
  Code2,
  Flame,
  Braces,
  Cloud,
  Boxes,
} from "lucide-react";

/* ---------------- ANIMATED COUNTER ---------------- */
const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1000;
    const step = 10;
    const increment = value / (duration / step);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}%</span>;
};

/* ---------------- DATA ---------------- */
const skillCategories = [
  {
    title: "Frontend (Completed)",
    icon: Layout,
    progress: 100,

    skills: [
      { name: "HTML", icon: Code2 },
      { name: "CSS", icon: Braces },
      { name: "JavaScript", icon: Flame },
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Flame },
      { name: "Tailwind CSS", icon: Braces },
    ],
  },

  {
    title: "Backend (Node.js)",
    icon: Server,
    progress: 60,

    skills: [
      { name: "Node.js", icon: Boxes },
      { name: "Express.js", icon: Server },
      { name: "REST APIs", icon: Cloud },
      { name: "Authentication", icon: Sparkles },
    ],
  },

  {
    title: "Database",
    icon: Database,
    progress: 80,

    skills: [
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Flame },
      { name: "PostgreSQL", icon: Database },
      { name: "Supabase", icon: Cloud },
    ],
  },

  {
    title: "AI & DevOps",
    icon: Cpu,
    progress: 0,

    skills: [
      { name: "Docker", icon: Boxes },
      { name: "AWS", icon: Cloud },
      { name: "OpenAI APIs", icon: Sparkles },
      { name: "LangChain", icon: Atom },
      { name: "CI/CD", icon: Layers },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */
const Skills = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Skill
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              Progress
            </span>
          </h2>

          <p className="mt-6 text-zinc-400">
            Real developer roadmap — completed, growing & learning journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
            >

              {/* TITLE */}
              <div className="flex items-center gap-3 mb-5">
                <cat.icon className="w-6 h-6 text-[#00ff88]" />
                <h3 className="text-white font-bold text-xl">
                  {cat.title}
                </h3>
              </div>

              {/* TOP PROGRESS */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-zinc-400 text-sm">
                  Overall Progress
                </span>

                <span className="text-[#00ff88] text-sm font-bold">
                  <AnimatedCounter value={cat.progress} />
                </span>
              </div>

              {/* PROGRESS BAR */}
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cat.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#00ff88] to-cyan-400 relative"
                >
                  <div className="absolute inset-0 bg-white/20 blur-sm animate-pulse" />
                </motion.div>
              </div>

              {/* SKILLS LIST */}
              <div className="space-y-3">

                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <skill.icon className="w-4 h-4 text-[#00ff88]" />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* STATUS */}
              <div className="mt-6 text-xs text-zinc-500">
                {cat.progress === 100
                  ? "Fully completed & production ready"
                  : cat.progress === 0
                  ? "Just starting journey"
                  : "Actively learning & improving"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;