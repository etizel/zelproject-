'use client';

import React, { useState } from 'react';
import { ArrowLeft, Brain, Percent } from 'lucide-react';
import {
  ANATOMY_BLOCKS,
  HYBRID_STEPS,
  PHASES,
  PATTERN_ROWS,
  WEEK_DAYS,
  SOURCE_PILLS,
  HUMANAS_VOCAB_ITEMS,
  HUMANAS_PROJECOES,
  HUMANAS_MATRIX_ROWS,
  HUMANAS_AREA_CARDS,
  EXATAS_VOCAB_ITEMS,
  EXATAS_PROJECOES,
  EXATAS_MATRIX_ROWS,
  EXATAS_AREA_CARDS,
} from './protocolo-enem-content';

const TABS = [
  { id: 'fundamento', label: 'Fundamento' },
  { id: 'anatomia', label: 'Anatomia do item' },
  { id: 'fases', label: '3 Fases' },
  { id: 'padroes', label: 'Padrões' },
  { id: 'vocab', label: 'Vocabulário' },
  { id: 'semana', label: 'Semana-tipo' },
  { id: 'projecoes', label: 'Projeções 2026' },
  { id: 'matriz', label: 'Matriz' },
] as const;

type TabId = (typeof TABS)[number]['id'];
type Accent = 'purple' | 'amber' | 'green' | 'red';
type AlertVariant = 'purple' | 'amber' | 'green' | 'red';

// --- COMPONENTES DE UI REUTILIZÁVEIS ---
function Card({
  children,
  accent,
  className = '',
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  const accentBorder: Record<Accent, string> = {
    purple: 'border-l-violet-500/70',
    amber: 'border-l-amber-500/80',
    green: 'border-l-emerald-500/80',
    red: 'border-l-red-500/70',
  };
  return (
    <div
      className={`rounded-xl border border-white/10 bg-neutral-900/80 p-5 md:p-6 mb-4 ${accent ? `border-l-[3px] ${accentBorder[accent]}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base md:text-lg font-semibold text-slate-100 mb-1">
      {children}
    </h3>
  );
}

function CardSub({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-slate-500 mb-3">{children}</p>;
}

function Alert({
  children,
  variant = 'purple',
}: {
  children: React.ReactNode;
  variant?: AlertVariant;
}) {
  const styles: Record<AlertVariant, string> = {
    purple: 'border-l-violet-500/80 bg-violet-500/10 text-violet-100/90',
    amber: 'border-l-amber-500/80 bg-amber-500/10 text-amber-100/90',
    green: 'border-l-emerald-500/80 bg-emerald-500/10 text-emerald-100/90',
    red: 'border-l-red-500/80 bg-red-500/10 text-red-100/90',
  };
  return (
    <div
      className={`border-l-[3px] rounded-r-lg px-4 py-3 text-xs md:text-sm leading-relaxed my-3 ${styles[variant]}`}
    >
      {children}
    </div>
  );
}

function StepList({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ul className="flex flex-col gap-2 mt-3 list-none p-0">
      {steps.map((step) => (
        <li
          key={step.title}
          className="flex gap-3 items-start p-3 rounded-lg bg-neutral-800/60 text-xs md:text-sm text-slate-300 leading-relaxed"
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
          <div>
            <b className="block font-semibold text-slate-100 mb-0.5">
              {step.title}
            </b>
            {step.text}
          </div>
        </li>
      ))}
    </ul>
  );
}

function SmallCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-neutral-800/50 border border-white/5 p-4">
      <h4 className="text-xs font-semibold text-slate-200 mb-2">{title}</h4>
      <div className="text-xs text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}

function PhaseNum({ id, accent }: { id: string; accent: Accent }) {
  const bg: Record<Accent, string> = {
    purple: 'bg-violet-500/20 text-violet-300',
    amber: 'bg-amber-500/20 text-amber-300',
    green: 'bg-emerald-500/20 text-emerald-300',
    red: 'bg-red-500/20 text-red-300',
  };
  return (
    <span
      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${bg[accent]}`}
    >
      {id}
    </span>
  );
}

// --- O COMPONENTE PRINCIPAL (SAAS) ---
export default function ProtocoloMineracaoEnem() {
  const [polaridade, setPolaridade] = useState<'humanas' | 'exatas' | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<TabId>('fundamento');

  // TELA DE SELEÇÃO INICIAL (O PORTÃO DO SAAS)
  if (!polaridade) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-slate-100 font-mono">
          Mined/ENEM <span className="text-amber-500">SaaS Artifact</span>
        </h2>
        <p className="text-slate-400 max-w-md mb-8 text-sm md:text-base leading-relaxed">
          Para garantir a extração de inteligência estrutural precisa, selecione
          a polaridade do seu foco atual. O algoritmo adaptará o vocabulário,
          padrões e matriz TRI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
          <button
            onClick={() => setPolaridade('humanas')}
            className="group relative flex flex-col items-center p-8 bg-neutral-900 border border-white/10 rounded-2xl hover:border-violet-500/60 hover:bg-neutral-800/80 transition-all duration-300"
          >
            <Brain className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-wide text-slate-200">
              HUMANAS
            </span>
            <span className="text-xs text-slate-500 mt-2">
              Linguagens, Códigos e Ciências Humanas
            </span>
          </button>

          <button
            onClick={() => setPolaridade('exatas')}
            className="group relative flex flex-col items-center p-8 bg-neutral-900 border border-white/10 rounded-2xl hover:border-amber-500/60 hover:bg-neutral-800/80 transition-all duration-300"
          >
            <Percent className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold tracking-wide text-slate-200">
              EXATAS
            </span>
            <span className="text-xs text-slate-500 mt-2">
              Matemática e Ciências da Natureza
            </span>
          </button>
        </div>
      </div>
    );
  }

  // MAPEAMENTO DINÂMICO DOS DADOS BASEADO NA POLARIDADE ESCOLHIDA
  const data =
    polaridade === 'humanas'
      ? {
          vocab: HUMANAS_VOCAB_ITEMS,
          projecoes: HUMANAS_PROJECOES,
          matrix: HUMANAS_MATRIX_ROWS,
          areas: HUMANAS_AREA_CARDS,
          color: 'violet',
        }
      : {
          vocab: EXATAS_VOCAB_ITEMS,
          projecoes: EXATAS_PROJECOES,
          matrix: EXATAS_MATRIX_ROWS,
          areas: EXATAS_AREA_CARDS,
          color: 'amber',
        };

  // INTERFACE RICA DO PROTOCOLO (PÓS-SELEÇÃO)
  return (
    <div className="protocolo-enem max-w-3xl mx-auto text-sm text-slate-300 animate-fadeIn">
      <header className="pb-5 mb-5 border-b border-white/10 relative">
        <button
          onClick={() => setPolaridade(null)}
          className="absolute top-0 right-0 flex items-center gap-1.5 text-xs text-slate-400 hover:text-white bg-neutral-800/50 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
        >
          <ArrowLeft size={14} /> Trocar Perfil
        </button>

        <p
          className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${polaridade === 'humanas' ? 'text-violet-400/90' : 'text-amber-500/90'}`}
        >
          Artefato Calibrado · Perfil: {polaridade.toUpperCase()}
        </p>
        <h2 className="text-xl md:text-2xl font-bold font-mono text-slate-100 leading-snug mb-2 pr-24">
          Mineração analítica do ENEM — construção do exoesqueleto cognitivo
        </h2>
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
          Não é leitura passiva de questões. É extração de inteligência
          estrutural sobre como a prova pensa. Cada sessão produz algo; produção
          ativa é o que separa exoesqueleto de ilusão de fluência.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {SOURCE_PILLS.map((pill) => (
            <span
              key={pill}
              className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 bg-neutral-800/80 text-slate-400"
            >
              {pill}
            </span>
          ))}
        </div>
      </header>

      <nav className="flex flex-wrap gap-1.5 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
              activeTab === tab.id
                ? polaridade === 'humanas'
                  ? 'bg-violet-600 text-white border-violet-600 shadow-[0_0_12px_rgba(139,92,246,0.25)]'
                  : 'bg-amber-600 text-white border-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.25)]'
                : 'bg-neutral-800/80 text-slate-400 border-white/10 hover:border-slate-500/40 hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* RENDERIZAÇÃO DAS ABAS (Mantido o seu código original de visualização, mas consumindo a const 'data') */}
      {activeTab === 'fundamento' && (
        <div className="animate-fadeIn">
          <Card accent="purple">
            <div className="flex gap-4 items-start mb-3">
              <PhaseNum id="E" accent="purple" />
              <div>
                <CardTitle>O que é o exoesqueleto cognitivo</CardTitle>
                <CardSub>
                  A estrutura interna que carrega o peso antes de você pensar
                </CardSub>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              Um exoesqueleto cognitivo é um modelo mental internalizado que,
              diante de qualquer item novo, já reconhece o{' '}
              <strong className="text-slate-100">
                tipo de raciocínio exigido antes de ler as alternativas
              </strong>
              .
            </p>
            <Alert>
              O ENEM não tem questões de conteúdo puro. Toda questão é
              competência aplicada a contexto real.
            </Alert>
          </Card>
          <Card accent="red">
            <CardTitle>
              O risco central desse volume — fluência ilusória
            </CardTitle>
            <Alert variant="red">
              Regra inviolável: nunca encerrar uma sessão sem ter produzido
              algo.
            </Alert>
          </Card>
        </div>
      )}

      {activeTab === 'anatomia' && (
        <div className="animate-fadeIn">
          <Card>
            <CardTitle>Anatomia microscópica do item ENEM</CardTitle>
            {ANATOMY_BLOCKS.map((block) => (
              <div
                key={block.label}
                className="rounded-lg border border-white/10 bg-neutral-800/40 p-4 mb-3"
              >
                <p
                  className={`text-[10px] font-semibold uppercase mb-2 ${block.color}`}
                >
                  {block.label}
                </p>
                <p className="text-xs md:text-sm text-slate-300">
                  {block.body}
                </p>
              </div>
            ))}
          </Card>
          <Card accent="amber">
            <CardTitle>Abordagem micro-analítica</CardTitle>
            <StepList steps={HYBRID_STEPS} />
          </Card>
        </div>
      )}

      {activeTab === 'fases' && (
        <div className="animate-fadeIn">
          {PHASES.map((phase) => (
            <Card key={phase.id} accent={phase.accent}>
              <div className="flex gap-4 items-start mb-3">
                <PhaseNum id={phase.id} accent={phase.accent} />
                <div>
                  <CardTitle>{phase.title}</CardTitle>
                  <CardSub>{phase.sub}</CardSub>
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-2">{phase.intro}</p>
              <StepList steps={phase.steps} />
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'padroes' && (
        <div className="animate-fadeIn">
          <Card>
            <CardTitle>Padrões estruturais recorrentes</CardTitle>
            {PATTERN_ROWS.map((row) => (
              <div
                key={row.tag}
                className="flex flex-col sm:flex-row gap-4 py-3 border-b border-white/5 last:border-0"
              >
                <span
                  className={`inline-flex text-xs font-semibold px-2.5 py-1.5 rounded-md w-28 shrink-0 ${row.tagClass}`}
                >
                  {row.tag}
                </span>
                <span className="text-xs md:text-sm text-slate-300">
                  {row.text}
                </span>
              </div>
            ))}
            <p className="text-[10px] font-semibold uppercase text-slate-500 mt-6 mb-3">
              O que cada área realmente testa
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.areas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-lg bg-neutral-800/50 border border-white/5 p-4"
                >
                  <h4 className="text-sm font-semibold text-slate-200 mb-2">
                    {area.title}{' '}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-md ${area.tagClass}`}
                    >
                      {area.tag}
                    </span>
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'vocab' && (
        <div className="animate-fadeIn">
          <Card>
            <CardTitle>
              Vocabulário científico crítico — {polaridade.toUpperCase()}
            </CardTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {data.vocab.map((item) => (
                <div
                  key={item.term}
                  className="rounded-lg border border-white/10 bg-neutral-800/40 p-3"
                >
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    {item.term}{' '}
                    <span
                      className={`text-[10px] font-medium ${polaridade === 'humanas' ? 'text-violet-400' : 'text-amber-400'}`}
                    >
                      {item.tags}
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-400">{item.def}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'semana' && (
        <div className="animate-fadeIn">
          <Card>
            <CardTitle>Semana-tipo de mineração</CardTitle>
            {WEEK_DAYS.map((row) => (
              <div
                key={row.day}
                className="grid grid-cols-[5.5rem_1fr] mb-2 rounded-lg border border-white/10 overflow-hidden"
              >
                <div
                  className={`text-white text-[11px] font-semibold flex items-center justify-center p-3 text-center ${polaridade === 'humanas' ? 'bg-violet-600/90' : 'bg-amber-600/90'}`}
                >
                  {row.day}
                </div>
                <div className="bg-neutral-800/60 p-3 text-xs text-slate-300">
                  <b className="block font-semibold text-slate-100 mb-0.5">
                    {row.title}
                  </b>
                  {row.text}
                </div>
              </div>
            ))}
          </Card>
        </div>
      )}

      {activeTab === 'projecoes' && (
        <div className="animate-fadeIn">
          <Card>
            <CardTitle>Projeções temáticas ENEM 2026</CardTitle>
            {data.projecoes.map((proj) => (
              <div
                key={proj.title}
                className="flex flex-col sm:flex-row justify-between gap-3 p-4 mb-3 rounded-lg border border-white/10 bg-neutral-800/40"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100 mb-1">
                    {proj.title}
                  </p>
                  <p className="text-xs text-slate-400">{proj.body}</p>
                </div>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap self-start ${proj.badgeClass}`}
                >
                  {proj.badge}
                </span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {activeTab === 'matriz' && (
        <div className="animate-fadeIn">
          <Card>
            <CardTitle>Matriz de prioridade</CardTitle>
            <div className="overflow-x-auto -mx-1">
              <table className="w-full border-collapse text-xs min-w-[520px]">
                <thead>
                  <tr>
                    {[
                      'Eixo / Área',
                      'Freq. histórica',
                      'Peso no corte',
                      'Prioridade',
                    ].map((h) => (
                      <th
                        key={h}
                        className={`${polaridade === 'humanas' ? 'bg-violet-600/90' : 'bg-amber-600/90'} text-white px-3 py-2 text-left font-semibold text-[11px]`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.matrix.map((row, i) => (
                    <tr key={i} className="even:bg-neutral-800/40">
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-3 py-2 border-b border-white/5 text-slate-300 align-top ${j === 4 && cell.startsWith('P1') ? 'text-emerald-400 font-medium' : j === 4 && cell.startsWith('P2') ? 'text-amber-400' : ''}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
