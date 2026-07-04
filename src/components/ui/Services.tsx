"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Database, Smartphone } from "lucide-react";
import { sectionClasses, sectionHeaderClasses } from "@/lib/section-spacing";

export default function Services({ services, compact = false }: { services: any[]; compact?: boolean }) {
  const defaultServices = [
    { _id: "1", title: "Web Development", description: "Building responsive, highly scalable, and performance-optimized web applications using modern frameworks.", iconIdentifier: "Code2" },
    { _id: "2", title: "UI/UX Design", description: "Designing pixel-perfect, accessible, and user-centric interfaces tailored to your brand's aesthetic.", iconIdentifier: "Layout" },
    { _id: "3", title: "Backend Architecture", description: "Developing robust APIs and secure database structures ensuring data integrity and fast response times.", iconIdentifier: "Database" },
    { _id: "4", title: "Mobile Optimization", description: "Ensuring all digital experiences look perfect and function flawlessly across all screen sizes and mobile devices.", iconIdentifier: "Smartphone" },
  ];

  const data = services.length > 0 ? services : defaultServices;

  const getIcon = (id: string) => {
    switch (id) {
      case "Code2": return <Code2 size={32} className="text-teal-400" />;
      case "Layout": return <Layout size={32} className="text-purple-400" />;
      case "Database": return <Database size={32} className="text-yellow-400" />;
      case "Smartphone": return <Smartphone size={32} className="text-blue-400" />;
      default: return <Code2 size={32} className="text-teal-400" />;
    }
  };

  return (
    <section className={sectionClasses(compact)}>
      <div className="container mx-auto max-w-6xl">
        <div className={sectionHeaderClasses(compact)}>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Providing high-quality solutions tailored exactly to your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((srv, index) => (
            <motion.div
              key={srv._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0b101e] border border-[#1e293b] rounded-2xl p-8 text-center shadow-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.1)] transition-all"
            >
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                {srv.iconUrl ? (
                  <img src={srv.iconUrl} alt={srv.title} className="w-8 h-8 object-contain" />
                ) : (
                  getIcon(srv.iconIdentifier)
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{srv.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{srv.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
