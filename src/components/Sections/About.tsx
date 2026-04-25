import { motion } from 'motion/react';
import { Heart, ShieldCheck, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Acolhimento Humanizado",
    description: "Cada paciente é único. Ouvimos sua história para entender a raiz do problema, indo além dos sintomas."
  },
  {
    icon: ShieldCheck,
    title: "Expertise Local",
    description: "Referência em São José dos Campos com uma equipe biomédica altamente qualificada e focada em resultados."
  },
  {
    icon: Users,
    title: "Abordagem Integrativa",
    description: "Integramos diferentes técnicas para promover saúde, estética e equilíbrio de forma holística."
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[2.5rem] overflow-hidden aspect-video md:aspect-square relative z-10 shadow-2xl border border-white/20">
             <img 
              src="https://clinicabiomedintegra.com.br/_assets/media/cbc608ab726f64d67941486a2755c1a6.png" 
              alt="Dra. Principal - Clínica Biomed Integra" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-biomed-blue-light/10 rounded-full blur-2xl z-0" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
            Ciência que <br />
            <span className="text-biomed-blue-light text-3xl md:text-5xl italic font-normal">regenera o bem-estar.</span>
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed text-xl">
            A Biomed Integra chega a São José dos Campos em 2026 com um propósito claro: utilizar o que há de mais moderno na biomedicina integrativa para interromper ciclos de dor e desequilíbrio metabólico.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-3xl shadow-sm">
                <div className="shrink-0 w-14 h-14 bg-biomed-blue-dark text-white rounded-2xl flex items-center justify-center">
                  <v.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
