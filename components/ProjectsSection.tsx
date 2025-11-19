'use client';

import dynamic from 'next/dynamic';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Lazy load 3D card components (they use Framer Motion heavily)
const CardContainer = dynamic(() => import('@/components/ui/3d-card').then(mod => ({ default: mod.CardContainer })), { ssr: false });
const CardBody = dynamic(() => import('@/components/ui/3d-card').then(mod => ({ default: mod.CardBody })), { ssr: false });
const CardItem = dynamic(() => import('@/components/ui/3d-card').then(mod => ({ default: mod.CardItem })), { ssr: false });

export default function ProjectsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold font-mono text-center mb-16 tracking-wide">
          <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>

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
    </section>
  );
}

