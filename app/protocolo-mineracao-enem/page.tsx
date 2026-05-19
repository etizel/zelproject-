import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProtocoloMineracaoEnem from '@/components/ProtocoloMineracaoEnem';

export const metadata = {
  title: 'Mineração da prova ENEM · Protocolo 2026',
  description:
    'Protocolo estratégico de mineração analítica sobre 24 provas e ~1.000 questões do ENEM, com 3 relatórios integrados.',
};

export default function ProtocoloMineracaoEnemPage() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-200">
      <div aria-hidden="true" className="fixed inset-0 bg-[#050505] -z-10" />
      <div
        className="fixed inset-0 -z-10 opacity-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 55%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Voltar para Artefatos & Performance
        </Link>

        <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-6 md:p-10 shadow-2xl shadow-amber-500/5">
          <ProtocoloMineracaoEnem />
        </div>
      </div>
    </main>
  );
}
