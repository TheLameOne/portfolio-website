"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms delay before animation starts
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add("revealed");
            }, delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={clsx("section-reveal", className)}
    >
      {children}
    </div>
  );
}
