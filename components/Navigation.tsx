"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { person } from "@/data/person";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const domainLinks = [
  { label: "Flutter", href: "/flutter", color: "#00C2B2" },
  { label: "Backend", href: "/backend", color: "#FF4D4D" },
  { label: "Full Stack", href: "/fullstack", color: "#FFD200" },
];

export default function Navigation() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [domainOpen, setDomainOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const domainRef = useRef<HTMLDivElement>(null);

  // Init dark mode from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("dark-mode");
    if (stored === "true") setDark(true);
  }, []);

  // Apply dark mode class
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark-mode", String(dark));
  }, [dark]);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close domain dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (domainRef.current && !domainRef.current.contains(e.target as Node)) {
        setDomainOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`brutalist-nav${scrolled ? " scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="Harsh Verma — Home">
          {person.initials}
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${activeSection === link.href.slice(1) ? " active" : ""}`}
            >
              {link.label}
            </a>
          ))}

          {/* Domain dropdown */}
          <div className="nav-domain-wrap" ref={domainRef}>
            <button
              className="nav-domain-btn"
              onClick={() => setDomainOpen((v) => !v)}
              aria-expanded={domainOpen}
              aria-haspopup="true"
            >
              Domains
              <ChevronDown size={14} className={`nav-chevron${domainOpen ? " open" : ""}`} />
            </button>
            {domainOpen && (
              <div className="nav-domain-dropdown" role="menu">
                {domainLinks.map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="nav-domain-item"
                    role="menuitem"
                    style={{ "--domain-color": d.color } as React.CSSProperties}
                    onClick={() => setDomainOpen(false)}
                  >
                    <span
                      className="nav-domain-dot"
                      style={{ background: d.color }}
                    />
                    {d.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right controls */}
        <div className="nav-controls">
          <button
            className="nav-icon-btn"
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            data-hover
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={`mailto:${person.email}`}
            className="btn-primary nav-cta"
          >
            Hire Me
          </a>
          <button
            className="nav-icon-btn nav-hamburger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav-mobile-drawer" role="dialog" aria-modal="true">
          <div className="nav-mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="nav-mobile-divider" />
            <p className="nav-mobile-label">Domains</p>
            {domainLinks.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="nav-mobile-link"
                style={{ color: d.color }}
                onClick={() => setMobileOpen(false)}
              >
                {d.label}
              </Link>
            ))}
            <div className="nav-mobile-divider" />
            <a href={`mailto:${person.email}`} className="btn-primary" onClick={() => setMobileOpen(false)}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
