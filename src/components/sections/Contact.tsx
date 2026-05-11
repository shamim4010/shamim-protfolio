"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Send, Mail, Phone, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

/* ---------------- VARIANTS ---------------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------- COMPONENT ---------------- */

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">

      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-120px" }}
            className="space-y-10"
          >
            <motion.div variants={item}>
              <span className="text-[#00ff88] text-xs font-bold tracking-[0.3em] uppercase">
                Contact Me
              </span>

              <h2 className="text-4xl md:text-6xl font-black text-white mt-6">
                Let's Build
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-cyan-300">
                  Something Great
                </span>
              </h2>

              <p className="text-zinc-400 mt-6 max-w-md">
                Open for collaboration, freelance work & internships.
              </p>
            </motion.div>

            {/* CONTACT LIST */}
            <motion.div variants={container} className="space-y-6">

              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "01740101742",
                  link: "tel:01740101742",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "01995501537",
                  link: "https://wa.me/8801995501537",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "shamim.fullstack.dev@gmail.com",
                  link: "mailto:shamim.fullstack.dev@gmail.com",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  value: "shamimcb",
                  link: "https://linkedin.com/in/shamimcb",
                },
              ].map((itemData, i) => (
                <motion.a
                  key={i}
                  href={itemData.link}
                  target="_blank"
                  variants={item}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition">
                    <itemData.icon size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                      {itemData.label}
                    </p>
                    <p className="text-white break-all">
                      {itemData.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-120px" }}
          >
            <form className="p-10 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl space-y-6">

              <h3 className="text-white text-2xl font-bold">
                Send Message
              </h3>

              {["Your Name", "Your Email"].map((placeholder, i) => (
                <motion.input
                  key={i}
                  variants={item}
                  type={i === 1 ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none focus:border-[#00ff88]/40"
                />
              ))}

              <motion.textarea
                variants={item}
                rows={5}
                placeholder="Your Message..."
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none resize-none focus:border-[#00ff88]/40"
              />

              <motion.button
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#00ff88] text-black font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,255,136,0.3)]"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;