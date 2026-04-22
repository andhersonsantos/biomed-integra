import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "O que é Biomedicina Integrativa?",
    answer: "É um modelo de saúde que considera o indivíduo como um todo. Unimos o conhecimento laboratorial e clínico com práticas integrativas para tratar a causa das dores e desequilíbrios, não apenas os sintomas isolados."
  },
  {
    question: "Os tratamentos estéticos são dolorosos?",
    answer: "Nossos tratamentos como Detox Corporal e Esculpe Detox são minimamente invasivos e focados no conforto do paciente. Utilizamos tecnologias avançadas que garantem resultados eficazes com o máximo de acolhimento."
  },
  {
    question: "Como funciona o mapeamento genético?",
    answer: "É um processo simples de coleta de saliva ou sangue que analisa marcadores específicos do seu DNA. O resultado nos ajuda a personalizar sua dieta, treinos e prevenção de doenças com precisão cirúrgica."
  },
  {
    question: "A clínica atende convênios?",
    answer: "Atendemos principalmente de forma particular para garantir um tempo maior e mais qualidade em cada consulta. No entanto, fornecemos nota fiscal descritiva para que você possa solicitar reembolso junto ao seu convênio, caso ele ofereça essa opção."
  }
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-biomed-beige py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-500">Separamos as principais perguntas para ajudar você em sua jornada de saúde.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-biomed-blue-light/10">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-biomed-blue-dark text-lg">{f.question}</span>
                {active === i ? <Minus className="text-biomed-blue-light" /> : <Plus className="text-biomed-blue-light" />}
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                      {f.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
