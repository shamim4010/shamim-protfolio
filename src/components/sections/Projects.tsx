"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* ---------------- DATA ---------------- */
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

/* ---------------- VARIANTS ---------------- */
const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]">

      {/* AUTO SCROLL */}
      <div className="relative overflow-hidden">

        {/* FADE SIDES */}
        <div className="absolute left-0 top-0 z-20 w-40 h-full bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="absolute right-0 top-0 z-20 w-40 h-full bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {duplicatedProjects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              onClick={() => setSelectedProject(project)}
              className="group relative w-[360px] cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition"
            >

              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] rounded-full border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-6 text-sm text-[#00ff88]">
                  Explore <ArrowUpRight size={16} />
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_70%)]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

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
              initial={{ scale: 0.9, y: 60, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 60, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-[24px] border border-white/10 bg-[#0b0b0b] overflow-hidden"
            >

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition"
              >
                <X size={16} />
              </button>

              {/* IMAGE */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>

                <p className="mt-3 text-zinc-400 text-sm">
                  {selectedProject.description}
                </p>

                <div className="flex gap-3 mt-6">
                  <a className="px-4 py-2 bg-[#00ff88] text-black rounded-full text-sm">
                    Live
                  </a>

                  <a className="px-4 py-2 border border-white/10 text-white rounded-full text-sm flex items-center gap-2">
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