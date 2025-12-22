import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Tokca Club - Mais que Beach Tennis, Um Estilo de Vida',
  description: 'Club completo em Águas de Lindóia com quadras de beach tennis, piscinas, sauna, yoga e muito mais.',
  keywords: 'beach tennis, club, piscina, sauna, yoga, Águas de Lindóia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
