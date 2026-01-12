import React, { useEffect, useState } from 'react';
import { TopBar } from './components/sections/TopBar';
import { Hero } from './components/sections/Hero';
import { VideoSection } from './components/sections/VideoSection';
import { Features } from './components/sections/Features';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { Button } from './components/ui/Button';

function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    const handleScroll = () => {
      // Mostra o botão flutuante apenas após rolar 500px (passou da Hero)
      // Isso evita o efeito de "dois botões" na tela inicial
      setShowStickyCta(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCtaClick = () => {
    window.open("https://pay.kiwify.com.br/tTl9ga0", "_blank");
  };

  return (
    <main className="min-h-screen bg-dark-950">
      <TopBar />
      <Hero />
      <VideoSection />
      <Features />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      
      {/* Sticky Mobile CTA - Glassmorphism */}
      {/* Animação de entrada suave (slide-up + fade) controlada pelo scroll */}
      <div 
        id="contact" 
        className={`fixed bottom-0 left-0 w-full p-4 bg-dark-950/80 backdrop-blur-lg border-t border-white/10 md:hidden z-50 transition-all duration-500 ease-in-out transform ${
          showStickyCta ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <Button variant="primary" className="w-full shadow-lg shadow-blue-900/20" size="lg" onClick={handleCtaClick}>
          GARANTIR MEU DIAGNÓSTICO
        </Button>
      </div>
      
      <Footer />
    </main>
  );
}

export default App;