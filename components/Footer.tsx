import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { person } from "@/data/person";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const domainLinks = [
  { label: "Flutter", href: "/flutter" },
  { label: "Backend", href: "/backend" },
  { label: "Full Stack", href: "/fullstack" },
];

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="footer-container">
        {/* Top row */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">{person.initials}</span>
            <p className="footer-tagline">{person.tagline}</p>
            <span className="footer-available-badge">
              ● {person.availability}
            </span>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Navigate</p>
            <nav className="footer-nav">
              {footerLinks.map((l) => (
                <a key={l.href} href={l.href} className="footer-nav-link">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Domains</p>
            <nav className="footer-nav">
              {domainLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-nav-link">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-nav-group">
            <p className="footer-nav-label">Connect</p>
            <div className="footer-socials">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="GitHub"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-pill"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a
                href={`mailto:${person.email}`}
                className="footer-social-pill"
                aria-label="Email"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
