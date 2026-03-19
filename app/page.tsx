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
      <section className="py-24 border-t border-slate-900 bg-slate-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 italic">Core Impact</h2>
            <p className="text-slate-400 max-w-2xl">Proven results in high-scale environments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard 
              title="E-comm Framework"
              desc="Designed Hybrid POM for SleepIQ using Java & Selenium for 500+ scenarios."
              tags={["Selenium", "Java"]}
              impact="Reduced regression cycle from 12 hrs to 4 hrs."
            />
            <ProjectCard 
              title="BFSI API Suite"
              desc="Engineered secure API validation for banking gateways via Rest Assured & Karate."
              tags={["Rest Assured", "API"]}
              impact="Zero critical security leakage in 2 years."
            />
            <ProjectCard 
              title="Cloud QA Ops"
              desc="Integrated automated health checks into AWS-based CI/CD pipelines."
              tags={["AWS", "CI/CD"]}
              impact="99.9% environment uptime via auto-checks."
            />
          </div>
        </div>
      </section>

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