'use client';

import Link from 'next/link';
import { Download, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/5 h-16">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Título à esquerda */}
        <Link
          href="./"
          className="font-mono text-lg font-semibold text-slate-200 hover:text-amber-500 transition-colors"
        >
          ETIZEL
        </Link>

        {/* Botões à direita */}
        <nav className="flex items-center gap-3">
          {/* Botão Currículo */}
          <Link
            href="/curriculo.pdf"
            className="flex items-center gap-2 px-4 py-2 border border-amber-500/5                  0 text-amber-500 rounded-lg hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 text-sm font-medium"
          >
            <Download size={16} />
            <span>Currículo</span>
          </Link>

          {/* Botão Contato */}
          <Link
            href="#contato"
            className="flex items-center gap-2 px-4 py-2 border border-amber-500/50 text-amber-500 rounded-lg hover:bg-amber-500/10 hover:border-amber-500 transition-all duration-300 text-sm font-medium"
          >
            <Mail size={16} />
            <span>Contato</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
