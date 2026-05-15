"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import profileImg from "../../../public/profileImg.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll reveal animation for the left image group
    gsap.from(".about-left", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power3.out",
    });

    // Stagger animation for the right text elements
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 50,
      scale: 0.96,
      filter: "blur(6px)",
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
    });

    // Stagger animation for the cards
    gsap.from(".about-card", {
      scrollTrigger: {
        trigger: ".about-cards-container",
        start: "top 85%",
      },
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: "blur(6px)",
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
    });

    // Continuous rotation for rings
    gsap.to(".ring-outer", {
      rotation: 360,
      duration: 25,
      repeat: -1,
      ease: "none",
    });

    gsap.to(".ring-inner", {
      rotation: -360,
      duration: 40,
      repeat: -1,
      ease: "none",
    });

    // Floating balls
    gsap.to(".float-ball-1", {
      y: -12,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".float-ball-2", {
      y: 16,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Image float
    gsap.to(".image-container", {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Image scan line
    gsap.to(".scan-line", {
      y: "200%",
      duration: 3,
      repeat: -1,
      ease: "none",
    });

  }, { scope: containerRef });

  // 3D Hover effect for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(card, {
      rotationX: -y / 10,
      rotationY: x / 10,
      transformPerspective: 500,
      ease: "power1.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#050505]" ref={containerRef}>
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT */}
          <div className="relative flex justify-center items-center">
            <div className="about-left relative flex justify-center">
              {/* ROTATING RING */}
              <div
                className="ring-outer absolute w-[460px] h-[460px] rounded-[42%]"
                style={{
                  border: "1px solid rgba(0,255,136,0.15)",
                }}
              />

              {/* INNER RING */}
              <div
                className="ring-inner absolute w-[390px] h-[390px] rounded-[38%]"
                style={{
                  border: "1px dashed rgba(255,255,255,0.08)",
                }}
              />

              {/* FLOAT BALLS */}
              <div
                className="float-ball-1 absolute top-10 left-10 w-5 h-5 rounded-full bg-[#00ff88] blur-[2px]"
              />

              <div
                className="float-ball-2 absolute bottom-10 right-10 w-4 h-4 rounded-full bg-cyan-400 blur-[2px]"
              />

              {/* IMAGE */}
              <div
                className="image-container relative w-[340px] h-[440px] overflow-hidden"
                style={{
                  borderRadius: "42% 58% 63% 37% / 38% 42% 58% 62%",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* SCAN */}
                <div
                  className="scan-line absolute -top-[100%] left-0 w-full h-full z-20 bg-gradient-to-b from-transparent via-[#00ff8820] to-transparent pointer-events-none"
                />

                <Image
                  src={profileImg}
                  alt="profile"
                  fill
                  className="object-cover scale-110 pointer-events-none"
                />

                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise.png')] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="about-text block text-[#00ff88] text-xs tracking-[0.3em] uppercase font-bold">
              About Me
            </span>

            <h2 className="about-text text-4xl md:text-6xl font-black text-white mt-5">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
                Futuristic
              </span>
              Digital Experiences
            </h2>

            <p className="about-text mt-8 text-zinc-400 text-lg max-w-xl">
              I create cinematic and immersive web experiences focused on performance and interaction.
            </p>

            <p className="about-text mt-5 text-zinc-500 max-w-xl">
              Blending creativity with engineering to build interfaces that feel alive.
            </p>

            {/* CARDS */}
            <div className="about-cards-container grid grid-cols-2 gap-5 mt-12 perspective-[1000px]">
              {[
                { label: "Experience", value: "2026 - Learning" },
                { label: "Frontend", value: "HTML, CSS, React" },
                { label: "Backend", value: "Node.js" },
                { label: "Focus", value: "Full Stack Growth" },
              ].map((item, i) => (
                <div
                  key={i}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="about-card p-5 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl [transform-style:preserve-3d] cursor-pointer hover:border-[#00ff88]/30 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 [transform:translateZ(20px)]">
                    {item.label}
                  </p>
                  <h3 className="text-white font-semibold mt-2 [transform:translateZ(30px)]">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;