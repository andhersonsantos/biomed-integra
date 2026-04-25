import iconWhatsApp from '../../lib/assets/icon-whatsapp.svg';

export default function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/5512988220969?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20práticas%20integrativas';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="anim-fab-whatsapp fixed bottom-8 right-8 z-60 origin-center text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-200 group hover:scale-110  active:scale-90"
      aria-label="Falar no WhatsApp"
    >
      <img src={iconWhatsApp} alt="" aria-hidden="true" className="h-8 w-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Fale conosco agora!
      </span>
    </a>
  );
}
