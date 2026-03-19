"use client";
import { Layers, CheckCircle2 } from "lucide-react";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  impact: string;
  highlights: string[]; // New field for detailed info
}

export default function ProjectCard({ title, desc, tags, impact, highlights }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
          <Layers size={24} />
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono bg-slate-800 text-blue-300 px-2 py-1 rounded border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-300 text-sm leading-relaxed mb-6">
        {desc}
      </p>

      {/* NEW: Technical Highlights Section */}
      <div className="space-y-3 mb-8 flex-grow">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Technical Contributions:</p>
        {highlights.map((item, i) => (
          <div key={i} className="flex gap-2 items-start text-sm text-slate-400">
            <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-800 mt-auto">
        <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">Business Value:</p>
        <p className="text-sm text-slate-200 font-medium bg-emerald-500/5 border border-emerald-500/20 p-3 rounded-lg">
          {impact}
        </p>
      </div>
    </div>
  );
}