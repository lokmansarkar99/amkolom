"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sectionClasses, sectionHeaderClasses } from "@/lib/section-spacing";

export default function Projects({ projects, compact = false }: { projects: any[]; compact?: boolean }) {
  return (
    <section className={`${sectionClasses(compact)} relative`}>
      <div className="container mx-auto max-w-5xl">
        <div className={sectionHeaderClasses(compact)}>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">Real world Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my recent development projects, highlighting creativity and problem-solving, built to deliver the best possible client experience.</p>
        </div>

        <div className="space-y-12">
          {projects.length > 0 ? projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row bg-[#1a1c23] rounded-3xl overflow-hidden shadow-xl border border-white/5"
            >
              {/* Image Section */}
              <div className="md:w-5/12 h-64 md:h-auto bg-white/5 relative overflow-hidden flex items-center justify-center p-6">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-xl shadow-lg" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal-500 to-green-400 rounded-xl flex items-center justify-center text-white font-bold text-2xl p-4 text-center">
                    {project.title}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto pt-6">
                  <Link href={`/projects/${project._id}`} className="flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-black font-semibold text-sm transition-transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(45,212,191,0.3)]">
                    View Details
                  </Link>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500/20 font-medium text-sm transition-colors">
                      <Link2 size={16} /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white font-medium text-sm transition-colors">
                      <Image src="/github.svg" alt="GitHub" width={16} height={16} className="opacity-80 hover:opacity-100 invert" /> Github
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )) : (
            <p className="text-center text-gray-500">No projects found. Add some in the admin dashboard.</p>
          )}
        </div>
      </div>
    </section>
  );
}
