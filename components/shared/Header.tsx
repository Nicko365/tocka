'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, User } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#estrutura', label: 'Estrutura' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#planos', label: 'Planos' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato e Localização' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-emerald-900/80 backdrop-blur-lg shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold font-montserrat">
             <img src="/icons/logo-bege-hori.png" alt="Logo Toka Beach Tennis" className="h-10 w-auto" width={800} height={100}/>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-emerald-600 ${
                  isScrolled ? 'text-stone-100' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://wa.me/5519996530893" 
              className={`flex items-center space-x-2 font-medium transition-colors ${
                isScrolled ? 'text-gray-100 hover:text-emerald-950' : 'text-white hover:text-emerald-300'
              }`} target='_blank'
            >
              <Phone size={18} />
              <span>(19) 99653-0893</span>
            </a>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 hover:text-emerald-950 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
