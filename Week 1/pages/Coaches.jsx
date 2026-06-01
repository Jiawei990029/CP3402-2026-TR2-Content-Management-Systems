import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const coaches = [
  { name:'Marcus Reid', role:'Head of Strength & Conditioning',
    philosophy:'Training is architecture. Every rep builds the structure...',
    certs:['CSCS','USAW Level 2','FMS Certified'],
    specialties:['Olympic Lifting','Periodization','Athlete Development'],
    img:'https://media.base44.com/...' },
  { name:'Elena Voss', role:'Movement & Mobility Director',
    philosophy:'The strongest body is the one that moves without restriction...',
    certs:['DPT','RYT-500','PRI Certified'],
    specialties:['Structural Yoga','Injury Prevention','Recovery Protocols'],
    img:'https://media.base44.com/...' },
  { name:'Damon Cross', role:'Performance & Speed Coach',
    philosophy:'Speed is a skill. Explosiveness is a language...',
    certs:['NSCA-CPT','EXOS Phase 4','TPI Certified'],
    specialties:['Sprint Mechanics','Metabolic Conditioning','Sport-Specific Training'],
    img:'https://media.base44.com/...' },
];

export default function Coaches() {
  const [selected, setSelected] = useState(0);
  const coach = coaches[selected];
  return (
    <div className="pt-20">
      <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#D9411E] mb-4">The Roster</p>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95]">Expert<br />Coaches</h1>
      </section>
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* 教练选择标签 */}
          <div className="flex gap-10 mb-12 border-b border-border overflow-x-auto pb-4">
            {coaches.map((c,i) => (
              <button key={c.name} onClick={() => setSelected(i)}
                className={`font-mono text-[0.7rem] tracking-[0.1em] uppercase whitespace-nowrap pb-2 transition-colors
                  ${selected===i ? 'text-[#D9411E] border-b-2 border-[#D9411E]' : 'text-muted-foreground'}`}>
                {c.name}
              </button>
            ))}
          </div>
          {/* 左右分栏 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <AnimatePresence mode="wait">
              <motion.div key={coach.name+'-img'}
                initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                className="aspect-[3/4] overflow-hidden bg-[#1A1A1A] md:sticky md:top-24">
                <img src={coach.img} alt={coach.name} className="w-full h-full object-cover" />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div key={coach.name+'-info'}
                initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:-20 }}
                className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">{coach.name}</h2>
                  <p className="font-mono text-[0.7rem] uppercase text-[#D9411E] mt-2">{coach.role}</p>
                </div>
                <div className="w-12 h-[1px] bg-[#D9411E]" />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-muted-foreground mb-3">Philosophy</p>
                  <p className="text-lg leading-relaxed">{coach.philosophy}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.65rem] uppercase text-muted-foreground mb-3">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {coach.certs.map(c => (
                      <span key={c} className="font-mono text-[0.65rem] uppercase bg-[#1A1A1A] text-white px-3 py-1.5">{c}</span>
                    ))}
                  </div>
                </div>
                <Link to="/memberships"
                  className="inline-flex items-center gap-3 bg-[#D9411E] text-white px-8 py-4 font-mono text-xs uppercase hover:bg-[#c13818] transition-colors">
                  Book a Session <ArrowRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}