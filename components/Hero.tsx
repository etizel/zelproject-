import CyberGrid3D from './CyberGrid3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-950 flex items-center justify-center">
      {/* Deep Void Background - Pure Black */}
      <div className="absolute inset-0 bg-[#050505] -z-10"></div>

      {/* Static Grid Background */}
      <div className="absolute inset-0 -z-10">
        <CyberGrid3D />
      </div>

      {/* Centered Text Content - LCP Element (Critical) */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono tracking-wide mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            MATRIZ OPERACIONAL
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed animate-fade-in-delay">
          Arquitetura de código fundida com inteligência logística.
        </p>
      </div>
    </section>
  );
}
