"use client";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import SkillsCloud from "@/components/SkillsCloud";
import ResumeDownload from "@/components/ResumeDownload";
import TestSimulation from "@/components/TestSimulation";
import About from "@/components/About";
import { ShieldCheck, Zap, Globe, Code2 } from "lucide-react"; // npm install lucide-react

export default function Portfolio() {
  return (
    <div className="bg-[#020617] text-slate-200 min-h-screen selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION - The "Hook" */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center"
        >
          <h2 className="text-blue-400 font-mono tracking-[0.3em] mb-4 text-sm uppercase">
            Senior QA Automation Engineer // Est. 2019
          </h2>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight">
            Rajaram Keshari
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
            7+ years of engineering quality through <span className="text-white">Hybrid Frameworks</span> [cite: 12] and 
            <span className="text-white"> CI/CD Pipelines</span>[cite: 14]. Specialist in E-commerce, Banking, and Healthcare systems.
          </p>
          
          <div className="mt-10">
            <TestCaseSimulation />
          </div>
        </motion.div>
      </section>

      {/* 2. STATS & IMPACT SECTION */}
      <section className="py-20 bg-slate-900/20 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Zap size={20}/>} label="Exp" value="7+ Years"  />
          <StatCard icon={<Code2 size={20}/>} label="Language" value="Java Expert" [cite: 28] />
          <StatCard icon={<Globe size={20}/>} label="Domains" value="E-com/BFSI/Health"  />
          <StatCard icon={<ShieldCheck size={20}/>} label="Cloud" value="AWS Certified" [cite: 34] />
        </div>
      </section>

      {/* 3. PROFESSIONAL JOURNEY (The Timeline component we created) */}
      <Timeline />

      {/* 4. TECH STACK MARQUEE */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-slate-500 font-mono text-xs uppercase tracking-widest mb-10">Mastered Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Selenium", "Cucumber", "TestNG", "Rest Assured", "Karate", "Jenkins", "AWS", "MySQL", "Postman", "Maven", "Gradle"].map((skill) => (
              <span key={skill} className="px-5 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm font-medium text-slate-300 hover:border-blue-500/50 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <footer className="py-20 text-center border-t border-slate-900">
        <p className="text-slate-500 mb-4">Ready to stabilize your release cycles?</p>
        <a href="mailto:kesharirajaram8@gmail.com" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          kesharirajaram8@gmail.com 
        </a>
        <div className="mt-8 text-slate-600 text-sm">
          Jharsuguda, Odisha, India  • +91- 
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-blue-500 mb-2 flex justify-center md:justify-start">{icon}</div>
      <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
      <div className="text-slate-500 text-xs uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}