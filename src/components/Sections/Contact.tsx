import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="bg-biomed-blue-dark rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-biomed-blue-light/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32" />

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vamos cuidar da <br />sua saúde?</h2>
            <p className="text-biomed-blue-light font-medium text-lg mb-10">Agende sua avaliação inicial e descubra como podemos ajudar você a viver melhor.</p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-biomed-blue-light transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">WhatsApp</div>
                  <div className="text-xl font-bold">(12) 98822-0969</div>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-biomed-blue-light transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">E-mail</div>
                  <div className="text-xl font-bold text-sm md:text-xl">contato@biomedintegra.com.br</div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-biomed-blue-light transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">Localização</div>
                  <div className="text-sm font-bold">Rua Palmares, nº 300, Sala 03 - Parque Industrial, SJC</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 text-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-biomed-blue-dark">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-biomed-blue-light transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Telefone</label>
                  <input 
                    type="text" 
                    placeholder="(12) 90000-0000"
                    className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-biomed-blue-light transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Assunto de interesse</label>
                <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-biomed-blue-light transition-all appearance-none cursor-pointer">
                  <option>Tratamento de Dor Crônica</option>
                  <option>Estética & Detox</option>
                  <option>Mapeamento Genético</option>
                  <option>Consulta Integrativa</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-biomed-blue-light transition-all resize-none"
                />
              </div>
              <button className="w-full bg-biomed-blue-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-biomed-blue-light transition-all group">
                Enviar E-mail
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Embed Simulation */}
        <div className="mt-16 h-80 w-full rounded-[2rem] overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117218.4116499641!2d-45.95544716447846!3d-23.223948684346937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4bb385833211%3A0x8091398835f8fc36!2zU8OjbyBKb3PDqSBkb3MgQ2FtcG9zLCBTUA!5e0!3m2!1spt-BR!2sbr!4v1713809600000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
