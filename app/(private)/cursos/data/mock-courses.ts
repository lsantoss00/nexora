export type CourseCategory = "tecnologia" | "design" | "negocios" | "marketing";

export type CourseType = {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  durationInMinutes: number;
  authorName: string;
  authorInitial: string;
  progress?: number;
  thumbnailGradient: string;
  thumbnailUrl: string;
};

const THUMBNAIL_GRADIENT = "from-zinc-700 via-zinc-800 to-zinc-900";

export const mockCourses: CourseType[] = [
  {
    id: "1",
    title: "Desenvolvimento Full-Stack Avançado",
    description:
      "Domine o desenvolvimento web moderno com React, Node.js e Arquitetura Cloud. Construa aplicações escaláveis do zero.",
    category: "tecnologia",
    durationInMinutes: 750,
    authorName: "Sarah Chen",
    authorInitial: "S",
    progress: 65,
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop",
  },
  {
    id: "2",
    title: "Mestria em UX/UI Design",
    description:
      "Aprenda a criar experiências de usuário intuitivas e interfaces bonitas. De wireframing a protótipos de alta fidelidade.",
    category: "design",
    durationInMinutes: 615,
    authorName: "Marcus Alvez",
    authorInitial: "M",
    progress: 30,
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1920&h=1080&fit=crop",
  },
  {
    id: "3",
    title: "Liderança Empresarial Estratégica",
    description:
      "Desenvolva habilidades para liderar equipes, tomar decisões estratégicas e impulsionar o crescimento em mercados competitivos.",
    category: "negocios",
    durationInMinutes: 525,
    authorName: "Elena Rossi",
    authorInitial: "E",
    progress: 98,
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop",
  },
  {
    id: "4",
    title: "Fundamentos de Marketing Digital",
    description:
      "Domine SEO, marketing em redes sociais e estratégias de anúncios pagos para crescer qualquer marca online.",
    category: "marketing",
    durationInMinutes: 480,
    authorName: "James Park",
    authorInitial: "J",
    progress: 14,
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1920&h=1080&fit=crop",
  },
  {
    id: "5",
    title: "Arquitetura Cloud & DevOps",
    description:
      "Projete e implante aplicações cloud-native com AWS, Docker e Kubernetes. Pipelines CI/CD e infraestrutura como código.",
    category: "tecnologia",
    durationInMinutes: 840,
    authorName: "David Kim",
    authorInitial: "D",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop",
  },
  {
    id: "6",
    title: "Motion Design & Animação",
    description:
      "Crie animações e motion graphics impressionantes para web e mobile. Aprenda After Effects, Framer Motion e animações CSS.",
    category: "design",
    durationInMinutes: 560,
    authorName: "Ana Costa",
    authorInitial: "A",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop",
  },
  {
    id: "7",
    title: "Planejamento Financeiro para Startups",
    description:
      "Aprenda captação de recursos, modelagem financeira e estratégias de orçamento essenciais para lançar e escalar uma startup.",
    category: "negocios",
    durationInMinutes: 390,
    authorName: "Roberto Nascimento",
    authorInitial: "R",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop",
  },
  {
    id: "8",
    title: "Estratégia de Conteúdo & Copywriting",
    description:
      "Escreva textos que convertem. Aprenda estratégia de conteúdo, técnicas de storytelling e desenvolvimento de voz de marca.",
    category: "marketing",
    durationInMinutes: 420,
    authorName: "Lisa Tran",
    authorInitial: "L",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&h=1080&fit=crop",
  },
  {
    id: "9",
    title: "Desenvolvimento Mobile com React Native",
    description:
      "Construa apps multiplataforma com React Native. Do setup à publicação na App Store com projetos reais.",
    category: "tecnologia",
    durationInMinutes: 680,
    authorName: "Carlos Mendes",
    authorInitial: "C",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop",
  },
  {
    id: "10",
    title: "Design de Identidade Visual",
    description:
      "Crie identidades visuais memoráveis do zero. Design de logo, teoria das cores, tipografia e manual de marca.",
    category: "design",
    durationInMinutes: 450,
    authorName: "Sophie Laurent",
    authorInitial: "S",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1920&h=1080&fit=crop",
  },
  {
    id: "11",
    title: "Gestão de Projetos com Agile",
    description:
      "Domine Scrum, Kanban e metodologias ágeis para entregar projetos no prazo e gerenciar equipes com eficiência.",
    category: "negocios",
    durationInMinutes: 360,
    authorName: "Tomás Barbosa",
    authorInitial: "T",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&h=1080&fit=crop",
  },
  {
    id: "12",
    title: "Growth Hacking em Redes Sociais",
    description:
      "Estratégias comprovadas para crescer sua audiência no Instagram, TikTok e LinkedIn. Alcance orgânico e conteúdo viral.",
    category: "marketing",
    durationInMinutes: 340,
    authorName: "Maya Johnson",
    authorInitial: "M",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop",
  },
  {
    id: "13",
    title: "Padrões Avançados de TypeScript",
    description:
      "Mergulho profundo em generics, tipos condicionais, mapped types e padrões avançados para aplicações enterprise.",
    category: "tecnologia",
    durationInMinutes: 520,
    authorName: "Alex Petrov",
    authorInitial: "A",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1920&h=1080&fit=crop",
  },
  {
    id: "14",
    title: "Design 3D com Blender",
    description:
      "Aprenda modelagem 3D, texturização, iluminação e renderização com Blender. Crie visuais impressionantes para jogos e filmes.",
    category: "design",
    durationInMinutes: 720,
    authorName: "Nina Volkov",
    authorInitial: "N",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=1920&h=1080&fit=crop",
  },
  {
    id: "15",
    title: "Masterclass de E-commerce",
    description:
      "Lance e escale uma loja online. De sourcing de produtos a logística, pagamentos e estratégias de retenção de clientes.",
    category: "negocios",
    durationInMinutes: 580,
    authorName: "Daniel Ortiz",
    authorInitial: "D",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
  },
  {
    id: "16",
    title: "Automação de Email Marketing",
    description:
      "Construa funis de email automatizados que convertem. Segmentação, testes A/B e campanhas drip para máximo engajamento.",
    category: "marketing",
    durationInMinutes: 300,
    authorName: "Raquel Ferreira",
    authorInitial: "R",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&h=1080&fit=crop",
  },
  {
    id: "17",
    title: "Fundamentos de Cibersegurança",
    description:
      "Entenda vulnerabilidades comuns, testes de penetração e melhores práticas de segurança para aplicações web modernas.",
    category: "tecnologia",
    durationInMinutes: 660,
    authorName: "Kevin Zhao",
    authorInitial: "K",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
  },
  {
    id: "18",
    title: "Design Systems em Escala",
    description:
      "Construa e mantenha design systems que escalam. Bibliotecas de componentes, design tokens e colaboração entre equipes.",
    category: "design",
    durationInMinutes: 490,
    authorName: "Isabela Nunes",
    authorInitial: "I",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=1920&h=1080&fit=crop",
  },
  {
    id: "19",
    title: "Negociação & Psicologia de Vendas",
    description:
      "Domine técnicas de persuasão, frameworks de negociação e psicologia de vendas para fechar negócios e construir relacionamentos.",
    category: "negocios",
    durationInMinutes: 410,
    authorName: "Fernando Lima",
    authorInitial: "F",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&h=1080&fit=crop",
  },
  {
    id: "20",
    title: "Produção & Edição de Vídeo",
    description:
      "Produção profissional de vídeo do roteiro ao corte final. Técnicas de câmera, iluminação e fluxos de pós-produção.",
    category: "marketing",
    durationInMinutes: 550,
    authorName: "Camila Rocha",
    authorInitial: "C",
    thumbnailGradient: THUMBNAIL_GRADIENT,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop",
  },
];
