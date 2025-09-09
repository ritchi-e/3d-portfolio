import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import Image from "next/image";

const EducationSection = () => {
  const educationData = [
    {
      institution: "Indian Institute of Technology, Jodhpur",
      degree: "Master of Technology, Computer Science",
      period: "2022 - 2024",
      logo: "/assets/education/iit-jodhpur-logo.png",
      logoFallback: "IITJ"
    },
    {
      institution: "Indian Institute of Science Education and Research, Bhopal",
      degree: "Bachelor of Science, Electrical Engineering and Computer Science",
      period: "2018 - 2022",
      logo: "/assets/education/iiser-bhopal-logo.png",
      logoFallback: "IISER"
    }
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#education"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Education
        </h2>
      </Link>
      
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {educationData.map((edu, index) => (
          <BoxReveal key={index} delay={index * 0.2}>
            <div className="flex items-center gap-8 p-6">
              {/* Logo */}
              <div className="flex-shrink-0 w-28 h-28 flex items-center justify-center bg-white/10 dark:bg-white/5 rounded-2xl  border border-white/20 dark:border-white/10">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={edu.institution.includes("IIT") ? 100 : 72}
                  height={edu.institution.includes("IIT") ? 100 : 72}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  {edu.logoFallback}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {edu.institution}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {edu.degree}
                </p>
              </div>
            </div>
          </BoxReveal>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
