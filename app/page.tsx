'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// LazySection e ContactSection são importados de forma síncrona, assumindo que são leves.
import LazySection from '@/components/LazySection';
import ContactSection from '@/components/ContactSection';

// --- Placeholder Comum para UX ---
const LoadingPlaceholder = () => (
  <div className="h-64 w-full flex items-center justify-center text-slate-400 border border-neutral-800 rounded-lg animate-pulse bg-neutral-900">
    Carregando seção...
  </div>
);

// --- Componentes Lazy-Loaded (abaixo da dobra) ---

// 1. ExperienceTimeline: Prioriza SEO/LCP (SSR ativo) + UX (Loading Fallback)
const ExperienceTimeline = dynamic(
  () => import('@/components/ExperienceTimeline'),
  {
    loading: LoadingPlaceholder,
    // Permite SSR para conteúdo importante (Experiência).
  },
);

// 2. BentoGrid: Desabilita SSR (Client-Side Rendering) + UX (Loading Fallback)
// ÚNICA DECLARAÇÃO: combinando loading e ssr: false para evitar erro de redeclaração.
const BentoGrid = dynamic(() => import('@/components/BentoGrid'), {
  loading: LoadingPlaceholder,
  ssr: false, // Assumindo complexidade/dependência de browser
});

// 3. ProjectsSection: Desabilita SSR + UX (Loading Fallback)
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  loading: LoadingPlaceholder, // Adicionado loading para melhor UX
  ssr: false,
});

// 4. Footer: Desabilita SSR + UX (Loading Fallback)
// O Footer é o último e pode ser o mais atrasado.
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: LoadingPlaceholder, // Adicionado loading para melhor UX
  ssr: false,
});

// --- Componente Principal ---
export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-200">
      {/* Header fixo no topo: Carregamento síncrono para acesso rápido */}
      <Header />

      {/* Deep Void Background - Pure Black */}
      <div className="fixed inset-0 bg-[#050505] -z-10"></div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero: Carregamento síncrono, essencial para o LCP */}
        <Hero />

        {/* Todas as seções Lazy-Loaded usam <LazySection> (geralmente Intersection Observer) */}

        <LazySection>
          <ExperienceTimeline />
        </LazySection>

        <LazySection>
          <BentoGrid />
        </LazySection>

        <LazySection>
          <ProjectsSection />
        </LazySection>

        {/* ContactSection é importado de forma síncrona. Se for pesado, use dynamic também. */}
        <LazySection>
          <ContactSection />
        </LazySection>

        <LazySection>
          <Footer />
        </LazySection>
      </div>
    </main>
  );
}
