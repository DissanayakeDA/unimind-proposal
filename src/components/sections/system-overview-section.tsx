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
                ? "border border-purple-300 bg-purple-100 text-purple-700 shadow-sm shadow-purple-500/10"
                : "border border-slate-200 bg-white text-muted-foreground hover:bg-slate-50 hover:text-slate-700"
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
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <DynamicIcon
                  name={systemModules[activeModule].icon}
                  className="h-6 w-6 text-purple-600"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {systemModules[activeModule].title}
              </h3>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {systemModules[activeModule].description}
            </p>
          </div>
          <div className="flex-1">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
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
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span className="text-sm text-muted-foreground">{feat}</span>
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
                ? "border-purple-300 bg-purple-50"
                : "border-slate-200 bg-white hover:border-purple-200 hover:bg-purple-50"
            )}
          >
            <DynamicIcon
              name={mod.icon}
              className={cn(
                "h-5 w-5",
                activeModule === i ? "text-purple-600" : "text-slate-500"
              )}
            />
            <span
              className={cn(
                "text-xs font-medium",
                activeModule === i ? "text-purple-700" : "text-muted-foreground"
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
