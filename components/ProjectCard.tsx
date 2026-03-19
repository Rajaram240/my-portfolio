"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, RotateCw, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  impact: string;
  highlights: string[];
}

export default function ProjectCard({ title, desc, tags, impact, highlights }: ProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    // This outer div provides the 3D space
    <div 
      className="group perspective-1000 h-[420px] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* THIS IS THE MOTION.DIV - The "Hinge" */}
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6, 
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        className="relative w-full h-full preserve-3d shadow-xl rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* --- FRONT SIDE --- */}
        <div 
          className="absolute inset-0 backface-hidden bg-slate-900/90 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                <Layers size={24} />
              </div>
              <RotateCw size={16} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 italic tracking-tight uppercase">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
              {desc}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 5).map(tag => (
                <span key={tag} className="text-[10px] font-mono bg-blue-500/5 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-widest">
              Tap to inspect Details <ArrowRight size={14} />
            </div>
          </div>
        </div>

        {/* --- BACK SIDE --- */}
        <div 
          className="absolute inset-0 backface-hidden bg-slate-950 border-2 border-blue-500/30 p-8 rounded-2xl flex flex-col justify-between"
          style={{ 
            transform: "rotateY(180deg)", 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden" 
          }}
        >
          <div>
            <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-4">Technical Deep Dive</p>
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-3 items-start text-[13px] text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <p className="text-[10px] font-mono text-emerald-400 uppercase mb-2 font-bold tracking-widest">Impact:</p>
            <p className="text-xs text-white italic font-medium leading-snug">"{impact}"</p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}