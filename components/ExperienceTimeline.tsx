'use client';

import { motion } from 'framer-motion';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2023 - 2025',
    title: 'Gestor Operacional',
    company: 'SeoMercado',
    description:
      'Criação e gestão de sistema proprietário de Supply Chain (600 SKUs), otimizando processos logísticos.',
  },
  {
    id: 2,
    year: '2021 - 2023',
    title: 'Logística de Eventos',
    company: 'TopBar',
    description:
      'Coordenação logística para eventos de grande porte (5k+ pessoas), garantindo execução e conformidade.',
  },
  {
    id: 3,
    year: '2019 - 2020',
    title: 'Desenvolvedor Front-End',
    company: 'XXdesign',
    description:
      'Desenvolvimento e manutenção front-end da plataforma Targues Centro Musical.',
  },
  {
    id: 4,
    year: '2018 - Atual',
    title: 'Suporte Técnico',
    company: 'Autônomo',
    description:
      'Prestação contínua de suporte técnico e manutenção remota para clientes fixos.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl font-bold font-mono text-center mb-16 tracking-wide"
        >
          <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            A Matriz de Dados
          </span>
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-500/30 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: item.id % 2 === 0 ? 50 : -50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-amber-500 rounded-full border-2 border-neutral-950 transform md:-translate-x-1/2 -translate-y-1 z-10"></div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    item.id % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}
                >
                  <div className="p-6 bg-black/20 backdrop-blur-md border border-amber-500/30 rounded-2xl hover:border-amber-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <span className="text-amber-500 font-mono text-sm font-semibold">
                        {item.year}
                      </span>
                      <span className="text-slate-400 text-sm">{item.company}</span>
                    </div>
                    <h3 className="text-xl font-bold font-mono text-slate-200 mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

