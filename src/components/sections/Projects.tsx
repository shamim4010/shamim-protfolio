"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const duplicatedProjects = [...projects, ...projects];

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll entry animation
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 40,
      scale: 0.96,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
    });

    // Auto scroll animation using GSAP
    if (scrollContainerRef.current) {
      gsap.to(scrollContainerRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 35,
        repeat: -1,
      });
    }

  }, { scope: sectionRef });

  // 3D Hover tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotationX: -y / 15,
      rotationY: x / 15,
      transformPerspective: 800,
      ease: "power1.out",
      duration: 0.4,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      ease: "power3.out",
      duration: 0.6,
    });
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]" ref={sectionRef}>

      {/* AUTO SCROLL */}
      <div className="relative overflow-hidden">

        {/* FADE SIDES */}
        <div className="absolute left-0 top-0 z-20 w-40 h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-20 w-40 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

        <div
          ref={scrollContainerRef}
          className="flex gap-8 w-max"
        >
          {duplicatedProjects.map((project, i) => (
            <div
              key={i}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelectedProject(project)}
              className="project-card group relative w-[360px] cursor-pointer rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors hover:border-[#00ff88]/30 [transform-style:preserve-3d] perspective-[1200px]"
            >

              {/* IMAGE */}
              <div className="relative h-[240px] overflow-hidden rounded-t-[28px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* CONTENT */}
              <div className="p-6 [transform:translateZ(30px)]">

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
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.12),transparent_70%)] pointer-events-none rounded-[28px]" />
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (Keep Framer Motion for exit animations) */}
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
                className="absolute top-4 right-4 w-9 h-9 z-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center hover:bg-[#00ff88] hover:text-black transition"
              >
                <X size={16} />
              </button>

              {/* IMAGE */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  className="w-full h-full object-cover"
                  alt={selectedProject.title}
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
                  <a href={selectedProject.live} className="px-4 py-2 bg-[#00ff88] text-black rounded-full text-sm">
                    Live
                  </a>

                  <a href={selectedProject.github} className="px-4 py-2 border border-white/10 text-white rounded-full text-sm flex items-center gap-2">
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