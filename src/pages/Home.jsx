import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import Gallery from '../components/Gallery';
import Advice from '../components/Advice';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
        <Hero />
        <About />
        <Vision />
        <Gallery />
        <Advice />
        <Contact />
    </main>
  )
}

export default Home