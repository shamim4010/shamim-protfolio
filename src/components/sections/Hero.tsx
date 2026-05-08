"use client";

import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  MousePointer2,
  GitBranchPlus,
  Link,
} from "lucide-react";

const Hero = () => {
  const roles = [
    "Md Shamim Miah",
    "Full Stack Developer",
    "Ai Engineer",
    "Next.js Engineer",
    "React Specialist",
  ];

  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [speed, setSpeed] = React.useState(120);

  React.useEffect(() => {
    const current = roles[index % roles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        setSpeed(120);

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        setSpeed(60);

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] bg-[#00ff88]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.08),transparent_65%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00ff88]/20 bg-white/5 backdrop-blur-xl mb-8"
            >
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]" />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#00ff88] font-semibold">
                Available For Work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-white"
            >
              Hi, I'm <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300 text-5xl">
                {text}
                <span className="animate-pulse text-white">|</span>
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >

              <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-xl">
                I build cinematic digital experiences with modern
                frontend engineering, smooth interaction design,
                and high-performance full-stack architecture.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <button className="group relative overflow-hidden rounded-full px-8 py-4 font-semibold bg-[#00ff88] text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,255,136,0.35)]">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Let’s Talk
              </button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-5 mt-12"
            >
              {[GitBranchPlus, Link, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:border-[#00ff88]/30 hover:bg-[#00ff88]/10 transition-all duration-300"
                >
                  <Icon size={18} className="text-zinc-400" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">

            {/* MAIN GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute w-[520px] h-[520px] rounded-full bg-[#00ff88]/10 blur-[120px]"
            />

            {/* OUTER ENERGY ORBIT */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[460px] h-[460px] rounded-[42%]"
              style={{
                border: "1px solid rgba(0,255,136,0.15)",
                boxShadow: "0 0 50px rgba(0,255,136,0.12)",
              }}
            />

            {/* INNER ENERGY ORBIT */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[390px] h-[390px] rounded-[38%]"
              style={{
                border: "1px dashed rgba(255,255,255,0.08)",
              }}
            />

            {/* FLOATING BALL */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-10 left-10 w-5 h-5 rounded-full bg-[#00ff88] blur-[2px]"
            />

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-cyan-400 blur-[2px]"
            />

            {/* MAIN IMAGE CONTAINER */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[370px] h-[470px] overflow-hidden"
              style={{
                borderRadius: "42% 58% 63% 37% / 38% 42% 58% 62%",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 80px rgba(0,255,136,0.16)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* SCAN LINE */}
              <motion.div
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 z-20 bg-gradient-to-b from-transparent via-[#00ff8820] to-transparent"
              />

              {/* IMAGE */}
              <Image
                src="https://imglink.cc/cdn/yPTYSQ4Gc2.jpeg"
                alt="profile"
                fill
                className="object-cover scale-110 transition-all duration-700"
              />

              {/* NOISE */}
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </span>

        <div className="w-[1px] h-16 bg-gradient-to-b from-[#00ff88] to-transparent" />

        <MousePointer2 size={14} className="text-[#00ff88]" />
      </motion.div>
    </section>
  );
};

export default Hero;