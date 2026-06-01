import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/...';  // 英雄图

export default function Home() {
  return (
    <div>
      {/* 全屏英雄区 */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Athlete" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end pb-28 px-6 md:px-10 max-w-7xl mx-auto">
          <motion.p initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.2,duration:0.8 }}
            className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#D9411E] mb-4">
            Est. 2024 — Downtown District
          </motion.p>
          <motion.h1 initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ delay:0.4,duration:0.8 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-3xl">
            Engineered<br />for the<br /><span className="text-[#D9411E]">Relentless</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.8,duration:0.8 }}
            className="text-white/60 text-lg mt-6 max-w-md leading-relaxed">
            A high-performance laboratory where precision training meets architectural design.
          </motion.p>
          <motion.div initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} transition={{ delay:1,duration:0.6 }}
            className="mt-10">
            <Link to="/memberships"
              className="inline-flex items-center gap-3 bg-[#D9411E] text-white px-8 py-4 font-mono text-xs tracking-[0.1em] uppercase hover:bg-[#c13818] transition-colors">
              Join the Movement <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[['12,000','SQ FT'],['200+','MEMBERS'],['15','COACHES'],['6','PROGRAMS']].map(([num,label]) => (
            <div key={label} className="text-center md:text-left">
              <p className="text-3xl md:text-5xl font-bold tracking-tight">{num}</p>
              <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA 横幅 */}
      <section className="bg-[#1A1A1A] py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#D9411E] mb-3">Your Next Chapter</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              The body is architecture.<br />Train it precisely.
            </h2>
          </div>
          <Link to="/programs"
            className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 font-mono text-xs tracking-[0.1em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all">
            Explore Programs <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}