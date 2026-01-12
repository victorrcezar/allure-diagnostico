import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-2.5 text-center fixed top-0 z-50 transition-all duration-300">
      <div className="flex items-center justify-center gap-3 text-[10px] md:text-xs text-slate-400 uppercase tracking-[0.2em] font-medium">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-emerald-500" />
          Ambiente Seguro
        </span>
        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-blue-500" />
          Dados Criptografados
        </span>
      </div>
    </div>
  );
};