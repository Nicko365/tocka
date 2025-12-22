'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Facilities() {
  useEffect(() => {
    // Add animation styles to the document head
    const styleId = 'facilities-animation-styles';
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

  const mainFeatures = [
    {
      number: '01',
      title: 'Quadras Oficiais',
      description: '6 quadras de areia projetadas para atenderem às normas internacionais de competição e treinamento. As redes atendem aos padrões de cada modalidade com iluminação profissional.',
      image: '/images/quadras.webp',
      highlight: 'Padrão internacional'
    },
    {
      number: '02',
      title: 'Piscina Climatizada',
      description: 'Piscina aquecida com tratamento natural através de ozônio e sal, proporcionando uma experiência refrescante e saudável para toda família.',
      image: '/images/ambiente_piscina.webp',
      highlight: 'Tratamento natural'
    },
    {
      number: '03',
      title: 'Studio de Atividades',
      description: 'Espaço amplo e versátil para yoga, meditação e outras atividades ao ar livre, conectando você com a natureza em um ambiente tranquilo.',
      image: '/images/atividades.jpeg',
      highlight: 'Ao ar livre'
    },
  ]

  const amenities = [
    {
      image: '/images/redario.jpeg',
      title: 'Redários',
      description: 'Descanso e relaxamento'
    },
    {
      image: '/images/piscina3.jpeg',
      title: 'Vista Panorâmica',
      description: 'Natureza ao seu redor'
    },
    {
      image: '/images/restaurante-1.webp',
      title: 'Restaurante & Pizzaria',
      description: 'Menu variado para todos'
    },
    {
      image: '/images/restaurante-2.webp',
      title: 'Bar',
      description: 'Drinks e petiscos'
    },
    {
      image: '/images/crianca.jpeg',
      title: 'Para Toda Família',
      description: 'Ambiente acolhedor'
    },
  ]

  return (
    <section id="estrutura" className="py-24 lg:py-32 bg-emerald-900/90 relative overflow-hidden scroll-smooth">
      {/* Pattern de Losangos */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="facilities-diamonds" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M 50 10 L 90 50 L 50 90 L 10 50 Z"
              fill="none"
              stroke="#34d399"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#facilities-diamonds)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-20 animate-on-scroll opacity-0 translate-y-6">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-stone-200 font-light">
              Infraestrutura
            </span>
          </div>
          <h2 className="font-montserrat font-light text-4xl lg:text-5xl text-stone-100  mb-6 leading-[1.2]">
            Nossos <span className="font-normal">diferenciais</span>
          </h2>
          <p className="text-zinc-300 leading-relaxed text-lg font-light">
            Instalações pensadas para proporcionar conforto, performance e bem-estar em cada detalhe.
          </p>
        </div>

        {/* Main Features - Layout Alternado */}
        <div className="space-y-24 mb-32">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-on-scroll opacity-0 translate-y-6`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Imagem */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 left-6 bg-emerald-900/90 backdrop-blur-sm px-4 py-2">
                    <span className="text-xs uppercase tracking-[0.15em] text-white font-normal">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-baseline space-x-6">
                  <span className="text-6xl font-light text-emerald-400">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-normal text-stone-100 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-stone-200 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-300 mb-20 animate-on-scroll opacity-0 translate-y-6"></div>

        {/* Infraestrutura & Comodidade */}
        <div className="mb-20 animate-on-scroll opacity-0 translate-y-6">
          <div className="mb-12">
            <h3 className="text-sm uppercase tracking-[0.2em] text-stone-300 font-normal mb-3">
              Infraestrutura & Comodidade
            </h3>
            <p className="text-stone-200 leading-relaxed font-light max-w-6xl">
              A Tokca Arena oferece uma experiência completa com toda a infraestrutura necessária para tornar os seus dias ainda mais agradáveis.
            </p>
          </div>

          {/* Grid de Amenidades */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white/90 hover:bg-white transition-all duration-300 group cursor-default animate-on-scroll opacity-0 translate-y-6 relative overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative w-full h-full min-h-[120px]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                    <h4 className="text-sm font-normal text-white mb-1">
                      {amenity.title}
                    </h4>
                    <p className="text-xs text-emerald-100 font-light">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar & Restaurante - Destaque */}
        <div className="bg-emerald-950 text-white relative overflow-hidden animate-on-scroll opacity-0 translate-y-6">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-12 lg:p-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-light">
                  Gastronomia
                </span>
                <h3 className="text-3xl lg:text-4xl font-light mt-4 mb-6">
                 <span className="font-normal">Restaurante</span>
                </h3>
              </div>

              <p className="text-emerald-100 leading-relaxed font-light">
                Contamos com um Restaurante & Pizzaria com menu variado para atender todos os gostos.
                Também temos um bar completo para você aproveitar o dia com a gente.
              </p>

              <div className="pt-4">
                <p className="text-emerald-200 text-sm font-light italic">
                  Traga a família para aproveitar com você!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-emerald-900 relative overflow-hidden">
                  <Image
                    src="/images/restaurante-1.webp"
                    alt="Restaurante"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div className="aspect-[4/3] bg-emerald-900 relative overflow-hidden">
                  <Image
                    src="/images/restaurante-2.webp"
                    alt="Bar"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] bg-emerald-900 relative overflow-hidden">
                  <Image
                    src="/images/pizzaria.webp"
                    alt="Pizzaria"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div className="aspect-square bg-emerald-900 relative overflow-hidden">
                  <Image
                    src="/images/ambiente-rest.webp"
                    alt="Ambiente"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
