"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Glow } from "../ui/glow";
import { DemoModal } from "../ui/demo-modal";
import { cn } from "../../lib/utils";

export function CTASection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl w-full px-4 relative z-10"
      >
        <div className="max-w-4xl w-full mx-auto text-center bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border/10 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Transform Your Anomaly Detection Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover insights traditional methods simply cannot see. Reduce costs, ensure compliance, and transform your data analysis.
          </p>
          <DemoModal>
            <Button size="lg" className="inline-flex items-center gap-2">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </DemoModal>
          <Glow variant="center" className="opacity-60" />
        </div>
      </motion.div>
    </section>
  );
}
