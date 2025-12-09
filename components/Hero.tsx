'use client';

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-8 overflow-hidden">
      <style>{`
        @keyframes metallic-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-metallic-flow {
          background-size: 300% auto;
          animation: metallic-shift 8s ease-in-out infinite;
          will-change: background-position;
        }
      `}</style>

      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-mono tracking-tighter mb-6 drop-shadow-2xl animate-fade-in">
          <span
            className="bg-gradient-to-r from-amber-600 via-slate-300 via-amber-400 to-amber-600 bg-clip-text text-transparent animate-metallic-flow"
            style={{
              textShadow:
                '0 0 30px rgba(245, 158, 11, 0.3), 0 0 1px rgba(255, 255, 255, 0.4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Matriz Operacional
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed font-light animate-fade-in [animation-delay:0.4s] max-w-3xl mx-auto">
          Arquitetura de código fundida com {/* MUDANÇA AQUI: */}
          <span className="text-amber-400 font-normal italic tracking-wide drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
            inteligência logística
          </span>
          , pronta para otimizar e escalar.
        </p>
      </div>
    </div>
  );
};

export default Hero;
