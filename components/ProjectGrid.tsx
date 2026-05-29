"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import type { Project, DomainKey } from "@/data/projects";

interface ProjectGridProps {
  projects: Project[];
  activeDomain?: DomainKey;
}

export default function ProjectGrid({ projects, activeDomain }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Collect all unique tags from the project set
  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [projects]);

  // Filter: domain (fixed if passed) + tag (toggleable)
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const domainMatch = activeDomain ? p.domains.includes(activeDomain) : true;
      const tagMatch = activeTag ? p.tags.includes(activeTag) : true;
      return domainMatch && tagMatch;
    });
  }, [projects, activeDomain, activeTag]);

  return (
    <div className="project-grid-wrapper">
      {/* Filter bar */}
      <div className="project-filter-bar" role="group" aria-label="Filter projects by technology">
        <button
          className={`project-filter-btn${activeTag === null ? " active" : ""}`}
          onClick={() => setActiveTag(null)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`project-filter-btn${activeTag === tag ? " active" : ""}`}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="project-grid">
        {filtered.length === 0 ? (
          <p className="project-grid-empty">No projects match this filter.</p>
        ) : (
          filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
}
