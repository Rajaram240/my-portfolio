"use client";
import { motion, useAnimation } from "framer-motion";
import { useState, useRef } from "react";
import { Download, ShieldCheck, Search } from "lucide-react";

export default function ResumeDownload() {
  const [isScanning, setIsScanning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const controls = useAnimation();
  
  // Create a reference to a hidden link
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = async () => {
    if (isScanning) return; // Prevent multiple clicks

    setIsScanning(true);
    
    // 1. Start the "Security & Content Scan" Animation
    await controls.start({
      top: ["0%", "100%", "0%"],
      transition: { duration: 1.5, repeat: 1, ease: "linear" }
    });

    setIsScanning(false);
    setIsComplete(true);

    // 2. Trigger the actual download using the hidden anchor
    // This is safer than window.open for static exports
    if (downloadRef.current) {
      downloadRef.current.click();
    }

    // 3. Reset UI after a delay
    setTimeout(() => setIsComplete(false), 4000);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      {/* HIDDEN DOWNLOAD LINK - This ensures it works on all browsers */}
      <a 
        ref={downloadRef}
        href="/RajaramKeshari_Resume.pdf" 
        download="RajaramKeshari_Resume.pdf"
        className="hidden"
      />

      <div className="relative p-[2px] bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl">
        <button
          onClick={handleDownload}
          disabled={isScanning}
          className="relative px-8 py-4 bg-slate-950 rounded-lg flex items-center gap-3 font-bold text-white overflow-hidden group transition-all min-w-[320px] justify-center"
        >
          {/* The Animated Scanning Line */}
          {isScanning && (
            <motion.div 
              animate={controls}
              className="absolute left-0 right-0 h-1 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)] z-20 pointer-events-none"
              style={{ top: 0 }}
            />
          )}

          {isComplete ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-3">
              <ShieldCheck className="text-emerald-400" />
              <span className="text-emerald-400 font-mono">Verified & Downloaded</span>
            </motion.div>
          ) : isScanning ? (
            <div className="flex items-center gap-3">
              <Search className="animate-pulse text-blue-400" />
              <span className="animate-pulse font-mono">Scanning Artifact...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Download className="group-hover:translate-y-1 transition-transform text-blue-400" />
              <span>Download Professional Resume</span>
            </div>
          )}
        </button>
      </div>

      <p className="text-slate-500 text-[10px] font-mono tracking-widest uppercase opacity-60">
        Checksum Verified: RajaramKeshari_Resume.pdf
      </p>
    </div>
  );
}