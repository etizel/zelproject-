'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from '@/components/Hero';

// Lazy load components below the fold with SSR disabled
const ExperienceTimeline = dynamic(
  () => import('@/components/ExperienceTimeline'),
  {
    ssr: false,
    loading: () => null,
  },
);

const BentoGrid = dynamic(() => import('@/components/BentoGrid'), {
  ssr: false,
  loading: () => null,
});

const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  ssr: false,
  loading: () => null,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-200">
      {/* Deep Void Background - Pure Black */}
      <div className="fixed inset-0 bg-[#050505] -z-10"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />

        <Suspense fallback={null}>
          <ExperienceTimeline />
        </Suspense>

        <Suspense fallback={null}>
          <BentoGrid />
        </Suspense>

        <Suspense fallback={null}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
