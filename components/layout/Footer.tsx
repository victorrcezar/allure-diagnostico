import React from 'react';
import { Container } from '../ui/Section';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleCtaClick = () => {
    window.open("https://pay.kiwify.com.br/tTl9ga0", "_blank");
  };

  return (
    <footer className="bg-black py-12 md:py-16 border-t border-white/5 text-slate-400 text-sm relative overflow-hidden pb-24 md:pb-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">
          
          <div className="text-center md:text-left space-y-6">
            <img 
              src="https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/allure_branco_edited.png" 
              alt="Allure Logo" 
              className="h-10 md:h-12 w-auto mx-auto md:mx-0 opacity-100"
            />
            <p className="max-w-xs text-slate-500 font-light mx-auto md:mx-0">
              Inteligência financeira para quem busca recuperar o controle do seu patrimônio e reputação.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/_allurerepresentacoes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-slate-900 border border-slate-800 hover:border-pink-500 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div 
              onClick={handleCtaClick}
              className="flex items-center gap-2 text-blue-500 font-medium hover:text-blue-400 cursor-pointer group px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              <span>Agendar Consultoria</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs text-slate-600 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <p>© 2024 Allure Maia Serviços e Representações Ltda.</p>
            <p className="font-mono">CNPJ 47.808.208/0001-03</p>
          </div>
          
          <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span>Desenvolvido por</span>
            <a 
              href="https://upandco.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 font-semibold text-slate-400 hover:text-blue-400 transition-colors"
            >
              <img 
                src="https://allurerepresentacoes.com.br/wp-content/uploads/2026/01/logo-dourada-1.png" 
                alt="UP! Company Logo" 
                className="h-6 w-auto object-contain"
              />
              UP! Company
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};