import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Águas de Lindóia - SP',
      link: 'https://maps.google.com/?q=Tokca+Arena+Aguas+de+Lindoia'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(19) 99653-0893',
      link: 'tel:+5519996530893'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@tokca.com.br',
      link: 'mailto:contato@tokca.com.br'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Domingo\n7h às 22h',
      link: null
    },
  ]

  const whatsappMessage = encodeURIComponent(
    'Olá! Tenho interesse em fazer parte do Clube Tokca. Gostaria de saber mais informações sobre os planos e atividades.'
  )

  return (
    <section id="contato" className="py-24 lg:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Pattern de Quadra de Beach Tennis */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.10] text-emerald-800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="beach-tennis-court" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
            {/* Linha de fundo */}
            <line x1="10" y1="10" x2="190" y2="10" stroke="currentColor" strokeWidth="0.5" />
            <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="0.5" />

            {/* Linhas laterais */}
            <line x1="10" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="0.5" />
            <line x1="190" y1="10" x2="190" y2="90" stroke="currentColor" strokeWidth="0.5" />

            {/* Linha central */}
            <line x1="100" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="0.5" />

            {/* Linha de serviço */}
            <line x1="10" y1="50" x2="190" y2="50" stroke="currentColor" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#beach-tennis-court)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-600 font-light">
              Contato
            </span>
          </div>
          <h2 className="font-montserrat font-light text-4xl lg:text-5xl text-emerald-900 mb-6 leading-[1.2]">
            Vamos <span className="font-normal">conversar?</span>
          </h2>
          <p className="text-emerald-800/80 leading-relaxed text-lg font-light">
            Quer fazer parte do Clube Tokca e ter acesso a toda a nossa estrutura e atividades?
            Entre em contato e tire suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Lado Esquerdo - WhatsApp CTA Principal */}
          <div className="space-y-12">

            {/* Box Principal WhatsApp */}
            <div className="bg-emerald-900 text-white p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-emerald-600 flex items-center justify-center">
                    <MessageCircle size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-light mb-3">
                      Fale conosco <span className="font-normal">agora</span>
                    </h3>
                    <p className="text-emerald-900 font-light leading-relaxed">
                      Nossa equipe está pronta para te atender e responder todas as suas dúvidas sobre planos, estrutura e atividades.
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5519996530893?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 transition-all duration-300 w-full justify-center"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-sm uppercase tracking-[0.15em] font-normal">
                    Abrir WhatsApp
                  </span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                <div className="pt-6 border-t border-white/20">
                  <p className="text-xs text-emerald-900 font-light text-center">
                    Resposta rápida • Atendimento personalizado
                  </p>
                </div>
              </div>
            </div>

            {/* Opções Rápidas de Mensagem */}
            <div className="space-y-3">
              <h4 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-light mb-4">
                Mensagens rápidas
              </h4>

              <a
                href={`https://wa.me/5519996530893?text=${encodeURIComponent('Olá! Gostaria de agendar uma aula experimental.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-emerald-900 hover:border-emerald-600 p-5 transition-all duration-300 hover:bg-emerald-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-normal text-emerald-900 mb-1">Agendar aula experimental</h5>
                    <p className="text-xs text-emerald-600 font-light">Experimente antes de decidir</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-emerald-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a
                href={`https://wa.me/5519996530893?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os planos mensais.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-emerald-900 hover:border-emerald-600 p-5 transition-all duration-300 hover:bg-emerald-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-normal text-emerald-900 mb-1">Informações sobre planos</h5>
                    <p className="text-xs text-emerald-600 font-light">Valores e condições</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-emerald-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a
                href={`https://wa.me/5519996530893?text=${encodeURIComponent('Olá! Gostaria de agendar uma visita para conhecer o clube.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-emerald-900 hover:border-emerald-600 p-5 transition-all duration-300 hover:bg-emerald-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-normal text-emerald-900 mb-1">Agendar visita ao clube</h5>
                    <p className="text-xs text-emerald-600 font-light">Conheça nossa estrutura</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-emerald-400 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Lado Direito - Informações de Contato */}
          <div className="space-y-8">

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-emerald-900">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-emerald-900 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <span>{info.content}</span>
                )

                return (
                  <div
                    key={index}
                    className="bg-white p-8 hover:bg-emerald-50 transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center">
                        <Icon className="text-emerald-600" size={24} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase tracking-[0.15em] text-emerald-600 font-light mb-2">
                          {info.title}
                        </h4>
                        <div className="text-sm text-emerald-700 font-light whitespace-pre-line">
                          {content}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mapa */}
            <div className="aspect-[4/3] bg-emerald-900 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.4435934326875!2d-46.62973592297832!3d-22.487534079552436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9113b2668d101%3A0x75aae4b810bffe4a!2sClub%20Tokca%20Arena%20Beach%20Tennis%20e%20Futev%C3%B4lei!5e0!3m2!1spt-BR!2sbr!4v1766066791742!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Redes Sociais */}
            <div className="border-t border-emerald-900 pt-8">
              <h4 className="text-xs uppercase tracking-[0.15em] text-emerald-600 font-light mb-6">
                Siga-nos
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/tokca.arena/?hl=pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-emerald-900 hover:border-emerald-900 flex items-center justify-center transition-all duration-300 hover:bg-emerald-900 hover:text-white group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
