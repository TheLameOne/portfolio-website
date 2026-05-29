import SectionReveal from "@/components/SectionReveal";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { person } from "@/data/person";

export default function Contact() {
  return (
    <section id="contact" className="section-contact">
      <div className="section-container">
        <SectionReveal>
          <span className="section-kicker" style={{ color: "#333" }}>
            Get In Touch
          </span>
          <h2 className="section-heading">Let&apos;s Build Something</h2>
          <p className="section-subtitle contact-subtitle">
            Have a project, a role, or just want to talk tech? I&apos;m open to remote work,
            freelance, and full-time opportunities.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="contact-grid">
            {/* Left: form */}
            <div className="contact-form-col">
              <ContactForm />
            </div>

            {/* Right: info */}
            <div className="contact-info-col">
              <div className="contact-info-card brutalist-card">
                <h3 className="contact-info-title">Direct Contact</h3>

                <div className="contact-info-links">
                  <a href={`mailto:${person.email}`} className="contact-info-link">
                    <Mail size={20} />
                    <div>
                      <span className="contact-info-link-label">Email</span>
                      <span className="contact-info-link-value">{person.email}</span>
                    </div>
                  </a>
                  <a href={`tel:${person.phone}`} className="contact-info-link">
                    <Phone size={20} />
                    <div>
                      <span className="contact-info-link-label">Phone</span>
                      <span className="contact-info-link-value">{person.phone}</span>
                    </div>
                  </a>
                  <a
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    <GithubIcon size={20} />
                    <div>
                      <span className="contact-info-link-label">GitHub</span>
                      <span className="contact-info-link-value">@TheLameOne</span>
                    </div>
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-link"
                  >
                    <LinkedinIcon size={20} />
                    <div>
                      <span className="contact-info-link-label">LinkedIn</span>
                      <span className="contact-info-link-value">harsh463</span>
                    </div>
                  </a>
                </div>

                <div className="contact-availability">
                  <span className="contact-avail-dot" />
                  <span className="contact-avail-text">
                    Available for remote work — response within 24h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
