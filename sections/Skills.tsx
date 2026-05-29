import SectionReveal from "@/components/SectionReveal";
import SkillsTab from "@/components/SkillsTab";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-skills">
      <div className="section-container">
        <SectionReveal>
          <span className="section-kicker">Technical Stack</span>
          <h2 className="section-heading">Skills</h2>
          <p className="section-subtitle">
            Languages, frameworks, tools, and platforms I use to build things.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <SkillsTab categories={skillCategories} />
        </SectionReveal>
      </div>
    </section>
  );
}
