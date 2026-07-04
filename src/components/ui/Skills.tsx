"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { sectionClasses, sectionHeaderClasses } from "@/lib/section-spacing";

export default function Skills({ skills, compact = false }: { skills: any[]; compact?: boolean }) {
  // Mock data if DB empty
  const defaultCategories = [
    { 
      category: "Frontend Development", 
      categoryIconUrl: "", 
      items: [
        { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
      ] 
    },
    { 
      category: "Backend Development", 
      categoryIconUrl: "", 
      items: [
        { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ] 
    }
  ];

  const data = skills.length > 0 ? skills : defaultCategories;

  return (
    <section className={`${sectionClasses(compact)} relative overflow-hidden`}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={sectionHeaderClasses(compact)}>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A comprehensive overview of my technical expertise and the tools I use to build scalable solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover="hover"
              className="bg-[#1a1c23]/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group"
            >
              {/* Splash effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                variants={{ hover: { scale: 1.05 } }}
              />
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                {cat.categoryIconUrl ? (
                  <img src={cat.categoryIconUrl} alt={cat.category} className="w-6 h-6 object-contain" />
                ) : (
                  <Code className="text-teal-400" />
                )}
                {cat.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {cat.items.map((item: any, i: number) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:border-teal-500/50 hover:text-teal-400 transition-colors shadow-inner group/item">
                    {item.iconUrl && (
                      <img src={item.iconUrl} alt={item.name} className="w-4 h-4 object-contain group-hover/item:scale-110 transition-transform" />
                    )}
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
