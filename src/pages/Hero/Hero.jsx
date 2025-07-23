import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

// Grid Background
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect
            width="40"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            className="opacity-40 animate-gridPulse"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

export default function Hero() {
  const words = [
    "Software Engineer & ERP Specialist",
    "Dolibarr & Shopify Integrations Expert",
    "Full-Stack Developer (Spring Boot & Angular)",
    "Python & Deep Learning Enthusiast",
  ];

  const [code] = useState(`
const profile = {
  name: 'Khaoula Ansari',
  title: 'Software Engineer | ERP Specialist | Full-Stack Developer',
  skills: [
    'Java', 'Spring Boot', 'Angular', 'React',
    'Node.js', 'Python', 'Dolibarr ERP', 'Shopify Integration',
    'Oracle', 'MySQL', 'Docker', 'Jira', 'Git', 'Linux'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 2,
  hireable() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5 &&
      this.yearsOfExperience >= 2
    );
  }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Inject animation keyframes for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%,100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @keyframes dotPulse {
        0%,100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, [code]);

  return (
    <>
      <main className="pt-20 lg:pt-0 bg-[#020617] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          {/* Backgrounds */}
          <GridBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Content */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0">
            {/* Text column */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-gray-300 text-xs font-medium">
                  Welcome to my universe
                </span>
              </div>

              {/* Name */}
              <div className="relative mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I'm
                    <span className="typing-effect gradient-text">
                      {" "}Khaoula Ansari
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              </div>

              {/* Rotating roles */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <FlipWords
                  className="text-lg sm:text-xl text-blue-400 font-medium"
                  words={words}
                />
              </div>

              {/* Description */}
              <div className="relative mb-8 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  Software Engineer 🚀 | ERP & CRM Specialist 💼 | Passionate about data & code 💻✨
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-2s">
                <a
                  href="https://github.com/KhaoulaAnsari"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-transform hover:scale-105 duration-300"
                >
                  <span className="block w-full px-6 py-3 rounded-[11px] bg-gray-900 text-white font-medium">
                    View GitHub
                  </span>
                </a>
                <a
                  href="/khaoula_ansari_Resume.pdf"
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-transform hover:scale-105 duration-300"
                >
                  <span className="block w-full px-6 py-3 rounded-[11px] bg-gray-900 border border-gray-700/50 text-gray-300 font-medium">
                    Get Resume
                  </span>
                </a>
              </div>
            </div>

            {/* Code column */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-100ms">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500" />
                    <div className="window-dot bg-yellow-500" />
                    <div className="window-dot bg-green-500" />
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i> profile.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-mouse text-blue-400"></i> About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
        </div>

        <PortfolioPage />
      </main>
    </>
  );
}
