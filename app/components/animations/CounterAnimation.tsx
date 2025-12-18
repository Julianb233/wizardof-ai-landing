"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function CounterAnimation({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: CounterAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
}

interface PercentageCounterProps {
  value: number;
  className?: string;
  duration?: number;
}

export function PercentageCounter({
  value,
  className = "",
  duration = 2,
}: PercentageCounterProps) {
  return (
    <CounterAnimation
      value={value}
      suffix="%"
      className={className}
      duration={duration}
    />
  );
}

interface CurrencyCounterProps {
  value: number;
  className?: string;
  duration?: number;
}

export function CurrencyCounter({
  value,
  className = "",
  duration = 2,
}: CurrencyCounterProps) {
  return (
    <CounterAnimation
      value={value}
      prefix="$"
      className={className}
      duration={duration}
    />
  );
}
