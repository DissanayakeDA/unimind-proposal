"use client";

import { expectedOutcomes } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { motion } from "framer-motion";

export function OutcomesSection() {
  return (
    <SectionWrapper
      id="outcomes"
      title="Expected Outcomes"
      subtitle="The tangible impact UniMind will deliver to the academic community"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {expectedOutcomes.map((outcome, i) => (
          <GlassCard
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="mb-4 flex items-center gap-4">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/15 to-teal-500/15 transition-colors group-hover:from-emerald-500/25 group-hover:to-teal-500/25"
                whileHover={{ scale: 1.1 }}
              >
                <DynamicIcon
                  name={outcome.icon}
                  className="h-5 w-5 text-emerald-400"
                />
              </motion.div>
              <h3 className="text-lg font-semibold text-white">
                {outcome.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {outcome.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
