import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Facilities from '@/components/home/Facilities'
import Membership from '@/components/home/Membership'
import Gallery from '@/components/home/Gallery'
import Contact from '@/components/home/Contact'
import PromoVideo from '@/components/home/PromoVideo'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PromoVideo />
      <Facilities />
      <Membership />
      <Gallery />
      <Contact />

    </>
  )
}
