import { motion } from 'motion/react';
import { Zap, Target, Activity } from 'lucide-react';

const impacts = [
  {
    title: "Alívio Imediato",
    desc: "Redução significativa de marcadores inflamatórios e alívio de dores crônicas desde a primeira fase do protocolo.",
    icon: Zap
  },
  {
    title: "Precisão Biológica",
    desc: "Ajuste metabólico fino para controle da glicemia e otimização das funções vitais do organismo.",
    icon: Target
  },
  {
    title: "Vigor Sustentável",
    desc: "Recuperação da energia e disposição através da desintoxicação e equilíbrio celular profundo.",
    icon: Activity
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">O Impacto do <span className="text-biomed-blue-light">Equilíbrio.</span></h2>
        <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
          Nossa metodologia foca na causa raiz, entregando resultados que você sente no dia a dia.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {impacts.map((impact, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-8 transition-colors hover:bg-biomed-blue-light/5 rounded-[2rem]"
          >
            <div className="w-16 h-16 bg-biomed-blue-light text-white rounded-full flex items-center justify-center mb-8 shadow-lg shadow-biomed-blue-light/20">
              <impact.icon size={32} />
            </div>
            <h4 className="font-bold text-2xl text-biomed-blue-dark mb-4">{impact.title}</h4>
            <p className="text-slate-500 leading-relaxed">{impact.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
