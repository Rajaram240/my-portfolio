"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mindfire Solution",
    role: "Senior Software Test Engineer",
    period: "Jan 2024 - Present",
    domain: "E-commerce (SleepIQ)",
    description: "Designed a scalable hybrid automation framework (POM + Data-Driven + Keyword-Driven) using Java and Selenium. Integrated suites with Jenkins CI/CD pipelines.",
    skills: ["Java", "Selenium", "AWS", "Jenkins", "Gradle"]
  },
  {
    company: "CGI",
    role: "Senior Test Engineer",
    period: "Jul 2022 - Jan 2024",
    domain: "Banking (EMU Mortgage)",
    description: "Automated loan processing modules ensuring high-quality releases. Used Jira X-Ray for execution and defect tracking.",
    skills: ["Cucumber", "Karate", "MS SQL", "Agile"]
  },
  {
    company: "IQVIA",
    role: "QA Analyst",
    period: "Jan 2022 - Jul 2022",
    domain: "Healthcare",
    description: "Manmual Testing of HTA application",
    skills: ["Manual Testing", "Postman", "Jira"]
  },
  {
    company: "Legato Health Technologies",
    role: "Software Engineer",
    period: "Apr 2019 - Dec 2021",
    domain: "Healthcare",
    description: "Developed data-driven frameworks using Apache POI. Performed API testing using REST Assured and generated Extent Reports.",
    skills: ["REST Assured", "TestNG", "Maven", "Log4j"]
  }
];

export default function Timeline() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h3 className="text-4xl font-bold text-white mb-16 border-l-4 border-blue-500 pl-4">
        Professional Milestones
      </h3>
      
      <div className="relative border-l border-slate-800 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-16 ml-8 relative"
          >
            {/* The Timeline Dot */}
            <div className="absolute -left-[41px] top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-[#020617] shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
            
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all">
              <span className="text-blue-400 font-mono text-sm uppercase tracking-widest">{exp.period}</span>
              <h4 className="text-2xl font-bold text-white mt-2">{exp.company}</h4>
              <p className="text-slate-300 font-semibold mb-1">{exp.role}</p>
              <p className="text-blue-500/80 text-xs mb-4 uppercase tracking-tighter italic">{exp.domain} Domain</p>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] rounded-md border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
  
}