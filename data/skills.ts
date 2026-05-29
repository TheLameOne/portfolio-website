export type DomainKey = "flutter" | "backend" | "fullstack";

export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  id: string;
  label: string;
  domain: DomainKey | "all";
  color: string; // accent hex for bar fill
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "flutter",
    label: "Flutter & Dart",
    domain: "flutter",
    color: "#00C2B2",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 93 },
      { name: "Riverpod", level: 88 },
      { name: "GoRouter", level: 85 },
      { name: "Hive / Isar", level: 80 },
      { name: "Freezed", level: 82 },
      { name: "Dio", level: 85 },
      { name: "Provider", level: 87 },
      { name: "WebSockets", level: 80 },
      { name: "WebRTC", level: 70 },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    domain: "backend",
    color: "#FF4D4D",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 78 },
      { name: "Firebase", level: 82 },
      { name: "Golang", level: 65 },
      { name: "Python", level: 88 },
      { name: "REST API Design", level: 90 },
      { name: "gRPC", level: 60 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    domain: "backend",
    color: "#4361EE",
    skills: [
      { name: "AWS EC2", level: 75 },
      { name: "NGINX", level: 78 },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Keycloak", level: 65 },
      { name: "Linux", level: 80 },
      { name: "Docker", level: 65 },
      { name: "Load Balancer", level: 70 },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    domain: "all",
    color: "#FFD200",
    skills: [
      { name: "Dart", level: 93 },
      { name: "Python", level: 88 },
      { name: "C++", level: 70 },
      { name: "C", level: 65 },
      { name: "TypeScript", level: 60 },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    domain: "all",
    color: "#B5E550",
    skills: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Zed", level: 75 },
      { name: "Opencode", level: 70 },
      { name: "App Store Deploy", level: 85 },
      { name: "Play Store Deploy", level: 85 },
    ],
  },
];

// All unique tech tag strings for the tag cloud
export const allTechTags = [
  "Flutter", "Dart", "Riverpod", "GoRouter", "Hive", "Freezed", "Dio",
  "WebSockets", "WebRTC", "FastAPI", "Django", "Firebase", "Golang", "Python",
  "C++", "AWS EC2", "NGINX", "CI/CD", "Keycloak", "Linux", "Git",
  "REST APIs", "Microservices", "gRPC", "App Store", "Play Store",
];
