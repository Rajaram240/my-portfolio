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

      {/* 2. STRATEGIC IMPACT (PROJECTS) */}
      <div className="grid lg:grid-cols-3 gap-8">
  <ProjectCard 
    title="SleepIQ E-commerce Engine"
    desc="End-to-end automation for a multi-million dollar IoT-integrated retail platform."
    tags={["Selenium", "Java", "Appium", "TestNG"]}
    highlights={[
      "Developed a Hybrid Framework using Page Object Model (POM) and Data-Driven patterns.",
      "Implemented Parallel Execution across Grid/SauceLabs, reducing suite time from 12h to 3h.",
      "Automated critical checkout flows and IoT bed-pairing sequences using Appium.",
      "Integrated Allure Reporting for high-level stakeholder visibility on build health."
    ]}
    impact="Achieved 95% automation coverage for critical path, saving 80+ man-hours per sprint."
  />
  
  <ProjectCard 
    title="BFSI Payment Gateway"
    desc="High-security API validation for a Tier-1 banking transactional system."
    tags={["Rest Assured", "Karate", "Java", "SQL"]}
    highlights={[
      "Authored 300+ automated API tests covering OAuth2.0 authentication and encryption.",
      "Built a custom data-seeding utility to manage complex transactional test data in SIT.",
      "Performed Schema Validation and Database testing to ensure 100% ACID compliance.",
      "Created 'Karate' DSL scripts for rapid functional testing of microservices."
    ]}
    impact="Identified critical concurrency bugs in the payment engine that prevented $100k+ in leakage."
  />

  <ProjectCard 
    title="Healthcare Cloud Infrastructure"
    desc="Quality Operations (QAOps) for an AWS-hosted patient management system."
    tags={["AWS", "CI/CD", "CloudWatch"]}
    highlights={[
      "Orchestrated Jenkins CI/CD pipelines to trigger automated smoke tests on every PR.",
      "Implemented AWS CloudWatch monitoring for automated 'Health Checks' of services.",
      "Containerized the test execution environment using Docker for environment parity.",
      "Managed HIPAA-compliant test data masking scripts using SQL and Python."
    ]}
    impact="Reduced environment-related 'Flaky Tests' by 45% and ensured 99.9% deployment stability."
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
          <a href="mailto:your-email@example.com" className="text-slate-400 hover:text-white transition-colors"><Mail size={20}/></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors"><Globe size={20}/></a>
        </div>
        <p className="text-slate-600 text-xs font-mono uppercase tracking-widest">
          © 2026 Rajaram Keshari • Quality Engineering • Bhubaneswar, India
        </p>
      </footer>
    </main>
  );
}