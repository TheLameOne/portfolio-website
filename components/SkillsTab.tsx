"use client";

import { useState } from "react";
import type { SkillCategory } from "@/data/skills";

export default function SkillsTab({ categories }: { categories: SkillCategory[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const cat = categories[activeIdx];

  return (
    <div className="skills-tab-wrapper">
      {/* Tab bar */}
      <div className="skills-tab-bar" role="tablist">
        {categories.map((c, i) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={i === activeIdx}
            className={`skills-tab-btn${i === activeIdx ? " active" : ""}`}
            style={
              i === activeIdx
                ? ({ background: c.color, color: "#000" } as React.CSSProperties)
                : undefined
            }
            onClick={() => setActiveIdx(i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Chips panel — key forces re-mount + re-animation on tab switch */}
      <div className="skills-tab-panel" key={cat.id}>
        <p className="skills-tab-count">{cat.skills.length} technologies</p>
        <div className="skills-tab-chips">
          {cat.skills.map((skill, i) => (
            <span
              key={skill.name}
              className="skill-chip"
              style={
                {
                  "--chip-color": cat.color,
                  animationDelay: `${i * 45}ms`,
                } as React.CSSProperties
              }
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
