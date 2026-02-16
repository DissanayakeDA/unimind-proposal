"use client";

import { futureEnhancements, siteConfig } from "@/config/proposal-data";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { GlassCard } from "@/components/ui/glass-card";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function FutureSection() {
  return (
    <SectionWrapper
      id="future"
      title="Future Enhancements"
      subtitle="A roadmap of planned improvements beyond the initial release"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {futureEnhancements.map((item, i) => (
          <GlassCard
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group"
          >
            <div className="mb-4 flex items-center justify-between">
              <motion.div
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/15 to-blue-500/15 transition-colors group-hover:from-sky-500/25 group-hover:to-blue-500/25"
                whileHover={{ rotate: -10 }}
              >
                <DynamicIcon
                  name={item.icon}
                  className="h-5 w-5 text-sky-400"
                />
              </motion.div>
              <Badge
                variant="secondary"
                className="border border-sky-500/20 bg-sky-500/10 text-[10px] font-medium text-sky-300"
              >
                {item.timeline}
              </Badge>
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="mx-auto max-w-md rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-xs font-bold text-white">
              U
            </div>
            <span className="text-lg font-bold text-white">UniMind</span>
          </div>
          <p className="mb-2 text-sm text-slate-400">
            {siteConfig.title}
          </p>
          <p className="text-xs text-slate-600">
            {siteConfig.university} • {siteConfig.module} • {siteConfig.year}
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          <p className="mt-4 text-[11px] text-slate-700">
            © {new Date().getFullYear()} UniMind Team. All rights reserved.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
