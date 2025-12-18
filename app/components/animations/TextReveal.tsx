"use client";

import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="mr-[0.25em] inline-block"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface GradientTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function GradientTextReveal({
  text,
  className = "",
  delay = 0,
}: GradientTextRevealProps) {
  return (
    <motion.span
      className={`gradient-text ${className}`}
      initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.8,
        type: "spring" as const,
        damping: 15,
        stiffness: 80,
      }}
    >
      {text}
    </motion.span>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 0.05,
}: TypewriterTextProps) {
  const characters = text.split("");

  return (
    <motion.span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
