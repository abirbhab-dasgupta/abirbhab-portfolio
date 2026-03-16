import Hero from '@/components/Hero'
import React from 'react'
import TrustTicker from '@/components/TrustTicker'
import Work from '@/components/Work'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Writing from '@/components/Writing'


const Home = () => {
  return (
    <main>
      <Hero />
      <TrustTicker />
      <Work />
      <About />
      <Writing />
      <Contact />
    </main>
  )
}

export default Home