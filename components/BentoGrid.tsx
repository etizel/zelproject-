'use client';

import { Code2, Package, BarChart3, Shield } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function BentoGrid() {
  return (
    <section
      id="matriz"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* --- CAMADA DA LINHA NEON --- */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full opacity-60 mix-blend-screen"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animate-neon-flow neon-gold-glow"
            d="M-100,150 C200,50 400,250 600,150 C800,50 1000,250 1300,150 M-100,600 C200,700 400,500 600,600 C800,700 1000,500 1300,600"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className="animate-neon-flow neon-gold-glow"
            style={{ animationDelay: '-12.5s', opacity: 0.5 }}
            d="M1300,350 C1000,450 800,250 600,350 C400,450 200,250 -100,350"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950/80 z-1 pointer-events-none"></div>

      <ScrollReveal>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold font-mono text-center mb-16 tracking-wide drop-shadow-lg">
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              A Matriz
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 lg:gap-6">
            {/* 
               CARD 1 (PRINCIPAL) - Supply Chain Mastery 
               Motivo: Maior volume de texto, merece destaque e espaço para leitura.
               Tamanho: Ocupa 2 colunas e 2 linhas (Quadrado Grande na esquerda).
            */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative min-h-[400px]">
              <div className="h-full p-6 sm:p-8 bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-5 transition-transform duration-300">
                    <Package className="w-8 h-8 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  </div>

                  <h3 className="text-2xl font-bold font-mono text-white mb-4 tracking-wide group-hover:text-amber-400 transition-colors">
                    Supply Chain Mastery
                  </h3>

                  <div className="space-y-4">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      Engenharia Logística e{' '}
                      <span className="text-amber-400 font-semibold glow-text">
                        gestão algorítmica
                      </span>{' '}
                      de 600+ SKUs.
                    </p>
                    <p className="text-amber-400/90 text-sm sm:text-base font-medium drop-shadow-sm leading-relaxed">
                      Através da implementação de um padrão operacional enxuto,
                      promovi uma otimização sistêmica que resultou na redução
                      de 10% nos custos recorrentes sobre o faturamento.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Essa reestruturação estabeleceu um fluxo de trabalho
                      altamente fluido, garantindo autossuficiência operacional
                      por mais de 12 meses e impulsionando a consolidação da
                      empresa no mercado em apenas um ano.
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-xs mt-6 uppercase tracking-wider">
                  Case: SeoMercado
                </p>
              </div>
            </div>

            {/* 
               CARD 2 - Analítico 
               Motivo: Texto médio. Fica bem esticado horizontalmente.
               Tamanho: Ocupa 2 colunas (Barra Superior Direita).
            */}
            <div className="md:col-span-2 lg:col-span-2 group relative">
              <div className="h-full p-6 bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] transition-all duration-500 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 group-hover:rotate-5 transition-transform duration-300">
                      <BarChart3 className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                    </div>
                    {/* Tags pequenas para decorar */}
                    <div className="flex gap-2">
                      <span className="text-[10px] uppercase bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded border border-emerald-800">
                        KPIs
                      </span>
                      <span className="text-[10px] uppercase bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded border border-emerald-800">
                        BI
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-mono text-white mb-3 tracking-wide group-hover:text-emerald-300 transition-colors">
                    Analítico & Estratégico
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-light mb-3">
                    Expertise no uso de plataformas (Dashboards, Analytics,
                    AMLabs, Omie) para extrair métricas de performance.
                  </p>
                  <p className="text-emerald-400 text-sm font-medium drop-shadow-sm">
                    Converto dados brutos em cronogramas táticos e padrões de
                    trabalho replicáveis, focando na ação estratégica e redução
                    de custos.
                  </p>
                </div>
              </div>
            </div>

            {/* 
               CARD 3 - Fullstack Dev 
               Motivo: Foco em tecnologias (tags). Não precisa ser enorme.
               Tamanho: 1 Coluna (Quadrado Inferior Centro).
            */}
            <div className="group relative">
              <div className="h-full p-6 bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col">
                <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-5 transition-transform duration-300">
                    <Code2 className="w-7 h-7 text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white mb-3 tracking-wide group-hover:text-amber-400 transition-colors">
                    Fullstack Dev
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4 font-light">
                    Soluções robustas e refinadas com tecnologias modernas.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node', 'Postgres', 'Docker'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-amber-500/90 font-mono"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 
               CARD 4 - Risco Tático
               Motivo: Conteúdo pontual.
               Tamanho: 1 Coluna (Quadrado Inferior Direito).
            */}
            <div className="group relative">
              <div className="h-full p-6 bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-red-400/50 hover:shadow-[0_0_30px_rgba(248,113,113,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col">
                <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 mb-4 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-5 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
                  </div>

                  <h3 className="text-lg font-bold font-mono text-white mb-3 tracking-wide group-hover:text-red-300 transition-colors uppercase">
                    Risco Tático
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3 font-light">
                    Gestão de ambientes críticos, análise de anomalias e
                    garantia de uptime.
                  </p>
                </div>
                <p className="text-slate-600 text-[10px] mt-2 uppercase">
                  Case: Banese
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
