import type { SkillCategory } from "@/data/skills";

export default function SkillCategoryCard({
  category,
}: {
  category: SkillCategory;
}) {
  return (
    <div
      className="skill-cat-card brutalist-card"
      style={{ borderTop: `4px solid ${category.color}` }}
    >
      <div className="skill-cat-header">
        <h3 className="skill-cat-title" style={{ color: category.color }}>
          {category.label}
        </h3>
        <span className="skill-cat-count">{category.skills.length} skills</span>
      </div>
      <div className="skill-cat-chips">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="skill-chip"
            style={{ "--chip-color": category.color } as React.CSSProperties}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
