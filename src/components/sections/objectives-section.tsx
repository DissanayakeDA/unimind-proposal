"use client";

import { objectives } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export function ObjectivesSection() {
  return (
    <SectionWrapper
      id="objectives"
      title="Project Objectives"
      subtitle="The core goals UniMind aims to achieve"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {objectives.map((obj, i) => (
          <GlassCard
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="mb-4 flex items-center gap-3">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 transition-colors group-hover:bg-purple-200"
                whileHover={{ rotate: 12 }}
              >
                <Target className="h-5 w-5 text-purple-600" />
              </motion.div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-bold text-white">
                {i + 1}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              {obj.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {obj.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
