'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import BentoGrid from '@/components/BentoGrid';
import CyberGrid3D from '@/components/CyberGrid3D';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-200">
      {/* Deep Void Background - Pure Black */}
      <div className="fixed inset-0 bg-[#050505] -z-10"></div>

      {/* Cyber Grid Background - Only Grids */}
      <div className="fixed inset-0 -z-10">
        <CyberGrid3D />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />

        <ExperienceTimeline />

        <BentoGrid />

        {/* Projects Section */}
        <motion.section
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
                Projetos
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Card 1 - Sistema de Rastreabilidade */}
              <CardContainer index={0}>
                <CardBody>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <CardItem translateZ={100}>
                        <h3 className="text-2xl font-bold font-mono text-slate-200 tracking-wide group-hover:text-amber-500 transition-colors">
                          Sistema de Rastreabilidade
                        </h3>
                      </CardItem>
                      <CardItem translateZ={100}>
                        <motion.div
                          whileHover={{ rotate: 45, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="w-10 h-10 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                        </motion.div>
                      </CardItem>
                    </div>

                    <CardItem translateZ={50}>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        Plataforma completa de gestão e rastreabilidade para
                        supply chain, otimizando processos complexos e
                        garantindo visibilidade total do ciclo de vida dos
                        produtos.
                      </p>
                    </CardItem>

                    {/* Tech stack tags */}
                    <CardItem translateZ={75}>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500">
                          Supply Chain
                        </span>
                        <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500">
                          Rastreabilidade
                        </span>
                        <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500">
                          Next.js
                        </span>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 2 - Plataforma de Videomonitoramento */}
              <CardContainer index={1}>
                <CardBody>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <CardItem translateZ={100}>
                        <h3 className="text-2xl font-bold font-mono text-slate-200 tracking-wide group-hover:text-amber-500 transition-colors">
                          Plataforma de Videomonitoramento
                        </h3>
                      </CardItem>
                      <CardItem translateZ={100}>
                        <motion.div
                          whileHover={{ rotate: 45, scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="w-10 h-10 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                        </motion.div>
                      </CardItem>
                    </div>

                    <CardItem translateZ={50}>
                      <p className="text-slate-400 leading-relaxed mb-6">
                        Sistema avançado de dashboards e monitoramento em tempo
                        real, com análises profundas e visualizações interativas
                        para tomada de decisão estratégica.
                      </p>
                    </CardItem>

                    {/* Tech stack tags */}
                    <CardItem translateZ={75}>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500">
                          Dashboards
                        </span>
                        <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500">
                          Videomonitoramento
                        </span>
                        <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-500">
                          Real-time
                        </span>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-50px' }}
          transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-500 text-sm tracking-wide">
              © {new Date().getFullYear()} Etizel · Simbiose entre polaridades
            </p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
