"use client";

import { techStack } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { motion } from "framer-motion";

// Category color map
const categoryColors: Record<string, string> = {
  Frontend: "from-blue-500/20 to-cyan-500/20 text-blue-400",
  Backend: "from-green-500/20 to-emerald-500/20 text-green-400",
  Database: "from-orange-500/20 to-amber-500/20 text-orange-400",
  "Real-Time": "from-pink-500/20 to-rose-500/20 text-pink-400",
  "AI / LLM": "from-purple-500/20 to-violet-500/20 text-purple-400",
  Language: "from-blue-500/20 to-indigo-500/20 text-blue-400",
  Styling: "from-cyan-500/20 to-teal-500/20 text-cyan-400",
  ORM: "from-violet-500/20 to-purple-500/20 text-violet-400",
  DevOps: "from-sky-500/20 to-blue-500/20 text-sky-400",
  Security: "from-red-500/20 to-orange-500/20 text-red-400",
};

export function TechStackSection() {
  return (
    <SectionWrapper
      id="tech-stack"
      title="Technology Stack"
      subtitle="The technologies and tools powering UniMind"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {techStack.map((tech, i) => {
          const colors =
            categoryColors[tech.category] ||
            "from-purple-500/20 to-indigo-500/20 text-purple-400";
          const textColor = colors.split(" ").pop() || "text-purple-400";
          return (
            <GlassCard
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group text-center"
            >
              <motion.div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.split(" ").slice(0, 2).join(" ")}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DynamicIcon
                  name={tech.icon}
                  className={`h-5 w-5 ${textColor}`}
                />
              </motion.div>
              <h4 className="mb-1 text-sm font-semibold text-white">
                {tech.name}
              </h4>
              <span
                className={`mb-2 inline-block rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium ${textColor}`}
              >
                {tech.category}
              </span>
              <p className="text-xs leading-relaxed text-slate-500">
                {tech.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
