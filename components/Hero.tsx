'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-8">
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
        }
      `}</style>

      {/* Content - Agora sem camadas de background (vem do CyberGrid3d wrapper) */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-mono tracking-tighter mb-6 drop-shadow-lg animate-fade-in">
          <span
            className="bg-gradient-to-r from-amber-400 via-cyan-400 to-amber-500 bg-clip-text text-transparent bg-[length:400%_100%] animate-gradient-shift"
            style={{
              textShadow:
                '0 0 5px rgba(251, 191, 36, 0.4), 0 0 10px rgba(0, 255, 255, 0.15)',
            }}
          >
            Matriz Operacional
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light animate-fade-in [animation-delay:1.2s] max-w-3xl mx-auto">
          Arquitetura de código fundida com{' '}
          <span className="text-cyan-400 font-medium tracking-wider drop-shadow-md">
            inteligência logística
          </span>
          , pronta para otimizar e escalar.
        </p>
      </div>
    </div>
  );
};

export default Hero;
