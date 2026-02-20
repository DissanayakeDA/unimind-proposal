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
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 transition-colors group-hover:from-sky-200 group-hover:to-blue-200"
                whileHover={{ rotate: -10 }}
              >
                <DynamicIcon
                  name={item.icon}
                  className="h-5 w-5 text-sky-600"
                />
              </motion.div>
              <Badge
                variant="secondary"
                className="border border-sky-200 bg-sky-50 text-[10px] font-medium text-sky-700"
              >
                {item.timeline}
              </Badge>
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
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
        <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 text-xs font-bold text-white">
              U
            </div>
            <span className="text-lg font-bold text-slate-900">UniMind</span>
          </div>
          <p className="mb-2 text-sm text-muted-foreground">
            {siteConfig.title}
          </p>
          <p className="text-xs text-slate-500">
            {siteConfig.university} • {siteConfig.module} • {siteConfig.year}
          </p>
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
          <p className="mt-4 text-[11px] text-slate-400">
            © {new Date().getFullYear()} UniMind Team. All rights reserved.
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
