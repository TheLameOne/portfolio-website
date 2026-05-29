import type { DomainKey } from "./skills";

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "internship";
  domains: (DomainKey | "all")[];
  bullets: string[];
  current?: boolean;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "cloud-harbor",
    role: "Flutter Developer",
    company: "Cloud Harbor Technologies",
    period: "Dec 2024 — Present",
    location: "Remote",
    type: "full-time",
    domains: ["flutter", "backend", "fullstack"],
    current: true,
    bullets: [
      "Led a team to build and scale a SaaS platform comprising 8+ mobile and 16+ web apps.",
      "Built an in-app real-time chat system using WebSockets and Slack webhooks.",
      "Designed and deployed Python (FastAPI, Django) microservices with modular APIs optimized for low-latency workflows.",
      "Managed infrastructure using AWS EC2, configured CI/CD pipelines, and served all services via NGINX reverse proxy.",
      "Designed 120+ unique UI screens and integrated 180+ REST APIs across multiple apps.",
    ],
  },
  {
    id: "fantasy-squad",
    role: "Flutter Developer",
    company: "FantasySquad.in",
    period: "Feb 2023 — Nov 2024",
    location: "Remote",
    type: "full-time",
    domains: ["flutter", "fullstack"],
    bullets: [
      "Contributed to the frontend of a tours & travel mobile application using Flutter.",
      "Designed and implemented responsive, user-friendly UI components.",
      "Collaborated with design and backend teams for seamless feature integration.",
    ],
  },
];

export const education: EducationEntry = {
  id: "abes",
  institution: "ABES Engineering College",
  degree: "Bachelor of Technology",
  field: "Computer Science",
  period: "2019 — 2023",
  location: "Ghaziabad, UP, India",
};
