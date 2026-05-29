"use client";

import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

const TAG_COLORS: Record<string, string> = {
  Flutter: "#00C2B2",
  Dart: "#00C2B2",
  FastAPI: "#FF4D4D",
  Django: "#FF4D4D",
  Python: "#FF4D4D",
  "AWS EC2": "#4361EE",
  NGINX: "#4361EE",
  "CI/CD": "#4361EE",
  WebSockets: "#B5E550",
  WebRTC: "#B5E550",
  Golang: "#FF47C7",
  Firebase: "#FFD200",
  "REST APIs": "#FFD200",
  Firestore: "#FFD200",
  "React 19": "#61DAFB",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  NestJS: "#E0234E",
  PostgreSQL: "#336791",
  PostGIS: "#336791",
  MySQL: "#4479A1",
  Docker: "#2496ED",
  Nginx: "#4361EE",
  JWT: "#000000",
  "Framer Motion": "#FF4D4D",
  "Tailwind CSS": "#06B6D4",
  "Tailwind CSS 4": "#06B6D4",
  OpenCV: "#5C3EE8",
  "Computer Vision": "#5C3EE8",
  gRPC: "#244C5A",
  Protobuf: "#244C5A",
  "Secure Storage": "#4361EE",
  "Biometric Auth": "#4361EE",
  Kommunicate: "#FF4D4D",
  TTS: "#B5E550",
  BLoC: "#00C2B2",
  MVVM: "#00C2B2",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  default: "#000000",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? TAG_COLORS.default;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translate(-2px, -2px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  };

  const visibleTags = project.tags.slice(0, 4);

  return (
    <div
      ref={cardRef}
      className={project.featured ? "brutalist-card-featured project-card" : "brutalist-card project-card"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.comingSoon && (
        <span className="project-card-coming-soon-badge">⏳ Coming Soon</span>
      )}

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.description}</p>

      {/* Tags */}
      <div className="project-card-tags">
        {visibleTags.map((tag) => (
          <span
            key={tag}
            className="tag-pill"
            style={{
              borderColor: tagColor(tag),
              color: tagColor(tag),
              boxShadow: `2px 2px 0px ${tagColor(tag)}`,
            }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="tag-pill" style={{ opacity: 0.6 }}>
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="project-card-links">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            aria-label="View repository"
          >
            <GithubIcon size={16} />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            aria-label="View live project"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
