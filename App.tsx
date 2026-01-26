
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      
      <main>
        {/* Dark Wine Background */}
        <section id="inicio" className="bg-wine-950 text-white">
          <Hero />
        </section>
        
        {/* Pure White Background */}
        <section id="sobre-mi" className="py-24 bg-white text-wine-950">
          <About />
        </section>
        
        {/* Deep Wine Background */}
        <section id="proyectos" className="py-24 bg-wine-950 text-white">
          <Projects />
        </section>
        
        {/* Off-White / Light Wine Background */}
        <section id="habilidades" className="py-24 bg-wine-50 text-wine-950">
          <Skills />
        </section>
        
        {/* Dark Wine Background */}
        <section id="contacto" className="py-24 bg-wine-950 text-white">
          <Contact />
        </section>
      </main>

      <AIChat />
      <Footer />
    </div>
  );
};

export default App;
