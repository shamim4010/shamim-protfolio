"use client";

import { motion } from "framer-motion";
import React from "react";

const ParticleField = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 8 + 6;
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{
              x: `${x}vw`,
              y: `${y}vh`,
              opacity: 0,
            }}
            animate={{
              y: [`${y}vh`, `${y - 20}vh`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#00ff88]"
            style={{
              width: size,
              height: size,
              filter: "blur(1px)",
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleField;