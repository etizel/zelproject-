'use client';

import { motion } from 'framer-motion';
import { Code2, Package, BarChart3, Shield } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  }),
};

export default function BentoGrid() {
  return (
    <motion.section
      id="matriz"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold font-mono text-center mb-16 tracking-wide"
        >
          <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            A Matriz
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 lg:gap-6">
          {/* Card 1 - Big (Fullstack Dev) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            variants={cardVariants}
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative min-h-[400px]"
          >
            <div className="h-full p-8 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 mb-6 flex items-center justify-center"
                >
                  <Code2 className="w-8 h-8 text-amber-500" />
                </motion.div>

                <h3 className="text-2xl font-bold font-mono text-slate-200 mb-4 tracking-wide">
                  Fullstack Dev
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  React, Next.js, Node.js, Tailwind CSS
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    'React',
                    'Next.js',
                    'Node.js',
                    'TypeScript',
                    'Tailwind',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Supply Chain */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            variants={cardVariants}
            className="group relative"
          >
            <div className="h-full p-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 mb-4 flex items-center justify-center"
                >
                  <Package className="w-6 h-6 text-amber-500" />
                </motion.div>

                <h3 className="text-xl font-bold font-mono text-slate-200 mb-3 tracking-wide">
                  Supply Chain Mastery
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Gestão de{' '}
                  <span className="text-amber-500 font-semibold">
                    600+ SKUs
                  </span>
                </p>
                <p className="text-amber-500 text-sm font-medium">
                  Redução de 35% em tempo de processos
                </p>
                <p className="text-slate-500 text-xs mt-2">SeoMercado</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Analítico */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            variants={cardVariants}
            className="group relative"
          >
            <div className="h-full p-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 mb-4 flex items-center justify-center"
                >
                  <BarChart3 className="w-6 h-6 text-emerald-400" />
                </motion.div>

                <h3 className="text-xl font-bold font-mono text-slate-200 mb-3 tracking-wide">
                  Analítico
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Dashboards, KPIs, Métricas
                </p>
                <p className="text-emerald-400 text-sm font-medium">
                  Redução de 27% em custos
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Segurança */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-50px' }}
            variants={cardVariants}
            className="md:col-span-2 group relative"
          >
            <div className="h-full p-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 mb-4 flex items-center justify-center"
                >
                  <Shield className="w-6 h-6 text-red-400" />
                </motion.div>

                <h3 className="text-xl font-bold font-mono text-slate-200 mb-3 tracking-wide">
                  Segurança
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                  Background em monitoramento crítico
                </p>
                <p className="text-slate-500 text-xs">Multserv</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
