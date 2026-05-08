"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00ff88] to-cyan-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border border-white/10 ${
              scrolled
                ? "bg-black/60 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,255,136,0.08)]"
                : "bg-transparent"
            }`}
          >
            {/* LOGO */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-[#00ff88] flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_25px_rgba(0,255,136,0.4)]">
                  <span className="text-black font-bold text-lg">S</span>
                </div>

                {/* glow */}
                <div className="absolute inset-0 blur-xl bg-[#00ff88]/30 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00ff88] transition-colors">
                SHAMIM
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-zinc-400 hover:text-white transition uppercase tracking-widest group"
                >
                  {link.name}

                  <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[#00ff88] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              <Link
                href="#contact"
                className="relative px-6 py-2 bg-[#00ff88] text-black text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(0,255,136,0.3)]"
              >
                HIRE ME

                {/* pulse glow */}
                <span className="absolute inset-0 rounded-full animate-ping bg-[#00ff88]/30" />
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-2xl flex flex-col items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative flex flex-col items-center gap-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-20 right-0 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X size={28} />
                </button>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-bold text-white hover:text-[#00ff88] transition"
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 px-8 py-3 bg-[#00ff88] text-black font-bold rounded-full shadow-[0_0_30px_rgba(0,255,136,0.3)]"
                >
                  HIRE ME
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;