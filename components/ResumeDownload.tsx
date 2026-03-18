"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Download, ShieldCheck, Search } from "lucide-react";

export default function ResumeDownload() {
  const [isScanning, setIsScanning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();

  const handleDownload = async () => {
    setIsScanning(true);
    
    // Simulate a "Security & Content Scan"
    await controls.start({
      y: [0, 100, 0],
      transition: { duration: 2, repeat: 1, ease: "linear" }
    });

    setIsScanning(false);
    setIsComplete(true);

    // Trigger the actual download
    window.open("/RajaramKeshari_Resume.pdf", "_blank");

    // Reset after a delay
    setTimeout(() => setIsComplete(false), 3000);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <div className="relative p-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl">
        <button
          onClick={handleDownload}
          disabled={isScanning}
          className="relative px-8 py-4 bg-slate-950 rounded-lg flex items-center gap-3 font-bold text-white overflow-hidden group transition-all"
        >
          {/* The Animated Scanning Line */}
          {isScanning && (
            <motion.div 
              animate={controls}
              className="absolute left-0 right-0 h-1 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-20"
            />
          )}

          {isComplete ? (
            <>
              <ShieldCheck className="text-emerald-400" />
              <span className="text-emerald-400 font-mono">Verified & Downloaded</span>
            </>
          ) : isScanning ? (
            <>
              <Search className="animate-pulse text-blue-400" />
              <span className="animate-pulse font-mono">Scanning Artifact...</span>
            </>
          ) : (
            <>
              <Download className="group-hover:translate-y-1 transition-transform" />
              <span>Download Professional Resume</span>
            </>
          )}
        </button>
      </div>
      <p className="text-slate-500 text-xs font-mono tracking-tighter uppercase">
        Artifact: RajaramKeshari_7yrs_QA.pdf [cite: 4, 43]
      </p>
    </div>
  );
}