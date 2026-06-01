import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Flame } from 'lucide-react';

const programs = [
  { title:'Metabolic Conditioning', tag:'HIIT', intensity:'09/10', duration:'45 MIN',
    description:'High-intensity interval protocols designed to maximize caloric output.',
    img:'https://media.base44.com/...' },
  { title:'Structural Yoga', tag:'MOBILITY', intensity:'04/10', duration:'60 MIN',
    description:'Precision flexibility work focused on structural alignment.',
    img:'https://media.base44.com/...' },
  { title:'Sprint Mechanics', tag:'SPEED', intensity:'08/10', duration:'30 MIN',
    description:'Biomechanical sprint training to develop explosive acceleration.',
    img:'https://media.base44.com/...' },
  { title:'Foundational Strength', tag:'POWER', intensity:'07/10', duration:'55 MIN',
    description:'Progressive overload programming for maximal strength development.',
    img:'https://media.base44.com/...' },
];

export default function Programs() {
  const [active, setActive] = useState(null);
  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#D9411E] mb-4">The Program</p>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95]">
          Precision<br />Training<br />Protocols
        </h1>
      </section>
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((p, i) => (
            <motion.div key={p.title}
              className="group relative overflow-hidden cursor-pointer bg-[#1A1A1A]"
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
              initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.6 }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: active===i ? 'scale(1)' : 'scale(1.1)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[#D9411E] mb-2">{p.tag}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
                <div className={`transition-all duration-500 overflow-hidden ${active===i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex gap-6 mb-6">
                    <span className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase text-white/50">
                      <Flame size={12} className="text-[#D9411E]" /> {p.intensity}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase text-white/50">
                      <Clock size={12} /> {p.duration}
                    </span>
                  </div>
                  <Link to="/memberships"
                    className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase text-[#D9411E] hover:text-white transition-colors">
                    Secure Spot <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}