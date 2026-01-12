import React, { useState, useRef } from 'react';
import { Container, Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Play, Pause, Maximize, Gauge } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rates = [1.0, 1.5, 2.0];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate;
      setPlaybackRate(nextRate);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  const handleCtaClick = () => {
    window.open("https://pay.kiwify.com.br/tTl9ga0", "_blank");
  };

  return (
    <Section className="bg-black relative py-12 md:py-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <Container>
        <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
          
          <div className="text-center space-y-4 reveal">
            <h2 className="text-xl md:text-3xl font-medium text-white px-4">
              Assista o vídeo abaixo para saber mais:
            </h2>
            <div className="w-16 md:w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="w-full max-w-4xl relative reveal delay-100">
             <div className="relative z-10 group">
                {/* Border Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500"></div>
                
                {/* Video Container */}
                <div 
                  className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-2xl border border-white/10 cursor-pointer"
                  onClick={(e) => togglePlay(e)}
                >
                   <video 
                     ref={videoRef}
                     className="w-full h-full object-cover"
                     poster="https://allurerepresentacoes.com.br/wp-content/uploads/2025/06/Diagnostico-capa-video.jpg"
                     onEnded={() => setIsPlaying(false)}
                     onPause={() => setIsPlaying(false)}
                     onPlay={() => setIsPlaying(true)}
                     playsInline
                   >
                     <source src="https://video.wixstatic.com/video/1f17f3_902025f9721f451198b9bd1fa4ec07c0/720p/mp4/file.mp4" type="video/mp4" />
                     Seu navegador não suporta a tag de vídeo.
                   </video>

                   {/* Main Play Button Overlay */}
                   {!isPlaying && (
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                           <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                        </div>
                     </div>
                   )}

                   {/* Custom Control Bar */}
                   <div 
                     className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-20"
                     onClick={(e) => e.stopPropagation()}
                   >
                     <div className="flex items-center gap-2 md:gap-4">
                       <button 
                         onClick={togglePlay} 
                         className="p-1.5 md:p-2 rounded-full hover:bg-white/10 text-white hover:text-blue-400 transition-all"
                         title={isPlaying ? "Pausar" : "Reproduzir"}
                       >
                         {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                       </button>
                       
                       <button 
                         onClick={changeSpeed}
                         className="flex items-center gap-1 px-2 py-1 md:px-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-[10px] md:text-xs font-bold text-white transition-all w-16 md:w-20 justify-center"
                         title="Velocidade de Reprodução"
                       >
                         <Gauge size={12} />
                         {playbackRate}x
                       </button>
                     </div>

                     <button 
                       onClick={toggleFullscreen}
                       className="p-1.5 md:p-2 rounded-full hover:bg-white/10 text-white hover:text-blue-400 transition-all"
                       title="Tela Cheia"
                     >
                       <Maximize size={18} />
                     </button>
                   </div>
                </div>
             </div>
          </div>

          <div className="reveal delay-200">
            <Button size="lg" onClick={handleCtaClick} className="w-full sm:w-auto min-w-[280px] shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              GARANTIR MEU DIAGNÓSTICO FINANCEIRO
            </Button>
            <p className="text-center mt-4 text-[10px] md:text-xs text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Compra Segura
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};