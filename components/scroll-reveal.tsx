"use client";

import { useAnimation, motion, useInView, type MotionProps } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

type ScrollRevealProps = MotionProps & {
  once?: boolean;
  children: ReactNode;
  className?: string;
};

export function ScrollReveal({ once = true, children, className, ...rest }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
