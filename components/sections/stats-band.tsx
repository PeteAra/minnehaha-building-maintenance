"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/layout/container";
import type { Stat } from "@/content/stats";
import { companyStats } from "@/content/stats";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedStat({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(shouldReduceMotion ? stat.value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setCount(stat.value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const step = stat.value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, shouldReduceMotion, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <p className="text-4xl font-bold text-accent sm:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
    </motion.div>
  );
}

export function StatsBand() {
  return (
    <AnimatedSection className="bg-primary-dark py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {companyStats.map((stat, index) => (
            <AnimatedStat key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
