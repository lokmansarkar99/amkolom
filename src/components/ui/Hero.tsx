"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Phone,
  Code2,
  Database,
  Layout,
  Smartphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import lokman from "@/assests/lokman.jpg";

const titles = [
  "Fullstack Developer",
  "Backend Engineer",
  "Cloud Expert",
  "",
  "Innovator",
];

export default function Hero({ cvUrl }: { cvUrl?: string }) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 px-6 pb-12 relative overflow-hidden">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 max-w-7xl relative z-10">
        {/* Left Side: Photo & Floating Elements */}
        <motion.div
          className="flex-1 flex justify-center relative w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Photo Container */}
          <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden bg-[#0f172a] border border-white/10 shadow-[0_0_50px_rgba(45,212,191,0.15)] z-20">
            {/* 1. Image Layer (Base Layer) */}
            <div className="absolute inset-0 z-0">
              <Image
                src={lokman}
                alt="Hero"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority={true} // <-- THIS IS CRITICAL FOR HERO IMAGES
              />
            </div>

            {/* 2. Gradient Overlay (Top Layer) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Floating JSON Profile */}
          <motion.div
            className="absolute -left-4 md:-left-12 bottom-10 glass p-4 rounded-xl shadow-2xl z-30 border border-teal-500/20 text-[10px] md:text-xs font-mono text-gray-300 w-56 md:w-64 bg-[#0f172a]/95 backdrop-blur-md"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
              <span className="text-gray-400">developer.json</span>
            </div>
            <p className="text-gray-400">{"{"}</p>
            <p className="pl-4">
              <span className="text-teal-400">"name"</span>:{" "}
              <span className="text-yellow-300">"Lokman Sarkar"</span>,
            </p>
            <p className="pl-4">
              <span className="text-teal-400">"role"</span>:{" "}
              <span className="text-yellow-300">"Full Stack"</span>,
            </p>
            <p className="pl-4">
              <span className="text-teal-400">"skills"</span>: [
              <span className="text-yellow-300">"Javascript"</span>,{" "}
              <span className="text-yellow-300">"Node"</span>,{" "}
              <span className="text-yellow-300">"Express"</span>,{" "}
              <span className="text-yellow-300">"MongoDB"</span>,{" "}
              <span className="text-yellow-300">"AWS"</span>,{" "}
              <span className="text-yellow-300">"Docker"</span>,{" "}
              <span className="text-yellow-300">"Kubernetes"</span>,{" "}
              <span className="text-yellow-300">"React"</span>,{" "}
              <span className="text-yellow-300">"Node"</span>,{" "}
              <span className="text-yellow-300">"Express"</span>,{" "}
              <span className="text-yellow-300">"MongoDB"</span>,{" "}
              <span className="text-yellow-300">"AWS"</span>,{" "}
              <span className="text-yellow-300">"Docker"</span>,{" "}
              <span className="text-yellow-300">"Kubernetes"</span>]
            </p>
            <p className="text-gray-400">{"}"}</p>
          </motion.div>

          {/* Rotating Tech Stack Circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 border-dashed z-0 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0f172a] p-2 rounded-full border border-white/10 text-teal-400">
              <Code2 size={20} />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0f172a] p-2 rounded-full border border-white/10 text-purple-400">
              <Database size={20} />
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-[#0f172a] p-2 rounded-full border border-white/10 text-blue-400">
              <Layout size={20} />
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-[#0f172a] p-2 rounded-full border border-white/10 text-yellow-400">
              <Smartphone size={20} />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Text & Intro */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-2">
            <span className="text-purple-400 font-medium tracking-wide text-sm">
              Welcome to my universe
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            Hello, I'm <br />
            <span className="text-white">Lokman Sarkar</span>
          </h1>

          <div className="h-12 overflow-hidden flex justify-center md:justify-start items-center relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="text-2xl md:text-3xl font-bold text-teal-400 absolute"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I transform complex problems into elegant, scalable digital
            solutions. Passionate about building pixel-perfect, responsive web
            applications.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-30">
            {cvUrl ? (
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-black font-semibold transition-colors"
              >
                <Download size={18} /> Download CV
              </a>
            ) : null}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white hover:border-teal-400 hover:text-teal-400 transition-colors font-semibold hover:bg-teal-500/5"
            >
              <Phone size={18} /> Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
