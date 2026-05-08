"use client";

import React from "react";
import Link from "next/link";
import {
  CodeXml,
  ExternalLink,
  Send,
  ArrowUp,
  Mail,
  MessageCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-white/5 bg-[#050505] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-cyan-400/10 blur-[140px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start gap-4">

            <Link href="/" className="flex items-center gap-3 group">

              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-[#00ff88] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)]"
              >
                <span className="text-black font-black">S</span>
              </motion.div>

              <span className="text-xl font-bold text-white tracking-widest">
                SHAMIM
              </span>
            </Link>

            <p className="text-zinc-400 text-sm max-w-xs text-center md:text-left">
              Building modern cinematic web experiences while learning full-stack development (2026 journey).
            </p>
          </div>

          {/* QUICK CONTACT */}
          <div className="flex flex-wrap justify-center gap-4">

            {/* EMAIL */}
            <a
              href="mailto:shamim.fullstack.dev@gmail.com"
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition"
            >
              <Mail size={18} />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/8801995501537"
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition"
            >
              <MessageCircle size={18} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/shamimcb"
              target="_blank"
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition"
            >
              <FaLinkedin size={18} />
            </a>

            {/* GITHUB / CODE */}
            <a
              href="#"
              className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-300 hover:text-[#00ff88] hover:border-[#00ff88]/30 transition"
            >
              <CodeXml size={18} />
            </a>
          </div>

          {/* BACK TO TOP */}
          <motion.button
            whileHover={{ y: -4 }}
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 text-zinc-400 hover:text-[#00ff88] transition"
          >

            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00ff88]/30 transition">
              <ArrowUp size={18} />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
              Top
            </span>
          </motion.button>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-zinc-500">

          <p>© 2026 SHAMIM AHMED — All Rights Reserved</p>

          <div className="flex gap-8">
            <a className="hover:text-[#00ff88] transition" href="#">
              Privacy
            </a>
            <a className="hover:text-[#00ff88] transition" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* FLOATING ENERGY LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ff88]/40 to-transparent animate-pulse" />
    </footer>
  );
};

export default Footer;