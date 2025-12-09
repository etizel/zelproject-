'use client';

import { Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  techs?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2023 - 2025',
    title: 'Gestor Operacional',
    company: 'SeoMercado',
    description:
      'Assumi a gestão integral de estoque, compras e operações de múltiplos pontos de venda. Implementei arquitetura proprietária de Supply Chain e Cronogramas diários de rotas e executei otimização crítica de processos logísticos para mais de 600 SKUs.',
    techs: ['Supply Chain', 'Analytics', 'Gestão'],
  },
  {
    id: 2,
    year: '2021 - 2023',
    title: 'Logística de Eventos',
    company: 'TopBar',
    description:
      'Orquestração logística de alta complexidade para eventos massivos (5k+ pax). Garantia de conformidade operacional e execução tática.',
    techs: ['Logística', 'Coordenação', 'Real-time'],
  },
  {
    id: 4,
    year: '2019 - 2020',
    title: 'Desenvolvedor Front-End',
    company: 'XXdesign',
    description:
      'Engenharia de interface e manutenção evolutiva da plataforma Targues Centro Musical. Foco em UX e performance.',
    techs: ['Frontend', 'UI/UX', 'Web'],
  },
  {
    id: 5,
    year: '2018 - Atual',
    title: 'Suporte Avançado Especializado',
    company: 'Etizel Tecnologia',
    description:
      'Consultoria técnica continuada e manutenção remota de infraestrutura para empresas. Suporte aos clientes da empresa e desenvolvimento de soluções personalizadas.',
    techs: [
      'Hardware',
      'Redes',
      'Troubleshooting',
      'Desenvolvimento',
      'Gestão',
    ],
  },
  {
    id: 3,
    year: '2016 - 2017',
    title: 'Especialista em Segurança Crítica & Monitoramento',
    company: 'BANESE',
    description:
      'Atuação tática em vigilância e segurança máxima. Monitoramento 24/7 de CFTV e controle de acesso para identificar anomalias. Elaboração de relatórios críticos de ocorrências e gestão de protocolos de crise.',
    techs: [
      'Segurança',
      'CFTV',
      'Análise Crítica',
      'Protocolos',
      'Rondas estratégicas',
    ],
  },
].sort((a, b) => {
  const getStartYear = (yearStr: string): number => {
    const startYear = yearStr.split(' - ')[0];
    return parseInt(startYear) || 0;
  };
  const yearA = getStartYear(a.year);
  const yearB = getStartYear(b.year);
  return yearB - yearA;
});

export default function ExperienceTimeline() {
  // Funcao mock para o clique
  const handleItemClick = (item: TimelineItem) => {
    // Substitua este console.log pela lógica real (ex: abrir modal de detalhes)
    console.log(`Detalhes da Experiência: ${item.title} em ${item.company}`);
  };

  const customStyles = `
    @keyframes flow-up {
        /* Ponto de partida invisível (abaixo da linha) */
      0% { transform: translateY(100%); opacity: 0; } 
        /* Começa a aparecer */
      5% { opacity: 1; }
        /* Mantém o brilho */
      95% { opacity: 1; }
        /* Termina invisível (acima da linha) */
      100% { transform: translateY(-100%); opacity: 0; } 
    }
  `;

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="about"
    >
      {/* Bloco de Estilos Customizados */}
      <style>{customStyles}</style>

      <div className="max-w-5xl mx-auto">
        {/* Título com Font-Mono e Neon Effect */}
        <h2 className="text-4xl sm:text-5xl font-bold font-mono text-center mb-20 tracking-wide drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
            Protocolo de Carreira
          </span>
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* 2. Linha Vertical - Fio Sutil com Fundo Estático */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2">
            {/* 3. Esfera / Luz Animada (Fio Luminoso) */}
            <div
              className="absolute left-1/2 -ml-[2px] w-1 h-1 rounded-full bg-amber-300 shadow-[0_0_20px_6px_#fbbf24]"
              style={{
                // Duração ajustada para 6s, criando um fluxo contínuo e suave
                animation: 'flow-up 6s linear infinite',
                top: '0%',
                zIndex: 10,
              }}
            />
          </div>

          {/* Items */}
          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => (
              <div key={item.id}>
                <div
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Ponto Central (Dot) - Aprimorado com Neon Glow */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 border-amber-500 bg-neutral-900 shadow-[0_0_15px_rgba(245,158,11,0.7)] transform -translate-x-1/2 z-20 transition-all duration-300 group-hover:scale-125"></div>

                  {/* Card de Conteúdo - Wrapper para o efeito de hover */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 group">
                    <div
                      // Implementação do Clique e Cursor
                      onClick={() => handleItemClick(item)}
                      role="button" // Acessibilidade
                      tabIndex={0} // Acessibilidade via Teclado
                      // ESTILO SLIM & SOPHISTICATED
                      className={`relative p-6 rounded-2xl border border-white/5 bg-neutral-950/5 backdrop-blur-3xl transition-all duration-500 
                        cursor-pointer 
                        hover:border-amber-500/50 hover:bg-neutral-900/30 
                        hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] 
                        ${
                          index % 2 === 0
                            ? 'md:mr-12 text-left'
                            : 'md:ml-12 text-right'
                        }`}
                    >
                      {/* Header do Card */}
                      <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                        <span className="px-3 py-1 text-xs font-mono text-amber-500 bg-amber-500/10 rounded-full border border-amber-500/20">
                          {item.year}
                        </span>
                        <span className="text-slate-500 text-xs font-mono uppercase tracking-wider flex items-center gap-1">
                          <Briefcase size={12} /> {item.company}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-mono text-slate-100 mb-2 group-hover:text-amber-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                        {item.description}
                      </p>

                      {/* Tech Tags */}
                      {item.techs && (
                        <div
                          className={`flex flex-wrap gap-2 pt-4 border-t border-white/5 ${
                            index % 2 !== 0
                              ? 'justify-end md:justify-start'
                              : 'justify-start'
                          }`}
                        >
                          {item.techs.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] text-slate-400 px-2 py-0.5 bg-white/5 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
