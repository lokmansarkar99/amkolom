"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Code, FolderGit2, Briefcase, GraduationCap, Wrench, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith('/admin')) {
    return null;
  }

  const links = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "Skills", href: "/skills", icon: <Code size={16} /> },
    { name: "Experience", href: "/experience", icon: <Briefcase size={16} /> },
    { name: "Projects", href: "/projects", icon: <FolderGit2 size={16} /> },
    { name: "Education", href: "/education", icon: <GraduationCap size={16} /> },
    { name: "Services", href: "/services", icon: <Wrench size={16} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 flex justify-center px-4">
      <div className="glass rounded-full px-6 py-3 flex items-center shadow-xl border border-white/10 bg-[#0f172a]/80">
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive 
                    ? "bg-teal-500/20 text-teal-400 border border-teal-500/30" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex w-full justify-between items-center min-w-[200px]">
          <span className="font-bold text-teal-400">MyPortfolio</span>
          <button
            className="text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 glass rounded-2xl flex flex-col py-4 px-4 space-y-2 shadow-2xl border border-white/10 bg-[#0f172a]/95"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive 
                      ? "bg-teal-500/20 text-teal-400 border border-teal-500/30" 
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
