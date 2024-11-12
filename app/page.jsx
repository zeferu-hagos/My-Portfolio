import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Testimonials />
    <Contact />
    <Footer />
  </>
  )
}

export default page
