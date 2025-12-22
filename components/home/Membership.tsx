'use client'

import { Check, Minus } from 'lucide-react'
import { useState } from 'react'

export default function Membership() {
  const plans = [
    {
      name: 'Clubinho',
      description: 'Acesso às quadras',
      price: '150',
      period: '/mês',
      highlight: false,
      features: [
        { text: 'Acesso às 6 quadras oficiais', included: true },
        { text: 'Uso de vestiários e duchas', included: true },
        { text: 'Vista panorâmica', included: true },
        { text: 'Sem aulas incluídas', included: false },
        { text: 'Horário limitado', included: false },
      ],
      cta: 'Conhecer plano',
      badge: null
    },
    {
      name: 'Mensalista',
      description: '2x por semana',
      price: '349',
      period: '/mês',
      highlight: true,
      features: [
        { text: 'Tudo do Clubinho', included: true },
        { text: '2 aulas por semana', included: true },
        { text: 'Prática + teoria', included: true },
        { text: 'Do iniciante ao avançado', included: true },
        { text: 'Estratégias de jogo', included: true },
      ],
      cta: 'Escolher plano',
      badge: 'Mais escolhido',
      note: '5% de desconto para famílias (2+) e residentes de outras cidades'
    },
    {
      name: 'Individual',
      description: 'Aulas personalizadas',
      price: '199',
      period: '/mês',
      highlight: false,
      features: [
        { text: 'Acesso às quadras', included: true },
        { text: 'Aulas individuais', included: true },
        { text: 'Horário flexível', included: true },
        { text: 'Acompanhamento personalizado', included: true },
        { text: 'Evolução acelerada', included: true },
      ],
      cta: 'Conhecer plano',
      badge: null
    },
  ]

  const dayUse = [
    {
      type: 'Day Use Padrão',
      price: 'R$ 30',
      description: 'Acesso completo por um dia',
      highlight: false
    },
    {
      type: 'Day Use Parceiro',
      price: 'R$ 30',
      description: 'Para quem treina em arenas vizinhas',
      benefit: 'Ganhe R$ 15 em consumo',
      highlight: true
    },
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Posso experimentar antes de assinar?',
      answer: 'Sim! Oferecemos aulas experimentais para você conhecer nossa metodologia e estrutura antes de decidir.'
    },
    {
      question: 'Como funciona o desconto para famílias?',
      answer: 'Famílias com 2 ou mais membros ganham 5% de desconto na mensalidade. Residentes de outras cidades também têm direito ao desconto.'
    },
    {
      question: 'Posso usar as quadras fora do horário de aula?',
      answer: 'Sim! Mensalistas e membros do Clubinho têm acesso às quadras nos horários disponíveis, sujeito à lotação.'
    },
  ]

  return (
    <section id="planos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradiente de fundo com tons suaves de emerald */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 to-lime-100/50 via-teal-200/50 to-lime-30/30 to-lime-50/50"></div>
      {/* Elementos decorativos no background */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Círculos decorativos com leve animação - tons que remetem à areia */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-100 opacity-40 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-lime-100 opacity-40 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-100 opacity-30 animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-teal-100 opacity-25 animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>

        {/* Losangos decorativos menores com leve animação - tons que remetem à areia e beach tennis */}
        <div className="absolute top-20 left-20 w-16 h-16 transform rotate-45 bg-teal-200 opacity-15 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/5 w-12 h-12 transform rotate-45 bg-lime-200 opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 transform rotate-45 bg-emerald-200 opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 transform rotate-45 bg-teal-300 opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Pattern de Losangos com tons que remetem à areia e beach tennis */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]" xmlns="/images/logo.png" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="membership-diamonds" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
              fill="none"
              stroke="#a3e635"
              strokeWidth="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#membership-diamonds)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="inline-block mb-4">
            <span
              className="
        text-xs
        uppercase
        tracking-[0.2em]
        font-bold
        text-emerald-900
        md:text-emerald-50
      "
            >
              Planos
            </span>
          </div>

          <h2
            className="
      font-montserrat
      font-light
      text-xl
      lg:text-5xl
      leading-[1.2]
      text-emerald-900
      md:text-neutral-50
      mb-6
    "
          >
            Beach Tennis <span className="font-normal">para você</span>
          </h2>

          <p
            className="
      leading-relaxed
      text-lg
      font-light
      text-emerald-900/80
      md:text-emerald-50/80
    "
          >
            Aulas que unem prática e teoria, aplicam estratégia de jogo e te levam do iniciante ao avançado.
          </p>
        </div>


        {/* Planos Principais */}
        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white transition-all duration-300 ${plan.highlight
                ? 'lg:-mt-6 lg:mb-6 shadow-2xl border-2 border-emerald-200'
                : 'shadow-md hover:shadow-xl'
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-100 text-teal-800 px-4 py-1 border border-teal-200 rounded-full">
                  <span className="text-xs uppercase tracking-[0.15em] font-normal">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-10">
                {/* Header do Plano */}
                <div className="mb-10 pb-8 border-b border-teal-100">
                  <h3 className="text-2xl font-normal text-emerald-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-emerald-700/70 font-light mb-6">
                    {plan.description}
                  </p>

                  {/* Preço */}
                  <div className="mt-2 flex items-baseline justify-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
                    <span className="text-sm text-emerald-600 mr-1">R$</span>
                    <span className="text-6xl font-light text-emerald-900">
                      {plan.price}
                    </span>
                    <span className="text-emerald-600 font-light ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-start space-x-3 ${!feature.included ? 'opacity-50' : ''
                        }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {feature.included ? (
                          <Check size={20} className="text-emerald-600" strokeWidth={1.5} />
                        ) : (
                          <Minus size={20} className="text-teal-300" strokeWidth={1.5} />
                        )}
                      </div>
                      <span className="text-sm text-emerald-800/80 font-light leading-relaxed flex-1">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {plan.note && (
                  <div className="mb-6 p-3 bg-teal-50/50 rounded-lg border border-teal-100">
                    <p className="text-xs text-emerald-700/80 font-light leading-relaxed">
                      {plan.note}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <a
                  href="#contato"
                  className={`block w-full py-4 text-center text-sm uppercase tracking-[0.15em] font-normal transition-all duration-300 ${plan.highlight
                    ? 'bg-gradient-to-r from-emerald-700 to-lime-700 text-white hover:from-emerald-600 hover:to-lime-600 shadow-lg rounded-lg'
                    : 'border border-emerald-300 text-emerald-900 hover:border-emerald-400 rounded-lg'
                    }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 mb-10"></div>

        {/* Day Use Section */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-5 text-center">
            <h3
              className="
      text-sm
      uppercase
      tracking-[0.2em]
      font-normal
      mb-3
      text-emerald-900
      md:text-emerald-50
    "
            >
              Opções Avulsas
            </h3>

            <p
              className="
      leading-relaxed
      font-light
      text-emerald-900/80
      md:text-emerald-50/80
    "
            >
              Experimente o Clube Tokca por um dia (Acesso somente as quadras)
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {dayUse.map((option, index) => (
              <div
                key={index}
                className={`bg-white p-10 rounded-xl border transition-all duration-300 shadow-sm ${option.highlight
                  ? 'border-teal-300 shadow-md bg-gradient-to-br from-teal-50 to-emerald-50'
                  : 'border-teal-200 hover:border-teal-300 hover:shadow-md bg-white'
                  }`}
              >
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-normal text-emerald-900 mb-2">
                      {option.type}
                    </h4>
                    <p className="text-sm text-emerald-700/70 font-light">
                      {option.description}
                    </p>
                  </div>

                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-light text-emerald-900">
                      {option.price}
                    </span>
                    <span className="text-emerald-600 font-light self-end pb-1">/dia</span>
                  </div>

                  {option.benefit && (
                    <div className="pt-4 border-t border-teal-100 bg-teal-50/30 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 text-emerald-800">
                        <Check size={18} strokeWidth={1.5} />
                        <span className="text-sm font-normal">{option.benefit}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Aula Experimental */}
          <div className="bg-gradient-to-r from-emerald-700 to-lime-700 text-white p-10 lg:p-16 relative overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-52 h-52 bg-white rounded-full -translate-y-1/3 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full translate-y-1/3 -translate-x-1/3"></div>
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div>
                <h4 className="text-3xl lg:text-4xl font-light mb-4">
                  Primeira vez? <span className="font-normal">Experimente</span>
                </h4>
                <p className="text-emerald-100 font-light text-lg">
                  Agende uma aula experimental e conheça nossa metodologia
                </p>
              </div>

              <a
                href="https://wa.me/5519996530893?text=Olá,%20gostaria%20de%20agendar%20uma%20aula%20experimental"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-emerald-900 px-10 py-5 hover:bg-teal-50 transition-all rounded-lg shadow-lg font-medium"
              >
                <span className="text-sm uppercase tracking-[0.15em]">
                  Agendar aula experimental
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-2 pt-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-50 font-normal mb-8 text-center">
              Dúvidas frequentes
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-teal-100 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    className="w-full flex justify-between items-center p-8 text-left"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <h4 className="text-lg font-normal text-emerald-900 pr-4 flex-1">
                      {faq.question}
                    </h4>
                    <div className="flex-shrink-0 ml-4">
                      <svg
                        className={`w-6 h-6 text-emerald-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="p-8 pt-2 text-emerald-800/80 font-light leading-relaxed border-t border-teal-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
