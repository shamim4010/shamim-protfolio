"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  X,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Quantum Cloud",

    description:
      "A futuristic AI cloud dashboard with cinematic interactions and immersive visual systems.",

    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",

    tags: ["Next.js", "AI", "Three.js", "Tailwind"],

    live: "#",
    github: "#",
  },

  {
    id: 2,
    title: "Aetherial OS",

    description:
      "A cinematic futuristic operating system UI with fluid animations and holographic effects.",

    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",

    tags: ["React", "Framer Motion", "TypeScript"],

    live: "#",
    github: "#",
  },

  {
    id: 3,
    title: "Lumina CRM",

    description:
      "A modern enterprise CRM dashboard focused on scalability and luxury UI experience.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",

    tags: ["Prisma", "Next.js", "PostgreSQL"],

    live: "#",
    github: "#",
  },

  {
    id: 4,
    title: "Neuro Vision",

    description:
      "AI powered futuristic interface with immersive user experience and advanced animations.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",

    tags: ["OpenAI", "LangChain", "Motion"],

    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#050505]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#00ff88] text-xs tracking-[0.35em] uppercase font-bold"
          >
            Featured Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-black text-white leading-[1]"
          >
            Creative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-zinc-400 text-lg leading-relaxed"
          >
            Premium cinematic digital experiences crafted with modern
            technologies and immersive motion systems.
          </motion.p>
        </div>

        {/* AUTO SCROLL */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-20 w-40 h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-20 w-40 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >

            {duplicatedProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative w-[380px] cursor-pointer overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden h-[250px]">

                  <motion.img
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* SCAN LINE */}
                  <motion.div
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff8820] to-transparent opacity-40"
                  />

                  {/* LIVE BADGE */}
                  <div className="absolute top-5 left-5 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">

                    <div className="w-2 h-2 rounded-full bg-[#00ff88]" />

                    <span className="text-[10px] tracking-[0.25em] uppercase text-white">
                      Live Project
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-3 mb-5">

                    {project.tags.map((tag) => (
                      <div
                        key={tag}
                        className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-[0.2em] text-zinc-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-3xl font-black text-white leading-tight">
                    {project.title}
                  </h3>

                  {/* DESC */}
                  <p className="mt-5 text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-8">

                    <div className="flex items-center gap-3 text-[#00ff88] text-sm uppercase tracking-[0.2em] font-semibold">

                      Explore

                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    <Sparkles className="w-5 h-5 text-[#00ff88]" />
                  </div>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.15),transparent_70%)]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-xl p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[28px] border border-white/10 bg-[#0b0b0b]"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition"
              >
                <X size={18} />
              </button>

              {/* IMAGE */}
              <div className="h-[240px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  {selectedProject.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 text-zinc-400 leading-relaxed text-sm md:text-base">
                  {selectedProject.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {selectedProject.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest rounded-full border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* INFO */}
                <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-zinc-400">
                  <div>
                    <p className="text-xs text-zinc-500">Role</p>
                    <p>Frontend / Full Stack</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Type</p>
                    <p>Web Application</p>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 mt-7 flex-wrap">
                  <a
                    href={selectedProject.live}
                    className="px-5 py-3 rounded-full bg-[#00ff88] text-black font-semibold text-sm"
                  >
                    Live Preview
                  </a>

                  <a
                    href={selectedProject.github}
                    className="px-5 py-3 rounded-full border border-white/10 text-white text-sm flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;