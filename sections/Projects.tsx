import SectionReveal from "@/components/SectionReveal";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-projects">
      <div className="section-container">
        <SectionReveal>
          <span className="section-kicker">Selected Work</span>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subtitle">
            Things I&apos;ve built — from mobile apps to backend services to full SaaS platforms.
          </p>
        </SectionReveal>
        <SectionReveal delay={150}>
          <ProjectGrid projects={projects} />
        </SectionReveal>
      </div>
    </section>
  );
}
