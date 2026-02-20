"use client";

import { techStack } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { motion } from "framer-motion";

// Category color map
const categoryColors: Record<string, string> = {
  Frontend: "from-blue-100 to-cyan-100 text-blue-600",
  Backend: "from-green-100 to-emerald-100 text-green-600",
  Database: "from-orange-100 to-amber-100 text-orange-600",
  "Real-Time": "from-pink-100 to-rose-100 text-pink-600",
  "AI / LLM": "from-purple-100 to-violet-100 text-purple-600",
  Language: "from-blue-100 to-indigo-100 text-blue-600",
  Styling: "from-cyan-100 to-teal-100 text-cyan-600",
  ODM: "from-violet-100 to-purple-100 text-violet-600",
  DevOps: "from-sky-100 to-blue-100 text-sky-600",
  Security: "from-red-100 to-orange-100 text-red-600",
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
            "from-purple-100 to-indigo-100 text-purple-600";
          const textColor = colors.split(" ").pop() || "text-purple-600";
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
              <h4 className="mb-1 text-sm font-semibold text-slate-900">
                {tech.name}
              </h4>
              <span
                className={`mb-2 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium ${textColor}`}
              >
                {tech.category}
              </span>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {tech.description}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
