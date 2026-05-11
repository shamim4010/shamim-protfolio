"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Sparkles,
  Atom,
  Code2,
  Flame,
  Braces,
  Cloud,
  Boxes,
} from "lucide-react";

/* ---------------- COUNTER ---------------- */
const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1000;
    const step = 16;
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
      { name: "Auth", icon: Sparkles },
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
      { name: "OpenAI", icon: Sparkles },
      { name: "LangChain", icon: Atom },
    ],
  },
];

/* ---------------- VARIANTS ---------------- */

// container stagger (clean timing)
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// card animation (smooth + premium)
const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// skill items (subtle stagger)
const skillItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

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
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={card}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              className="
                relative p-7 rounded-3xl
                bg-white/[0.04] backdrop-blur-xl
                border border-white/10
                shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                transition
              "
            >

              {/* subtle light */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30" />

              {/* TITLE */}
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <cat.icon className="w-6 h-6 text-[#00ff88]" />
                <h3 className="text-white font-semibold text-lg">
                  {cat.title}
                </h3>
              </div>

              {/* PROGRESS */}
              <div className="flex justify-between mb-3 relative z-10">
                <span className="text-zinc-400 text-sm">Progress</span>
                <span className="text-[#00ff88] font-bold text-sm">
                  <AnimatedCounter value={cat.progress} />
                </span>
              </div>

              {/* BAR */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-6 relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${cat.progress}%` }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="h-full bg-gradient-to-r from-[#00ff88] to-cyan-400"
                />
              </div>

              {/* SKILLS */}
              <div className="space-y-3 relative z-10">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={skillItem}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <skill.icon className="w-4 h-4 text-[#00ff88]" />
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* STATUS */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xs text-zinc-500 relative z-10"
              >
                {cat.progress === 100
                  ? "Fully completed & production ready"
                  : cat.progress === 0
                  ? "Just starting journey"
                  : "Actively learning & improving"}
              </motion.div>

              {/* subtle border glow */}
              <div className="absolute inset-0 rounded-3xl border border-[#00ff88]/10 opacity-20" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;