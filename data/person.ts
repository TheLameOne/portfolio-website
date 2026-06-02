export const person = {
  name: "Harsh Verma",
  initials: "HV",
  title: "Flutter & Full Stack Developer",
  tagline: "I build things that matter, at every layer of the stack.",
  bio: "I'm a developer based in Delhi NCR who obsesses over clean architecture and fast UIs. I've shipped 12+ apps across Flutter, React, and FastAPI — from mobile frontends to Python microservices — with 44+ public repos and 950+ contributions in the last year.",
  bioShort: "Developer. Architect. Shipment machine.",
  location: "Delhi NCR, India",
  email: "vermaharsh463@gmail.com",
  phone: "+91-7451985966",
  github: "https://github.com/TheLameOne",
  linkedin: "https://www.linkedin.com/in/harsh463/",
  resume: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/resumes/harsh-verma.pdf`,
  availability: "Available for work",

  roles: [
    "Flutter Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],

  stats: [
    { value: 3, suffix: "+", label: "Years Building" },
    { value: 44, suffix: "+", label: "GitHub Repos" },
    { value: 12, suffix: "+", label: "Apps Shipped" },
    { value: 950, suffix: "+", label: "Contributions" },
  ],
} as const;

export type PersonData = typeof person;
