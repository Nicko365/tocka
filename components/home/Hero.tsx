'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const heroSlides = [
  {
    image: '/images/quadras2.webp',
    title: 'O maior centro de Entreterimento & Lazer',
    subtitle: 'Em Águas de Lindóia - SP',
    description: 'Conheça o Clube Tokca'
  },
  {
    image: '/images/piscina.webp',
    title: 'Área de Lazer Completa',
    subtitle: 'Piscina Natural, Redários, Trilha e Vista Privilegiada',
    description: 'Diversão para toda família'
  },
  {
    image: '/images/yoga.png',
    title: 'Bem-Estar e Equilíbrio',
    subtitle: 'Yoga, Sauna e Relaxamento',
    description: 'Cuide do corpo e da mente'
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
              quality={90}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/50 via-green-950/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="max-w-3xl text-white space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <p className="text-emerald-600 font-semibold text-lg tracking-wider uppercase">
                  {slide.description}
                </p>
                <h1 className="font-montserrat font-bold text-5xl md:text-7xl leading-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-4xl font-light text-gray-200">
                  {slide.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#planos"
                  className="group bg-emerald-800 hover:bg-emerald-300 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                >
                  Conheça os Planos
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-12 bg-emerald-950' 
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="text-white text-sm font-medium flex flex-col items-center space-y-2">
          <span>Role para explorar</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
