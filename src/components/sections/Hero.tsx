"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  MousePointer2,
  GitBranchPlus,
  Link,
} from "lucide-react";

import ParticleField from "../particle/ParticleField";
import profileImg from "../../../public/profileImg.png";

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

  React.useEffect(() => {
    const current = roles[index % roles.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setIsDeleting(true);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  // 🔥 ANIMATION VARIANTS
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center justify-center px-6 py-28">

      {/* PARTICLES */}
      <ParticleField />

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] bg-[#00ff88]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Badge */}
            <motion.div
              variants={leftVariant}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#00ff88]/20 bg-white/5 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#00ff88]">
                Available For Work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={leftVariant}
              className="text-5xl md:text-7xl font-black text-white"
            >
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
                {text}|
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={leftVariant}
              className="mt-6 text-zinc-400 text-lg max-w-xl"
            >
              I build cinematic digital experiences with modern frontend,
              smooth interaction design and high-performance architecture.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={leftVariant}
              className="flex gap-5 mt-10 flex-wrap"
            >
              <button className="px-8 py-4 bg-[#00ff88] text-black rounded-full hover:scale-105 transition">
                View Projects
              </button>

              <button className="px-8 py-4 border border-white/10 text-white rounded-full hover:bg-white/10 transition">
                Let’s Talk
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="relative flex justify-center"
          >
            {/* ROTATING RING */}
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

            {/* IMAGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-[340px] h-[440px] overflow-hidden"
              style={{
                borderRadius: "42% 58% 63% 37% / 38% 42% 58% 62%",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
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
              <Image
                src={profileImg}
                alt="profile"
                fill
                className="object-cover scale-110"
              />
              {/* NOISE */}
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-zinc-500">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#00ff88] to-transparent" />
        <MousePointer2 size={14} className="text-[#00ff88]" />
      </motion.div>
    </section>
  );
};

export default Hero;