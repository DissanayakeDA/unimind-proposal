"use client";

import { introduction } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle } from "lucide-react";

export function IntroductionSection() {
  return (
    <SectionWrapper
      id="introduction"
      title="Introduction"
      subtitle="Understanding the problem and the motivation behind UniMind"
    >
      <div className="grid gap-8 md:grid-cols-2">
        {/* Problem Statement */}
        <GlassCard
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Problem Statement
            </h3>
          </div>
          <ul className="space-y-3">
            {introduction.problem.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-start gap-2"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>

        {/* Motivation */}
        <GlassCard
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <Lightbulb className="h-5 w-5 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Motivation</h3>
          </div>
          <ul className="space-y-3">
            {introduction.motivation.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
                className="flex items-start gap-2"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                <span className="text-muted-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>

      {/* Key Points */}
      <motion.div
        className="mt-8 grid gap-4 sm:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {introduction.keyPoints.map((point, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <p className="text-sm text-muted-foreground">{point}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
