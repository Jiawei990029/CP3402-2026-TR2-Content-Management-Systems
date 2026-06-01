import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  { name:'Foundation', price:'79', period:'/month',
    description:'Essential access for the self-directed athlete.',
    features:['Full gym floor access','Locker room & showers','Basic equipment orientation','Mobile app access'],
    featured:false, bg:'bg-[#EBEBE9]' },
  { name:'Performance', price:'149', period:'/month',
    description:'The complete training experience with expert guidance.',
    features:['Everything in Foundation','Unlimited group classes','2 PT sessions / month','Recovery zone access','Nutrition consultation','Priority booking'],
    featured:true, bg:'bg-[#F4F4F2]' },
  { name:'Elite', price:'249', period:'/month',
    description:'Uncompromised performance for the dedicated few.',
    features:['Everything in Performance','Unlimited PT sessions','24/7 facility access','Custom program design','Monthly body composition','Guest passes (2/mo)'],
    featured:false, bg:'bg-[#EBEBE9]' },
];

export default function Memberships() {
  return (
    <div className="pt-20">
      <section className="py-32 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[#D9411E] mb-4">The Threshold</p>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[0.95]">Choose Your<br />Tier</h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-lg">No contracts. No gimmicks.</p>
      </section>
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {tiers.map((tier,i) => (
            <motion.div key={tier.name}
              initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.15,duration:0.6 }}
              className={`${tier.bg} p-8 md:p-12 ${tier.featured ? 'md:scale-105 md:shadow-2xl md:z-10 relative' : ''}`}>
              <p className="font-mono text-[0.65rem] uppercase text-muted-foreground mb-6">{tier.name}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl md:text-6xl font-bold">${tier.price}</span>
                <span className="font-mono text-[0.7rem] uppercase text-muted-foreground">{tier.period}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-8">{tier.description}</p>
              <div className="w-full h-[1px] bg-border mb-8" />
              <ul className="space-y-4 mb-10">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={14} className={`mt-0.5 flex-shrink-0 ${tier.featured ? 'text-[#D9411E]' : 'text-foreground/50'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full flex items-center justify-center gap-3 py-4 font-mono text-xs uppercase transition-all
                ${tier.featured ? 'bg-[#D9411E] text-white hover:bg-[#c13818]' : 'border border-foreground/20 text-foreground hover:bg-foreground hover:text-background'}`}>
                Get Started <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-[#1A1A1A] py-28 px-6 md:px-10 text-center">
        <p className="font-mono text-[0.7rem] uppercase text-[#D9411E] mb-4">No Commitment</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cancel anytime. No questions asked.</h2>
        <p className="text-white/50 max-w-md mx-auto">Every membership includes a 7-day trial.</p>
      </section>
    </div>
  );
}