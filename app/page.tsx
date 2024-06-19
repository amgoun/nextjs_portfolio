import FAQ from '@/components/FAQ'
import Contact from '@/components/contact'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Work from '@/components/work'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Work />
      <FAQ />
      <Contact />
    </main>
  )
}
