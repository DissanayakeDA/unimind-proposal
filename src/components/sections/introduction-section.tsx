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
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              Problem Statement
            </h3>
          </div>
          <p className="leading-relaxed text-slate-400">
            {introduction.problem}
          </p>
        </GlassCard>

        {/* Motivation */}
        <GlassCard
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15">
              <Lightbulb className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">Motivation</h3>
          </div>
          <p className="leading-relaxed text-slate-400">
            {introduction.motivation}
          </p>
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
            className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
          >
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            <p className="text-sm text-slate-300">{point}</p>
          </div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
