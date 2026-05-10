"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../../../public/profileImg.png"

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // smoother cinematic curve
    },
  },
};

const cardVariants = [
  // LEFT CARD (depth + slight tilt)
  {
    hidden: {
      opacity: 0,
      x: -80,
      y: 30,
      rotate: -4,
      scale: 0.94,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // RIGHT CARD (mirror effect)
  {
    hidden: {
      opacity: 0,
      x: 80,
      y: 30,
      rotate: 4,
      scale: 0.94,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // BOTTOM CARD (lift + focus)
  {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // SCALE CARD (zoom-in with depth feel)
  {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -2,
      filter: "blur(12px)",
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-[#050505]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE (unchanged) */}
          <div className="relative flex justify-center items-center">
            <motion.div
              variants={leftVariant}
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

          {/* RIGHT SIDE */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-100px" }} // 👈 re-trigger animation
          >
            <motion.span
              variants={itemVariant}
              className="text-[#00ff88] text-xs tracking-[0.3em] uppercase font-bold"
            >
              About Me
            </motion.span>

            <motion.h2
              variants={itemVariant}
              className="text-4xl md:text-6xl font-black leading-tight text-white mt-5"
            >
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
                Futuristic
              </span>
              Digital Experiences
            </motion.h2>

            <motion.p
              variants={itemVariant}
              className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl"
            >
              I create cinematic and immersive web experiences focused on
              performance, interaction, and modern visual storytelling.
            </motion.p>

            <motion.p
              variants={itemVariant}
              className="mt-5 text-zinc-500 leading-relaxed max-w-xl"
            >
              My goal is to blend creativity with engineering to build
              interfaces that feel alive, emotional, and unforgettable.
            </motion.p>

            {/* INFO CARDS */}
            <motion.div
              variants={containerVariant}
              className="grid grid-cols-2 gap-5 mt-12"
            >
              {[
                { label: "Experience", value: "2026 - Learning" },
                { label: "Frontend", value: "HTML, CSS, React" },
                { label: "Backend", value: "Node.js (Learning)" },
                { label: "Focus", value: "Full Stack Growth" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants[i]}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-5 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    {item.label}
                  </p>

                  <h3 className="text-white font-semibold mt-2">
                    {item.value}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;