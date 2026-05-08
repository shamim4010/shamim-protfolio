"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE */}
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

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00ff88] text-xs tracking-[0.3em] uppercase font-bold">
              About Me
            </span>

            <h2 className="text-4xl md:text-6xl font-black leading-tight text-white mt-5">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
                Futuristic
              </span>
              Digital Experiences
            </h2>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
              I create cinematic and immersive web experiences focused on
              performance, interaction, and modern visual storytelling.
            </p>

            <p className="mt-5 text-zinc-500 leading-relaxed max-w-xl">
              My goal is to blend creativity with engineering to build
              interfaces that feel alive, emotional, and unforgettable.
            </p>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-12">

              {[
                {
                  label: "Experience",
                  value: "5+ Years",
                },
                {
                  label: "Frontend",
                  value: "React / Next.js",
                },
                {
                  label: "Speciality",
                  value: "Cinematic UI",
                },
                {
                  label: "Focus",
                  value: "Performance",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                  }}
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
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;