import type { DomainKey } from "./skills";
export type { DomainKey };

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  domains: DomainKey[];
  techStack: string[];
  featured: boolean;
  highlight?: string; // short punchy callout
  repoUrl?: string;
  liveUrl?: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    id: "chatty-app",
    title: "Chatty — Real-time Communication Platform",
    description:
      "Cross-platform messaging app with real-time chat, video calls, and WebRTC peer-to-peer streams. Built for low-latency state synchronization.",
    longDescription:
      "Built a cross-platform system with real-time messaging and streaming using WebSockets and WebRTC, optimized for low-latency state updates. Collaborated with Golang/gRPC backend services to maintain efficient data pipelines. Designed UI systems handling continuous data flow.",
    tags: ["Flutter", "WebRTC", "WebSockets", "Golang", "gRPC"],
    domains: ["flutter", "backend", "fullstack"],
    techStack: ["Flutter", "Dart", "WebRTC", "WebSockets", "Golang", "gRPC"],
    featured: true,
    highlight: "Real-time · WebRTC · Low-latency",
  },
  {
    id: "polyphasic-sleep",
    title: "Polyphasic Sleep App",
    description:
      "Cross-platform mobile app helping users adopt and manage polyphasic sleep schedules with smart alarms and personalized themes.",
    longDescription:
      "Developed a cross-platform mobile application to help users adopt and manage polyphasic sleep schedules, improving productivity through optimized sleep cycles. Features customizable sleep patterns, smart alarms, and personalized themes.",
    tags: ["Flutter", "Dart", "Hive", "Riverpod"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart", "Hive", "Riverpod", "Local Notifications"],
    featured: false,
    highlight: "Sleep optimization · Cross-platform",
  },
  {
    id: "ethara",
    title: "Ethara — Team Task Management",
    description:
      "Full-stack project management app with role-based access, JWT auth, and an aggregated dashboard. React 19 + FastAPI + PostgreSQL, shipped via Docker Compose.",
    longDescription:
      "Full-stack team task management application built as an assessment project. Features JWT authentication, project management with admin/member roles, task creation and status tracking, and a dashboard with aggregated statistics. Containerised with Docker Compose and deployed to Railway.",
    tags: ["React 19", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    domains: ["fullstack", "backend"],
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "TanStack Query", "Zustand", "FastAPI", "SQLAlchemy", "PostgreSQL", "Docker", "Nginx"],
    featured: true,
    highlight: "Full-stack · RBAC · Docker · Railway",
    repoUrl: "https://github.com/TheLameOne/ethara",
  },
  {
    id: "hrms-lite",
    title: "HRMS Lite — HR Management System",
    description:
      "Lightweight HR system for managing employee records and daily attendance, built with React, FastAPI, MySQL, and Docker Compose.",
    longDescription:
      "A full-stack Human Resource Management System with employee CRUD, attendance marking, date-range filtering, and a dashboard summary. React + Vite frontend, FastAPI backend, MySQL 8.0, fully containerised with Docker Compose and served through Nginx.",
    tags: ["React", "FastAPI", "MySQL", "Docker", "Nginx"],
    domains: ["fullstack", "backend"],
    techStack: ["React 18", "Vite", "Tailwind CSS", "FastAPI", "SQLAlchemy", "MySQL 8.0", "Docker", "Nginx"],
    featured: false,
    highlight: "HRMS · Attendance · Docker",
    repoUrl: "https://github.com/TheLameOne/Hrms",
  },
  {
    id: "geonotes",
    title: "Geonotes — Geo-tagged Notes Platform",
    description:
      "Drop text notes on a map, share with friends or groups, and discover nearby notes. Flutter mobile + React web + NestJS API + PostGIS.",
    longDescription:
      "A geo-tagged notes platform with NestJS REST API, React + Vite web client, and Flutter mobile app. Firebase authentication, PostGIS spatial queries for nearby discovery, friend and group systems, and four visibility levels (Private/Friends/Group/Public). Backend uses PostgreSQL 16 with PostGIS 3.4 and Prisma ORM.",
    tags: ["Flutter", "NestJS", "React", "Firebase", "PostGIS"],
    domains: ["flutter", "fullstack", "backend"],
    techStack: ["Flutter", "Dart", "NestJS", "TypeScript", "React", "Firebase", "PostgreSQL", "PostGIS", "Prisma", "Docker", "Google Maps"],
    featured: true,
    highlight: "Geo-tagged · Full-stack · PostGIS",
    repoUrl: "https://github.com/CRASH579/Geonotes",
  },
  {
    id: "archsphere",
    title: "Archsphere — Agency Website",
    description:
      "Production-ready agency website with animated page intro, scroll progress bar, Framer Motion transitions, and a full section suite.",
    longDescription:
      "An agency website built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion. Features animated page intro, scroll progress bar, custom cursor, and sections for Hero, About, Services, Portfolio, Process, Team, Testimonials, FAQ, and Contact. Deployed via GitHub Pages with a custom domain.",
    tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    domains: ["fullstack"],
    techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    featured: false,
    highlight: "Agency site · Framer Motion · Deployed",
    repoUrl: "https://github.com/TheLameOne/archsphere",
    liveUrl: "https://www.archsphere.co.in",
  },
  {
    id: "hua",
    title: "Hua — Cross-platform Chat App",
    description:
      "Flutter messaging app with WebRTC video/voice calls, gRPC/Protobuf backend, FCM push notifications, and secure token storage.",
    longDescription:
      "A cross-platform Flutter communication app featuring real-time messaging, WebRTC-based video and voice calling, gRPC/Protobuf for efficient backend communication, Firebase Cloud Messaging for push notifications, and flutter_secure_storage for token management. Includes custom theme support, user profiles, and a modular UI system.",
    tags: ["Flutter", "WebRTC", "Firebase", "gRPC", "Protobuf"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart", "WebRTC", "Firebase", "FCM", "gRPC", "Protobuf", "Secure Storage"],
    featured: false,
    highlight: "WebRTC · gRPC · Real-time",
    repoUrl: "https://github.com/TheLameOne/hua",
  },
  {
    id: "safarnama",
    title: "Safarnama — Travel Booking App",
    description:
      "Flutter travel app with Firebase backend — browse packages, book trips, manage favourites, and view all bookings in one place.",
    longDescription:
      "Safarnama is a Flutter travel app with full Firebase integration for authentication and Firestore data storage. Users can browse travel packages with details like location, price, and duration, book packages, add favourites, and view their booking history.",
    tags: ["Flutter", "Firebase", "Firestore", "Dart"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart", "Firebase", "Firestore"],
    featured: false,
    highlight: "Travel · Firebase · Flutter",
    repoUrl: "https://github.com/TheLameOne/safarnama",
  },
  {
    id: "recipe-book-app",
    title: "Recipe Book App",
    description:
      "Flutter recipe browser with BLoC state management, real-time search filtering, favourites, and detailed recipe views.",
    longDescription:
      "A Flutter recipe application built with MVVM architecture and Flutter BLoC. Features real-time search, favourites management, detailed recipe pages, and pull-to-refresh. Consumes a remote recipe API and includes an APK release.",
    tags: ["Flutter", "Dart", "BLoC", "MVVM"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart", "Flutter BLoC", "REST APIs"],
    featured: false,
    highlight: "MVVM · BLoC · REST API",
    repoUrl: "https://github.com/TheLameOne/recipe_book_app",
  },
  {
    id: "soochi",
    title: "Soochi — University Portal App",
    description:
      "Flutter university portal with Firebase auth, Firestore-backed timetables, calendar view, multi-faculty support, and dynamic department listing.",
    longDescription:
      "A Flutter-based university portal app with Firebase authentication, Firestore as the data backend, and a calendar_view widget for schedule display. Supports multiple faculties, dynamic department listing with expandable sections, and event-based data updates across departments and batches.",
    tags: ["Flutter", "Firebase", "Firestore", "Dart"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "calendar_view"],
    featured: false,
    highlight: "College portal · Firebase · Timetable",
    repoUrl: "https://github.com/TheLameOne/soochi",
  },
  {
    id: "meri-id",
    title: "Meri ID — Digital Identity App",
    description:
      "Collaborative Flutter digital ID card app with biometric authentication, TTS voice readout, AI chat support (Kommunicate), and vehicle profile management.",
    longDescription:
      "A collaborative Flutter project (3 contributors) building a digital identity/ID card application. Features biometric authentication via local_auth (fingerprint/face ID), text-to-speech for voice accessibility, Kommunicate AI chat SDK for in-app support, image capture for profile photos, and vehicle/identity type selection. Published to Play Store internal testing.",
    tags: ["Flutter", "Dart", "Biometric Auth", "TTS"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart", "local_auth", "Kommunicate", "TTS", "image_picker"],
    featured: false,
    highlight: "Digital ID · Biometric · AI Chat",
    repoUrl: "https://github.com/TheLameOne/meri_id",
  },
  {
    id: "lane-detection",
    title: "Lane Detection — Computer Vision",
    description:
      "Python CV project using Hough Line Transform for real-time road lane detection from video/image input. Academic mini project.",
    longDescription:
      "An academic computer vision project implementing road lane detection using Python and OpenCV. Applies grayscale conversion, Canny edge detection, region-of-interest masking, and Hough Line Transform to detect lane lines from video footage. Built at ABES Engineering College.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    domains: ["backend"],
    techStack: ["Python", "OpenCV", "NumPy"],
    featured: false,
    highlight: "CV · Hough Transform · Python",
    repoUrl: "https://github.com/TheLameOne/Lane-Detection",
  },
  {
    id: "popillustrator",
    title: "Popillustrator — Illustration Portfolio",
    description:
      "Personal illustration portfolio website with hover animations, gallery layout, and a custom domain — deployed via GitHub Pages.",
    longDescription:
      "A static personal illustration portfolio website built with HTML, CSS, and JavaScript. Features hover effects on artwork, a clean gallery layout, and a birthday card page. Deployed via GitHub Pages with a custom CNAME domain.",
    tags: ["HTML", "CSS", "JavaScript"],
    domains: ["fullstack"],
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
    highlight: "Static site · GitHub Pages · Deployed",
    repoUrl: "https://github.com/TheLameOne/popillustrator",
  },
  {
    id: "mr-fixit",
    title: "Mr. Fixit — Home Services App",
    description:
      "On-demand home repair and services booking platform connecting users with local service providers.",
    tags: ["Flutter", "Dart"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart"],
    featured: false,
    highlight: "Coming Soon",
    comingSoon: true,
  },
  {
    id: "spots",
    title: "Spots — Location Discovery App",
    description:
      "Discover, bookmark, and share interesting spots around you.",
    tags: ["Flutter", "Dart"],
    domains: ["flutter"],
    techStack: ["Flutter", "Dart"],
    featured: false,
    highlight: "Coming Soon",
    comingSoon: true,
  },
];
