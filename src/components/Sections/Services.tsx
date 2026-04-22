import { motion } from 'motion/react';
import { Activity, Sparkles, Dna } from 'lucide-react';
import { cn } from '../../lib/utils';

const categories = [
  {
    title: "Saúde & Qualidade de Vida",
    icon: Activity,
    color: "bg-biomed-blue-light text-biomed-blue-dark",
    items: [
      "Controle de Glicemia",
      "Combate à Inflamação",
      "Redução de Dores Crônicas",
      "Consulta Integrativa"
    ]
  },
  {
    title: "Práticas Integrativas",
    icon: Sparkles,
    color: "bg-biomed-blue-light text-biomed-blue-dark",
    items: [
      "Bio-Protocolos Individuais",
      "Equilíbrio Metabólico",
      "Desintoxicação Celular",
      "Recuperação Sistêmica"
    ]
  },
  {
    title: "Mapeamento & Ciência",
    icon: Dna,
    color: "bg-biomed-blue-light text-biomed-blue-dark",
    items: [
      "Análise de Marcadores",
      "Mapeamento Genético",
      "Prevenção Direcionada",
      "Suporte à Longevidade"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900 py-32 px-6 overflow-hidden relative">
      {/* Abstract Background Illustration / Molecular Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-full h-full text-biomed-blue-light">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: 'currentColor', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: 'currentColor', stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="100" fill="url(#grad1)" />
          <circle cx="600" cy="500" r="150" fill="url(#grad1)" />
          <path d="M100,100 L300,300 M500,600 L700,400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,10" />
          <circle cx="300" cy="300" r="5" fill="currentColor" />
          <circle cx="100" cy="100" r="5" fill="currentColor" />
          <circle cx="700" cy="400" r="5" fill="currentColor" />
          <circle cx="500" cy="600" r="5" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Pontos de <span className="text-biomed-blue-light">Atuação.</span></h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              Intervenções diretas na causa raíz dos sintomas para resultados metabólicos e sistêmicos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white/5 hover:border-biomed-blue-light/20 transition-all group"
            >
              <div className={cn("inline-flex p-5 rounded-2xl mb-10 transition-transform group-hover:scale-110 duration-500", cat.color)}>
                <cat.icon size={36} />
              </div>
              <h3 className="text-white font-bold text-3xl mb-8 tracking-tight">{cat.title}</h3>
              <ul className="space-y-6 mb-12">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                    <div className="w-2 h-2 rounded-full bg-biomed-blue-light shadow-[0_0_10px_#00AEEF]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/5512988220969?text=Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(cat.title)}`}
                className="inline-flex items-center gap-2 text-biomed-blue-light font-bold text-lg hover:text-white transition-colors group/link"
              >
                Detalhes do protocolo
                <Activity size={18} className="group-hover/link:animate-pulse" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
