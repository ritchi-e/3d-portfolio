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
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />,
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
    id: "medical-app",
    category: "Full-stack/mobile app",
    title: "Medical Form App for Ayurvedic Procedures",
    src: "/assets/projects-screenshots/medical_app/mediapp.png",
    screenshots: ["/assets/projects-screenshots/medical_app/mediapp.png"],
    skills: {
      frontend: [PROJECT_SKILLS.firebase],
      backend: [PROJECT_SKILLS.python],
    },
    live: "",
    github: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Medical Form App for Ayurvedic Procedures
          </TypographyP>
          <TypographyP className="font-mono ">
            A cross-platform medical form app for Ayurvedic procedures. Built with Flutter, this full-stack application digitizes patient intake and documentation for the Virechana Karma detox process. Integrated with Firebase Auth and Firestore for secure user management and real-time data storage. Used Google Sheets API for efficient data export and sharing with practitioners. Features a modular form architecture supporting multiple therapies (e.g., Basti, Nasya, Swedana) with user-specific screens. State management via Riverpod, and navigation handled with GetX for reactive routing. Deployed on Android, iOS, Web, macOS, Windows, and Linux using Flutter&apos;s multiplatform capabilities.
          </TypographyP>
          <SlideShow images={["/assets/projects-screenshots/medical_app/mediapp.png"]} />
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
];
export { projects, ProjectsLinks };
