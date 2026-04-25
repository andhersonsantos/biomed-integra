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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos cuidar da <br />
              sua saúde?
            </h2>
            <p className="text-biomed-blue-light font-medium text-lg mb-10">
              Agende sua avaliação inicial e descubra como podemos ajudar você a viver melhor.
            </p>
          </div>

          <div className="rounded-4xl  text-white">
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-biomed-blue-light transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">
                    WhatsApp
                  </div>
                  <div className="text-xl font-bold">(12) 98822-0969</div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-biomed-blue-light transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">
                    E-mail
                  </div>
                  <div className="text-xl font-bold text-sm md:text-xl">
                    contato@biomedintegra.com.br
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-biomed-blue-light transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-bold tracking-widest">
                    Localização
                  </div>
                  <div className="text-sm font-bold">
                    Rua Palmares, nº 300, Sala 03 - Parque Industrial, SJC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed Simulation */}
        <div className="h-80 w-full rounded-4xl overflow-hidden grayscale contrast-125 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3274818701148!2d-45.90609112357333!3d-23.231167279028128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a9dfa899a71%3A0x7c13a8916a7f66a6!2sR.%20Palmares%2C%20300%20-%20sala%2003%20-%20Parque%20Industrial%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012235-620!5e0!3m2!1spt-BR!2sbr!4v1777143765497!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
