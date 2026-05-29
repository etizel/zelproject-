import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  FileText,
  Github,
  Globe,
  Music,
  Cat,
  ArrowUpRight,
  Box,
  Layers,
  Brain,
  X,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import ProtocoloMineracaoEnem from '@/components/ProtocoloMineracaoEnem';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath?: string;
  link: string;
  type: 'pdf' | 'github' | 'website' | 'interactive';
  techs: string[];
}

interface ModalState {
  isOpen: boolean;
  mode: 'image' | 'document' | null;
  imageUrl: string | null;
  title: string | null;
  documentUrl: string | null;
}

const PROTOCOLO_ENEM_PATH = '/protocolo-mineracao-enem';

const ProjectsSection: React.FC = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    mode: null,
    imageUrl: null,
    title: null,
    documentUrl: null,
  });
  const [documentExpanded, setDocumentExpanded] = useState(false);
  const [portalMounted, setPortalMounted] = useState(false);

  useEffect(() => {
    setPortalMounted(true);
  }, []);

  const openImageModal = (imageUrl: string, title: string) => {
    setDocumentExpanded(false);
    setModalState({
      isOpen: true,
      mode: 'image',
      imageUrl,
      title,
      documentUrl: null,
    });
    document.body.style.overflow = 'hidden';
  };

  const openDocumentModal = (title: string, documentUrl: string) => {
    setDocumentExpanded(false);
    setModalState({
      isOpen: true,
      mode: 'document',
      imageUrl: null,
      title,
      documentUrl,
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setDocumentExpanded(false);
    setModalState({
      isOpen: false,
      mode: null,
      imageUrl: null,
      title: null,
      documentUrl: null,
    });
    document.body.style.overflow = 'unset';
  };

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    if (modalState.isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [modalState.isOpen]);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Projeto MLCP',
      category: 'Logística & Prevenção',
      description:
        'Framework proprietário de engenharia logística que utiliza física aplicada e zoneamento hierárquico para otimizar o empacotamento. Garante >85% de aproveitamento de volume e reduz avarias para <2%, transformando a expedição em um processo preditivo e escalável.',
      type: 'pdf',
      link: '/projects/mlcp-doc.pdf',
      imagePath: '/projects/mlcp-cover.png',
      techs: ['Gestão', 'Auditoria', 'PDF Documentation'],
    },
    {
      id: 2,
      title: 'Acervo GT',
      category: 'Desenvolvimento Frontend',
      description:
        'Coleção com mais de 30 projetos práticos de aprendizado em JavaScript, HTML e CSS. A evolução da minha jornada inicial como dev.',
      type: 'github',
      link: 'https://github.com/etizel/Acervo-GT',
      imagePath: '/projects/gt-cover.jpeg',
      techs: ['JavaScript', 'HTML5', 'CSS3', 'DOM Manipulation'],
    },
    {
      id: 3,
      title: 'Animais Fantásticos',
      category: 'Web Design',
      description:
        'Site interativo com galeria de animais fantásticos. Foco em grid layout, animações CSS e responsividade mobile.',
      type: 'website',
      link: 'https://etizel.github.io/animais-fantasticos/',
      imagePath: '/projects/animals-cover.png',
      techs: ['CSS Grid', 'Responsive', 'UI/UX'],
    },
    {
      id: 4,
      title: 'Targues Escola de Música',
      category: 'Landing Page',
      description:
        'Plataforma para escola de música com agendamento e apresentação de cursos. Layout moderno e acessível.',
      type: 'website',
      link: 'https://targues.com/',
      imagePath: '/projects/targues.png',
      techs: ['Landing Page', 'Forms', 'Design System'],
    },
    {
      id: 5,
      title: 'Mineração da prova ENEM ~ 1.000 questões e 3 relatórios completos',
      category: 'Estratégia & Cognição',
      description:
        'Protocolo estratégico sobre 24 provas e ~1.000 questões integrando três relatórios: Linguagens 2020, Matemática 2020-2026 e DNA microscópico. Anatomia do item, padrões TRI, vocabulário crítico e projeções 2026.',
      type: 'interactive',
      link: PROTOCOLO_ENEM_PATH,
      imagePath: '/projects/enem-mineracao-cover.svg',
      techs: ['ENEM', '~1.000 questões', '3 relatórios', 'TRI'],
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'website':
        return <Globe size={20} />;
      case 'interactive':
        return <Maximize2 size={20} />;
      default:
        return <ArrowUpRight size={20} />;
    }
  };

  const getThemeIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Box className="text-amber-500" />;
      case 2:
        return <Layers className="text-cyan-400" />;
      case 3:
        return <Cat className="text-emerald-500" />;
      case 4:
        return <Music className="text-purple-500" />;
      case 5:
        return <Brain className="text-amber-400" />;
      default:
        return <Globe className="text-gray-500" />;
    }
  };

  return (
    <>
      <section
        className="relative py-24 px-4 overflow-hidden bg-neutral-950/50"
        id="projects"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-7xl mx-auto mb-16 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-mono tracking-tight drop-shadow-lg mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
              Artefatos & Performance
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Uma seleção de trabalhos focados em{' '}
            <span className="text-amber-400 font-medium">
              resolver problemas reais
            </span>{' '}
            e explorar novas tecnologias e metodologias de Logística e Code.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl border bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col hover:-translate-y-1 ${
                project.type === 'interactive'
                  ? 'border-amber-500/25 ring-1 ring-amber-500/10'
                  : 'border-white/10'
              }`}
            >
              <div
                className={`h-48 md:h-64 w-full overflow-hidden relative bg-neutral-800 ${
                  project.imagePath || project.type === 'interactive'
                    ? 'cursor-pointer'
                    : ''
                }`}
                onClick={() => {
                  if (project.type === 'interactive') {
                    openDocumentModal(project.title, project.link);
                  } else if (project.imagePath) {
                    openImageModal(project.imagePath, project.title);
                  }
                }}
              >
                {project.imagePath ? (
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add(
                        'fallback-gradient',
                      );
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center text-6xl">
                    {getThemeIcon(project.id)}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 border border-amber-500/20 text-amber-400 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.type === 'interactive' && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/20 border border-amber-500/40 text-amber-300 backdrop-blur-md">
                      Artefato especial
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/50 group-hover:shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all duration-300">
                      {getThemeIcon(project.id)}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-400 mb-6 line-clamp-3 text-sm md:text-base flex-1 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-white/5 group-hover:border-amber-500/30 group-hover:text-amber-300 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.type === 'interactive' ? (
                  <button
                    type="button"
                    className="w-full py-3 px-6 rounded-xl flex items-center justify-center gap-3 font-semibold text-base transition-all duration-300 bg-amber-600/10 text-amber-400 border border-amber-600/20 hover:bg-amber-600 hover:text-white hover:border-amber-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDocumentModal(project.title, project.link);
                    }}
                  >
                    <span>Explorar protocolo</span>
                    {getIcon(project.type)}
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                    w-full py-3 px-6 rounded-xl flex items-center justify-center gap-3 font-semibold text-base transition-all duration-300
                    ${
                      project.type === 'pdf'
                        ? 'bg-amber-600/10 text-amber-400 border border-amber-600/20 hover:bg-amber-600 hover:text-white hover:border-amber-600'
                        : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white'
                    }
                  `}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <span>
                      {project.type === 'pdf'
                        ? 'Visualizar Documento'
                        : project.type === 'github'
                          ? 'Acessar Repositório'
                          : 'Visitar Website'}
                    </span>
                    {getIcon(project.type)}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {portalMounted &&
        modalState.isOpen &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] flex bg-black/85 backdrop-blur-md transition-opacity duration-300 ${
              modalState.mode === 'document' && documentExpanded
                ? 'p-0'
                : 'items-center justify-center p-3 md:p-6'
            }`}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={modalState.title || 'Visualização do projeto'}
        >
          <div
            className={`relative bg-neutral-900 overflow-hidden shadow-2xl border border-amber-500/50 flex flex-col transition-all duration-300 ${
              modalState.mode === 'document'
                ? documentExpanded
                  ? 'w-full h-full max-w-none max-h-none rounded-none'
                  : 'w-full max-w-4xl max-h-[90vh] rounded-xl'
                : 'max-w-full max-h-full rounded-xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {modalState.mode === 'document' && (
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-neutral-950/95 shrink-0 z-10">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-amber-500/90">
                    Artefato especial · Protocolo ENEM 2026
                  </p>
                  <h3 className="text-sm md:text-base font-semibold text-slate-100 truncate">
                    {modalState.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setDocumentExpanded((v) => !v)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 border border-white/10 hover:border-amber-500/40 hover:text-amber-400 hover:bg-white/5 transition-colors"
                    aria-label={
                      documentExpanded
                        ? 'Reduzir painel'
                        : 'Ampliar em tela cheia'
                    }
                  >
                    {documentExpanded ? (
                      <Minimize2 size={16} />
                    ) : (
                      <Maximize2 size={16} />
                    )}
                    <span className="hidden sm:inline">
                      {documentExpanded ? 'Reduzir' : 'Ampliar'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-amber-600/20 border border-amber-500/40 hover:bg-amber-600 hover:text-white transition-colors"
                    aria-label="Fechar protocolo"
                  >
                    <X size={16} />
                    <span className="hidden sm:inline">Fechar</span>
                  </button>
                </div>
              </div>
            )}

            {modalState.mode === 'image' && (
              <>
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
                  aria-label={`Fechar visualização de ${modalState.title}`}
                >
                  <X size={24} />
                </button>
                <img
                  src={modalState.imageUrl || ''}
                  alt={modalState.title || 'Imagem do Projeto'}
                  className="max-w-[90vw] max-h-[90vh] object-contain block"
                  style={{ minHeight: '30vh' }}
                />
              </>
            )}

            {modalState.mode === 'document' && (
              <div className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-8 min-h-0">
                <ProtocoloMineracaoEnem />
              </div>
            )}
          </div>
        </div>,
          document.body,
        )}
    </>
  );
};

export default ProjectsSection;
