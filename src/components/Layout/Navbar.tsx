import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import Logo from '../UI/Logo';

const navLinks = [
  { name: 'Início', to: 'hero' },
  { name: 'Diabetes', to: 'diabetes' },
  { name: 'Atuação', to: 'services' },
  { name: 'Planos', to: 'subscription' },
  { name: 'Benefícios', to: 'benefits' },
  { name: 'FAQ', to: 'faq' },
  { name: 'Contato', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-biomed-blue-light/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="hero" 
          smooth={true} 
          className="cursor-pointer group"
        >
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              spy={true}
              offset={-80}
              className="text-slate-600 hover:text-biomed-blue-dark cursor-pointer text-sm font-medium transition-colors"
              activeClass="text-biomed-blue-dark font-bold"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/5512988220969"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-biomed-blue-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-biomed-blue-dark/90 transition-all shadow-sm flex items-center gap-2"
          >
            <Phone size={16} />
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-biomed-blue-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-biomed-blue-light/20 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="text-slate-600 text-lg py-2 border-b border-slate-50 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/5512988220969"
            className="bg-whatsapp text-white text-center py-4 rounded-xl font-bold mt-4 flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
