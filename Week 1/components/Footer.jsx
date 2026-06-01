import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/60 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-white mb-4">Kinetic</p>
          <p className="text-sm leading-relaxed max-w-xs">
            Where precision meets performance. A high-performance laboratory for the human body.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-white/40 mb-2">Navigate</p>
          {[['/', 'The Apex'], ['/programs', 'The Program'], 
            ['/coaches', 'The Roster'], ['/memberships', 'The Threshold']].map(([to, label]) => (
            <Link key={to} to={to} className="block text-sm hover:text-[#D9411E] transition-colors">
              {label}
            </Link>
          ))}
        </div>
        <div className="space-y-3">
          <p className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-white/40 mb-2">Location</p>
          <p className="text-sm">1200 Industrial Blvd</p>
          <p className="text-sm">Downtown District</p>
          <p className="text-sm mt-4">Mon–Fri: 05:00–23:00</p>
          <p className="text-sm">Sat–Sun: 07:00–21:00</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10">
        <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-white/30">
          © 2026 Kinetic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}