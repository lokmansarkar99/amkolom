"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { sectionClasses, sectionHeaderClasses } from "@/lib/section-spacing";

export default function Experience({ experiences, compact = false }: { experiences: any[]; compact?: boolean }) {
  // Mock data to perfectly match the UI reference if DB is empty
  const defaultExperiences = [
    {
      _id: "1",
      jobTitle: "Full Stack Developer",
      company: "Freelance",
      companyIcon: "https://via.placeholder.com/150",
      startDate: "June 2020",
      endDate: "June 2026",
      descriptionPoints: [
        "Designed and Developed a Fully Responsive Travel Agency Website Using Next.js, Tailwind CSS, and TypeScript.",
        "Implemented Dynamic Content Loading and Smooth Animations with Framer Motion and GSAP, delivering a visually engaging, user-friendly platform tailored to client requirements."
      ],
      description: "Worked as a freelance full-stack developer focusing on delivering high-quality web solutions for various clients across different industries."
    },
    {
      _id: "2",
      jobTitle: "Frontend Developer",
      company: "Tech Solutions",
      companyIcon: "https://via.placeholder.com/150",
      startDate: "April 2020",
      endDate: "April 2026",
      descriptionPoints: [
        "Bug Fixing - Identified and resolved functional issues affecting usability.",
        "Speed Optimization - Improved page load performance to reduce bounce rate.",
      ],
      description: "A pivotal role in optimizing frontend performance and resolving critical UI/UX bugs for a high-traffic SaaS application."
    }
  ];

  const data = experiences.length > 0 ? experiences : defaultExperiences;

  return (
    <section className={sectionClasses(compact)}>
      <div className="container mx-auto max-w-7xl">
        <div className={sectionHeaderClasses(compact)}>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">Professional Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transforming ideas into digital reality, one project at a time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((exp, index) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#0b101e] rounded-2xl p-8 shadow-xl border border-[#1e293b] flex flex-col group h-full"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-teal-500 rounded-tl-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-teal-500 rounded-br-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex-1">
                {/* Row 1: Company Name & Logo */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  {exp.companyIcon && (
                    <img src={exp.companyIcon} alt={exp.company} className="w-10 h-10 object-contain rounded-full bg-white/10 p-1" />
                  )}
                </div>
                
                {/* Row 2: Designation */}
                <h4 className="text-lg font-semibold text-teal-400 mb-1">{exp.jobTitle}</h4>
                
                {/* Row 3: From - To */}
                <p className="text-xs text-gray-500 mb-4">{exp.startDate} - {exp.endDate || "Present"}</p>

                {/* Row 4: Key Points */}
                <ul className="space-y-2 text-sm text-gray-300 mb-4">
                  {exp.descriptionPoints.slice(0, 2).map((point: string, i: number) => (
                    <li key={i} className="leading-relaxed border-l-2 border-teal-500/30 pl-3 line-clamp-2">
                      {point}
                    </li>
                  ))}
                  {exp.descriptionPoints.length > 2 && (
                    <li className="text-xs text-teal-500/70 italic pl-3">+{exp.descriptionPoints.length - 2} more points...</li>
                  )}
                </ul>

                {/* Row 5: Description */}
                {exp.description && (
                  <p className="text-sm text-gray-400 line-clamp-3 mb-6">
                    {exp.description}
                  </p>
                )}
              </div>

              {/* Row 6: View More Button */}
              <div className="mt-auto pt-4 border-t border-white/5">
                <Link href={`/experience/${exp._id.toString()}`} className="inline-block w-full text-center px-4 py-2 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:text-teal-300 rounded-lg transition-colors text-sm font-bold border border-teal-500/20">
                  View More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
