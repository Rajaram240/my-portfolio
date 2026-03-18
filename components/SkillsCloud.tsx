"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Automation",
    skills: ["Java", "Selenium WebDriver", "TestNG", "Cucumber", "POM", "Hybrid Framework"]
  },
  {
    title: "API & Backend",
    skills: ["Rest Assured", "Karate Framework", "Postman", "MySQL", "MS SQL Server"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Jenkins", "Maven", "Gradle", "Git", "CI/CD Pipelines"]
  },
  {
    title: "Methodology",
    skills: ["Agile", "SDLC/STLC", "BDD", "JIRA X-Ray"]
  }
];

export default function SkillsCloud() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-white mb-12 text-center">Technical Ecosystem</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="space-y-4">
            <h4 className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em]">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    borderColor: "rgba(59, 130, 246, 0.5)" 
                  }}
                  transition={{ 
                    delay: (catIndex * 0.1) + (i * 0.05),
                    type: "spring",
                    stiffness: 300 
                  }}
                  className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-slate-300 text-sm cursor-default transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}