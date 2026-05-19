'use client';

import React, { useState } from 'react';
import {
  ANATOMY_BLOCKS,
  AREA_CARDS,
  HYBRID_STEPS,
  MATRIX_ROWS,
  PATTERN_ROWS,
  PHASES,
  PROJECOES,
  SOURCE_PILLS,
  VOCAB_ITEMS,
  WEEK_DAYS,
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
      className={`rounded-xl border border-white/10 bg-neutral-900/80 p-5 md:p-6 mb-4 ${
        accent ? `border-l-[3px] ${accentBorder[accent]}` : ''
      } ${className}`}
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

function PhaseNum({
  id,
  accent,
}: {
  id: string;
  accent: Accent;
}) {
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

export default function ProtocoloMineracaoEnem() {
  const [activeTab, setActiveTab] = useState<TabId>('fundamento');

  return (
    <div className="protocolo-enem max-w-3xl mx-auto text-sm text-slate-300">
      <header className="pb-5 mb-5 border-b border-white/10">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/90 mb-2">
          Protocolo estratégico · 24 provas · ~1.000 questões · 3 relatórios
          integrados
        </p>
        <h2 className="text-xl md:text-2xl font-bold font-mono text-slate-100 leading-snug mb-2">
          Mineração analítica do ENEM — construção do exoesqueleto cognitivo
        </h2>
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
          Não é leitura passiva de questões. É extração de inteligência
          estrutural sobre como a prova pensa — anatomia do item, padrão de
          distrator, vocabulário recorrente, contexto mundial. Cada sessão produz
          algo; produção ativa é o que separa exoesqueleto de ilusão de fluência.
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

      <nav
        className="flex flex-wrap gap-1.5 mb-6"
        role="tablist"
        aria-label="Seções do protocolo"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-amber-600 text-white border-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.25)]'
                : 'bg-neutral-800/80 text-slate-400 border-white/10 hover:border-amber-500/40 hover:text-amber-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === 'fundamento' && (
        <div role="tabpanel">
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
              . Não é memória de conteúdo — é reconhecimento de estrutura.
              <br />
              <br />
              Quando você vê &quot;taxa de incidência por 100 mil
              habitantes&quot; e já sabe que vai precisar de razão ou regra de
              três — isso é exoesqueleto. Quando você vê um cartum de Quino e já
              sabe que o ENEM vai pedir a crítica implícita às mazelas sociais,
              não a descrição literal da imagem — isso é exoesqueleto. Quando
              lê &quot;Foucault&quot; e já situa poder-saber aplicado a uma
              instituição — exoesqueleto.
              <br />
              <br />
              As 1.000 questões das 24 provas são o material bruto. O protocolo
              abaixo transforma esse material em estrutura.
            </p>
            <Alert>
              O ENEM não tem questões de conteúdo puro desde 2009. Toda questão
              é competência aplicada a contexto real. Candidatos que estudam só
              conteúdo e não treinam aplicação contextual ficam sistematicamente
              abaixo do seu potencial real na TRI.
            </Alert>
          </Card>

          <Card accent="red">
            <CardTitle>
              O risco central desse volume — fluência ilusória
            </CardTitle>
            <CardSub>
              O inimigo invisível de quem estuda muito e performa pouco
            </CardSub>
            <p className="text-xs md:text-sm leading-relaxed text-slate-300">
              Pesquisas em psicologia cognitiva mostram que exposição repetida a
              material cria{' '}
              <strong className="text-slate-100">
                familiaridade sem domínio
              </strong>
              . Você lê, reconhece, acha que sabe — e na prova o raciocínio não
              dispara porque nunca foi ativado, só observado. É o maior risco de
              trabalhar 1.000 questões sem método.
            </p>
            <Alert variant="red">
              Regra inviolável do protocolo: nunca encerrar uma sessão sem ter
              produzido algo — uma classificação, um padrão nomeado, uma
              observação escrita sobre como a prova funciona. Se não consegue
              articular o que aprendeu, não aprendeu — revisitou.
            </Alert>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <SmallCard title="Por que 24 provas e não 5">
              Com 5 provas você vê conteúdo. Com 24 você vê o comportamento da
              banca. Padrões de baixa frequência só aparecem com volume alto —
              um contexto que apareceu 3 vezes em 24 provas é sinal fraco, mas é
              sinal. 18 vezes é lei. Você vai ter dados próprios que nenhum
              cursinho generalista consegue dar.
            </SmallCard>
            <SmallCard title="O que os 3 relatórios cobrem">
              <strong className="text-slate-300">Rel. 1:</strong> Linguagens
              2020 — gêneros, multimodalidade, discurso social.
              <br />
              <strong className="text-slate-300">Rel. 2:</strong> Matemática
              2020–2026 — frequência por eixo, tendências contextuais.
              <br />
              <strong className="text-slate-300">Rel. 3:</strong> DNA
              microscópico 2021–2026 — anatomia do item, distratores TRI,
              projeções 2026.
            </SmallCard>
          </div>
        </div>
      )}

      {activeTab === 'anatomia' && (
        <div role="tabpanel">
          <Card>
            <CardTitle>Anatomia microscópica do item ENEM</CardTitle>
            <CardSub>
              Extraído do Relatório 3 (DNA microscópico). Aplica-se a todas as
              áreas, não só Linguagens.
            </CardSub>
            {ANATOMY_BLOCKS.map((block) => (
              <div
                key={block.label}
                className="rounded-lg border border-white/10 bg-neutral-800/40 p-4 mb-3 last:mb-0"
              >
                <p
                  className={`text-[10px] font-semibold tracking-wider uppercase mb-2 ${block.color}`}
                >
                  {block.label}
                </p>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {block.body}
                </p>
              </div>
            ))}
          </Card>

          <Card accent="amber">
            <CardTitle>
              Abordagem micro-analítica — itens híbridos verbal-visual
            </CardTitle>
            <CardSub>
              Recorrente em Linguagens, Natureza e Humanas
            </CardSub>
            <StepList steps={HYBRID_STEPS} />
          </Card>
        </div>
      )}

      {activeTab === 'fases' && (
        <div role="tabpanel">
          {PHASES.map((phase) => (
            <Card key={phase.id} accent={phase.accent}>
              <div className="flex gap-4 items-start mb-3">
                <PhaseNum id={phase.id} accent={phase.accent} />
                <div>
                  <CardTitle>{phase.title}</CardTitle>
                  <CardSub>{phase.sub}</CardSub>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">
                {phase.intro}
              </p>
              <StepList steps={phase.steps} />
              {phase.alert && (
                <Alert variant={phase.alertType ?? 'green'}>
                  {phase.alert}
                </Alert>
              )}
            </Card>
          ))}
        </div>
      )}

      {activeTab === 'padroes' && (
        <div role="tabpanel">
          <Card>
            <CardTitle>Padrões estruturais recorrentes nas 24 provas</CardTitle>
            <p className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 mb-3">
              Estrutura do item
            </p>
            {PATTERN_ROWS.map((row) => (
              <div
                key={row.tag}
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 py-3 border-b border-white/5 last:border-0"
              >
                <span
                  className={`inline-flex items-center justify-center text-xs font-semibold leading-snug px-2.5 py-1.5 rounded-md text-center sm:w-[7.25rem] shrink-0 self-start ${row.tagClass}`}
                >
                  {row.tag}
                </span>
                <span className="text-xs md:text-sm text-slate-300 leading-relaxed flex-1 min-w-0">
                  {row.text}
                </span>
              </div>
            ))}

            <p className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 mt-6 mb-3">
              O que cada área realmente testa
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AREA_CARDS.map((area) => (
                <div
                  key={area.title}
                  className="rounded-lg bg-neutral-800/50 border border-white/5 p-4 min-h-0"
                >
                  <h4 className="text-sm font-semibold text-slate-200 mb-2 leading-snug">
                    {area.title}{' '}
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md align-middle whitespace-nowrap ${area.tagClass}`}
                    >
                      {area.tag}
                    </span>
                  </h4>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'vocab' && (
        <div role="tabpanel">
          <Card>
            <CardTitle>
              Vocabulário científico crítico — 3 relatórios integrados
            </CardTitle>
            <CardSub>
              Não decorar definição. Internalizar campo semântico e 3 aplicações
              reais de cada termo.
            </CardSub>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {VOCAB_ITEMS.map((item) => (
                <div
                  key={item.term}
                  className="rounded-lg border border-white/10 bg-neutral-800/40 p-3"
                >
                  <p className="text-xs font-semibold text-slate-100 mb-1">
                    {item.term}{' '}
                    <span className="text-[10px] font-medium text-amber-400/90">
                      {item.tags}
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
            <Alert variant="amber">
              Estratégia ativa: ao encontrar vocabulário desconhecido nas 24
              provas, não pesquise a definição — pesquise 3 aplicações reais.
              Definição é passiva. Aplicação é exoesqueleto.
            </Alert>
          </Card>
        </div>
      )}

      {activeTab === 'semana' && (
        <div role="tabpanel">
          <Card>
            <CardTitle>Semana-tipo de mineração</CardTitle>
            <CardSub>
              Estrutura para manter consistência sem sobrecarga. O que não pode
              mudar é a produção ativa ao final de cada sessão.
            </CardSub>
            {WEEK_DAYS.map((row) => (
              <div
                key={row.day}
                className="grid grid-cols-1 sm:grid-cols-[5.5rem_1fr] gap-0 mb-2 rounded-lg overflow-hidden border border-white/10"
              >
                <div className="bg-amber-600/90 text-white text-[11px] font-semibold flex items-center justify-center p-3 text-center leading-snug">
                  {row.day}
                </div>
                <div className="bg-neutral-800/60 p-3 text-xs text-slate-300 leading-relaxed">
                  <b className="block font-semibold text-slate-100 mb-0.5">
                    {row.title}
                  </b>
                  {row.text}
                </div>
              </div>
            ))}
            <Alert variant="green">
              Dias de baixa energia: use quarta ou domingo. Nunca force
              dissecação com pico cognitivo baixo — processamento superficial
              nesses dias cria memória fraca que interfere com a memória forte
              dos outros dias.
            </Alert>
          </Card>
        </div>
      )}

      {activeTab === 'projecoes' && (
        <div role="tabpanel">
          <Card>
            <CardTitle>Projeções temáticas ENEM 2026</CardTitle>
            <CardSub>
              Cruzamento dos 3 relatórios com conjuntura Brasil/Mundo 2024–2025
            </CardSub>
            {PROJECOES.map((proj) => (
              <div
                key={proj.title}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-start p-4 mb-3 rounded-lg border border-white/10 bg-neutral-800/40 last:mb-0"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100 mb-1">
                    {proj.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {proj.body}
                  </p>
                </div>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap justify-self-start sm:justify-self-end ${proj.badgeClass}`}
                >
                  {proj.badge}
                </span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {activeTab === 'matriz' && (
        <div role="tabpanel">
          <Card>
            <CardTitle>
              Matriz de prioridade — onde cada hora vale mais
            </CardTitle>
            <CardSub>
              Baseada na frequência histórica dos 3 relatórios + peso no corte
              de Psicologia
            </CardSub>
            <div className="overflow-x-auto -mx-1">
              <table className="w-full border-collapse text-xs min-w-[520px]">
                <thead>
                  <tr>
                    {[
                      'Eixo / Área',
                      'Freq. histórica',
                      'Peso no corte Psi',
                      'Seu nível atual',
                      'Prioridade',
                    ].map((h) => (
                      <th
                        key={h}
                        className="bg-amber-600/90 text-white px-3 py-2 text-left font-semibold text-[11px]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX_ROWS.map((row, i) => (
                    <tr key={i} className="even:bg-neutral-800/40">
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-3 py-2 border-b border-white/5 text-slate-300 align-top ${
                            j === 4 && cell.startsWith('P1')
                              ? 'text-emerald-400 font-medium'
                              : j === 4 && cell.startsWith('P2')
                                ? 'text-amber-400'
                                : j === 4 && cell.startsWith('P4')
                                  ? 'text-slate-500'
                                  : ''
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Alert>
              P4 — ignorar significa: o retorno por hora de estudo é tão baixo que
              o tempo é melhor investido consolidando P1 e P2. Trigonometria
              isolada aparece em 2–3 itens por prova com alto nível de
              dificuldade TRI. Errar esses itens tem impacto mínimo na nota
              final.
            </Alert>
          </Card>
        </div>
      )}
    </div>
  );
}
