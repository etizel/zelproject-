import React, { useState } from 'react';
import {
  FileText,
  Github,
  Globe,
  Music,
  Cat,
  ArrowUpRight,
  Box,
  Layers,
  X, // Adicionado para o botão fechar do modal
} from 'lucide-react';

// Definição dos Tipos de Projeto
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath?: string; // Caminho da imagem na pasta public
  link: string; // Link para site, github ou caminho do PDF
  type: 'pdf' | 'github' | 'website'; // Tipo para decidir o ícone
  techs: string[]; // Lista de tecnologias usadas
}

// Tipos para o Modal
interface ModalState {
  isOpen: boolean;
  imageUrl: string | null;
  title: string | null;
}

const ProjectsSection: React.FC = () => {
  // Estado para controlar o modal de visualização de imagem
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    imageUrl: null,
    title: null,
  });

  // Função para abrir o modal
  const openModal = (imageUrl: string, title: string) => {
    setModalState({ isOpen: true, imageUrl, title });
    // Opcional: Adicionar classe para prevenir scroll no body
    document.body.style.overflow = 'hidden';
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalState({ isOpen: false, imageUrl: null, title: null });
    document.body.style.overflow = 'unset';
  };

  // Efeito para fechar o modal com a tecla ESC
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

  // SEUS DADOS: Aqui configuramos os 4 Cards
  const projects: Project[] = [
    {
      id: 1,
      title: 'Projeto MLCP',
      category: 'Logística & Prevenção',
      description:
        'Framework proprietário de engenharia logística que utiliza física aplicada e zoneamento hierárquico para otimizar o empacotamento. Garante >85% de aproveitamento de volume e reduz avarias para <2%, transformando a expedição em um processo preditivo e escalável.',
      type: 'pdf',
      link: '/projects/mlcp-doc.pdf', // Coloque seu PDF na pasta public/projects
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
      link: 'https://github.com/etizel/Acervo-GT', // Seu link do repositório
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
      link: 'https://etizel.github.io/animais-fantasticos/', // Exemplo de link
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
      link: 'https://targues.com/', // Exemplo de link
      imagePath: '/projects/targues.png',
      techs: ['Landing Page', 'Forms', 'Design System'],
    },
  ];

  // Função auxiliar para renderizar o ícone baseado no tipo
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'website':
        return <Globe size={20} />;
      default:
        return <ArrowUpRight size={20} />;
    }
  };

  // Função para ícone decorativo do card
  const getThemeIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Box className="text-amber-500" />;
      case 2:
        return <Layers className="text-cyan-400" />; // Azul/Cyan para mais variedade
      case 3:
        return <Cat className="text-emerald-500" />;
      case 4:
        return <Music className="text-purple-500" />;
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
        {/* Luz de fundo sutil para dar profundidade (Glow) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 60%)', // Amber sutil
          }}
        />

        {/* Título da Seção */}
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

        {/* Grid de Projetos */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col hover:-translate-y-1"
            >
              {/* Container que abre o Modal (apenas se houver imagePath) */}
              <div
                className={`h-48 md:h-64 w-full overflow-hidden relative bg-neutral-800 ${
                  project.imagePath ? 'cursor-zoom-in' : ''
                }`}
                onClick={() =>
                  project.imagePath &&
                  openModal(project.imagePath, project.title)
                }
              >
                {/* Área da Imagem (Topo do Card) */}

                {/* Se tiver imagem, mostra ela. Se não, mostra um gradiente fallback */}
                {project.imagePath ? (
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback se a imagem não existir
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

                {/* Overlay Gradient para texto ficar legível */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/40 to-transparent" />

                {/* Categoria flutuante */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/50 border border-amber-500/20 text-amber-400 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {/* Icone Decorativo com Glow */}
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

                {/* Tags de Tecnologia */}
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

                {/* Botão de Ação */}
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
                    // Previne que o clique no botão abra o modal (caso ele esteja no container pai)
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL DE VISUALIZAÇÃO DE IMAGEM */}
      {modalState.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={closeModal} // Fecha ao clicar no backdrop
        >
          <div
            className="relative bg-neutral-900 rounded-xl max-w-full max-h-full overflow-hidden shadow-2xl border border-amber-500/50 animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()} // Impede que o clique no modal feche-o
          >
            <button
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
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
