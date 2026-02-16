"use client";

import { architecture } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Folder, ArrowDown, CheckCircle, Server } from "lucide-react";

export function ArchitectureSection() {
  return (
    <SectionWrapper
      id="architecture"
      title="System Architecture"
      subtitle={architecture.description}
    >
      {/* Monorepo structure diagram */}
      <div className="mb-10">
        <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Monorepo Structure
        </h3>
        <div className="mx-auto max-w-3xl">
          {/* Root */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 p-3"
          >
            <Folder className="h-5 w-5 text-purple-400" />
            <span className="font-mono text-sm font-semibold text-purple-300">
              unimind/ <span className="text-slate-500">(monorepo root)</span>
            </span>
          </motion.div>

          {/* Tree */}
          <div className="ml-4 border-l-2 border-white/5 pl-6">
            {architecture.structure.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative mb-3"
              >
                {/* Connector */}
                <div className="absolute -left-[25px] top-4 h-px w-5 bg-white/10" />
                <div className="rounded-xl border border-white/5 bg-white/[0.03] p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <Folder className="h-4 w-4 text-indigo-400" />
                    <code className="text-sm font-semibold text-indigo-300">
                      {item.name}
                    </code>
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                      {item.tech}
                    </span>
                  </div>
                  <p className="ml-6 text-xs text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* API Flow */}
      <GlassCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <div className="mb-5 flex items-center gap-2">
          <Server className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">
            API Communication Flow
          </h3>
        </div>
        <div className="space-y-3">
          {architecture.apiFlow.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 text-xs font-bold text-purple-300">
                  {i + 1}
                </span>
                <span className="text-sm text-slate-300">{step}</span>
              </div>
              {i < architecture.apiFlow.length - 1 && (
                <div className="ml-3.5 flex h-4 items-center">
                  <ArrowDown className="h-3 w-3 text-slate-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </SectionWrapper>
  );
}
