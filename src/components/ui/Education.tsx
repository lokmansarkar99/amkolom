"use client";

import { motion } from "framer-motion";
import { BookOpen, Award } from "lucide-react";
import { sectionClasses, sectionHeaderClasses } from "@/lib/section-spacing";

export default function Education({ educations, compact = false }: { educations: any[]; compact?: boolean }) {
  const defaultEducations = [
    {
      _id: "1",
      degree: "Vibe Coding Course",
      institution: "Simplilearn",
      year: "2025",
      description: "Strengthened Coding Fundamentals and Problem Solving Skills through Practical Exercises and Modern Workflows.",
      achievements: ["Coding Fundamentals", "Problem Solving", "Programming"]
    },
    {
      _id: "2",
      degree: "Introduction To Prompt Engineering",
      institution: "Simplilearn",
      year: "2025",
      description: "Explored AI-Assisted Development and Learned How To Craft Effective Prompts For GitHub Copilot.",
      achievements: ["Prompt Engineering", "Generative AI"]
    },
    {
      _id: "3",
      degree: "DeepSeek For Beginners",
      institution: "Simplilearn",
      year: "2025",
      description: "Gained Foundational Knowledge in Deep Learning, Neural Networks.",
      achievements: ["Deep Learning", "Machine Learning"]
    },
    {
      _id: "4",
      degree: "Communication Skills Course",
      institution: "Simplilearn",
      year: "2025",
      description: "Improved Professional Communication, Presentation and Collaboration.",
      achievements: ["Communication", "Professional Writing"]
    }
  ];

  const data = educations.length > 0 ? educations : defaultEducations;

  return (
    <section className={sectionClasses(compact)}>
      <div className="container mx-auto max-w-5xl">
        <div className={sectionHeaderClasses(compact)}>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">Educational Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My Educational Journey Has Been Transformative, Equipping Me With The Expertise To Excel In My Field.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((edu, index) => (
            <motion.div
              key={edu._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f172a] rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-colors shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
                  {edu.titleIcon ? (
                    <img src={edu.titleIcon} alt={edu.degree} className="w-full h-full object-cover" />
                  ) : (
                    <BookOpen size={20} className="text-teal-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                  <p className="text-teal-500 text-sm flex items-center gap-1 mt-1">
                    <span className="w-4 h-4 inline-flex items-center justify-center border border-teal-500 rounded text-[10px]">📅</span> {edu.year}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic mb-4 pl-14 border-l border-white/10 ml-5 py-2">
                "{edu.description}"
              </p>

              {(edu.achievements || []).length > 0 && (
                <div className="pl-14 mb-4">
                  <p className="text-xs font-bold text-yellow-500 mb-2 flex items-center gap-1">
                    <Award size={14} /> Key Achievements
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((ach: string, i: number) => (
                      <span key={i} className="text-[10px] px-2 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-800/50">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {edu.certificateLink && (
                <div className="pl-14 mt-4">
                  <a 
                    href={edu.certificateLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors border border-teal-500/30 px-3 py-1.5 rounded-full hover:bg-teal-500/10"
                  >
                    View Certificate &rarr;
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
