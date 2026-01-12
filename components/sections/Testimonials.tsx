import React from 'react';
import { Container, Section } from '../ui/Section';

const testimonials = [
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/10_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/8_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/7_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/6_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/5_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/4_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/3_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/2_edited.jpg",
  "https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/1_edited.jpg"
];

// Doubling the array to ensure smooth infinite scroll
const marqueeItems = [...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-dark-950 relative overflow-hidden py-16 md:py-24">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <Container className="mb-12 md:mb-16 text-center">
        <div className="relative reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Histórias reais de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              resultados comprovados
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Veja o que nossos clientes dizem sobre a transformação financeira que proporcionamos.
          </p>
        </div>
      </Container>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 h-full w-12 md:w-40 bg-gradient-to-r from-dark-950 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-12 md:w-40 bg-gradient-to-l from-dark-950 to-transparent z-10"></div>

        {/* Scrolling Track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-[400%] md:w-[200%]">
          {marqueeItems.map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-2 md:mx-4 w-[240px] md:w-[320px]">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-lg group">
                <div className="relative aspect-[9/16] overflow-hidden bg-slate-900">
                  <img 
                    src={src} 
                    alt={`Depoimento Cliente ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="569"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};