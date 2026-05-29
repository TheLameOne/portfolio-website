import SectionReveal from "@/components/SectionReveal";
import { MapPin, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { person } from "@/data/person";

export default function About() {
  return (
    <section id="about" className="section-about">
      <div className="section-container">
        <SectionReveal>
          <span className="section-kicker">About Me</span>
          <div className="about-grid">
            {/* Left: text */}
            <div className="about-text">
              <h2 className="section-heading">Developer.<br />Architect.<br />Shipment Machine.</h2>

              <p className="about-body">
                I&apos;m <strong>Harsh Verma</strong>, a Flutter & Full Stack developer from Delhi NCR
                who&apos;s spent the last 2+ years building real products — from mobile UIs to Python
                microservices to AWS-deployed SaaS platforms.
              </p>
              <p className="about-body">
                At Cloud Harbor Technologies, I lead a team shipping 8+ apps across mobile and web,
                with 120+ screens and 180+ API integrations. Before that, I built travel app frontends
                at FantasySquad. I&apos;m obsessed with clean architecture, fast UIs, and shipping things
                that actually work at scale.
              </p>

              {/* Callout box */}
              <div className="about-callout">
                <span className="about-callout-icon">⚡</span>
                <p>
                  I don&apos;t just write code — I own products. From feature planning and architecture
                  to code reviews, deployment, and release management.
                </p>
              </div>

              <div className="about-ctas">
                <a href="#projects" className="btn-primary">See My Work</a>
                <a href={person.resume} download className="btn-secondary">Download CV</a>
              </div>
            </div>

            {/* Right: info card */}
            <div className="about-info">
              <div className="about-avatar-block brutalist-card">
                <div className="about-avatar-inner">
                  <span className="about-avatar-initials">{person.initials}</span>
                  <span className="about-avatar-label">Harsh Verma</span>
                  <span className="about-avatar-title">{person.title}</span>
                </div>
              </div>

              <div className="about-contact-pills">
                <a href={`mailto:${person.email}`} className="about-contact-pill">
                  <Mail size={14} />
                  {person.email}
                </a>
                <a href={`tel:${person.phone}`} className="about-contact-pill">
                  <Phone size={14} />
                  {person.phone}
                </a>
                <span className="about-contact-pill">
                  <MapPin size={14} />
                  {person.location}
                </span>
                <a href={person.github} target="_blank" rel="noopener noreferrer" className="about-contact-pill">
                  <GithubIcon size={14} />
                  GitHub
                </a>
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="about-contact-pill">
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </div>

              {/* Domain badges */}
              <div className="about-domain-badges">
                <a href="/flutter" className="about-domain-badge" style={{ background: "#00C2B2" }}>Flutter</a>
                <a href="/backend" className="about-domain-badge" style={{ background: "#FF4D4D" }}>Backend</a>
                <a href="/fullstack" className="about-domain-badge" style={{ background: "#FFD200", color: "#000" }}>Full Stack</a>
              </div>

            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
