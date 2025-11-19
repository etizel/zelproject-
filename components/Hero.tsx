'use client';

import { motion } from 'framer-motion';
import CyberGrid3D from './CyberGrid3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-950 flex items-center justify-center">
      {/* Deep Void Background - Pure Black */}
      <div className="absolute inset-0 bg-[#050505] -z-10"></div>

      {/* Static Grid Background */}
      <div className="absolute inset-0 -z-10">
        <CyberGrid3D />
      </div>

      {/* Centered Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono tracking-wide mb-6"
        >
          <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            MATRIZ OPERACIONAL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed"
        >
          Arquitetura de código fundida com inteligência logística.
        </motion.p>
      </motion.div>
    </section>
  );
}
