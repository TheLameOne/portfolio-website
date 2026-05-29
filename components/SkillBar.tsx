"use client";

import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  name: string;
  level: number; // 0–100
  color: string;
  delay?: number; // stagger ms
}

export default function SkillBar({ name, level, color, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${width}%`,
            background: color,
            transition: `width 700ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
