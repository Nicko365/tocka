'use client';

import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, src: '/images/quadras.webp', alt: "Quadra de Beach Tennis" },
    { id: 2, src: '/images/quadras2.webp', alt: "Partida de Beach Tennis" },
    { id: 3, src: '/images/piscina.webp', alt: "Piscina Climatizada" },
    { id: 4, src: '/images/yoga.png', alt: "Studio de Yoga" },
    { id: 5, src: '/images/pizzaria.webp', alt: "Restaurante & Pizzaria" },
    { id: 6, src: '/images/restaurante-2.webp', alt: "Restaurante" },
  ];

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-stone-50 relative overflow-hidden" >

      {/* Pattern de Quadra de Beach Tennis */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.10] text-stone-600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="beach-tennis-gallery" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
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
        <rect width="100%" height="100%" fill="url(#beach-tennis-gallery)" />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

        <div className="max-w-2xl mb-20">
          <div className="inline-block mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-950 font-light">
              Galeria
            </span>
          </div>
          <h2 className="font-montserrat font-light text-4xl lg:text-5xl text-neutral-400 mb-6 leading-[1.2]">
            Conheça o <span className="font-normal">clube</span>
          </h2>
          <p className="text-neutral-500/80 leading-relaxed text-lg font-light">
            Explore nossas instalações e veja o que torna a experiência no Clube Tokca única.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para agendamento de visita */}
        <div className="mt-10 text-center">
          <a
            href="#contato"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white font-normal py-4 px-8 rounded-lg transition-all duration-300 uppercase tracking-[0.15em] text-sm"
          >
            Agendar Visita
          </a>
        </div>

        {/* Modal de imagem ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;