"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageCircle} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050505]">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00ff88]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div>
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
                I’m currently learning full-stack development and open to collaboration,
                freelance work, and internship opportunities.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-6">

              {/* PHONE */}
              <a
                href="tel:01740101742"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Phone
                  </p>
                  <p className="text-white">01740101742</p>
                </div>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/8801995501537"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                    WhatsApp
                  </p>
                  <p className="text-white">01995501537</p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:shamim.fullstack.dev@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                    Email
                  </p>
                  <p className="text-white break-all">
                    shamim.fullstack.dev@gmail.com
                  </p>
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com/in/shamimcb"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500">
                    LinkedIn
                  </p>
                  <p className="text-white">shamimcb</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="p-10 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl space-y-6">

              <h3 className="text-white text-2xl font-bold">
                Send Message
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none focus:border-[#00ff88]/40"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none focus:border-[#00ff88]/40"
              />

              <textarea
                rows={5}
                placeholder="Your Message..."
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none resize-none focus:border-[#00ff88]/40"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#00ff88] text-black font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;