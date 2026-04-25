import { ChevronRight, Heart, ShieldCheck, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Acolhimento Humanizado",
  },
  {
    icon: ShieldCheck,
    title: "Expertise Local",
  },
  {
    icon: Users,
    title: "Abordagem Integrativa",
  }
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center pt-12 md:pt-16 overflow-hidden bg-linear-to-br from-biomed-sand via-biomed-beige to-biomed-blue-light/10">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-biomed-blue-light/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-biomed-blue-muted/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="section-padding relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="hero-anim-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter">
            Ciência que <br />
            <span className="text-biomed-blue-light italic font-normal">regenera o bem-estar.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
            A Biomed Integra chega a São José dos Campos para utilizar o que há de mais moderno na biomedicina integrativa e interromper ciclos de dor e desequilíbrio metabólico.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="https://wa.me/5512988220969" 
              className="bg-biomed-blue-dark text-white text-center px-10 py-6 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              Iniciar Recuperação
              <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center sm:items-start gap-2 p-4 bg-white/50 backdrop-blur-sm border border-biomed-blue-light/10 rounded-2xl">
                <v.icon size={20} className="text-biomed-blue-light" />
                <h4 className="font-bold text-sm text-biomed-blue-dark">{v.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block hero-anim-right">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <picture>
              <source srcSet="/hero-dra.webp" type="image/webp" />
              <img
                src="https://clinicabiomedintegra.com.br/_assets/media/cbc608ab726f64d67941486a2755c1a6.png"
                alt="Biomédica Chefe Dra Adriane Xavier"
                className="w-full h-[650px] object-cover"
                width={1000}
                height={1500}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
