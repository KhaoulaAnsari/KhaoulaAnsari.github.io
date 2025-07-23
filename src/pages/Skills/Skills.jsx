import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaAngular,
  FaPhp,
  FaJava,
  FaShopify,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiBootstrap,
  SiSpringboot,
  SiDotnet,
  SiJavascript,
  SiShopify,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "C", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Java", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "Dart", icon: <SiVite className="w-4 h-4" /> },
        { name: "PHP", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend & Mobile",
      color: "text-purple-400",
      skills: [
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "SCSS", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Bootstrap", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Angular", icon: <SiNextdotjs className="w-4 h-4" /> },
        { name: "Flutter (Web)", icon: <SiVite className="w-4 h-4" /> },
        { name: "Flutter (Mobile)", icon: <SiVite className="w-4 h-4" /> },
        { name: "Android Studio", icon: <TbBrandVscode className="w-4 h-4" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Frameworks",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Spring Boot", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Spring Data", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: ".NET", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Symfony", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Laravel", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "JEE", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "XML", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Databases & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "Oracle", icon: <SiPostgresql className="w-4 h-4 text-[#F80000]" /> },
        { name: "SQL Server", icon: <SiMongodb className="w-4 h-4 text-[#CC2927]" /> },
        { name: "MySQL", icon: <SiMongodb className="w-4 h-4 text-[#4479A1]" /> },
        { name: "PL/SQL", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cpu,
      title: "ERP, CRM & Tools",
      color: "text-pink-400",
      skills: [
        { name: "Dolibarr", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
        { name: "Shopify integration", icon: <SiShopify className="w-4 h-4" /> },
        { name: "Shopify", icon: <FaShopify className="w-4 h-4" /> },
        { name: "Merise", icon: <BsGrid1X2 className="w-4 h-4" /> },
        { name: "UML", icon: <BsGrid1X2 className="w-4 h-4" /> },
        { name: "SCRUM", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Jira", icon: <BsGrid1X2 className="w-4 h-4" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Windows", icon: <BsFileEarmarkCode className="w-4 h-4" /> },
      ],
    },
  ];
  
  

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
