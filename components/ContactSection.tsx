import React from 'react';
import { Linkedin, Mail, Github, MessageCircle } from 'lucide-react';

interface ContactLink {
  icon: React.ElementType;
  label: string;
  href: string;
  ariaLabel: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/etizel-azevedo/',
    ariaLabel: 'Visite meu perfil no LinkedIn',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:eetizel@gmail.com', // Usando mailto para abrir o cliente de email
    ariaLabel: 'Entre em contato via Email: eetizel@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/etizel',
    ariaLabel: 'Veja meus projetos no GitHub',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/5511988491639',
    ariaLabel: 'Entre em contato via WhatsApp',
  },
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-4 overflow-hidden bg-neutral-950/50"
    >
      {/* 1. Luz de fundo sutil para dar profundidade (Glow) */}
      {/* Padrão Cyber/Neon sutil alinhado com a Timeline */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 60%)', // Amber sutil
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Container Principal com efeito Glass/Dark Slim */}
        <div className="relative rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-lg shadow-2xl overflow-hidden p-6 md:p-16">
          <div className="flex flex-col items-center">
            {/* Título com gradiente Neon Aprimorado */}
            <h2 className="text-4xl md:text-5xl font-extrabold font-mono text-center mb-4 tracking-tight drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                Conexão | Fale Comigo
              </span>
            </h2>

            <p className="text-lg text-slate-400 text-center max-w-3xl mb-12 font-light">
              Auditoria de Perdas e Implementação de Estratégias de Supply
              Chain. Vamos conectar para otimizar seus processos.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 justify-center items-center gap-4 md:gap-8 w-full max-w-4xl">
              {contactLinks.map((link, index) => {
                const IconComponent = link.icon;

                // Cálculo de delay para animação escalonada (efeito cascata)
                const animationDelay = `${index * 150}ms`;

                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    // Estilo Glass Card Refinado com Efeito Neon no Hover
                    className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-neutral-800/30 border border-white/5 transition-all duration-500 
                                  hover:border-amber-500/80 hover:bg-neutral-800/60 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] 
                                  hover:-translate-y-1"
                    style={{ animationDelay }}
                  >
                    {/* Ícone com Efeito Neon Sutil */}
                    <div className="text-slate-300 group-hover:text-amber-400 transition-colors duration-300 mb-2">
                      <IconComponent size={32} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-medium text-slate-400 group-hover:text-slate-100 transition-colors duration-300 tracking-wider uppercase">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
