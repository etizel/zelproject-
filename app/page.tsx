'use client';

import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LazySection from '@/components/LazySection';
import ContactSection from '@/components/ContactSection';
// Lazy load components below the fold with SSR disabled and intersection observer
const ExperienceTimeline = dynamic(
  () => import('@/components/ExperienceTimeline'),
  {
    ssr: false,
  },
);

const BentoGrid = dynamic(() => import('@/components/BentoGrid'), {
  ssr: false,
});

const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-slate-200">
      {/* Header fixo no topo */}
      <Header />

      {/* Deep Void Background - Pure Black */}
      <div className="fixed inset-0 bg-[#050505] -z-10"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Hero />

        <LazySection>
          <ExperienceTimeline />
        </LazySection>

        <LazySection>
          <BentoGrid />
        </LazySection>

        <LazySection>
          <ProjectsSection />
        </LazySection>

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
