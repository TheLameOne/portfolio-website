import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import ProjectGrid from "@/components/ProjectGrid";
import SkillCategoryCard from "@/components/SkillCategoryCard";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import type { DomainKey } from "@/data/skills";
import { person } from "@/data/person";

const DOMAIN_CONFIG: Record<
  DomainKey,
  {
    label: string;
    headline: string;
    tagline: string;
    accent: string;
    textColor: string;
    skillIds: string[];
  }
> = {
  flutter: {
    label: "Flutter",
    headline: "Mobile-First, Cross-Platform.",
    tagline:
      "8+ apps shipped. 120+ screens designed. Real-time chat, state management, offline storage — all done in Flutter.",
    accent: "#00C2B2",
    textColor: "#000",
    skillIds: ["flutter"],
  },
  backend: {
    label: "Backend",
    headline: "APIs, Infra & Microservices.",
    tagline:
      "FastAPI, Django, AWS EC2, NGINX, CI/CD. I build backends that scale and stay up.",
    accent: "#FF4D4D",
    textColor: "#fff",
    skillIds: ["backend", "devops"],
  },
  fullstack: {
    label: "Full Stack",
    headline: "End-to-End Ownership.",
    tagline:
      "From Flutter UI to Python microservices to AWS infrastructure — I own the full stack.",
    accent: "#FFD200",
    textColor: "#000",
    skillIds: ["flutter", "backend"],
  },
};

const VALID_DOMAINS: DomainKey[] = ["flutter", "backend", "fullstack"];

export function generateStaticParams() {
  return VALID_DOMAINS.map((domain) => ({ domain }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ domain: string }>;
}): Promise<Metadata> {
  const { domain } = await params;
  if (!VALID_DOMAINS.includes(domain as DomainKey)) return {};
  const cfg = DOMAIN_CONFIG[domain as DomainKey];
  return {
    title: `${cfg.label} — ${person.name}`,
    description: cfg.tagline,
  };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  if (!VALID_DOMAINS.includes(domain as DomainKey)) {
    notFound();
  }

  const key = domain as DomainKey;
  const cfg = DOMAIN_CONFIG[key];
  const domainProjects = projects.filter((p) => p.domains.includes(key));
  const domainSkillCats = skillCategories.filter((c) =>
    cfg.skillIds.includes(c.id)
  );

  return (
    <div className="domain-page">
      {/* Domain hero */}
      <section
        className="domain-hero"
        style={{ background: cfg.accent, color: cfg.textColor }}
      >
        <div className="section-container">
          <Link href="/" className="domain-back-link" style={{ color: cfg.textColor }}>
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <span className="domain-hero-label" style={{ opacity: 0.7 }}>
            Domain Focus
          </span>
          <h1 className="domain-hero-title">{cfg.label.toUpperCase()}</h1>
          <p className="domain-hero-tagline">{cfg.headline}</p>
          <p className="domain-hero-body">{cfg.tagline}</p>

          <a
            href={person.resume}
            download
            className="btn-primary domain-download-btn"
            style={{
              background: cfg.textColor === "#000" ? "#000" : "#fff",
              color: cfg.textColor === "#000" ? cfg.accent : "#000",
              boxShadow: `4px 4px 0px ${cfg.textColor === "#000" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`,
            }}
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="section-projects">
        <div className="section-container">
          <span className="section-kicker">{cfg.label} Projects</span>
          <h2 className="section-heading">Work</h2>
          <ProjectGrid projects={domainProjects} activeDomain={key} />
        </div>
      </section>

      {/* Skills for this domain */}
      <section className="section-skills">
        <div className="section-container">
          <span className="section-kicker">{cfg.label} Stack</span>
          <h2 className="section-heading">Skills</h2>
          <div className="domain-skills-grid">
            {domainSkillCats.map((cat) => (
              <SkillCategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
