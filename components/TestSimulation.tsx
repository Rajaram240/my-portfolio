"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FileSearch,Zap, Terminal, Play, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
export default function TestSimulation() {
  const [status, setStatus] = useState("idle"); // idle, running, success
  const [currentStep, setCurrentStep] = useState(-0);
  const controls = useAnimation();

  const steps = [
  { label: "Analyzing Requirements & Test Planning", icon: <FileSearch size={14} className="text-purple-400" /> },
  { label: "Initializing Hybrid Framework (POM + Data-Driven)", icon: <Terminal size={14}/> },
  { label: "API Handshake: REST Assured & Karate", icon: <Play size={14}/> },
  { label: "CI/CD Pipeline: Triggering Jenkins Build", icon: <Zap size={14} className="text-yellow-500" /> },
  { label: "Validating Environment Stability (AWS/SIT)", icon: <ShieldCheck size={14}/> },
  { label: "Generating Allure Test Summary Report", icon: <CheckCircle2 size={14} className="text-green-500" /> }
];
  const runSimulation = async () => {
    setStatus("running");
    setCurrentStep(0);

    // Progress bar animation
    await controls.start({
      width: "100%",
      transition: { duration: 4, ease: "linear" }
    });

    setStatus("success");
  };

  // Logic to stagger the text highlights as the bar fills
  useEffect(() => {
    if (status === "running") {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [status, steps.length]);

  return (
    <div className="w-full max-w-lg mx-auto bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          Automation_Engine_v7.0
        </span>
      </div>

      <div className="p-6">
        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-mono text-blue-400">
              {status === "idle" ? "Ready to Execute" : status === "running" ? "Running Regression..." : "Build Stable"}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              Env: AWS-Production-Mirror
            </span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={controls}
              className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
            />
          </div>
        </div>

        {/* Step List */}
        <div className="space-y-3 mb-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-3 text-xs font-mono transition-opacity duration-300 ${
                idx <= currentStep ? "opacity-100" : "opacity-20"
              }`}
            >
              <span className={idx < currentStep || status === "success" ? "text-emerald-400" : "text-blue-400"}>
                {idx < currentStep || status === "success" ? <CheckCircle2 size={14}/> : idx === currentStep ? <Loader2 size={14} className="animate-spin"/> : step.icon}
              </span>
              <span className={idx === currentStep ? "text-white" : "text-slate-400"}>
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button 
          onClick={runSimulation}
          disabled={status === "running"}
          className="w-full group relative py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 rounded-lg transition-all overflow-hidden"
        >
          <span className="relative z-10 font-bold text-sm flex items-center justify-center gap-2 text-white">
            {status === "success" ? (
              <> <ShieldCheck size={18} /> Deploy to Production </>
            ) : status === "running" ? (
              "Executing Test Suite..."
            ) : (
              <> <Play size={16} fill="currentColor" /> Run Automated Regression </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
}

function ShieldCheck({ size }: { size: number }) {
  return <CheckCircle2 size={size} className="text-white" />;
}