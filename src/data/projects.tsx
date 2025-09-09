import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex gap-2 mt-6 justify-center">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-transparent"
        >
          Visit Website ↗
        </a>
      )}
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 border border-transparent"
        >
          Github ↗
        </a>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  airflow: {
    title: "Apache Airflow",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/airflow/airflow-original-wordmark.svg" alt="Airflow" />,
  },
  django: {
    title: "Django",
    bg: "black",
    fg: "white",
    icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" alt="Django" style={{ filter: 'brightness(0) invert(1)' }} />,
  },
  gcp: {
    title: "Google Cloud Platform",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud Platform" />,
  },
  flutter: {
    title: "Flutter",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg" alt="AWS" />,
  },
  r: {
    title: "R",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="Three.js" />,
  },
  whisper: {
    title: "Whisper",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" alt="Whisper" />,
  },
  chromadb: {
    title: "ChromaDB",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vectoricons/vectoricons-original.svg" alt="ChromaDB" />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "doctor-hiring-app",
    category: "Full-stack/mobile app",
    title: "Doctor Hiring App",
    src: "/assets/projects-screenshots/dr_locum/dr_locum_1.png",
    screenshots: [
      "/assets/projects-screenshots/dr_locum/dr_locum_1.png",
      "/assets/projects-screenshots/dr_locum/dr_locum_2.png",
      "/assets/projects-screenshots/dr_locum/dr_locum_3.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.firebase],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django, PROJECT_SKILLS.postgres, PROJECT_SKILLS.redis],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Doctor Hiring App
          </TypographyP>
          <TypographyP className="font-mono ">
            A comprehensive mobile application connecting locum doctors with hospitals for temporary shifts. Built with Flutter frontend and Django REST API backend, featuring role-based access for doctors, HR representatives, and administrators. Includes QR code-based attendance tracking, document verification system, real-time job applications, and secure payment processing. The app supports multi-platform deployment with advanced features like real-time notifications, document management, and comprehensive admin panel for user verification and analytics.
          </TypographyP>
          <SlideShow images={[
            "/assets/projects-screenshots/dr_locum/dr_locum_1.png",
            "/assets/projects-screenshots/dr_locum/dr_locum_2.png",
            "/assets/projects-screenshots/dr_locum/dr_locum_3.png",
          ]} />
        </div>
      );
    },
  },
  {
    id: "devcortex-website",
    category: "Frontend/web development",
    title: "DevCortex - Startup Website",
    src: "/assets/projects-screenshots/devcortex/devcortex_1.png",
    screenshots: [
      "/assets/projects-screenshots/devcortex/devcortex_1.png",
      "/assets/projects-screenshots/devcortex/devcortex_2.png",
      "/assets/projects-screenshots/devcortex/devcortex_3.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.threejs, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.next],
      backend: [],
    },
    live: "https://www.devcortex.in/",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            DevCortex - Startup Website
          </TypographyP>
          <TypographyP className="font-mono ">
            A modern, responsive website built for DevCortex startup specializing in web development services. Features interactive 3D elements powered by Three.js, smooth animations, and a clean, professional design. Built with React and Next.js for optimal performance and SEO. The website showcases the company's services, portfolio, and team with an engaging user experience that combines traditional web design with cutting-edge 3D graphics and animations.
          </TypographyP>
          <SlideShow images={[
            "/assets/projects-screenshots/devcortex/devcortex_1.png",
            "/assets/projects-screenshots/devcortex/devcortex_2.png",
            "/assets/projects-screenshots/devcortex/devcortex_3.png",
          ]} />
        </div>
      );
    },
  },
  {
    id: "nicu-progress-tracker",
    category: "Full-stack/web app",
    title: "NICU Progress Tracker",
    src: "/assets/projects-screenshots/nicu_tracker/nicu_1.png",
    screenshots: [
      "/assets/projects-screenshots/nicu_tracker/nicu_1.png",
      "/assets/projects-screenshots/nicu_tracker/nicu_2.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django],
    },
    live: "",
    github: "https://github.com/ritchi-e/nicu-tracker-app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            NICU Progress Tracker
          </TypographyP>
          <TypographyP className="font-mono ">
            A web application for neonatal intensive care units to manage patient data and daily progress, built with React frontend and Django REST backend. Features include patient registration, daily tracking, and secure data management.
          </TypographyP>
          <SlideShow images={[
            "/assets/projects-screenshots/nicu_tracker/nicu_1.png",
            "/assets/projects-screenshots/nicu_tracker/nicu_2.png",
          ]} />
        </div>
      );
    },
  },
  {
    id: "etl-pipeline",
    category: "Data Engineering",
    title: "ETL Pipeline with Data Fusion, Airflow, and BigQuery",
    src: "/assets/projects-screenshots/etl_pipeline/etl.jpg",
    screenshots: ["/assets/projects-screenshots/etl_pipeline/etl.jpg"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker, PROJECT_SKILLS.gcp],
    },
    live: "",
    github: "https://github.com/ritchi-e/ETL_Pipeline-SDE-Mini_Project",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            ETL Pipeline with Data Fusion, Airflow, and BigQuery
          </TypographyP>
          <TypographyP className="font-mono ">
            Developed an ETL (Extract, Transform, Load) pipeline to process sales data from 1 lakh+ records, ensuring 100% data accuracy by masking sensitive information before loading into Google BigQuery for analysis.
          </TypographyP>
          <SlideShow images={["/assets/projects-screenshots/etl_pipeline/etl.jpg"]} />
        </div>
      );
    },
  },
  {
    id: "aiia-app",
    category: "Full-stack/mobile app",
    title: "AIIA-app - Ayurveda Medical Form Management System",
    src: "/assets/projects-screenshots/medical_app/mediapp.png",
    screenshots: ["/assets/projects-screenshots/medical_app/mediapp.png"],
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.firebase],
      backend: [PROJECT_SKILLS.python],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AIIA-app - Ayurveda Medical Form Management System
          </TypographyP>
          <TypographyP className="font-mono ">
            Comprehensive Flutter mobile application developed for All India Institute of Ayurveda University Delhi to digitally manage patient treatment forms and assessments for various Panchakarma therapies. Features comprehensive patient management with UHID tracking, multi-page treatment forms with progress tracking, and traditional Ayurvedic assessment criteria integration. Integrated with Firebase for secure data storage and Google Sheets API for efficient data export. Includes PDF report generation system supporting 7 different Ayurvedic treatment assessments. Built with Flutter for cross-platform deployment across Android, iOS, Web, macOS, Windows, and Linux.
          </TypographyP>
          <SlideShow images={["/assets/projects-screenshots/medical_app/mediapp.png"]} />
        </div>
      );
    },
  },
  {
    id: "edutech-pro",
    category: "Full-stack/web platform",
    title: "EduTech Pro - AI-Powered Educational Platform",
    src: "/assets/projects-screenshots/edutech_pro/edutech_1.png",
    screenshots: [
      "/assets/projects-screenshots/edutech_pro/edutech_1.png",
      "/assets/projects-screenshots/edutech_pro/edutech_2.png",
      "/assets/projects-screenshots/edutech_pro/edutech_3.png",
    ],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.django, PROJECT_SKILLS.openai, PROJECT_SKILLS.pytorch],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            EduTech Pro - AI-Powered Educational Platform
          </TypographyP>
          <TypographyP className="font-mono ">
            Comprehensive educational technology platform leveraging AI to enhance learning experiences with two main products: LearnHub and TestMaster for complete educational ecosystem. Features AI-powered video transcription and summarization using OpenAI Whisper, multi-product unified platform with role-based access control, and advanced learning analytics. Built with Django 5.2+ backend and React 18 frontend with TypeScript. Integrates OpenAI GPT for content generation, ChromaDB for vector storage, and PyTorch for machine learning capabilities. Provides unified authentication across products with comprehensive analytics and performance tracking.
          </TypographyP>
          <SlideShow images={[
            "/assets/projects-screenshots/edutech_pro/edutech_1.png",
            "/assets/projects-screenshots/edutech_pro/edutech_2.png",
            "/assets/projects-screenshots/edutech_pro/edutech_3.png",
          ]} />
        </div>
      );
    },
  },
];
export { projects, ProjectsLinks };
