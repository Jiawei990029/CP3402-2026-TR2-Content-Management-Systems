import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'The Apex' },
  { to: '/programs', label: 'The Program' },
  { to: '/coaches', label: 'The Roster' },
  { to: '/memberships', label: 'The Threshold' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      ${scrolled ? 'bg-[#F4F4F2]/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-mono text-xs tracking-[0.2em] uppercase font-semibold text-foreground">
          Kinetic
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-mono text-[0.7rem] tracking-[0.1em] uppercase transition-colors duration-300 
                hover:text-[#D9411E] 
                ${location.pathname === l.to ? 'text-[#D9411E]' : 'text-foreground/70'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#F4F4F2]/95 backdrop-blur-xl px-6 pb-6 space-y-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block font-mono text-xs tracking-[0.1em] uppercase 
                ${location.pathname === l.to ? 'text-[#D9411E]' : 'text-foreground/70'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}