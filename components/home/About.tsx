'use client'

import Image from 'next/image'
import { Calendar, Users, Clock, Sparkles } from 'lucide-react'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    // Add animation styles to the document head
    const styleId = 'about-animation-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
      `;
      document.head.appendChild(style);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, {
      threshold: 0.1,
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const activities = [
    {
      image: '/images/beach.webp',
      name: 'Beach Tennis',
      description: 'Quadras profissionais'
    },
    {
      image: '/images/volei.jpg',
      name: 'Vôlei de Areia',
      description: 'Tradição e diversão'
    },
    {
      image: '/images/futvolei.jpg',
      name: 'Futevôlei',
      description: 'Técnica e agilidade'
    },
    {
      image: '/images/yoga.png',
      name: 'Yoga',
      description: 'Equilíbrio e paz'
    },
  ]

  const options = [
    {
      icon: Calendar,
      title: 'Mensalista',
      description: 'Acesso ilimitado'
    },
    {
      icon: Users,
      title: 'Day Use',
      description: 'Um dia completo'
    },
    {
      icon: Clock,
      title: 'Locação de Quadra',
      description: 'Por hora'
    },
    {
      icon: Sparkles,
      title: 'Aulas Avulsas',
      description: 'Sem compromisso'
    },
  ]

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden scroll-smooth">
      {/* Diamond background shapes */}
      <div className="absolute inset-0 z-0">
        {/* Main diamonds */}
        {/* Large diamond on the left */}
        <div className="absolute top-1/4 left-1/12 w-28 h-28 transform rotate-45 bg-emerald-800 opacity-15"></div>

        {/* Medium diamonds on the left */}
        <div className="absolute top-1/3 left-1/6 w-16 h-16 transform rotate-45 bg-emerald-700 opacity-20"></div>
        <div className="absolute top-2/5 left-1/4 w-12 h-12 transform rotate-45 bg-emerald-800 opacity-18"></div>

        {/* Small diamonds on the left */}
        <div className="absolute top-1/5 left-1/8 w-8 h-8 transform rotate-45 bg-emerald-600 opacity-15"></div>
        <div className="absolute top-3/4 left-1/10 w-6 h-6 transform rotate-45 bg-emerald-700 opacity-18"></div>
        <div className="absolute top-1/2 left-1/5 w-10 h-10 transform rotate-45 bg-emerald-800 opacity-12"></div>
        <div className="absolute top-4/5 left-1/6 w-5 h-5 transform rotate-45 bg-emerald-900 opacity-15"></div>

        {/* Additional diamonds on left margin with transparency */}
        <div className="absolute top-1/6 left-1/20 w-4 h-4 transform rotate-45 bg-emerald-900 opacity-5"></div>
        <div className="absolute top-2/6 left-1/16 w-6 h-6 transform rotate-45 bg-emerald-800 opacity-8"></div>
        <div className="absolute top-3/5 left-1/18 w-3 h-3 transform rotate-45 bg-emerald-700 opacity-6"></div>
        <div className="absolute top-4/5 left-1/14 w-5 h-5 transform rotate-45 bg-emerald-900 opacity-7"></div>
        <div className="absolute top-1/3 left-1/20 w-7 h-7 transform rotate-45 bg-emerald-600 opacity-4"></div>
        <div className="absolute top-5/6 left-1/12 w-4 h-4 transform rotate-45 bg-emerald-800 opacity-9"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header Minimalista */}
        <div className="max-w-2xl mb-20 animate-on-scroll opacity-0 translate-y-6">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-500 font-light">
              Sobre nós
            </span>
          </div>
          <h2 className="font-montserrat font-light text-4xl lg:text-5xl text-emerald-900 mb-6 leading-[1.2] border-l-2 border-emerald-600 pl-4 uppercase text-bold">
           Mais que um Clube <br/>
            <span className="font-normal">para um estilo de vida Completo</span>
          </h2>
          <p className="text-emerald-600 leading-relaxed text-lg font-light">
            Um espaço onde esporte, bem-estar e natureza se encontram em harmonia.
          </p>
        </div>

        {/* Layout em Grid Clean */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Atividades - 7 colunas */}
          <div className="lg:col-span-7 animate-on-scroll opacity-0 translate-y-6">
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-stone-900 font-normal mb-8">
                Atividades
              </h3>
            </div>

            {/* Grid de Imagens Minimalista */}
            <div className="grid grid-cols-2 gap-3">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/5] overflow-hidden bg-stone-200 animate-on-scroll opacity-0 translate-y-6"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <Image
                    src={activity.image}
                    alt={activity.name}
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/0 transition-all duration-500"></div>

                  {/* Texto minimalista */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-normal text-lg mb-1">
                        {activity.name}
                      </h4>
                      <p className="text-xs text-white/80 font-light tracking-wide">
                        {activity.description}
                      </p>
                    </div>
                  </div>

                  {/* Borda sutil no hover */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Texto adicional clean */}
            <div className="mt-8 pt-8 border-t border-stone-200 animate-on-scroll opacity-0 translate-y-6">
              <p className="text-stone-600 leading-relaxed font-light">
                Mantemos a tradição nos esportes de areia, agora com piscinas, sauna, espaço para yoga e uma programação completa de bem-estar.
              </p>
            </div>
          </div>

          {/* Opções - 5 colunas */}
          <div className="lg:col-span-5 animate-on-scroll opacity-0 translate-y-6">
            <div className="mb-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-stone-900 font-normal mb-8">
                Como participar
              </h3>
            </div>

            {/* Lista Clean */}
            <div className="space-y-1">
              {options.map((option, index) => {
                const Icon = option.icon
                return (
                  <div
                    key={index}
                    className="group border-b border-emerald-800 py-6 hover:bg-emerald-900/20 transition-all duration-300 cursor-pointer animate-on-scroll opacity-0 translate-y-6"
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        <Icon
                          className="text-emerald-700 group-hover:text-emerald-900 transition-colors"
                          size={20}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="flex-1 pt-1">
                        <h4 className="font-normal text-emerald-900 mb-1">
                          {option.title}
                        </h4>
                        <p className="text-sm text-emerald-800 font-light">
                          {option.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-emerald-600 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all pt-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Minimalista */}
            <div className="mt-12 pt-12 border-t border-emerald-800 animate-on-scroll opacity-0 translate-y-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-normal text-emerald-900 mb-2">
                    Vamos conversar?
                  </h4>
                  <p className="text-sm text-emerald-800 font-light leading-relaxed">
                    Entre em contato para conhecer o clube e encontrar a melhor opção para você.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/5519999999999?text=Olá,%20gostaria%20de%20conhecer%20o%20Tokca%20Club"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between w-full bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-4 transition-all duration-300 animate-on-scroll opacity-0 translate-y-6"
                  >
                    <span className="font-normal text-sm tracking-wide">Fale conosco</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>

                  <a
                    href="#planos"
                    className="flex items-center justify-center w-full border border-stone-300 hover:border-stone-900 text-stone-900 px-6 py-4 transition-all duration-300 animate-on-scroll opacity-0 translate-y-6"
                    style={{ transitionDelay: '400ms' }}
                  >
                    <span className="font-normal text-sm tracking-wide">Ver planos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

