"use client";
import { motion } from "framer-motion";
import { MapPin, Award, GraduationCap, briefcaseBusiness } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 border-t border-slate-900">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: The Story */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">About Rajaram</h3>
          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              With over <span className="text-blue-400 font-bold">7 years of experience</span> in the Software Testing Life Cycle (STLC), 
              I have transitioned from the fast-paced tech landscape of <span className="text-white">Bangalore</span> to leading 
              quality initiatives in <span className="text-white font-semibold text-blue-400">Bhubaneswar</span>.
            </p>
            <p>
              My journey began with a B.Tech from <span className="text-slate-300">Gandhi Engineering College</span>, 
              and has since evolved into architecting complex Hybrid Frameworks for global industry leaders like 
              <span className="text-slate-200"> CGI</span> and <span className="text-slate-200"> Mindfire Solution</span>.
            </p>
            <p>
              I specialize in "breaking things to make them better," ensuring that every release into 
              Production is backed by rigorous automation and a 100% stability guarantee.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <MapPin size={18} className="text-blue-500" />
              <span>Bhubaneswar, Odisha (Open to Remote)</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <GraduationCap size={18} className="text-blue-500" />
              <span>B.Tech in Computer Science</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: QA Philosophy / Highlights */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800"
        >
          <h4 className="text-xl font-bold text-white mb-8">Quality Philosophy</h4>
          
          <div className="space-y-6">
            <PhilosophyItem 
              title="Shift-Left Testing"
              desc="Integrating automation early in the CI/CD pipeline to catch defects before they reach QA environments."
            />
            <PhilosophyItem 
              title="Scalable Architecture"
              desc="Designing POM-based frameworks that are easy to maintain even as the application scales to 1000+ test cases."
            />
            <PhilosophyItem 
              title="Domain Versatility"
              desc="Applying deep testing methodologies across Banking (Mortgage), Healthcare (Claims), and E-commerce (Retail)."
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function PhilosophyItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group">
      <h5 className="text-blue-400 font-bold mb-1 group-hover:text-blue-300 transition-colors flex items-center gap-2">
        <Award size={16} /> {title}
      </h5>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}