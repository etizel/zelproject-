export const SOURCE_PILLS = [
  'Relatório Linguagens 2020',
  'Relatório Matemática 2020–2026',
  'DNA microscópico ENEM 2021–2026',
];

export const ANATOMY_BLOCKS = [
  {
    label: '1. Suporte (texto base)',
    color: 'text-sky-400',
    body: 'O INEP usa curadoria diversificada de gêneros: fragmento literário, infográfico, cartum, canção, decreto, notícia científica, dado do IBGE, obra de arte. A imagem nunca é acessória — ela é argumento central. O suporte ancora a competência de área e transforma a língua em documento vivo de leitura do mundo.',
  },
  {
    label: '2. Comando (enunciado)',
    color: 'text-amber-400',
    body: 'O comando define a exigência cognitiva. Estratégia do especialista: leia o comando primeiro, suporte depois. O comando revela o foco antes de você se perder no texto de apoio. Quando o Item 12 pergunta sobre a Lei 9.605/98, quem leu o comando primeiro não se perde no apelo emocional da imagem — vai direto ao que a prova quer.',
  },
  {
    label: '3. Distratores (pluralidade de alternativas)',
    color: 'text-red-400',
    body: 'A TRI penaliza a leitura superficial. Cada distrator foi construído para capturar um erro específico e previsível. Há sempre um distrator principal — aquele que captura o candidato que leu rápido demais ou usou o contexto do mundo real ao invés do suporte fornecido. Ao errar qualquer item nas 24 provas, a primeira tarefa é nomear: qual raciocínio equivocado esse distrator estava capturando?',
  },
  {
    label: '4. Filtragem de distratores — a regra de ouro',
    color: 'text-emerald-400',
    body: 'Elimine alternativas que, embora verdadeiras no mundo, não possuem amparo semântico no suporte fornecido. O ENEM não testa o que você sabe sobre o tema — testa o que o texto/imagem/dado fornecido sustenta. Essa distinção elimina 40% dos erros de candidatos bem preparados.',
  },
];

export const HYBRID_STEPS = [
  {
    title: 'Infográficos e persuasão',
    text: 'A fusão visual (ex: garrafa + animal abandonado) é o argumento — não ilustração. Conecte a imagem à norma ou conceito que o comando exige. A eficácia comunicativa é o que está sendo testado.',
  },
  {
    title: 'Cartuns e ironia',
    text: 'O humor ácido (Quino, Laerte) exige identificar a crítica implícita, não descrever o que está desenhado. Palavras-chave brutais no suporte ("Guerra, Crise, Miséria") são pistas explícitas do tom — use-as para filtrar distratores que amenizam a crítica.',
  },
  {
    title: 'Arte como memorial antropológico',
    text: 'Instalações, performances e obras de arte são tratadas como documentos históricos e sociais. A pergunta nunca é "o que é bonito" — é "qual função social essa obra cumpre e que tensão ela materializa".',
  },
  {
    title: 'Dados técnicos como suporte linguístico',
    text: 'Gráficos do IBGE, tabelas do Banco Central, mapas do IPCC — o raciocínio exigido é o mesmo da leitura textual: identificar intencionalidade, filtrar dado supérfluo, conectar ao contexto social.',
  },
];

export const PHASES = [
  {
    id: 'F1',
    accent: 'purple' as const,
    title: 'Fase 1 — Arqueologia (semanas 1–3)',
    sub: 'Ler para mapear padrão, não para aprender conteúdo',
    intro:
      'Passe pelas 24 provas em modo de leitura de estrutura. Não resolva — classifique. O objetivo é construir o mapa de frequência por eixo e identificar contextos recorrentes.',
    steps: [
      {
        title: 'Para cada item: leia suporte + comando, não calcule nem resolva',
        text: 'Identifique: qual área da vida real? Qual conceito-chave? Qual gênero textual ou tipo de dado? Nível de dificuldade aparente.',
      },
      {
        title: 'Marque com 3 categorias',
        text: 'V = vi esse contexto antes | N = contexto novo | ? = não reconheço o campo ao qual pertence.',
      },
      {
        title: 'Ao final de cada prova: registre 5 observações',
        text: 'Os contextos mais recorrentes. Os vocabulários desconhecidos. O item mais sofisticado e por quê. Isso alimenta seu radar de 2026.',
      },
      {
        title: 'Entrega da Fase 1',
        text: 'Um mapa pessoal com os 20 contextos mais frequentes nas 24 provas distribuídos por área. Esse é o radar que nenhum guia pedagógico vai te dar — porque é construído com seus próprios dados.',
      },
    ],
    alert:
      'Ritmo: 3 provas por sessão, 2 sessões por semana. 6 provas/semana × 3 semanas = 18 provas. As 6 restantes são revisão de padrão na semana 3.',
    alertType: 'green' as const,
  },
  {
    id: 'F2',
    accent: 'amber' as const,
    title: 'Fase 2 — Dissecação (semanas 4–12)',
    sub: 'Resolver por eixo temático com análise de anatomia do distrator',
    intro:
      'Agora você resolve, mas com olhar cirúrgico. O objetivo de cada item não é acertar — é entender por que os distratores foram construídos assim e qual estrutura de raciocínio o eixo exige.',
    steps: [
      {
        title: 'Blocos de 20 itens por eixo temático',
        text: 'Funções, depois Estatística, depois Geometria, depois Filosofia Política, depois Sociologia etc. Nunca misture eixos na mesma sessão — o exoesqueleto se constrói em camadas.',
      },
      {
        title: 'Para cada item errado: disseque o distrator',
        text: 'Por que aquela alternativa errada foi colocada ali? Qual raciocínio equivocado ela captura? Nomear o erro é mais valioso que rever o acerto.',
      },
      {
        title: 'Para cada acerto com insegurança: refaça sem ver',
        text: 'Acertou mas não sabe por quê = fluência ilusória. Refaça partindo do zero e articule o raciocínio em voz alta ou por escrito antes de conferir.',
      },
      {
        title: 'Ao final de cada bloco: escreva o "DNA do eixo" em 3 linhas',
        text: 'Qual estrutura de raciocínio esse eixo exige? Qual é o distrator mais comum? Qual contexto real aparece com mais frequência?',
      },
    ],
    alert:
      'Ritmo: 20 itens por sessão, 3 sessões por semana. Não mais. Volume alto sem processamento ativo é o maior desperdício possível desse material.',
    alertType: 'amber' as const,
  },
  {
    id: 'F3',
    accent: 'red' as const,
    title: 'Fase 3 — Simulação real (semanas 13–20)',
    sub: 'Reconstruir as condições de pressão da TRI',
    intro:
      'O exoesqueleto só prova que funciona sob pressão. Nessa fase você usa as provas completas como simulado real — tempo controlado, sem consulta, análise posterior rigorosa.',
    steps: [
      {
        title: '1 simulado completo por semana (180 itens)',
        text: 'Tempo real: 5h30 por dia de prova. Sem pausas longas. O cansaço cognitivo do segundo dia é parte da prova — precisa ser treinado, não descoberto na hora.',
      },
      {
        title: 'Análise pós-simulado: mapa de erro por padrão, não por questão',
        text: '"Errei 4 das 6 questões de Estatística com tabela" é informação. "Errei a questão 23" não é. Analise por eixo, por tipo de suporte, por nível de dificuldade TRI.',
      },
      {
        title: 'Mapeie seu perfil TRI',
        text: 'Itens fáceis errados penalizam mais que difíceis não respondidos. Identifique sua taxa de erro por nível — isso define se você deve ser mais conservador ou agressivo na estratégia de tempo.',
      },
      {
        title: 'Última semana: zero conteúdo novo',
        text: 'Apenas revisão de padrões mapeados e um simulado leve. O cérebro precisa de consolidação, não de sobrecarga pré-prova.',
      },
    ],
    alert: null,
    alertType: null,
  },
];

export const PATTERN_ROWS = [
  {
    tag: 'Contexto real',
    tagClass: 'bg-emerald-500/15 text-emerald-300',
    text: 'Toda questão começa com dado real (IBGE, INMET, IPCC, notícia, lei, obra de arte). O cálculo ou raciocínio é quase sempre simples — a dificuldade está na leitura do contexto. Quem ignora o contexto cai no distrator principal.',
  },
  {
    tag: 'Dado supérfluo',
    tagClass: 'bg-red-500/15 text-red-300',
    text: 'O enunciado sempre traz mais informação do que o necessário. Um dado que parece essencial é deliberadamente irrelevante. Identificar o dado supérfluo é competência de prova — não de conteúdo. Treine isso ativamente nas 24 provas.',
  },
  {
    tag: 'Distrator principal',
    tagClass: 'bg-red-500/15 text-red-300',
    text: 'Sempre há uma alternativa que captura o erro mais provável — a operação que o candidato faria se lesse rápido demais, ou se trouxesse conhecimento do mundo que não está no suporte. Nomeie esse distrator em toda questão errada.',
  },
  {
    tag: 'Interdisciplinaridade',
    tagClass: 'bg-amber-500/15 text-amber-300',
    text: 'Matemática com dados do IBGE. Química com geopolítica de terras-raras. Filosofia com comportamento de algoritmo. Linguagens com fenômeno físico (estiagem). A prova nunca testa uma área em isolamento total — seu repertório cruzado (programação + filosofia + hermetismo) é vantagem real aqui.',
  },
  {
    tag: 'TRI — ordem da prova',
    tagClass: 'bg-amber-500/15 text-amber-300',
    text: 'Os itens fáceis não estão no início — estão distribuídos pela prova. Candidatos que resolvem linearmente desperdiçam tempo nos difíceis e erram os fáceis por cansaço. Estratégia: varredura rápida nos primeiros 10 min para identificar e marcar os itens de baixa dificuldade aparente.',
  },
  {
    tag: 'Função social do texto',
    tagClass: 'bg-violet-500/15 text-violet-300',
    text: 'Em Linguagens, a pergunta sempre subjacente é: "qual o propósito social desse texto, gênero ou escolha estética?" Não há questão de gramática pura — há gramática a serviço de uma intencionalidade discursiva identificável.',
  },
];

export const AREA_CARDS = [
  {
    title: 'Matemática',
    tag: 'eixo dominante',
    tagClass: 'bg-amber-500/20 text-amber-300',
    text: 'Não testa cálculo — testa interpretação de dado em contexto real. O cálculo raramente passa de 2 operações. O erro quase sempre é na leitura do contexto, não na conta.',
  },
  {
    title: 'Linguagens',
    tag: 'eixo dominante',
    tagClass: 'bg-sky-500/20 text-sky-300',
    text: 'Não testa gramática — testa intencionalidade discursiva. Por que esse texto usa esse gênero? O que a escolha lexical revela sobre poder, resistência ou identidade?',
  },
  {
    title: 'Humanas',
    tag: 'eixo dominante',
    tagClass: 'bg-violet-500/20 text-violet-300',
    text: 'Não testa data — testa causalidade e analogia histórica. Um evento do passado ilumina um fenômeno do presente. A questão sempre tem uma "ponte" temporal explícita ou implícita.',
  },
  {
    title: 'Ciências da Natureza',
    tag: 'eixo de suporte',
    tagClass: 'bg-emerald-500/20 text-emerald-300',
    text: 'Não testa fórmula — testa leitura de fenômeno. O candidato precisa reconhecer qual lei ou processo está operando no contexto dado, não reproduzir a equação de cor.',
  },
];

export const VOCAB_ITEMS = [
  {
    term: 'Taxa de incidência',
    tags: 'Nat/Mat',
    def: 'Casos novos por 100 mil habitantes em determinado período. Aparece em dengue, pandemia, saúde pública. Exige razão ou regra de três.',
  },
  {
    term: 'Curva de Lorenz / Gini',
    tags: 'Hum/Mat',
    def: 'Medida de desigualdade. Gini=0 é igualdade total; Gini=1 é concentração total. Contexto: renda, propriedade, acesso a serviços.',
  },
  {
    term: 'Viés algorítmico',
    tags: 'Hum/Ling',
    def: 'Discriminação sistemática produzida por IA treinada em dados históricos enviesados. DNA das questões 2026 sobre reconhecimento facial, seleção de currículos, buscadores.',
  },
  {
    term: 'Metalinguagem',
    tags: 'Ling',
    def: 'Linguagem que fala sobre a própria linguagem. Um texto sobre como o poema foi escrito é metalinguístico. Recorrente em questões de literatura e processo criativo.',
  },
  {
    term: 'Intencionalidade discursiva',
    tags: 'Ling',
    def: 'O propósito comunicativo por trás da escolha de gênero, léxico e estrutura. É o que o ENEM testa em Linguagens — não a forma, mas a função e o efeito de sentido.',
  },
  {
    term: 'Hibridismo cultural',
    tags: 'Hum/Ling',
    def: 'Fusão de elementos de culturas distintas gerando nova expressão (Homi Bhabha). Aparece em identidade, colonialismo, cultura brasileira, transposição de linguagens.',
  },
  {
    term: 'Função social da propriedade',
    tags: 'Hum',
    def: 'Art. 5º, XXIII da CF/88 — o direito de propriedade condicionado ao bem coletivo. Base de questões sobre reforma agrária, habitação e movimentos sociais.',
  },
  {
    term: 'Juros compostos / Montante',
    tags: 'Mat',
    def: 'M = C·(1+i)^n. O montante inclui principal + juros acumulados sobre juros. Contexto 2026: endividamento familiar, financiamento, crédito consignado.',
  },
  {
    term: 'Refugiados climáticos',
    tags: 'Hum/Nat',
    def: 'Deslocamentos humanos forçados por colapso ambiental — seca, inundação, desertificação. Fusão da crise hídrica com a crise de refugiados. Projeção fortíssima 2026.',
  },
  {
    term: 'Deepfake / Desinformação',
    tags: 'Ling/Hum',
    def: 'Conteúdo sintético gerado por IA para manipular percepção. O ENEM 2026 deve explorar responsabilidade das plataformas e curadoria crítica de informação.',
  },
  {
    term: 'Epistemologia',
    tags: 'Hum/Ling',
    def: 'Estudo do conhecimento — o que é saber, como sabemos, quais são os limites. Aparece em crítica ao eurocentrismo, filosofia da ciência e questões sobre fontes do conhecimento.',
  },
  {
    term: 'Meia-vida',
    tags: 'Nat/Mat',
    def: 'Tempo para metade de uma substância radioativa se desintegrar. Modelagem por função exponencial decrescente. Aparece em física nuclear e medicina diagnóstica.',
  },
  {
    term: 'Preconceito linguístico',
    tags: 'Ling',
    def: 'Hierarquização de variantes linguísticas que deslegitima regionalismos e a língua falada. O ENEM combate ativamente essa postura — valoriza patrimônio linguístico como identidade cultural.',
  },
  {
    term: 'Determinismo geográfico',
    tags: 'Hum',
    def: 'Teoria (criticada) de que o meio físico determina o comportamento humano. O ENEM usa para mostrar suas limitações e contrastar com o determinismo social e histórico.',
  },
  {
    term: 'Transposição de linguagem',
    tags: 'Ling',
    def: 'Adaptação de uma obra ou expressão de uma mídia/linguagem para outra (clássico → street dance, literatura → podcast). O ENEM testa a intencionalidade dessa transposição, não a descrição da mudança.',
  },
  {
    term: 'Emissão per capita de CO₂',
    tags: 'Nat/Hum',
    def: 'Toneladas de carbono por habitante. Usado para comparar responsabilidade climática entre países. Cruza com justiça climática — quem menos emite frequentemente mais sofre.',
  },
];

export const WEEK_DAYS = [
  {
    day: 'Segunda',
    title: 'Arqueologia (40–60 min)',
    text: 'Ler 3 provas em modo de mapeamento. Classificar itens: V / N / ?. Registrar 5 observações sobre padrões identificados no dia.',
  },
  {
    day: 'Terça',
    title: 'Dissecação — eixo 1 (60–90 min)',
    text: 'Resolver 20 itens de um eixo temático. Para cada erro: nomear o distrator. Para cada acerto inseguro: refazer sem ver. Escrever o DNA do eixo ao final.',
  },
  {
    day: 'Quarta',
    title: 'Vocabulário + contexto (30–45 min)',
    text: 'Dia de baixa intensidade. Revisitar vocabulários marcados como desconhecidos. Pesquisar 3 aplicações reais de cada um. Sem resolução de itens.',
  },
  {
    day: 'Quinta',
    title: 'Dissecação — eixo 2 (60–90 min)',
    text: 'Mesmo protocolo da terça, área diferente. Ao final: identificar conexão entre os dois eixos trabalhados na semana — o ENEM sempre cruza áreas.',
  },
  {
    day: 'Sexta',
    title: 'Itens híbridos verbal-visual (45–60 min)',
    text: 'Selecionar 10 itens com infográfico, cartum ou imagem das provas. Aplicar a abordagem micro-analítica: o que a imagem argumenta? Qual o distrator que usa a imagem de forma literal?',
  },
  {
    day: 'Sábado',
    title: 'Mini-simulado cronometrado (90 min)',
    text: '30 itens mistos. Análise de erro por padrão, não por questão. Atualizar mapa de frequência pessoal com dados da semana.',
  },
  {
    day: 'Domingo',
    title: 'Consolidação ou dispersão produtiva',
    text: 'Sem estudo estruturado. Se quiser estudar: leitura livre que conecta com algum tema da semana — filosofia, hermetismo, programação, notícia de contexto mundial. Dispersão que alimenta.',
  },
];

export const PROJECOES = [
  {
    title: 'Ética da Inteligência Artificial e viés algorítmico',
    body: 'Evolução direta das questões sobre discriminação racial em buscadores (Q43/2020) e responsabilidade de plataformas (Facebook/F8). Em 2026 o tema amadurece para deepfakes, responsabilidade de empresas de IA e curadoria de dados de treinamento. Aparece em Linguagens, Humanas e potencialmente Matemática (probabilidade condicional em classificadores).',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Refugiados climáticos — fusão de crises',
    body: 'Convergência da crise hídrica (Q21 estiagem SP) com crise de refugiados (Item 14 Balsa de Lampedusa). O tema "refugiados climáticos" conecta geopolítica, direitos humanos e dados ambientais num único item interdisciplinar. Enchentes do RS (2024) são contexto nacional altamente provável como suporte.',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Saúde mental como pauta social e de políticas públicas',
    body: 'O ENEM 2020 já usou saúde mental como tema de redação. Em 2026 deve retornar em formato de item objetivo — estigma, acesso a tratamento, saúde mental pós-pandemia, solidão na era digital. Cruza com Humanas (políticas públicas) e Linguagens (discurso do sofrimento).',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Brasilidade 4.0 — patrimônio cultural em suportes digitais',
    body: 'Machado de Assis, Guimarães Rosa, Chico Buarque continuam — mas revisitados através de podcasts, realidade aumentada, playlists curadas. O ENEM testa a transposição de linguagem e a manutenção (ou perda) de intencionalidade original nessa migração para o digital.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Transição energética e conflito territorial no Nordeste',
    body: 'Expansão de parques eólicos e solares vs. direitos de comunidades indígenas e quilombolas. Tensão entre agenda ambiental global e justiça territorial local. Em Matemática: eficiência percentual, potência, custo por kWh. Em Humanas: geopolítica, direito territorial, colonialismo verde.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Lélia Gonzalez e pensamento decolonial brasileiro',
    body: 'Crescente presença de intelectuais negras brasileiras como suporte. "Amefricanidade", pretuguês, crítica ao eurocentrismo epistêmico. Em Linguagens: variação linguística como resistência. Em Humanas: epistemologia decolonial e produção de conhecimento periférico.',
    badge: 'Em ascensão',
    badgeClass: 'bg-violet-500/20 text-violet-300',
  },
  {
    title: 'Endividamento familiar e matemática financeira contextualizada',
    body: 'Inadimplência recorde no Brasil em 2024 (Banco Central). Juros compostos, renda comprometida, armadilha do crédito rotativo. O ENEM deve usar dados reais do BC como suporte para itens de Matemática Financeira — exatamente o perfil das projeções do Relatório 2.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
];

export const MATRIX_ROWS = [
  ['Redação (C3 argumentação)', '★★★', 'Crítico', 'Alto repertório', 'P1 — máxima'],
  ['Funções (lin., quad., exp.)', '★★★', 'Alto', 'Em consolidação', 'P1 — máxima'],
  ['Probabilidade / Estatística', '★★★', 'Alto', 'Em consolidação', 'P1 — máxima'],
  ['Intencionalidade discursiva', '★★★', 'Crítico', 'Alto (filosofia/retórica)', 'P1 — máxima'],
  ['Filosofia política (Locke, Marx, Foucault)', '★★★', 'Crítico', 'Alto repertório', 'P1 — máxima'],
  ['Matemática Financeira', '★★☆', 'Alto', 'Em desenvolvimento', 'P2 — alta'],
  ['Geometria plana/espacial', '★★☆', 'Alto', 'Em desenvolvimento', 'P2 — alta'],
  ['Sociologia brasileira', '★★☆', 'Crítico', 'Médio', 'P2 — alta'],
  ['História do Brasil', '★★☆', 'Crítico', 'Médio', 'P2 — alta'],
  ['Variação linguística', '★★☆', 'Alto', 'Médio', 'P2 — alta'],
  ['Combinatória / Progressões', '★☆☆', 'Médio', 'Médio (programação)', 'P3 — pontual'],
  ['Ecologia / Biologia aplicada', '★★☆', 'Baixo', 'A desenvolver', 'P3 — não zerar'],
  ['Física / Química contextualizadas', '★★☆', 'Baixo', 'A desenvolver', 'P3 — não zerar'],
  ['Trigonometria isolada', '★☆☆', 'Baixo', 'A desenvolver', 'P4 — ignorar'],
];
