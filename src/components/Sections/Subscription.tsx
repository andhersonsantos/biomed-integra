import { motion } from 'motion/react';
import { Calendar, CheckCircle2, Star, Clock } from 'lucide-react';

export default function Subscription() {
  return (
    <section id="subscription" className="bg-biomed-sand/30 py-32 px-6 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-biomed-blue-light/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-biomed-blue-muted/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-biomed-blue-dark text-white px-4 py-2 rounded-full mb-6"
          >
            <Star size={16} className="fill-white" />
            <span className="text-xs font-bold uppercase tracking-widest">Exclusividade Biomed Integra</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-biomed-blue-dark">
            Plano de <span className="text-biomed-blue-light">Assinatura.</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">
            O seu momento de cuidar de si, com lugar reservado na sua rotina. Transforme o autocuidado em um hábito sem surpresas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Main Plan Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-12 shadow-xl shadow-biomed-blue-dark/5 border border-biomed-blue-light/10 flex flex-col"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-biomed-blue-dark mb-4">Constância do Cuidado</h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                A verdadeira saúde não acontece em uma única consulta. Criamos este plano mensal para que você tenha seu tempo de alívio, estética e reequilíbrio garantido toda semana, por um valor fixo.
              </p>
            </div>

            <div className="space-y-8 grow">
              <div className="p-8 bg-biomed-blue-light/5 rounded-3xl border border-biomed-blue-light/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-biomed-blue-light text-white rounded-xl flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-xl text-biomed-blue-dark">Tratamento de Base (1x ao mês)</h4>
                </div>
                <p className="text-slate-600 mb-4 ml-14">Escolha a terapia principal para o seu momento:</p>
                <ul className="grid sm:grid-cols-2 gap-3 ml-14">
                  {['Consulta Integrativa', 'Detox Corporal', 'Esculpe Detox'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-biomed-blue-light shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-biomed-blue-dark text-white rounded-xl flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-xl text-biomed-blue-dark">Manutenção Semanal (3x ao mês)</h4>
                </div>
                <p className="text-slate-600 mb-4 ml-14">Escolha como quer ser cuidado nas outras semanas:</p>
                <ul className="grid sm:grid-cols-2 gap-3 ml-14">
                  {['Auriculoterapia', 'Fototerapia', 'Drenagem Linfática', 'Fotodepilação Facial'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 size={16} className="text-biomed-blue-dark shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/5512988220969?text=Gostaria%20de%20saber%20valores%20do%20Plano%20de%20Assinatura"
                className="w-full py-6 bg-biomed-blue-dark text-white rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
              >
                Garantir meu horário fixo
                <Calendar size={24} />
              </a>
              <p className="text-center text-slate-400 text-sm mt-4">Vagas limitadas para manter a qualidade do acompanhamento.</p>
            </div>
          </motion.div>

          {/* Side Illustration / Benefits */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-biomed-blue-dark rounded-[2.5rem] p-10 text-white grow flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-6">Por que assinar?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="text-biomed-blue-light" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Prioridade na Agenda</p>
                    <p className="text-slate-300">Horários fixos reservados exclusivamente para você, sem esperas.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-biomed-blue-light" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Hábito Saudável</p>
                    <p className="text-slate-300">Transforme o autocuidado em rotina, garantindo resultados duradouros.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Star className="text-biomed-blue-light" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Economia Inteligente</p>
                    <p className="text-slate-300">Valor fixo mensal com desconto em relação às sessões avulsas.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] overflow-hidden relative h-64 grayscale opacity-80"
            >
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
                alt="Autocuidado" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-biomed-blue-dark/40 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                 <p className="text-white text-2xl font-display italic text-center">"A saúde é um investimento, não um gasto."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
