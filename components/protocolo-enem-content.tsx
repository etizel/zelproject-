// protocolo-enem-content.ts
// Conteúdo bifurcado: HUMANAS / EXATAS — ENEM 2026

// ─────────────────────────────────────────
// COMPARTILHADO
// ─────────────────────────────────────────

export const SOURCE_PILLS = [
  'Relatório Linguagens 2020',
  'Relatório Matemática 2020–2026',
  'DNA microscópico ENEM 2021–2026',
];

export const ANATOMY_BLOCKS = [
  {
    label: '1. Suporte (texto base)',
    color: 'text-blue-400',
    body: 'O INEP usa curadoria diversificada de gêneros: fragmento literário, infográfico, cartum, canção, decreto, notícia científica, dado do IBGE, obra de arte. A imagem nunca é acessória — ela é argumento central. O suporte ancora a competência de área e transforma a língua em documento vivo de leitura do mundo.',
  },
  {
    label: '2. Comando (enunciado)',
    color: 'text-amber-400',
    body: 'Estratégia do especialista: leia o comando primeiro, suporte depois. O comando revela o foco antes de você se perder no texto de apoio. Quem leu o comando primeiro vai direto ao que a prova quer — sem se perder no apelo emocional da imagem ou nos dados secundários.',
  },
  {
    label: '3. Distratores (pluralidade de alternativas)',
    color: 'text-red-400',
    body: 'A TRI penaliza a leitura superficial. Cada distrator foi construído para capturar um erro específico e previsível. Ao errar qualquer item, a primeira tarefa é nomear: qual raciocínio equivocado esse distrator estava capturando?',
  },
  {
    label: '4. Filtragem de distratores — regra de ouro',
    color: 'text-emerald-400',
    body: 'Elimine alternativas que, embora verdadeiras no mundo, não possuem amparo semântico no suporte fornecido. O ENEM não testa o que você sabe sobre o tema — testa o que o texto/imagem/dado fornecido sustenta.',
  },
];

export const HYBRID_STEPS = [
  {
    title: 'Infográficos e persuasão',
    text: 'A fusão visual é o argumento — não ilustração. Conecte a imagem à norma ou conceito que o comando exige.',
  },
  {
    title: 'Cartuns e ironia',
    text: 'O humor ácido (Quino, Laerte) exige identificar a crítica implícita, não descrever o que está desenhado.',
  },
  {
    title: 'Arte como memorial antropológico',
    text: 'Instalações e performances são tratadas como documentos históricos. A pergunta é sempre qual função social essa obra cumpre.',
  },
  {
    title: 'Dados técnicos como suporte linguístico',
    text: 'Gráficos do IBGE, mapas do IPCC — o raciocínio é o mesmo da leitura textual: identificar intencionalidade e filtrar dado supérfluo.',
  },
];

export const PATTERN_ROWS = [
  {
    tag: 'Contexto real',
    tagClass: 'bg-emerald-500/15 text-emerald-300',
    text: 'Toda questão começa com dado real (IBGE, INMET, IPCC, lei, obra de arte). O cálculo ou raciocínio é quase sempre simples — a dificuldade está na leitura do contexto.',
  },
  {
    tag: 'Dado supérfluo',
    tagClass: 'bg-red-500/15 text-red-300',
    text: 'O enunciado sempre traz mais informação do que o necessário. Um dado que parece essencial é deliberadamente irrelevante. Identificar o dado supérfluo é competência de prova.',
  },
  {
    tag: 'Distrator principal',
    tagClass: 'bg-red-500/15 text-red-300',
    text: 'Há sempre uma alternativa que captura o erro mais provável. Nomeie esse distrator em toda questão errada — esse processo é mais valioso que rever o acerto.',
  },
  {
    tag: 'Interdisciplinar',
    tagClass: 'bg-blue-500/15 text-blue-300',
    text: 'A prova nunca testa uma área em isolamento total. Matemática com dados do IBGE. Química com geopolítica. Filosofia com comportamento de algoritmo.',
  },
  {
    tag: 'Perfil TRI',
    tagClass: 'bg-amber-500/15 text-amber-300',
    text: 'Itens fáceis não estão no início. Candidatos que resolvem linearmente desperdiçam tempo e erram fáceis por cansaço. Varredura rápida nos primeiros 10 min é estratégia.',
  },
  {
    tag: 'Função social',
    tagClass: 'bg-violet-500/15 text-violet-300',
    text: 'Em Linguagens, a pergunta subjacente é sempre: qual o propósito social desse texto, gênero ou escolha estética? Gramática só aparece a serviço de uma intencionalidade.',
  },
];

// ─────────────────────────────────────────
// FASES — HUMANAS
// ─────────────────────────────────────────

export const PHASES_HUMANAS = [
  {
    id: 'F1',
    accent: 'purple' as const,
    title: 'Fase 1 — Mapeamento discursivo',
    sub: 'Ler gêneros, não resolver questões',
    intro:
      'Percorra as 24 provas identificando gêneros textuais, tipos de suporte e o vocabulário filosófico e sociológico recorrente. O objetivo não é acertar — é construir o radar semântico do ENEM.',
    steps: [
      {
        title: 'Catalogue gêneros e suportes',
        text: 'Fragmento literário, cartum, letra de música, decreto, artigo de opinião. Para cada item: qual gênero? Qual intencionalidade implícita no uso desse gênero?',
      },
      {
        title: 'Mapeie referências filosóficas e sociológicas',
        text: 'Foucault, Bourdieu, Marx, Lélia Gonzalez, Habermas — quais aparecem mais? Em que contexto são usados como argumento? Isso é seu mapa de repertório real.',
      },
      {
        title: 'Identifique estruturas de argumentação',
        text: 'Como a prova constrói o argumento para chegar na alternativa correta? Qual é a lógica de causalidade histórica usada? Esse padrão vai se repetir.',
      },
      {
        title: 'Entrega da fase',
        text: 'Um mapa com os 15 autores/conceitos mais recorrentes por área (Filosofia, Sociologia, História, Linguagens) e os 10 gêneros textuais mais frequentes.',
      },
    ],
    alert:
      'Ritmo sugerido: 3 provas por sessão, 2 sessões por semana. Não force resolução — o objetivo é reconhecimento de estrutura.',
    alertType: 'green' as const,
  },
  {
    id: 'F2',
    accent: 'amber' as const,
    title: 'Fase 2 — Dissecação crítica',
    sub: 'Resolver por eixo com análise de distrator retórico',
    intro:
      'Agora você resolve, mas com foco em dissecar como cada distrator foi construído para capturar uma leitura superficial ou apressada do suporte.',
    steps: [
      {
        title: 'Blocos de 20 itens por eixo',
        text: 'Filosofia Política, Sociologia Brasileira, História do Brasil, Linguagens — uma área por sessão. Nunca misture eixos: o exoesqueleto se constrói em camadas.',
      },
      {
        title: 'Redação — 1 texto por semana',
        text: 'Aplique o protocolo de estrutura invisível. Foco em C3 (progressão lógica do argumento) e C5 (proposta de intervenção com os 5 elementos). Corrija imediatamente após.',
      },
      {
        title: 'Distrator retórico — nomeie sempre',
        text: 'Em Humanas, o distrator principal costuma ser uma afirmação verdadeira no mundo real mas sem amparo no suporte fornecido. Identifique esse padrão em todo erro.',
      },
      {
        title: 'DNA do eixo — 3 linhas ao final',
        text: 'Qual estrutura de argumento esse eixo exige? Qual o distrator mais frequente? Qual contexto histórico/social aparece mais? Escreva ao final de cada bloco.',
      },
    ],
    alert:
      'Ritmo sugerido: 20 itens por sessão, 3 sessões por semana + 1 redação. A redação não é opcional — ela é a competência de maior impacto na nota final de Humanas.',
    alertType: 'amber' as const,
  },
  {
    id: 'F3',
    accent: 'red' as const,
    title: 'Fase 3 — Simulação real',
    sub: 'Pressão de TRI + redação sob tempo real',
    intro:
      'Condições reais: tempo controlado, sem consulta, análise rigorosa de erro após cada simulado. A última semana antes da prova: zero conteúdo novo.',
    steps: [
      {
        title: '1 simulado de Humanas + Linguagens por semana',
        text: 'Tempo real: 5h30 por dia. Não interrompa — o cansaço cognitivo do segundo dia é parte da prova e precisa ser treinado.',
      },
      {
        title: 'Redação sob tempo cronometrado',
        text: 'Máximo 90 minutos para o texto completo. O pré-protocolo (15 min antes) é inegociável mesmo com pressão de tempo.',
      },
      {
        title: 'Análise pós-simulado por eixo',
        text: '"Errei 4 das 6 questões de Filosofia com texto longo" é dado. "Errei a questão 23" não é. Analise por eixo, por tipo de suporte, por comprimento do item.',
      },
      {
        title: 'Última semana',
        text: 'Zero conteúdo novo. Revisão apenas dos padrões e distratores mapeados. Um simulado leve de no máximo 2h.',
      },
    ],
    alert: undefined,
    alertType: undefined,
  },
];

// ─────────────────────────────────────────
// FASES — EXATAS
// ─────────────────────────────────────────

export const PHASES_EXATAS = [
  {
    id: 'F1',
    accent: 'purple' as const,
    title: 'Fase 1 — Mapeamento quantitativo',
    sub: 'Classificar contextos e funções, não calcular',
    intro:
      'Percorra as 24 provas identificando tipos de função, natureza dos dados (tabela, gráfico, equação) e o contexto real de cada item. O objetivo não é resolver — é reconhecer o padrão estrutural antes do cálculo.',
    steps: [
      {
        title: 'Para cada item de Matemática: identifique o tipo de função',
        text: 'Linear, quadrática, exponencial, logarítmica, probabilística? Esse reconhecimento precede qualquer operação. O ENEM raramente exige cálculo sem antes exigir classificação.',
      },
      {
        title: 'Para cada item de Natureza: identifique o fenômeno',
        text: 'Química orgânica, eletroquímica, termodinâmica, ecologia, genética? Qual lei ou processo está operando? Nomeie antes de tentar resolver.',
      },
      {
        title: 'Mapeie os contextos reais mais frequentes',
        text: 'Endividamento familiar (juros), energia solar (porcentagem/potência), epidemiologia (taxa de incidência), radioatividade (meia-vida), IBGE (estatística). Esses são os "ambientes" do ENEM Exatas.',
      },
      {
        title: 'Entrega da fase',
        text: 'Um mapa com os 12 tipos de contexto mais frequentes por eixo (Matemática, Física, Química, Biologia) e o padrão de operação exigido em cada um.',
      },
    ],
    alert:
      'Ritmo sugerido: 3 provas por sessão, 2 sessões por semana. Foco em classificar — se você calcular nessa fase, está adiantando etapa e perdendo o mapeamento.',
    alertType: 'green' as const,
  },
  {
    id: 'F2',
    accent: 'amber' as const,
    title: 'Fase 2 — Dissecação numérica',
    sub: 'Resolver por eixo com análise de distrator de cálculo',
    intro:
      'Agora você resolve, com foco em identificar qual erro de raciocínio quantitativo cada distrator foi construído para capturar.',
    steps: [
      {
        title: 'Blocos de 20 itens por eixo',
        text: 'Funções, Probabilidade/Estatística, Química Orgânica, Física (Energia e Termologia) — uma área por sessão. O exoesqueleto se constrói em camadas, não em mosaico.',
      },
      {
        title: 'Distrator quantitativo — nomeie sempre',
        text: 'Em Exatas, o distrator principal costuma ser o resultado de uma operação parcial apresentada como final, ou a aplicação de uma fórmula sem ler o contexto. Identifique esse padrão.',
      },
      {
        title: 'Acerto inseguro — refaça do zero',
        text: 'Acertou mas não sabe explicar cada etapa? É fluência ilusória. Refaça sem ver a alternativa e articule o raciocínio antes de conferir.',
      },
      {
        title: 'DNA do eixo — 3 linhas ao final',
        text: 'Qual operação esse eixo quase sempre exige? Qual dado no enunciado é supérfluo com mais frequência? Qual é o distrator mais comum?',
      },
    ],
    alert:
      'Ritmo sugerido: 20 itens por sessão, 3 sessões por semana. Volume sem análise de erro é o desperdício mais caro nesse material.',
    alertType: 'amber' as const,
  },
  {
    id: 'F3',
    accent: 'red' as const,
    title: 'Fase 3 — Simulação cronometrada',
    sub: 'Perfil TRI + controle de fadiga cognitiva',
    intro:
      'Condições reais com análise de desempenho por nível TRI. O erro que mais aparece nessa fase é gastar tempo excessivo em itens difíceis e errar os fáceis por cansaço.',
    steps: [
      {
        title: '1 simulado de Matemática + Natureza por semana',
        text: 'Tempo real: 5h por dia. Registre o tempo gasto por questão. Esse dado vai construir sua estratégia de navegação.',
      },
      {
        title: 'Mapeie seu perfil TRI',
        text: 'Quantos itens fáceis você erra? Itens fáceis errados penalizam mais que difíceis sem resposta. Identifique sua taxa por nível — isso define se você deve ser conservador ou agressivo no tempo.',
      },
      {
        title: 'Análise pós-simulado por eixo quantitativo',
        text: '"Errei 5 das 7 questões de funções em contexto" é dado acionável. Analise por tipo de operação, por contexto real, por nível de dificuldade TRI.',
      },
      {
        title: 'Última semana',
        text: 'Zero conteúdo novo. Revisão dos padrões mapeados e dos distratores quantitativos mais frequentes. Nenhum simulado pesado.',
      },
    ],
    alert: undefined,
    alertType: undefined,
  },
];

// ─────────────────────────────────────────
// SEMANA-TIPO — HUMANAS
// ─────────────────────────────────────────

export const WEEK_DAYS_HUMANAS = [
  {
    day: 'Segunda',
    title: 'Arqueologia de gêneros (40–60 min)',
    text: '3 provas em modo de leitura: identificar gêneros, intencionalidade discursiva, referências filosóficas. Registrar observações — não resolver.',
  },
  {
    day: 'Terça',
    title: 'Dissecação — Filosofia/Sociologia (60–90 min)',
    text: '20 itens de um eixo. Para cada erro: nomear o distrator retórico. Para cada acerto inseguro: articular o raciocínio por escrito antes de conferir.',
  },
  {
    day: 'Quarta',
    title: 'Vocabulário crítico (30–45 min)',
    text: 'Revisitar conceitos-chave: hibridismo cultural, intencionalidade discursiva, epistemologia decolonial, metalinguagem. Pesquisar 3 aplicações reais de cada um.',
  },
  {
    day: 'Quinta',
    title: 'Redação completa (60–90 min)',
    text: '15 min de pré-protocolo (mapa de argumentos, proposta de intervenção, referência de abertura) + 75 min de escrita. Corrigir pelas 5 competências imediatamente após.',
  },
  {
    day: 'Sexta',
    title: 'Linguagens — itens híbridos (45–60 min)',
    text: '10 itens com infográfico, cartum ou imagem. Foco na abordagem micro-analítica: o que a imagem argumenta? Qual distrator usa a imagem de forma literal?',
  },
  {
    day: 'Sábado',
    title: 'Mini-simulado Humanas (90 min)',
    text: '30 itens mistos de Humanas + Linguagens cronometrados. Análise de erro por eixo, não por questão.',
  },
  {
    day: 'Domingo',
    title: 'Dispersão produtiva',
    text: 'Sem estudo estruturado. Leitura filosófica, literária ou sociológica de livre escolha. A conexão com o tema da semana é bem-vinda, mas não obrigatória.',
  },
];

// ─────────────────────────────────────────
// SEMANA-TIPO — EXATAS
// ─────────────────────────────────────────

export const WEEK_DAYS_EXATAS = [
  {
    day: 'Segunda',
    title: 'Mapeamento de funções (40–60 min)',
    text: '3 provas: classificar cada item de Matemática e Natureza por tipo de função e contexto real. Não calcular — reconhecer. Registrar os contextos mais frequentes.',
  },
  {
    day: 'Terça',
    title: 'Dissecação — Funções/Probabilidade (60–90 min)',
    text: '20 itens de um eixo matemático. Para cada erro: nomear o distrator quantitativo. Para cada acerto inseguro: refazer do zero e articular cada etapa.',
  },
  {
    day: 'Quarta',
    title: 'Vocabulário científico (30–45 min)',
    text: 'Revisitar conceitos: taxa de incidência, meia-vida, entalpia, NOX, concentração molar, desvio padrão. Pesquisar 3 contextos reais de aplicação de cada um.',
  },
  {
    day: 'Quinta',
    title: 'Dissecação — Química/Física (60–90 min)',
    text: '20 itens de Ciências da Natureza. Foco em reconhecer qual fenômeno está operando antes de tentar calcular. Nomear o distrator de cada erro.',
  },
  {
    day: 'Sexta',
    title: 'Itens quantitativos com dados reais (45–60 min)',
    text: '15 itens com gráfico, tabela ou infográfico de dados reais (IBGE, Banco Central, INMET). Treinar leitura de suporte quantitativo antes do cálculo.',
  },
  {
    day: 'Sábado',
    title: 'Mini-simulado Exatas (90 min)',
    text: '30 itens mistos de Matemática + Natureza cronometrados. Registrar tempo por questão. Análise de erro por eixo e por nível TRI.',
  },
  {
    day: 'Domingo',
    title: 'Dispersão produtiva',
    text: 'Sem estudo estruturado. Vídeo científico, documentário, ou leitura sobre tecnologia, energia ou biologia. A curiosidade alimenta o reconhecimento de contexto.',
  },
];

// ─────────────────────────────────────────
// VOCABULÁRIO — HUMANAS
// ─────────────────────────────────────────

export const HUMANAS_VOCAB_ITEMS = [
  {
    term: 'Intencionalidade discursiva',
    tags: '· Ling',
    def: 'O propósito comunicativo por trás da escolha de gênero, léxico e estrutura. É o que o ENEM testa em Linguagens — não a forma, mas a função e o efeito de sentido.',
  },
  {
    term: 'Metalinguagem',
    tags: '· Ling',
    def: 'Linguagem que fala sobre a própria linguagem. Um texto sobre como o poema foi escrito é metalinguístico. Recorrente em questões de literatura e processo criativo.',
  },
  {
    term: 'Hibridismo cultural',
    tags: '· Hum/Ling',
    def: 'Fusão de elementos de culturas distintas gerando nova expressão (Homi Bhabha). Aparece em identidade, colonialismo, cultura brasileira e transposição de linguagens.',
  },
  {
    term: 'Epistemologia decolonial',
    tags: '· Hum',
    def: 'Crítica às formas de produção de conhecimento que apagam saberes não-europeus. Lélia Gonzalez, Achille Mbembe, Quijano. Fortíssimo para 2026.',
  },
  {
    term: 'Determinismo geográfico',
    tags: '· Hum',
    def: 'Teoria (criticada) de que o meio físico determina o comportamento humano. O ENEM usa para mostrar suas limitações e contrastar com o determinismo social.',
  },
  {
    term: 'Biopoder / Biopolítica',
    tags: '· Hum',
    def: 'Conceito foucaultiano: poder do Estado sobre os corpos e a vida das populações. Aparece em saúde pública, vigilância digital, controle de pandemias.',
  },
  {
    term: 'Viés algorítmico',
    tags: '· Hum/Ling',
    def: 'Discriminação sistemática produzida por IA treinada em dados históricos enviesados. DNA das questões 2026 sobre reconhecimento facial e curadoria de informação.',
  },
  {
    term: 'Preconceito linguístico',
    tags: '· Ling',
    def: 'Hierarquização de variantes linguísticas que deslegitima regionalismos e a língua falada. O ENEM combate essa postura — valoriza patrimônio linguístico como identidade.',
  },
  {
    term: 'Função social da propriedade',
    tags: '· Hum',
    def: 'Art. 5º, XXIII da CF/88: o direito de propriedade condicionado ao bem coletivo. Base de questões sobre reforma agrária, habitação e movimentos sociais.',
  },
  {
    term: 'Desinformação / Pós-verdade',
    tags: '· Ling/Hum',
    def: 'Conteúdo falso ou manipulado que circula como verdade. O ENEM 2026 deve explorar responsabilidade de plataformas e curadoria crítica de informação.',
  },
  {
    term: 'Transposição de linguagem',
    tags: '· Ling',
    def: 'Adaptação de uma obra de uma mídia para outra (clássico → street dance, literatura → podcast). O ENEM testa a intencionalidade dessa transposição.',
  },
  {
    term: 'Capital cultural',
    tags: '· Hum',
    def: 'Conceito de Bourdieu: conjunto de recursos simbólicos (educação, gostos, hábitos) que reproduzem desigualdades sociais. Aparece em questões sobre escola e mobilidade.',
  },
];

// ─────────────────────────────────────────
// VOCABULÁRIO — EXATAS
// ─────────────────────────────────────────

export const EXATAS_VOCAB_ITEMS = [
  {
    term: 'Taxa de incidência',
    tags: '· Nat/Mat',
    def: 'Casos novos por 100 mil habitantes em determinado período. Aparece em dengue, pandemia, saúde pública. Exige razão ou regra de três — o contexto muda, a operação não.',
  },
  {
    term: 'Meia-vida',
    tags: '· Nat/Mat',
    def: 'Tempo para metade de uma substância radioativa se desintegrar. Modelagem por função exponencial decrescente. Aparece em física nuclear e medicina diagnóstica.',
  },
  {
    term: 'Juros compostos / Montante',
    tags: '· Mat',
    def: 'M = C·(1+i)^n. O montante inclui principal + juros acumulados sobre juros. Contexto 2026: endividamento familiar, financiamento habitacional, crédito consignado.',
  },
  {
    term: 'Entalpia de reação (ΔH)',
    tags: '· Nat',
    def: 'Variação de energia em reações químicas. Exotérmica: libera calor (ΔH < 0). Endotérmica: absorve calor (ΔH > 0). Contexto: combustíveis, biocombustíveis, impacto de CO₂.',
  },
  {
    term: 'NOX — Número de Oxidação',
    tags: '· Nat',
    def: 'Carga fictícia de um átomo numa ligação química. Determina quem oxida e quem reduz nas reações redox. Conceito central para pilhas, corrosão e eletrólise.',
  },
  {
    term: 'Concentração molar (mol/L)',
    tags: '· Nat',
    def: 'Mol de soluto por litro de solução. Aparece em soro caseiro, medicamentos, água sanitária. A operação é simples — o desafio é identificar o que o enunciado está pedindo.',
  },
  {
    term: 'Desvio padrão',
    tags: '· Mat',
    def: 'Medida de dispersão dos dados em relação à média. Aparece em avaliações educacionais, pesquisas climáticas, dados epidemiológicos. O ENEM cobra interpretação, não cálculo manual.',
  },
  {
    term: 'Função exponencial',
    tags: '· Mat',
    def: 'f(x) = a·bˣ. Modela crescimento populacional, epidemias, radioatividade, juros compostos. Reconheça o padrão no contexto antes de calcular.',
  },
  {
    term: 'Eficiência energética (%)',
    tags: '· Nat/Mat',
    def: 'Razão entre energia útil e energia total fornecida. Aparece em motores, painéis solares, lâmpadas. Contexto 2026: transição energética e consumo residencial.',
  },
  {
    term: 'Emissão per capita de CO₂',
    tags: '· Nat',
    def: 'Toneladas de carbono por habitante. Usado para comparar responsabilidade climática entre países. Cruza com justiça climática — quem menos emite frequentemente mais sofre.',
  },
  {
    term: 'Biotecnologia / CRISPR',
    tags: '· Nat',
    def: 'Edição genética por RNA guia. O ENEM testa a compreensão ética e social do uso — não o mecanismo molecular detalhado. Aparece em transgênicos e medicina de precisão.',
  },
  {
    term: 'Curva de Lorenz / Gini',
    tags: '· Mat',
    def: 'Gini = 0 é igualdade total; Gini = 1 é concentração total. Aparece em estatística social — exige leitura de gráfico e interpretação de área, não cálculo complexo.',
  },
];

// ─────────────────────────────────────────
// PROJEÇÕES — HUMANAS
// ─────────────────────────────────────────

export const HUMANAS_PROJECOES = [
  {
    title: 'Epistemologia decolonial e pensamento negro brasileiro',
    body: 'Lélia Gonzalez, Ailton Krenak, Achille Mbembe — crescente presença como suporte de Humanas e Linguagens. Amefricanidade, pretuguês, crítica ao eurocentrismo epistêmico.',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Desinformação, deepfakes e democracia',
    body: 'Responsabilidade de plataformas, curadoria crítica de informação, manipulação de percepção pública. Foco em Linguagens (análise de discurso) e Humanas (cidadania e direitos).',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Saúde mental como pauta de políticas públicas',
    body: 'Estigma social, acesso a tratamento, solidão na era digital, medicalização excessiva. Cruza com Humanas (políticas públicas) e Linguagens (discurso sobre sofrimento psíquico).',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Refugiados climáticos e direitos humanos',
    body: 'Deslocamentos forçados por colapso ambiental (seca, inundação). Conecta geopolítica, direitos humanos e dados ambientais num único item interdisciplinar.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Brasilidade 4.0 — patrimônio cultural no digital',
    body: 'Machado, Rosa, Chico Buarque revisitados via podcasts, realidade aumentada. O ENEM testa a intencionalidade da transposição — o que se preserva e o que se perde na migração.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Trabalho plataformizado e uberização',
    body: 'Precarização do trabalho via aplicativos. Ausência de vínculo empregatício, ausência de direitos trabalhistas, controle algorítmico do trabalhador. Cruza Sociologia com Filosofia do direito.',
    badge: 'Em ascensão',
    badgeClass: 'bg-violet-500/20 text-violet-300',
  },
];

// ─────────────────────────────────────────
// PROJEÇÕES — EXATAS
// ─────────────────────────────────────────

export const EXATAS_PROJECOES = [
  {
    title: 'Transição energética — solar e eólico no Nordeste',
    body: 'Em Matemática: eficiência percentual, potência instalada, custo por kWh. Em Natureza: impacto ambiental da instalação, geopolítica de terras-raras nos componentes.',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Endividamento familiar — matemática financeira contextualizada',
    body: 'Inadimplência recorde no Brasil (Banco Central 2024). Juros compostos, renda comprometida, armadilha do crédito rotativo. Dados reais do BC como suporte do item.',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'Epidemiologia e saúde pública — dados e gráficos',
    body: 'Taxa de incidência, R0, desvio padrão em avaliações. Dengue, saúde mental pós-pandemia. Gráfico epidemiológico como suporte em Natureza e Matemática.',
    badge: 'Muito provável',
    badgeClass: 'bg-red-500/20 text-red-300',
  },
  {
    title: 'IA e algoritmos — matemática probabilística',
    body: 'Combinatória de dados de treinamento, probabilidade condicional em classificadores. Viés algorítmico como fenômeno mensurável. Cruza Matemática com contexto social.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Recursos hídricos e crise climática — dados ambientais',
    body: 'Índice pluviométrico, volume de reservatórios, temperatura média — todos como suporte quantitativo. O item exige leitura de gráfico ambiental e interpretação de tendência.',
    badge: 'Provável',
    badgeClass: 'bg-amber-500/20 text-amber-300',
  },
  {
    title: 'Biotecnologia e genética aplicada',
    body: 'CRISPR, transgênicos, mapeamento genético em saúde. O ENEM testa a compreensão ética e social — não o mecanismo molecular. Dados de frequência alélica podem aparecer.',
    badge: 'Em ascensão',
    badgeClass: 'bg-violet-500/20 text-violet-300',
  },
];

// ─────────────────────────────────────────
// MATRIZ — HUMANAS
// Colunas: [Eixo, Freq. histórica, Peso no corte, Prioridade]
// "Seu nível" é interativo no componente — não pré-preenchido aqui
// ─────────────────────────────────────────

export const HUMANAS_MATRIX_ROWS: string[][] = [
  ['Redação (C3 argumentação)', '★★★', 'Crítico', 'P1 — máxima'],
  ['Ciências Humanas — Filosofia/Soc.', '★★★', 'Crítico', 'P1 — máxima'],
  ['Linguagens — intencionalidade', '★★★', 'Crítico', 'P1 — máxima'],
  ['Linguagens — variação linguística', '★★☆', 'Alto', 'P2 — alta'],
  ['Humanas — História do Brasil', '★★☆', 'Alto', 'P2 — alta'],
  ['Humanas — Geopolítica/Geo. Humana', '★★☆', 'Alto', 'P2 — alta'],
  ['Redação — C5 proposta de intervenção', '★★★', 'Crítico', 'P1 — máxima'],
  ['Linguagens — literatura brasileira', '★★☆', 'Médio', 'P2 — alta'],
  ['Estatística descritiva (leitura)', '★★☆', 'Médio', 'P3 — pontual'],
  ['Natureza — ecologia/saúde (contexto)', '★★☆', 'Baixo', 'P3 — não zerar'],
  ['Matemática — interpretação de dados', '★☆☆', 'Baixo', 'P3 — não zerar'],
  ['Física/Química — fórmula isolada', '★☆☆', 'Baixo', 'P4 — ignorar'],
];

// ─────────────────────────────────────────
// MATRIZ — EXATAS
// Colunas: [Eixo, Freq. histórica, Peso no corte, Prioridade]
// ─────────────────────────────────────────

export const EXATAS_MATRIX_ROWS: string[][] = [
  ['Funções — lin., quad., exp., log.', '★★★', 'Crítico', 'P1 — máxima'],
  ['Probabilidade / Estatística', '★★★', 'Crítico', 'P1 — máxima'],
  ['Química orgânica e ambiental', '★★★', 'Crítico', 'P1 — máxima'],
  ['Matemática financeira', '★★☆', 'Alto', 'P2 — alta'],
  ['Geometria plana / espacial', '★★☆', 'Alto', 'P2 — alta'],
  ['Biologia — ecologia e saúde', '★★☆', 'Alto', 'P2 — alta'],
  ['Física — energia e termologia', '★★☆', 'Médio', 'P2 — alta'],
  ['Química — eletroquímica/redox', '★★☆', 'Médio', 'P2 — alta'],
  ['Combinatória / Progressões', '★☆☆', 'Médio', 'P3 — pontual'],
  ['Ciências Humanas (contexto)', '★★☆', 'Baixo', 'P3 — não zerar'],
  ['Linguagens — leitura de gráfico', '★★☆', 'Baixo', 'P3 — não zerar'],
  ['Trigonometria isolada', '★☆☆', 'Baixo', 'P4 — ignorar'],
];

// ─────────────────────────────────────────
// ÁREA-CARDS — HUMANAS
// ─────────────────────────────────────────

export const HUMANAS_AREA_CARDS = [
  {
    title: 'Redação',
    tag: 'peso máximo',
    tagClass: 'bg-violet-500/20 text-violet-300',
    text: 'Repertório filosófico e argumentação encadeada. C3 (lógica do argumento) e C5 (proposta com 5 elementos) são onde a profundidade filosófica se converte em nota.',
  },
  {
    title: 'Ciências Humanas',
    tag: 'eixo dominante',
    tagClass: 'bg-violet-500/20 text-violet-300',
    text: 'Não testa data — testa causalidade e analogia histórica. Um evento do passado ilumina um fenômeno do presente. Foucault, Bourdieu, Marx são motores de argumentação.',
  },
  {
    title: 'Linguagens',
    tag: 'eixo crítico',
    tagClass: 'bg-blue-500/20 text-blue-300',
    text: 'Não testa gramática — testa intencionalidade discursiva. Por que esse texto usa esse gênero? O que a escolha lexical revela sobre poder, resistência ou identidade?',
  },
  {
    title: 'Ciências da Natureza',
    tag: 'não zerar',
    tagClass: 'bg-emerald-500/20 text-emerald-300',
    text: 'Foco em ecologia, saúde pública e impacto ambiental — itens contextualizados que exigem leitura social, não cálculo. Meta realista: 55–65% de aproveitamento.',
  },
];

// ─────────────────────────────────────────
// ÁREA-CARDS — EXATAS
// ─────────────────────────────────────────

export const EXATAS_AREA_CARDS = [
  {
    title: 'Matemática',
    tag: 'eixo dominante',
    tagClass: 'bg-amber-500/20 text-amber-300',
    text: 'Não testa cálculo — testa interpretação de dado em contexto real. O cálculo raramente passa de 2 operações. O erro quase sempre está na leitura do contexto, não na conta.',
  },
  {
    title: 'Ciências da Natureza',
    tag: 'eixo dominante',
    tagClass: 'bg-emerald-500/20 text-emerald-300',
    text: 'Não testa fórmula — testa leitura de fenômeno. Reconheça qual lei ou processo está operando no contexto dado. Química orgânica e ecologia são os eixos mais frequentes.',
  },
  {
    title: 'Linguagens',
    tag: 'leitura de dados',
    tagClass: 'bg-blue-500/20 text-blue-300',
    text: 'Fluência em leitura de gráfico e infográfico é habilidade de Linguagens que aparece em Matemática. O ENEM cruza as áreas — o candidato de Exatas precisa ler bem.',
  },
  {
    title: 'Ciências Humanas',
    tag: 'não zerar',
    tagClass: 'bg-violet-500/20 text-violet-300',
    text: 'Foco em filosofia da ciência, geopolítica ambiental e sociologia tecnológica. Itens que cruzam tecnologia com impacto social são cada vez mais frequentes no ENEM.',
  },
];

// ─────────────────────────────────────────
// ALIASES — compatibilidade com imports antigos
// ─────────────────────────────────────────

export const VOCAB_ITEMS = HUMANAS_VOCAB_ITEMS;
export const PROJECOES = HUMANAS_PROJECOES;
export const MATRIX_ROWS = HUMANAS_MATRIX_ROWS;
export const AREA_CARDS = HUMANAS_AREA_CARDS;
export const PHASES = PHASES_HUMANAS;
export const WEEK_DAYS = WEEK_DAYS_HUMANAS;
