'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface FloatingCardProps {
  title: string;
  description: string;
  index: number;
  href?: string;
}

export default function FloatingCard({
  title,
  description,
  index,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.42, 0, 0.58, 1],
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative"
    >
      <div className="h-full p-8 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold font-mono text-slate-200 tracking-wide group-hover:text-amber-400 transition-colors">
              {title}
            </h3>
            <motion.div
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-10 h-10 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transition-colors" />
            </motion.div>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6">{description}</p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {index === 0 ? (
              <>
                <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-400">
                  Supply Chain
                </span>
                <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-400">
                  Rastreabilidade
                </span>
                <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-400">
                  Next.js
                </span>
              </>
            ) : (
              <>
                <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-400">
                  Dashboards
                </span>
                <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-400">
                  Videomonitoramento
                </span>
                <span className="px-3 py-1 bg-black/30 border border-white/10 rounded-full text-xs text-amber-400">
                  Real-time
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
