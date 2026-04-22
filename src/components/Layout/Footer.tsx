import { Instagram, Facebook, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import Logo from '../UI/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <Logo />
          </div>
          <p className="text-sm leading-relaxed mb-6 opacity-70">
            Biomedicina Integrativa em São José dos Campos. Focados em resultados que transformam a saúde e a autoestima de forma humanizada.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/clinicabiomedintegra/" target="_blank" rel="noopener noreferrer" className="hover:text-biomed-blue-light transition-colors"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/clinicabiomedintegra" target="_blank" rel="noopener noreferrer" className="hover:text-biomed-blue-light transition-colors"><Facebook size={20} /></a>
            <a href="https://www.youtube.com/@cl%C3%ADnicabiomedintegra" target="_blank" rel="noopener noreferrer" className="hover:text-biomed-blue-light transition-colors"><Youtube size={20} /></a>
            <a href="https://www.tiktok.com/@clinicabiomedintegra" target="_blank" rel="noopener noreferrer" className="hover:text-biomed-blue-light transition-colors" title="TikTok">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v10.82c0 1.63-.44 3.47-1.56 4.66-1.11 1.25-2.84 1.9-4.5 1.91-1.71.01-3.52-.7-4.49-2.07-1.09-1.42-1.39-3.48-.68-5.07.61-1.48 2.05-2.61 3.63-2.87.26-.04.53-.06.79-.08v4.02c-.37.07-.75.14-1.08.31-.76.33-1.35 1.05-1.49 1.86-.14.81.12 1.76.7 2.37.58.59 1.48.86 2.3.74 1.11-.13 1.96-1.12 1.96-2.22V.02z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Serviços</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="#diabetes" className="hover:text-biomed-blue-light font-bold text-white">Remissão de Diabetes</a></li>
            <li><a href="#services" className="hover:text-biomed-blue-light">Saúde & Equilíbrio</a></li>
            <li><a href="#subscription" className="hover:text-biomed-blue-light font-bold text-biomed-blue-light">Plano de Assinatura</a></li>
            <li><a href="#services" className="hover:text-biomed-blue-light">Metodologia Preditiva</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 text-biomed-blue-light" />
              <span>Rua Palmares, nº 300, Sala 03 - Parque Industrial, SJC</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-biomed-blue-light" />
              <span>(12) 98822-0969</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-biomed-blue-light" />
              <span>contato@biomedintegra.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-bold mb-6">Horário</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Segunda - Sexta: 08:00 - 18:00</li>
            <li>Sábado: 09:00 - 12:00</li>
            <li>Domingo: Fechado</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs opacity-40">
        <p>&copy; {new Date().getFullYear()} Biomed Integra. Todos os direitos reservados. Desenvolvido com foco em sua saúde.</p>
      </div>
    </footer>
  );
}
