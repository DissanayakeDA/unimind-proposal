"use client";

import { navItems } from "@/config/proposal-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { useState, useEffect } from "react";
import { Menu, X, ChevronUp } from "lucide-react";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 400);

      // Determine active section
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
      let current = "hero";
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-1 bg-slate-800/50">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed right-4 top-4 z-50 rounded-xl border border-white/10 bg-slate-900/80 p-2.5 backdrop-blur-lg lg:hidden"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? (
          <X className="h-5 w-5 text-purple-400" />
        ) : (
          <Menu className="h-5 w-5 text-purple-400" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/5 bg-slate-950/80 backdrop-blur-xl lg:flex">
        {/* Brand */}
        <div className="flex items-center gap-3 border-b border-white/5 px-5 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-purple-500/25">
            U
          </div>
          <div>
            <p className="text-sm font-semibold text-white">UniMind</p>
            <p className="text-[11px] text-slate-500">Project Proposal</p>
          </div>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    activeSection === item.id
                      ? "bg-purple-500/15 text-purple-300 shadow-sm shadow-purple-500/10"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  )}
                >
                  <DynamicIcon
                    name={item.icon}
                    className={cn(
                      "h-4 w-4 transition-colors",
                      activeSection === item.id
                        ? "text-purple-400"
                        : "text-slate-500 group-hover:text-slate-300"
                    )}
                  />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto h-1.5 w-1.5 rounded-full bg-purple-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 px-5 py-4">
          <p className="text-[11px] text-slate-600">
            SLIIT • IT3040 • 2025/2026
          </p>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-white/5 bg-slate-950/95 backdrop-blur-xl lg:hidden"
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center gap-3 border-b border-white/5 px-5 py-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-sm font-bold text-white">
                  U
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">UniMind</p>
                  <p className="text-[11px] text-slate-500">
                    Project Proposal
                  </p>
                </div>
              </div>
              <div className="overflow-y-auto px-3 py-4">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={cn(
                          "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                          activeSection === item.id
                            ? "bg-purple-500/15 text-purple-300"
                            : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                        )}
                      >
                        <DynamicIcon
                          name={item.icon}
                          className={cn(
                            "h-4 w-4",
                            activeSection === item.id
                              ? "text-purple-400"
                              : "text-slate-500"
                          )}
                        />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-purple-600/80 text-white shadow-lg shadow-purple-500/20 backdrop-blur-lg transition-colors hover:bg-purple-500"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
