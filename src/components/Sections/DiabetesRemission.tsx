import { motion } from 'motion/react';
import { ShieldCheck, GraduationCap, Microscope, Users, ChevronRight } from 'lucide-react';

const pillars = [
  {
    icon: Microscope,
    title: "Tratamento Científico",
    description: "Protocolos validados cientificamente para restaurar a sensibilidade à insulina e desinflamar o organismo."
  },
  {
    icon: ShieldCheck,
    title: "Abordagem Natural",
    description: "Foco na causa raiz através de intervenções naturais e ajustes metabólicos precisos, sem excesso de fármacos."
  },
  {
    icon: GraduationCap,
    title: "Aprendizado Contínuo",
    description: "O paciente entende como seu corpo funciona, tornando-se protagonista de seu próprio processo de cura."
  },
  {
    icon: Users,
    title: "Apoio Técnico",
    description: "Acompanhamento próximo e humanizado, com suporte constante de nossa equipe biomédica especializada."
  }
];

export default function DiabetesRemission() {
  return (
    <section id="diabetes" className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-biomed-blue-light/10 text-biomed-blue-muted px-4 py-2 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-biomed-blue-light animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">Protocolo Exclusivo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-[1.1] text-biomed-blue-dark">
              Remissão do Diabetes <br />
              <span className="text-biomed-blue-light">é uma realidade.</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A Clínica Biomed Integra oferece protocolos exclusivos para que você alcance a remissão do Diabetes Tipo 2 de forma natural. Com muito aprendizado, apoio técnico e científico, ajudamos você a retomar o controle da sua vida.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-biomed-sand rounded-2xl flex items-center justify-center text-biomed-blue-light">
                    <pillar.icon size={26} />
                  </div>
                  <h4 className="font-bold text-lg text-biomed-blue-dark">{pillar.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 p-6 bg-biomed-sand/50 rounded-3xl border border-biomed-blue-light/10 mb-10">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="Paciente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-slate-700">
                <span className="font-bold text-biomed-blue-dark">Dezenas de pacientes</span> já validaram nossos protocolos e transformaram suas vidas.
              </p>
            </div>

            <a 
              href="https://wa.me/5512988220969?text=Quero%20saber%20mais%20sobre%20o%20protocolo%20de%20remissão%20de%20diabetes"
              className="inline-flex items-center gap-3 bg-biomed-blue-dark text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              Consultar Viabilidade
              <ChevronRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-4/5 lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
                alt="Liberdade e Bem-estar após remissão" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-biomed-blue-dark/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl">
                <p className="text-white text-lg font-medium leading-relaxed italic">
                  "O conhecimento é a chave para a liberdade metabólica. Não apenas tratamos, nós ensinamos o corpo a se curar."
                </p>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-biomed-blue-light/20 rounded-full blur-3xl z-0 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-biomed-blue-muted/20 rounded-full blur-3xl z-0 animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
