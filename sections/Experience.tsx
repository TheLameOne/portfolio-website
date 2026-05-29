import SectionReveal from "@/components/SectionReveal";
import Timeline from "@/components/Timeline";
import { experiences, education } from "@/data/experience";
import { GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-experience">
      <div className="section-container">
        <SectionReveal>
          <span className="section-kicker">Work History</span>
          <h2 className="section-heading">Experience</h2>
          <p className="section-subtitle">
            Where I&apos;ve shipped products, led teams, and grown as an engineer.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <Timeline entries={experiences} />
        </SectionReveal>

        {/* Education card */}
        <SectionReveal delay={200}>
          <div className="education-card brutalist-card">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>
            <div className="education-content">
              <h3 className="education-degree">
                {education.degree} in {education.field}
              </h3>
              <p className="education-institution">{education.institution}</p>
              <div className="education-meta">
                <span className="timeline-period">{education.period}</span>
                <span className="timeline-location">{education.location}</span>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
