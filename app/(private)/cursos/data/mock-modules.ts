import type { ModuleType } from "../types/course-module-types";

export const mockModules: ModuleType[] = [
  // Course 1: Desenvolvimento Full-Stack Avançado (progress: 65%)
  {
    id: "m1-1",
    courseId: "1",
    title: "Fundamentos do React",
    lessons: [
      {
        id: "l1-1-1",
        title: "Introdução ao React e JSX",
        durationInMinutes: 15,
        completed: true,
      },
      {
        id: "l1-1-2",
        title: "Componentes e Props",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l1-1-3",
        title: "Estado e Ciclo de Vida",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l1-1-4",
        title: "Hooks Essenciais",
        durationInMinutes: 30,
        completed: true,
      },
    ],
  },
  {
    id: "m1-2",
    courseId: "1",
    title: "Node.js & APIs REST",
    lessons: [
      {
        id: "l1-2-1",
        title: "Configurando o Servidor com Express",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l1-2-2",
        title: "Rotas e Middlewares",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l1-2-3",
        title: "Conexão com Banco de Dados",
        durationInMinutes: 30,
        completed: true,
      },
    ],
  },
  {
    id: "m1-3",
    courseId: "1",
    title: "Arquitetura Cloud",
    lessons: [
      {
        id: "l1-3-1",
        title: "Introdução ao Deploy na Nuvem",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l1-3-2",
        title: "Containers com Docker",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l1-3-3",
        title: "CI/CD Pipelines",
        durationInMinutes: 30,
        completed: false,
      },
    ],
  },
  {
    id: "m1-4",
    courseId: "1",
    title: "Projeto Final",
    lessons: [
      {
        id: "l1-4-1",
        title: "Planejamento e Arquitetura",
        durationInMinutes: 15,
        completed: false,
      },
      {
        id: "l1-4-2",
        title: "Desenvolvimento e Integração",
        durationInMinutes: 45,
        completed: false,
      },
      {
        id: "l1-4-3",
        title: "Deploy e Apresentação",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Course 2: Mestria em UX/UI Design (progress: 30%)
  {
    id: "m2-1",
    courseId: "2",
    title: "Fundamentos de UX",
    lessons: [
      {
        id: "l2-1-1",
        title: "Princípios de Design Centrado no Usuário",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l2-1-2",
        title: "Pesquisa com Usuários",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l2-1-3",
        title: "Personas e Jornadas",
        durationInMinutes: 20,
        completed: true,
      },
    ],
  },
  {
    id: "m2-2",
    courseId: "2",
    title: "Wireframing e Prototipação",
    lessons: [
      {
        id: "l2-2-1",
        title: "Sketching e Wireframes de Baixa Fidelidade",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l2-2-2",
        title: "Protótipos Interativos no Figma",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l2-2-3",
        title: "Testes de Usabilidade",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m2-3",
    courseId: "2",
    title: "Design de Interface",
    lessons: [
      {
        id: "l2-3-1",
        title: "Teoria das Cores e Tipografia",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l2-3-2",
        title: "Sistemas de Grid e Layout",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l2-3-3",
        title: "Design Responsivo",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l2-3-4",
        title: "Acessibilidade em UI",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Course 3: Liderança Empresarial Estratégica (progress: 98%)
  {
    id: "m3-1",
    courseId: "3",
    title: "Fundamentos de Liderança",
    lessons: [
      {
        id: "l3-1-1",
        title: "Estilos de Liderança",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l3-1-2",
        title: "Comunicação Efetiva",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l3-1-3",
        title: "Tomada de Decisão",
        durationInMinutes: 20,
        completed: true,
      },
    ],
  },
  {
    id: "m3-2",
    courseId: "3",
    title: "Gestão de Equipes",
    lessons: [
      {
        id: "l3-2-1",
        title: "Construção de Times de Alta Performance",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l3-2-2",
        title: "Delegação e Empoderamento",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l3-2-3",
        title: "Resolução de Conflitos",
        durationInMinutes: 25,
        completed: true,
      },
    ],
  },
  {
    id: "m3-3",
    courseId: "3",
    title: "Estratégia Empresarial",
    lessons: [
      {
        id: "l3-3-1",
        title: "Análise de Mercado e Concorrência",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l3-3-2",
        title: "Planejamento Estratégico",
        durationInMinutes: 30,
        completed: true,
      },
      {
        id: "l3-3-3",
        title: "Inovação e Crescimento",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Course 4: Fundamentos de Marketing Digital (progress: 14%)
  {
    id: "m4-1",
    courseId: "4",
    title: "Introdução ao Marketing Digital",
    lessons: [
      {
        id: "l4-1-1",
        title: "Panorama do Marketing Digital",
        durationInMinutes: 15,
        completed: true,
      },
      {
        id: "l4-1-2",
        title: "Funil de Vendas Online",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l4-1-3",
        title: "Métricas e KPIs",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m4-2",
    courseId: "4",
    title: "SEO e Marketing de Conteúdo",
    lessons: [
      {
        id: "l4-2-1",
        title: "Fundamentos de SEO",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l4-2-2",
        title: "Pesquisa de Palavras-Chave",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l4-2-3",
        title: "Estratégia de Conteúdo",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m4-3",
    courseId: "4",
    title: "Mídia Paga",
    lessons: [
      {
        id: "l4-3-1",
        title: "Google Ads Básico",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l4-3-2",
        title: "Facebook e Instagram Ads",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l4-3-3",
        title: "Otimização de Campanhas",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  // Course 5: Arquitetura Cloud & DevOps (no progress)
  {
    id: "m5-1",
    courseId: "5",
    title: "Fundamentos de Cloud Computing",
    lessons: [
      {
        id: "l5-1-1",
        title: "Conceitos de Computação em Nuvem",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l5-1-2",
        title: "AWS: Primeiros Passos",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l5-1-3",
        title: "Serviços Essenciais da AWS",
        durationInMinutes: 30,
        completed: false,
      },
    ],
  },
  {
    id: "m5-2",
    courseId: "5",
    title: "Containers e Orquestração",
    lessons: [
      {
        id: "l5-2-1",
        title: "Docker na Prática",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l5-2-2",
        title: "Docker Compose",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l5-2-3",
        title: "Kubernetes Essencial",
        durationInMinutes: 35,
        completed: false,
      },
      {
        id: "l5-2-4",
        title: "Helm Charts e Deployments",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m5-3",
    courseId: "5",
    title: "CI/CD e Infraestrutura como Código",
    lessons: [
      {
        id: "l5-3-1",
        title: "GitHub Actions",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l5-3-2",
        title: "Terraform Básico",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l5-3-3",
        title: "Monitoramento e Observabilidade",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  // Course 6: Motion Design & Animação
  {
    id: "m6-1",
    courseId: "6",
    title: "Princípios de Animação",
    lessons: [
      {
        id: "l6-1-1",
        title: "12 Princípios da Animação",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l6-1-2",
        title: "Timing e Espaçamento",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l6-1-3",
        title: "Easing e Curvas de Animação",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m6-2",
    courseId: "6",
    title: "Animações para Web",
    lessons: [
      {
        id: "l6-2-1",
        title: "CSS Animations e Transitions",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l6-2-2",
        title: "Framer Motion no React",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l6-2-3",
        title: "Micro-interações",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m6-3",
    courseId: "6",
    title: "After Effects",
    lessons: [
      {
        id: "l6-3-1",
        title: "Interface e Ferramentas Básicas",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l6-3-2",
        title: "Motion Graphics",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l6-3-3",
        title: "Exportação para Web",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Course 7: Planejamento Financeiro para Startups
  {
    id: "m7-1",
    courseId: "7",
    title: "Fundamentos Financeiros",
    lessons: [
      {
        id: "l7-1-1",
        title: "Contabilidade Básica para Startups",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l7-1-2",
        title: "Fluxo de Caixa e DRE",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l7-1-3",
        title: "Métricas Financeiras (CAC, LTV, Burn Rate)",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m7-2",
    courseId: "7",
    title: "Captação de Recursos",
    lessons: [
      {
        id: "l7-2-1",
        title: "Tipos de Investimento",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l7-2-2",
        title: "Preparando o Pitch Deck",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l7-2-3",
        title: "Negociação com Investidores",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  // Course 8: Estratégia de Conteúdo & Copywriting
  {
    id: "m8-1",
    courseId: "8",
    title: "Fundamentos de Copywriting",
    lessons: [
      {
        id: "l8-1-1",
        title: "Princípios da Escrita Persuasiva",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l8-1-2",
        title: "Headlines que Convertem",
        durationInMinutes: 15,
        completed: false,
      },
      {
        id: "l8-1-3",
        title: "Storytelling para Marcas",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m8-2",
    courseId: "8",
    title: "Estratégia de Conteúdo",
    lessons: [
      {
        id: "l8-2-1",
        title: "Planejamento Editorial",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l8-2-2",
        title: "Conteúdo para Diferentes Canais",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l8-2-3",
        title: "Métricas de Conteúdo",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Course 9: Desenvolvimento Mobile com React Native
  {
    id: "m9-1",
    courseId: "9",
    title: "Setup e Fundamentos",
    lessons: [
      {
        id: "l9-1-1",
        title: "Configurando o Ambiente",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l9-1-2",
        title: "Componentes Nativos",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l9-1-3",
        title: "Navegação com React Navigation",
        durationInMinutes: 30,
        completed: false,
      },
    ],
  },
  {
    id: "m9-2",
    courseId: "9",
    title: "Recursos Avançados",
    lessons: [
      {
        id: "l9-2-1",
        title: "Animações com Reanimated",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l9-2-2",
        title: "Acesso a APIs Nativas",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l9-2-3",
        title: "Publicação na App Store e Play Store",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Course 10: Design de Identidade Visual
  {
    id: "m10-1",
    courseId: "10",
    title: "Teoria e Pesquisa",
    lessons: [
      {
        id: "l10-1-1",
        title: "Branding e Posicionamento",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l10-1-2",
        title: "Teoria das Cores",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l10-1-3",
        title: "Tipografia e Hierarquia Visual",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m10-2",
    courseId: "10",
    title: "Criação da Identidade",
    lessons: [
      {
        id: "l10-2-1",
        title: "Design de Logo",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l10-2-2",
        title: "Manual de Marca",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l10-2-3",
        title: "Aplicações da Marca",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  // Courses 11-20: 2 modules each
  {
    id: "m11-1",
    courseId: "11",
    title: "Metodologias Ágeis",
    lessons: [
      {
        id: "l11-1-1",
        title: "Scrum Framework",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l11-1-2",
        title: "Kanban na Prática",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l11-1-3",
        title: "Ferramentas de Gestão",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m11-2",
    courseId: "11",
    title: "Liderança de Projetos",
    lessons: [
      {
        id: "l11-2-1",
        title: "Planejamento de Sprints",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l11-2-2",
        title: "Retrospectivas Eficazes",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  {
    id: "m12-1",
    courseId: "12",
    title: "Estratégias de Crescimento",
    lessons: [
      {
        id: "l12-1-1",
        title: "Algoritmos das Redes Sociais",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l12-1-2",
        title: "Conteúdo Viral",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l12-1-3",
        title: "Engajamento Orgânico",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m12-2",
    courseId: "12",
    title: "Plataformas Específicas",
    lessons: [
      {
        id: "l12-2-1",
        title: "Instagram e Reels",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l12-2-2",
        title: "TikTok para Negócios",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l12-2-3",
        title: "LinkedIn B2B",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  {
    id: "m13-1",
    courseId: "13",
    title: "Tipos Avançados",
    lessons: [
      {
        id: "l13-1-1",
        title: "Generics em Profundidade",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l13-1-2",
        title: "Tipos Condicionais e Mapped Types",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l13-1-3",
        title: "Template Literal Types",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m13-2",
    courseId: "13",
    title: "Padrões Enterprise",
    lessons: [
      {
        id: "l13-2-1",
        title: "Type-Safe APIs",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l13-2-2",
        title: "Padrões de Composição de Tipos",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  {
    id: "m14-1",
    courseId: "14",
    title: "Modelagem 3D",
    lessons: [
      {
        id: "l14-1-1",
        title: "Interface do Blender",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l14-1-2",
        title: "Modelagem Básica",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l14-1-3",
        title: "Sculpting Digital",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m14-2",
    courseId: "14",
    title: "Renderização",
    lessons: [
      {
        id: "l14-2-1",
        title: "Materiais e Texturas",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l14-2-2",
        title: "Iluminação de Cena",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l14-2-3",
        title: "Render Final com Cycles",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  {
    id: "m15-1",
    courseId: "15",
    title: "Montando a Loja",
    lessons: [
      {
        id: "l15-1-1",
        title: "Escolhendo a Plataforma",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l15-1-2",
        title: "Catálogo de Produtos",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l15-1-3",
        title: "Meios de Pagamento",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m15-2",
    courseId: "15",
    title: "Operação e Crescimento",
    lessons: [
      {
        id: "l15-2-1",
        title: "Logística e Fulfillment",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l15-2-2",
        title: "Retenção de Clientes",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  {
    id: "m16-1",
    courseId: "16",
    title: "Fundamentos de Email Marketing",
    lessons: [
      {
        id: "l16-1-1",
        title: "Construindo sua Lista",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l16-1-2",
        title: "Segmentação de Audiência",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l16-1-3",
        title: "Testes A/B",
        durationInMinutes: 15,
        completed: false,
      },
    ],
  },
  {
    id: "m16-2",
    courseId: "16",
    title: "Automações",
    lessons: [
      {
        id: "l16-2-1",
        title: "Funis Automatizados",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l16-2-2",
        title: "Campanhas Drip",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  {
    id: "m17-1",
    courseId: "17",
    title: "Segurança Ofensiva",
    lessons: [
      {
        id: "l17-1-1",
        title: "Vulnerabilidades Comuns (OWASP Top 10)",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l17-1-2",
        title: "Testes de Penetração Básicos",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m17-2",
    courseId: "17",
    title: "Segurança Defensiva",
    lessons: [
      {
        id: "l17-2-1",
        title: "Autenticação e Autorização Seguras",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l17-2-2",
        title: "Criptografia Aplicada",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l17-2-3",
        title: "Segurança em APIs",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  {
    id: "m18-1",
    courseId: "18",
    title: "Construindo o Design System",
    lessons: [
      {
        id: "l18-1-1",
        title: "Design Tokens",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l18-1-2",
        title: "Biblioteca de Componentes",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l18-1-3",
        title: "Documentação e Governança",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },
  {
    id: "m18-2",
    courseId: "18",
    title: "Escalando o Sistema",
    lessons: [
      {
        id: "l18-2-1",
        title: "Versionamento e Releases",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l18-2-2",
        title: "Colaboração entre Times",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  {
    id: "m19-1",
    courseId: "19",
    title: "Técnicas de Negociação",
    lessons: [
      {
        id: "l19-1-1",
        title: "Frameworks de Negociação",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l19-1-2",
        title: "Psicologia da Persuasão",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l19-1-3",
        title: "Objeções e Fechamento",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m19-2",
    courseId: "19",
    title: "Vendas na Prática",
    lessons: [
      {
        id: "l19-2-1",
        title: "Pipeline de Vendas",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l19-2-2",
        title: "Relacionamento com o Cliente",
        durationInMinutes: 20,
        completed: false,
      },
    ],
  },

  {
    id: "m20-1",
    courseId: "20",
    title: "Produção de Vídeo",
    lessons: [
      {
        id: "l20-1-1",
        title: "Roteiro e Storyboard",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l20-1-2",
        title: "Técnicas de Câmera",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l20-1-3",
        title: "Iluminação para Vídeo",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },
  {
    id: "m20-2",
    courseId: "20",
    title: "Pós-Produção",
    lessons: [
      {
        id: "l20-2-1",
        title: "Edição e Corte",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l20-2-2",
        title: "Color Grading",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l20-2-3",
        title: "Exportação e Distribuição",
        durationInMinutes: 15,
        completed: false,
      },
    ],
  },
];

export const getModulesByCourseId = (courseId: string): ModuleType[] =>
  mockModules.filter((module) => module.courseId === courseId);
