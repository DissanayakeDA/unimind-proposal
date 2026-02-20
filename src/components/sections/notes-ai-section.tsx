"use client";

import { notesAI } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { BookOpen, FileUp, Sparkles, BrainCircuit, CheckCircle } from "lucide-react";

const featureIcons = [FileUp, Sparkles, BrainCircuit];

export function NotesAISection() {
  return (
    <SectionWrapper
      id="notes-ai"
      title="Notes & AI Learning Assistant"
      subtitle={notesAI.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {notesAI.features.map((feature, i) => {
          const Icon = featureIcons[i] || BookOpen;
          return (
            <GlassCard
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Icon className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {feature.items.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + j * 0.06, duration: 0.3 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
