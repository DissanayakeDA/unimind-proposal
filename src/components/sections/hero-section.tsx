"use client";

import { siteConfig, teamMembers, techBadges } from "@/config/proposal-data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-200/50 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-indigo-200/50 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/50 blur-[80px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* University badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700"
        >
          <GraduationCap className="h-4 w-4" />
          {siteConfig.university} • {siteConfig.module}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent">
            Uni
          </span>
          <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Mind
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mb-4 max-w-2xl text-lg text-slate-600 md:text-xl"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Sparkle accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="mb-10 flex items-center justify-center gap-2 text-sm text-violet-600 font-medium"
        >
          <Sparkles className="h-4 w-4" />
          AI-Powered Real-Time Academic Community Platform
          <Sparkles className="h-4 w-4" />
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mb-14 flex flex-wrap justify-center gap-2"
        >
          {techBadges.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
            >
              <Badge
                variant="secondary"
                className="border border-slate-200 bg-white/50 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-md hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-colors"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Supervisor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
            {siteConfig.supervisorLabel}
          </p>
          <p className="text-sm font-semibold text-slate-700">
            {siteConfig.supervisor}
          </p>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-slate-500">
            Team Members
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <p className="text-sm font-semibold text-slate-800">
                  {member.name}
                </p>
                <p className="text-xs text-purple-600">{member.id}</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  {member.module}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="mx-auto h-5 w-5 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
