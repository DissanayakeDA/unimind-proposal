"use client";

import { aiEngine } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Type,
  Cpu,
  Eye,
  Database,
} from "lucide-react";

const stepIcons = [Type, Cpu, Eye, Database];

export function AIEngineSection() {
  return (
    <SectionWrapper
      id="ai-engine"
      title="AI Conversion Engine"
      subtitle={aiEngine.description}
    >
      {/* Workflow steps */}
      <div className="mb-10">
        <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Conversion Workflow
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          {aiEngine.workflow.map((step, i) => {
            const Icon = stepIcons[i] || Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative"
              >
                <GlassCard className="h-full text-center">
                  <div className="mb-3 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                      {step.step}
                    </span>
                    <h4 className="text-sm font-semibold text-slate-900">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </GlassCard>
                {/* Arrow connector */}
                {i < 3 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-4 w-4 text-purple-300" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Key capabilities */}
      <GlassCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
            <Sparkles className="h-5 w-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">
            Key Capabilities
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {aiEngine.keyCapabilities.map((cap, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
              <span className="text-sm text-muted-foreground">{cap}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
