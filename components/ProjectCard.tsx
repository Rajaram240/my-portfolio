"use client";
import { ExternalLink, Code2, Layers, Cpu } from "lucide-react";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  impact: string;
}

export default function ProjectCard({ title, desc, tags, impact }: ProjectProps) {
  return (
    <div className="group relative bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          <Layers size={20} />
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
        {desc}
      </p>

      <div className="pt-4 border-t border-slate-800 mt-auto">
        <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">Impact Delivered:</p>
        <p className="text-sm text-slate-300 italic">"{impact}"</p>
      </div>
    </div>
  );
}