"use client";
import { motion } from "framer-motion";
import TestSimulation from "@/components/TestSimulation";
import Timeline from "@/components/Timeline";
import ResumeDownload from "@/components/ResumeDownload";
import ProjectCard from "@/components/ProjectCard";
import { ShieldCheck, Mail, Linkedin, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION (iPhone Optimized) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center w-full"
        >
          <h2 className="text-blue-400 font-mono tracking-[0.2em] mb-4 text-xs md:text-sm uppercase">
            Senior QA Automation Engineer // Est. 2017
          </h2>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Rajaram Keshari
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-xl leading-relaxed px-4">
            7+ years of architecting <span className="text-white font-semibold">Hybrid Frameworks</span> and 
            integrated <span className="text-white font-semibold">CI/CD Pipelines</span>. Specialist in E-commerce, 
            BFSI, and Healthcare systems.
          </p>
          
          <div className="mt-10 flex justify-center scale-90 md:scale-100">
            <TestSimulation />
          </div>
        </motion.div>
      </section>
{/* SECTION HEADER: STRATEGIC ENGINEERING IMPACT */}
<div className="mb-16 relative">
  {/* Decorative background element */}
  <div className="absolute -left-4 top-0 w-1 h-16 bg-blue-600 rounded-full hidden md:block"></div>
  
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Strategic Engineering <span className="text-blue-500">Impact</span>
      </h2>
      <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
        A deep dive into high-scale automation frameworks and performance optimization 
        strategies delivered across <span className="text-white border-b border-blue-500/50">E-commerce, BFSI, and Healthcare</span>.
      </p>
    </div>

    {/* Metric Badge: This shows seniority */}
    <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex flex-col items-center justify-center min-w-[140px]">
      <span className="text-blue-400 font-mono text-2xl font-bold">90%</span>
      <span className="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-1">
        Defect Detection <br/> in High-Risk Flows
      </span>
    </div>
  </div>
</div>
      {/* 2. STRATEGIC IMPACT (PROJECTS) */}
      <div className="grid lg:grid-cols-3 gap-8">
  <ProjectCard 
    title="SleepIQ E-commerce Engine"
    desc="End-to-end automation for a multi-million dollar IoT-integrated retail platform."
    tags={["Selenium", "Java", "API", "TestNG" , "SQL" , "LT Profiling","AWS", "CI/CD", "CloudWatch"]}
    highlights={[
      "Developed a Hybrid Framework using Page Object Model (POM) and Data-Driven patterns.",
      "Orchestrated a comprehensive Parity Regression strategy for FE/BE services during a core Java 17 migration, ensuring 100% functional consistency and zero production leakage",
      "Owned end-to-end deployment validation across DEV, QA, TEST, ensuring zero environment-related production escapes.",
      "Integrated Allure Reporting for high-level stakeholder visibility on build health."
    ]}
    impact="Achieved 95% automation coverage for critical path, saving several man-hours per sprint."
  />
  
  <ProjectCard 
  title="BFSI Loan Lifecycle Automation"
  desc="End-to-end quality engineering for high-risk Banking modules including Loan Origination, Closing, and Funding."
  tags={["Java", "Selenium", "Cucumber", "Karate DSL", "Jira X-Ray"]}
  highlights={[
  "Led Java 17 migration validation and pre-release JVM profiling (60k load) to ensure zero regressions.",
  "Worked in a Hybrid POM framework (Java/Selenium) reducing regression cycles from 12h to 3h.",
  "Automated complex IoT bed-pairing and checkout flows using Appium and TestNG.",
  "Integrated Allure/Grafana dashboards for real-time stakeholder visibility into build health."
]}
  impact="Secured the transactional integrity of multi-million dollar loan processing flows through 100% pre-prod defect detection."
/>

  <ProjectCard 
  title="Healthcare Cloud Infrastructure" 
  desc="Quality Operations (QAOps) for an AWS-hosted Patient Management System with high data complexity."
  tags={["Java", "Selenium", "Rest Assured", "SQL Server", "AWS", "Apache POI"]}
  highlights={[
  "Developed a Data-Driven framework (Apache POI) enabling execution across 100+ complex datasets.",
  "Engineered Rest-Assured API suites for healthcare integrations with strict JSON schema validation.",
  "Orchestrated Jenkins CI/CD pipelines with AWS CloudWatch 'Health Checks' for service uptime.",
  "Implemented Extent Reports/Log4j to provide deep diagnostic traceability for dev teams."
]}
  impact="Reduced environment-related 'Flaky Tests' by 45% and improved defect identification speed through detailed reporting."
/>
</div>

      {/* 3. TIMELINE SECTION */}
      <Timeline />

      {/* 4. RESUME DOWNLOAD SECTION */}
      <section className="py-20 bg-blue-600/5">
        <ResumeDownload />
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:kesharirajaram8@gmail.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20}/></a>
          <a href="https://www.linkedin.com/in/rajaramkeshari/" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Globe size={20}/></a>
        </div>
        <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
          © 2026 Rajaram Keshari • Quality Engineering • Bhubaneswar, India
        </p>
      </footer>
    </main>
  );
}