import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Carla Silveira",
    role: "Administradora",
    text: "Sofri com dores na coluna por anos. Na Biomed Integra, encontrei um atendimento humano e técnicas que realmente funcionaram. Hoje vivo sem dor e com muito mais disposição.",
    avatar: "https://i.pravatar.cc/100?u=1"
  },
  {
    name: "Roberto Mendes",
    role: "Empresário",
    text: "O tratamento estético corporal foi um divisor de águas. O Esculpe Detox superou minhas expectativas e o acompanhamento dos profissionais é impecável.",
    avatar: "https://i.pravatar.cc/100?u=2"
  },
  {
    name: "Juliana Duarte",
    role: "Atleta Amadora",
    text: "Fiz o mapeamento genético para otimizar meus treinos. Super recomendo a clínica pela precisão e pela clareza na entrega dos resultados.",
    avatar: "https://i.pravatar.cc/100?u=3"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Vidas que <br /><span className="text-biomed-blue-light">transformamos.</span></h2>
          <p className="text-slate-500 leading-relaxed text-lg">
            Muito mais do que tratamentos, entregamos qualidade de vida e renovamos a autoestima de quem confia em nosso trabalho.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end gap-4 opacity-30 pointer-events-none">
          <Quote size={80} className="text-biomed-blue-light" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-[2rem] flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-8">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-biomed-blue-light/20" />
              <div>
                <h4 className="font-bold text-biomed-blue-dark">{t.name}</h4>
                <p className="text-xs font-medium text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
