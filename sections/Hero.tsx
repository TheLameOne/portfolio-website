"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { person } from "@/data/person";
import type { GitHubStats } from "@/lib/github";

const GLITCH_CHARS = "!@#$%^&*<>/\\|{}[]";

function useTypewriter(roles: readonly string[]) {
  const [display, setDisplay] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"type" | "wait" | "erase">("type");
  const charIdx = useRef(0);
  const glitchCount = useRef(0);

  useEffect(() => {
    const current = roles[roleIdx];

    if (phase === "type") {
      if (charIdx.current < current.length) {
        const timer = setTimeout(() => {
          charIdx.current++;
          setDisplay(current.slice(0, charIdx.current));
        }, 60);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("wait"), 1800);
        return () => clearTimeout(timer);
      }
    }

    if (phase === "wait") {
      const timer = setTimeout(() => setPhase("erase"), 400);
      return () => clearTimeout(timer);
    }

    if (phase === "erase") {
      if (glitchCount.current < 3) {
        const timer = setTimeout(() => {
          const scrambled = current
            .slice(0, charIdx.current)
            .split("")
            .map((c, i) =>
              i >= charIdx.current - 2
                ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
                : c
            )
            .join("");
          setDisplay(scrambled);
          glitchCount.current++;
        }, 80);
        return () => clearTimeout(timer);
      }
      if (charIdx.current > 0) {
        const timer = setTimeout(() => {
          charIdx.current--;
          setDisplay(current.slice(0, charIdx.current));
        }, 40);
        return () => clearTimeout(timer);
      } else {
        glitchCount.current = 0;
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase("type");
      }
    }
  }, [display, phase, roleIdx, roles]);

  return display;
}

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="hero-stat">
      <span className="hero-stat-value">
        {count}
        {suffix}
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

export default function Hero({ githubStats }: { githubStats?: GitHubStats | null }) {
  const stats = person.stats.map((stat) => {
    if (stat.label === "Years Building" && githubStats?.yearsBuilding)
      return { ...stat, value: githubStats.yearsBuilding };
    if (stat.label === "GitHub Repos" && githubStats?.publicRepos)
      return { ...stat, value: githubStats.publicRepos };
    if (stat.label === "Apps Shipped" && githubStats?.appsShipped)
      return { ...stat, value: githubStats.appsShipped };
    if (stat.label === "Contributions" && githubStats?.contributions)
      return { ...stat, value: githubStats.contributions };
    return stat;
  });

  const tagline = useTypewriter(person.roles);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section" id="home" aria-label="Hero">
      {/* Decorative shapes */}
      <div className="hero-shapes" aria-hidden="true">
        <div className="shape shape-rect" />
        <div className="shape shape-circle" />
        <div className="shape shape-triangle" />
        <div className="shape shape-square" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Kicker */}
          <span className="hero-kicker">
            📍 {person.location} &nbsp;·&nbsp; Available for remote work
          </span>

          {/* Name */}
          <h1 className="hero-name">{person.name.toUpperCase()}</h1>

          {/* Typewriter tagline */}
          <div className="hero-tagline" aria-live="polite">
            <span>{tagline}</span>
            <span className="tw-cursor" aria-hidden="true" />
          </div>

          {/* Bio */}
          <p className="hero-bio">{person.tagline}</p>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <ArrowDown size={16} />
              View My Work
            </a>
            <a href={person.resume} download className="btn-secondary">
              <Download size={16} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div ref={statsRef} className="hero-stats-bar">
        <div className="hero-stats-container">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              active={statsActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
