"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profileImg from "../../../public/profileImg.png";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* ---------------- TYPEWRITER ---------------- */
const roles = [
  "Md Shamim Miah",
  "Full Stack Developer",
  "AI Engineer",
  "Next.js Engineer",
  "React Specialist",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  /* ---------------- TYPE EFFECT ---------------- */
  useEffect(() => {
    const current = roles[index % roles.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setDeleting(true);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  /* ---------------- MAGNETIC ---------------- */
  useEffect(() => {
    const tags = document.querySelectorAll(".magnetic");

    tags.forEach((tag) => {
      const el = tag as HTMLElement;

      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const mx = (x - rect.width / 2) * 0.3;
        const my = (y - rect.height / 2) * 0.3;

        el.style.transform = `translate(${mx}px, ${my}px) scale(1.08)`;
      };

      const leave = () => {
        el.style.transform = "translate(0,0) scale(1)";
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
    });
  }, []);

  useGSAP(() => {
    // Image scan line effect
    gsap.fromTo(".scan-line", 
      { y: "-100%" },
      {
        y: "420px",
        duration: 5,
        repeat: -1,
        ease: "linear",
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden px-6">

      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ---------------- LEFT (YOUR ORIGINAL STYLE) ---------------- */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00ff88]/20 bg-white/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#00ff88]">
              Available For Work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
              {text}|
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-zinc-400 text-lg max-w-xl">
            I build cinematic digital experiences with modern frontend,
            smooth interaction design and high-performance architecture.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="px-8 py-4 bg-[#00ff88] text-black rounded-full hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/10 transition">
              Download CV
            </button>
          </div>
        </div>

        {/* ---------------- RIGHT ---------------- */}
        <div className="relative flex justify-center">

          {/* IMAGE */}
          <div className="relative w-[320px] h-[420px] rounded-[30px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] group">
            <Image
              src={profileImg}
              alt="profile"
              fill
              className="object-cover"
            />
            {/* NOISE / HOLOGRAPHIC OVERLAY */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* CYBERPUNK SCAN LINE */}
            <div className="scan-line absolute top-0 left-0 w-full h-[420px] bg-gradient-to-b from-transparent via-[#00ff88]/10 to-[#00ff88]/30 border-b border-[#00ff88] shadow-[0_5px_15px_rgba(0,255,136,0.4)] pointer-events-none z-20" />
          </div>

          {/* TAGS */}
          <div className="absolute top-10 left-16 magnetic tag tag-1">
            <SiReact className="text-[#00d8ff]" />
            <span>React</span>
          </div>

          <div className="absolute top-1/2 right-30 magnetic tag tag-2">
            <SiNextdotjs className="text-white" />
            <span>Next.js</span>
          </div>

          <div className="absolute bottom-10 left-10 magnetic tag tag-3">
            <SiTypescript className="text-[#3178c6]" />
            <span>TypeScript</span>
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style jsx>{`
        .tag {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          font-size: 12px;
          color: white;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .tag:hover {
          border-color: rgba(0, 255, 136, 0.4);
          box-shadow: 0 20px 60px rgba(0, 255, 136, 0.25);
        }

        .tag-1 {
          animation: float1 5s ease-in-out infinite;
        }

        .tag-2 {
          animation: float2 6s ease-in-out infinite;
        }

        .tag-3 {
          animation: float3 7s ease-in-out infinite;
        }

        @keyframes float1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }

        @keyframes float2 {
          0% { transform: translate(0,0); }
          50% { transform: translate(-6px,10px); }
          100% { transform: translate(0,0); }
        }

        @keyframes float3 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;