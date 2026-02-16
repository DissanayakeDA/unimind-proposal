"use client";

import { systemModules } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SystemOverviewSection() {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <SectionWrapper
      id="system-overview"
      title="System Overview"
      subtitle="The six core modules that power the UniMind platform"
    >
      {/* Module tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {systemModules.map((mod, i) => (
          <button
            key={i}
            onClick={() => setActiveModule(i)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
              activeModule === i
                ? "border border-purple-500/30 bg-purple-500/15 text-purple-300 shadow-sm shadow-purple-500/10"
                : "border border-white/5 bg-white/[0.03] text-slate-400 hover:bg-white/[0.06] hover:text-slate-300"
            )}
          >
            <DynamicIcon name={mod.icon} className="h-4 w-4" />
            <span className="hidden sm:inline">{mod.title}</span>
          </button>
        ))}
      </div>

      {/* Active module detail */}
      <motion.div
        key={activeModule}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <GlassCard className="md:flex md:gap-8">
          <div className="mb-6 flex-1 md:mb-0">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20">
                <DynamicIcon
                  name={systemModules[activeModule].icon}
                  className="h-6 w-6 text-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                {systemModules[activeModule].title}
              </h3>
            </div>
            <p className="leading-relaxed text-slate-400">
              {systemModules[activeModule].description}
            </p>
          </div>
          <div className="flex-1">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
              Key Features
            </h4>
            <ul className="space-y-3">
              {systemModules[activeModule].features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-slate-300">{feat}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </motion.div>

      {/* Compact grid */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {systemModules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            onClick={() => setActiveModule(i)}
            className={cn(
              "flex cursor-pointer flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-200",
              activeModule === i
                ? "border-purple-500/30 bg-purple-500/10"
                : "border-white/5 bg-white/[0.02] hover:border-purple-500/20 hover:bg-purple-500/5"
            )}
          >
            <DynamicIcon
              name={mod.icon}
              className={cn(
                "h-5 w-5",
                activeModule === i ? "text-purple-400" : "text-slate-500"
              )}
            />
            <span
              className={cn(
                "text-xs font-medium",
                activeModule === i ? "text-purple-300" : "text-slate-400"
              )}
            >
              {mod.title}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
