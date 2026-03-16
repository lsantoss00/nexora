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
        description:
          "Nesta aula, você conhecerá os fundamentos do React e a sintaxe JSX, entendendo como criar interfaces declarativas e componentizadas para aplicações web modernas.",
        durationInMinutes: 15,
        completed: true,
      },
      {
        id: "l1-1-2",
        title: "Componentes e Props",
        description:
          "Aprenda a criar componentes reutilizáveis e a passar dados entre eles usando props, o mecanismo fundamental de comunicação no React.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l1-1-3",
        title: "Estado e Ciclo de Vida",
        description:
          "Entenda como gerenciar o estado interno dos componentes e os métodos de ciclo de vida que controlam o comportamento durante a renderização.",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l1-1-4",
        title: "Hooks Essenciais",
        description:
          "Domine os hooks useState, useEffect, useContext e useRef para adicionar funcionalidade e lógica aos seus componentes funcionais.",
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
        description:
          "Configure um servidor Node.js do zero com Express, entendendo rotas, tratamento de requisições e estrutura de projetos backend.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l1-2-2",
        title: "Rotas e Middlewares",
        description:
          "Aprenda a organizar rotas de forma modular e utilizar middlewares para autenticação, logging e tratamento de erros.",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l1-2-3",
        title: "Conexão com Banco de Dados",
        description:
          "Conecte sua API a bancos de dados relacionais e NoSQL, implementando operações CRUD com boas práticas de segurança.",
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
        description:
          "Conheça os principais provedores de nuvem e estratégias de deploy para colocar sua aplicação em produção de forma confiável.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l1-3-2",
        title: "Containers com Docker",
        description:
          "Aprenda a containerizar suas aplicações com Docker, criando imagens otimizadas e gerenciando ambientes isolados.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l1-3-3",
        title: "CI/CD Pipelines",
        description:
          "Configure pipelines de integração e entrega contínua para automatizar testes, builds e deploys do seu projeto.",
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
        description:
          "Defina a arquitetura do projeto final, escolhendo tecnologias, modelando o banco de dados e planejando as funcionalidades.",
        durationInMinutes: 15,
        completed: false,
      },
      {
        id: "l1-4-2",
        title: "Desenvolvimento e Integração",
        description:
          "Desenvolva o frontend e backend do projeto, integrando todas as camadas e aplicando os conceitos aprendidos no curso.",
        durationInMinutes: 45,
        completed: false,
      },
      {
        id: "l1-4-3",
        title: "Deploy e Apresentação",
        description:
          "Faça o deploy da aplicação completa na nuvem e prepare uma apresentação profissional do seu projeto.",
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
        description:
          "Entenda os princípios fundamentais do design centrado no usuário e como aplicá-los para criar produtos que resolvem problemas reais.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l2-1-2",
        title: "Pesquisa com Usuários",
        description:
          "Aprenda métodos de pesquisa qualitativa e quantitativa para entender as necessidades, comportamentos e dores dos seus usuários.",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l2-1-3",
        title: "Personas e Jornadas",
        description:
          "Crie personas detalhadas e mapeie jornadas do usuário para guiar decisões de design com empatia e dados.",
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
        description:
          "Domine técnicas de sketching rápido e criação de wireframes para explorar ideias antes de investir em designs detalhados.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l2-2-2",
        title: "Protótipos Interativos no Figma",
        description:
          "Crie protótipos interativos de alta fidelidade no Figma, simulando fluxos reais e transições entre telas.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l2-2-3",
        title: "Testes de Usabilidade",
        description:
          "Conduza testes de usabilidade com usuários reais, colete feedback e itere no design com base em dados concretos.",
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
        description:
          "Explore a psicologia das cores e princípios tipográficos para criar interfaces visualmente harmoniosas e legíveis.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l2-3-2",
        title: "Sistemas de Grid e Layout",
        description:
          "Aprenda a usar sistemas de grid para criar layouts consistentes, equilibrados e responsivos em qualquer dispositivo.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l2-3-3",
        title: "Design Responsivo",
        description:
          "Projete interfaces que se adaptam a diferentes tamanhos de tela, garantindo uma experiência fluida em desktop e mobile.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l2-3-4",
        title: "Acessibilidade em UI",
        description:
          "Implemente práticas de acessibilidade para tornar suas interfaces utilizáveis por todas as pessoas, independente de suas capacidades.",
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
        description:
          "Conheça os principais estilos de liderança e descubra qual se adapta melhor ao seu perfil e contexto organizacional.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l3-1-2",
        title: "Comunicação Efetiva",
        description:
          "Desenvolva habilidades de comunicação clara e assertiva para inspirar equipes e alinhar expectativas.",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l3-1-3",
        title: "Tomada de Decisão",
        description:
          "Aprenda frameworks de tomada de decisão para agir com confiança em cenários complexos e de alta pressão.",
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
        description:
          "Aprenda a recrutar, motivar e desenvolver times que entregam resultados excepcionais de forma consistente.",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l3-2-2",
        title: "Delegação e Empoderamento",
        description:
          "Domine a arte de delegar tarefas e empoderar membros da equipe para que assumam responsabilidades com autonomia.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l3-2-3",
        title: "Resolução de Conflitos",
        description:
          "Desenvolva técnicas para mediar conflitos, transformando tensões em oportunidades de crescimento para a equipe.",
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
        description:
          "Utilize ferramentas de análise de mercado para identificar oportunidades, ameaças e posicionar sua empresa estrategicamente.",
        durationInMinutes: 25,
        completed: true,
      },
      {
        id: "l3-3-2",
        title: "Planejamento Estratégico",
        description:
          "Elabore planos estratégicos de médio e longo prazo com metas claras, indicadores e planos de ação executáveis.",
        durationInMinutes: 30,
        completed: true,
      },
      {
        id: "l3-3-3",
        title: "Inovação e Crescimento",
        description:
          "Explore modelos de inovação e estratégias de crescimento sustentável para manter a competitividade no mercado.",
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
        description:
          "Tenha uma visão geral do ecossistema de marketing digital, seus canais e como eles se complementam numa estratégia integrada.",
        durationInMinutes: 15,
        completed: true,
      },
      {
        id: "l4-1-2",
        title: "Funil de Vendas Online",
        description:
          "Entenda as etapas do funil de vendas digital e como criar estratégias para cada fase da jornada do cliente.",
        durationInMinutes: 20,
        completed: true,
      },
      {
        id: "l4-1-3",
        title: "Métricas e KPIs",
        description:
          "Aprenda a definir e acompanhar as métricas mais importantes para medir o sucesso das suas campanhas de marketing.",
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
        description:
          "Domine os fundamentos de otimização para mecanismos de busca e aprenda a melhorar o posicionamento orgânico do seu site.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l4-2-2",
        title: "Pesquisa de Palavras-Chave",
        description:
          "Aprenda a identificar as palavras-chave mais relevantes para o seu negócio usando ferramentas profissionais de pesquisa.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l4-2-3",
        title: "Estratégia de Conteúdo",
        description:
          "Crie uma estratégia de conteúdo alinhada com SEO para atrair tráfego qualificado e construir autoridade no seu nicho.",
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
        description:
          "Configure suas primeiras campanhas no Google Ads, entendendo lances, segmentação e formatos de anúncio.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l4-3-2",
        title: "Facebook e Instagram Ads",
        description:
          "Crie campanhas eficazes no Meta Ads com segmentação avançada, criativos impactantes e otimização de resultados.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l4-3-3",
        title: "Otimização de Campanhas",
        description:
          "Aprenda técnicas de otimização contínua para reduzir custos e maximizar o retorno das suas campanhas pagas.",
        durationInMinutes: 25,
        completed: false,
      },
    ],
  },

  // Course 5: Arquitetura Cloud & DevOps
  {
    id: "m5-1",
    courseId: "5",
    title: "Fundamentos de Cloud Computing",
    lessons: [
      {
        id: "l5-1-1",
        title: "Conceitos de Computação em Nuvem",
        description:
          "Entenda os modelos de serviço (IaaS, PaaS, SaaS) e como a computação em nuvem transforma a infraestrutura de TI.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l5-1-2",
        title: "AWS: Primeiros Passos",
        description:
          "Crie sua conta AWS, navegue pelo console e conheça os serviços fundamentais para começar a construir na nuvem.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l5-1-3",
        title: "Serviços Essenciais da AWS",
        description:
          "Explore EC2, S3, RDS e Lambda — os serviços mais utilizados da AWS para hospedagem, armazenamento e computação.",
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
        description:
          "Aprenda a criar, executar e gerenciar containers Docker para garantir consistência entre ambientes de desenvolvimento e produção.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l5-2-2",
        title: "Docker Compose",
        description:
          "Orquestre múltiplos containers com Docker Compose para simular ambientes completos de desenvolvimento localmente.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l5-2-3",
        title: "Kubernetes Essencial",
        description:
          "Domine os conceitos fundamentais do Kubernetes: pods, services, deployments e como orquestrar containers em escala.",
        durationInMinutes: 35,
        completed: false,
      },
      {
        id: "l5-2-4",
        title: "Helm Charts e Deployments",
        description:
          "Utilize Helm para gerenciar deployments complexos no Kubernetes com templates reutilizáveis e versionados.",
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
        description:
          "Configure workflows automatizados com GitHub Actions para testes, builds e deploys integrados ao seu repositório.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l5-3-2",
        title: "Terraform Básico",
        description:
          "Provisione e gerencie infraestrutura de forma declarativa com Terraform, garantindo reprodutibilidade e controle de versão.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l5-3-3",
        title: "Monitoramento e Observabilidade",
        description:
          "Implemente ferramentas de monitoramento, logging e alertas para manter visibilidade sobre a saúde das suas aplicações.",
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
        description:
          "Conheça os 12 princípios clássicos da animação da Disney e como aplicá-los em animações digitais modernas.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l6-1-2",
        title: "Timing e Espaçamento",
        description:
          "Entenda como timing e espaçamento afetam a percepção de peso, velocidade e naturalidade nas animações.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l6-1-3",
        title: "Easing e Curvas de Animação",
        description:
          "Domine curvas de easing para criar movimentos suaves e naturais que melhoram a experiência do usuário.",
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
        description:
          "Crie animações performáticas usando CSS puro, entendendo keyframes, transitions e propriedades animáveis.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l6-2-2",
        title: "Framer Motion no React",
        description:
          "Implemente animações sofisticadas em aplicações React usando Framer Motion com gestos, layout animations e variants.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l6-2-3",
        title: "Micro-interações",
        description:
          "Projete micro-interações que encantam os usuários e fornecem feedback visual imediato em interfaces web.",
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
        description:
          "Navegue pela interface do After Effects e conheça as ferramentas essenciais para começar a criar animações.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l6-3-2",
        title: "Motion Graphics",
        description:
          "Crie motion graphics profissionais com formas, textos animados e efeitos visuais impactantes.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l6-3-3",
        title: "Exportação para Web",
        description:
          "Exporte suas animações em formatos otimizados para web como Lottie, GIF e vídeo com compressão eficiente.",
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
        description:
          "Aprenda os conceitos contábeis essenciais para manter as finanças da sua startup organizadas e em conformidade.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l7-1-2",
        title: "Fluxo de Caixa e DRE",
        description:
          "Domine a gestão de fluxo de caixa e a leitura de demonstrações de resultados para tomar decisões financeiras assertivas.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l7-1-3",
        title: "Métricas Financeiras (CAC, LTV, Burn Rate)",
        description:
          "Entenda as métricas financeiras mais importantes para startups e como usá-las para guiar o crescimento do negócio.",
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
        description:
          "Conheça as diferentes modalidades de investimento para startups: anjo, seed, venture capital e crowdfunding.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l7-2-2",
        title: "Preparando o Pitch Deck",
        description:
          "Crie um pitch deck convincente que comunica sua visão, modelo de negócio e potencial de crescimento para investidores.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l7-2-3",
        title: "Negociação com Investidores",
        description:
          "Aprenda estratégias de negociação para fechar rodadas de investimento com termos favoráveis para sua startup.",
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
        description:
          "Domine os princípios da persuasão aplicados à escrita para criar textos que engajam e convertem leitores em clientes.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l8-1-2",
        title: "Headlines que Convertem",
        description:
          "Aprenda fórmulas e técnicas para criar títulos irresistíveis que capturam atenção e aumentam taxas de clique.",
        durationInMinutes: 15,
        completed: false,
      },
      {
        id: "l8-1-3",
        title: "Storytelling para Marcas",
        description:
          "Use o poder das narrativas para construir conexões emocionais entre sua marca e o público-alvo.",
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
        description:
          "Crie um calendário editorial estratégico alinhado com os objetivos de negócio e as necessidades do público.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l8-2-2",
        title: "Conteúdo para Diferentes Canais",
        description:
          "Adapte sua mensagem para blog, redes sociais, email e outros canais mantendo consistência na comunicação.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l8-2-3",
        title: "Métricas de Conteúdo",
        description:
          "Meça o impacto do seu conteúdo com as métricas certas e use dados para otimizar sua estratégia continuamente.",
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
        description:
          "Configure o ambiente de desenvolvimento React Native com Expo ou CLI, incluindo emuladores Android e iOS.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l9-1-2",
        title: "Componentes Nativos",
        description:
          "Conheça os componentes nativos do React Native como View, Text, ScrollView e aprenda a estilizá-los.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l9-1-3",
        title: "Navegação com React Navigation",
        description:
          "Implemente navegação entre telas com React Navigation, incluindo stack, tab e drawer navigators.",
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
        description:
          "Crie animações fluidas e performáticas com React Native Reanimated, rodando na thread nativa do dispositivo.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l9-2-2",
        title: "Acesso a APIs Nativas",
        description:
          "Acesse recursos nativos do dispositivo como câmera, geolocalização e notificações push em suas aplicações.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l9-2-3",
        title: "Publicação na App Store e Play Store",
        description:
          "Prepare, assine e publique seu aplicativo nas lojas Apple App Store e Google Play Store com sucesso.",
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
        description:
          "Entenda os fundamentos de branding e como posicionar uma marca de forma única e memorável no mercado.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l10-1-2",
        title: "Teoria das Cores",
        description:
          "Explore a teoria das cores e sua aplicação em branding para evocar emoções e transmitir personalidade de marca.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l10-1-3",
        title: "Tipografia e Hierarquia Visual",
        description:
          "Escolha e combine tipografias que reforçam a identidade da marca e criam hierarquia visual clara.",
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
        description:
          "Projete logos versáteis e atemporais, do briefing ao refinamento final, aplicando princípios de simplicidade e memorabilidade.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l10-2-2",
        title: "Manual de Marca",
        description:
          "Crie um manual de marca completo documentando diretrizes de uso para garantir consistência visual em todas as aplicações.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l10-2-3",
        title: "Aplicações da Marca",
        description:
          "Aplique a identidade visual em diferentes materiais: papelaria, digital, sinalização e materiais promocionais.",
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
        description:
          "Domine o framework Scrum com seus papéis, eventos e artefatos para gerenciar projetos de forma iterativa e incremental.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l11-1-2",
        title: "Kanban na Prática",
        description:
          "Implemente quadros Kanban para visualizar fluxos de trabalho, identificar gargalos e otimizar a entrega contínua.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l11-1-3",
        title: "Ferramentas de Gestão",
        description:
          "Conheça ferramentas como Jira, Trello e Linear para gerenciar projetos ágeis com eficiência no dia a dia.",
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
        description:
          "Aprenda a planejar sprints eficazes com estimativas realistas, priorização de backlog e definição de metas claras.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l11-2-2",
        title: "Retrospectivas Eficazes",
        description:
          "Conduza retrospectivas que geram insights acionáveis e promovem melhoria contínua no time.",
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
        description:
          "Entenda como funcionam os algoritmos das principais redes sociais e como usá-los a favor do seu conteúdo.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l12-1-2",
        title: "Conteúdo Viral",
        description:
          "Descubra os elementos que tornam um conteúdo viral e como aumentar as chances de viralização das suas publicações.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l12-1-3",
        title: "Engajamento Orgânico",
        description:
          "Construa uma comunidade engajada com estratégias de conteúdo orgânico que geram interações genuínas.",
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
        description:
          "Domine o Instagram com estratégias para feed, stories e reels que aumentam alcance e engajamento.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l12-2-2",
        title: "TikTok para Negócios",
        description:
          "Crie conteúdo estratégico no TikTok para alcançar novos públicos e construir presença de marca na plataforma.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l12-2-3",
        title: "LinkedIn B2B",
        description:
          "Utilize o LinkedIn para gerar leads B2B, construir autoridade profissional e networking estratégico.",
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
        description:
          "Explore generics avançados do TypeScript para criar funções, classes e interfaces altamente reutilizáveis e type-safe.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l13-1-2",
        title: "Tipos Condicionais e Mapped Types",
        description:
          "Domine tipos condicionais e mapped types para criar transformações de tipos poderosas e flexíveis.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l13-1-3",
        title: "Template Literal Types",
        description:
          "Use template literal types para criar tipos string dinâmicos e validação em tempo de compilação.",
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
        description:
          "Construa APIs totalmente tipadas do frontend ao backend com padrões como tRPC e Zod para validação em runtime.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l13-2-2",
        title: "Padrões de Composição de Tipos",
        description:
          "Aprenda padrões avançados de composição de tipos para criar arquiteturas TypeScript escaláveis e manteníveis.",
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
        description:
          "Navegue pela interface do Blender com confiança, dominando atalhos e a organização dos painéis de trabalho.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l14-1-2",
        title: "Modelagem Básica",
        description:
          "Aprenda técnicas de modelagem poligonal para criar objetos 3D a partir de formas primitivas no Blender.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l14-1-3",
        title: "Sculpting Digital",
        description:
          "Esculpa modelos orgânicos detalhados usando as ferramentas de sculpting do Blender com tablets gráficos.",
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
        description:
          "Crie materiais realistas com o node editor do Blender, aplicando texturas procedurais e imagens de referência.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l14-2-2",
        title: "Iluminação de Cena",
        description:
          "Ilumine suas cenas 3D com técnicas profissionais de iluminação para criar atmosferas e realismo visual.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l14-2-3",
        title: "Render Final com Cycles",
        description:
          "Configure o motor de render Cycles para produzir imagens fotorrealistas com ray tracing e otimização de performance.",
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
        description:
          "Compare plataformas de e-commerce e escolha a ideal para seu modelo de negócio, orçamento e objetivos.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l15-1-2",
        title: "Catálogo de Produtos",
        description:
          "Organize seu catálogo de produtos com fotos profissionais, descrições otimizadas e categorização estratégica.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l15-1-3",
        title: "Meios de Pagamento",
        description:
          "Configure gateways de pagamento seguros e ofereça múltiplas opções para maximizar conversões na sua loja.",
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
        description:
          "Estruture a operação logística da sua loja com estratégias de estoque, envio e fulfillment eficientes.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l15-2-2",
        title: "Retenção de Clientes",
        description:
          "Implemente estratégias de retenção como programas de fidelidade, email pós-venda e atendimento excepcional.",
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
        description:
          "Cresça sua lista de emails com lead magnets, formulários otimizados e estratégias éticas de captação.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l16-1-2",
        title: "Segmentação de Audiência",
        description:
          "Segmente sua lista para enviar mensagens personalizadas que aumentam aberturas, cliques e conversões.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l16-1-3",
        title: "Testes A/B",
        description:
          "Execute testes A/B em assuntos, conteúdo e CTAs para otimizar continuamente suas campanhas de email.",
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
        description:
          "Construa funis de email automatizados que nutrem leads e os conduzem até a conversão sem intervenção manual.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l16-2-2",
        title: "Campanhas Drip",
        description:
          "Crie sequências drip para onboarding, reengajamento e upsell que entregam a mensagem certa no momento certo.",
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
        description:
          "Conheça as 10 vulnerabilidades mais críticas em aplicações web segundo a OWASP e como identificá-las.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l17-1-2",
        title: "Testes de Penetração Básicos",
        description:
          "Aprenda técnicas básicas de pentest para avaliar a segurança das suas aplicações de forma ética e estruturada.",
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
        description:
          "Implemente sistemas robustos de autenticação e autorização com JWT, OAuth e controle de acesso baseado em papéis.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l17-2-2",
        title: "Criptografia Aplicada",
        description:
          "Entenda conceitos de criptografia e aplique hash, criptografia simétrica e assimétrica para proteger dados sensíveis.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l17-2-3",
        title: "Segurança em APIs",
        description:
          "Proteja suas APIs contra ataques comuns implementando rate limiting, validação de input e headers de segurança.",
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
        description:
          "Defina design tokens para cores, tipografia, espaçamento e outros valores que formam a base do seu design system.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l18-1-2",
        title: "Biblioteca de Componentes",
        description:
          "Crie uma biblioteca de componentes reutilizáveis com variantes, acessibilidade e documentação integrada.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l18-1-3",
        title: "Documentação e Governança",
        description:
          "Documente seu design system com Storybook e estabeleça processos de governança para manter a qualidade.",
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
        description:
          "Gerencie versões do design system com semver, changelogs e processos de release automatizados.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l18-2-2",
        title: "Colaboração entre Times",
        description:
          "Estabeleça workflows de colaboração entre designers e desenvolvedores para evolução contínua do design system.",
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
        description:
          "Aprenda frameworks comprovados como BATNA, ZOPA e Harvard Negotiation para conduzir negociações com confiança.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l19-1-2",
        title: "Psicologia da Persuasão",
        description:
          "Entenda os princípios psicológicos da persuasão de Cialdini e como aplicá-los eticamente em negociações.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l19-1-3",
        title: "Objeções e Fechamento",
        description:
          "Domine técnicas para contornar objeções e conduzir o fechamento de negócios de forma natural e assertiva.",
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
        description:
          "Estruture um pipeline de vendas eficiente com etapas claras, métricas de conversão e previsibilidade de receita.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l19-2-2",
        title: "Relacionamento com o Cliente",
        description:
          "Construa relacionamentos duradouros com clientes através de follow-up estratégico e atendimento personalizado.",
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
        description:
          "Escreva roteiros envolventes e crie storyboards visuais para planejar cada cena da sua produção de vídeo.",
        durationInMinutes: 20,
        completed: false,
      },
      {
        id: "l20-1-2",
        title: "Técnicas de Câmera",
        description:
          "Domine enquadramentos, movimentos de câmera e composição visual para contar histórias de forma cinematográfica.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l20-1-3",
        title: "Iluminação para Vídeo",
        description:
          "Aprenda técnicas de iluminação profissional com equipamentos acessíveis para elevar a qualidade dos seus vídeos.",
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
        description:
          "Edite vídeos profissionalmente com técnicas de corte, ritmo narrativo e transições que mantêm o espectador engajado.",
        durationInMinutes: 30,
        completed: false,
      },
      {
        id: "l20-2-2",
        title: "Color Grading",
        description:
          "Aplique color grading para estabelecer o tom visual do seu vídeo e criar uma estética profissional consistente.",
        durationInMinutes: 25,
        completed: false,
      },
      {
        id: "l20-2-3",
        title: "Exportação e Distribuição",
        description:
          "Exporte seus vídeos nos formatos ideais para cada plataforma e distribua seu conteúdo estrategicamente.",
        durationInMinutes: 15,
        completed: false,
      },
    ],
  },
];

export const getModulesByCourseId = (courseId: string): ModuleType[] =>
  mockModules.filter((module) => module.courseId === courseId);

export const getLessonById = (courseId: string, lessonId: string) => {
  const modules = getModulesByCourseId(courseId);
  for (const module of modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) return { lesson, module };
  }
  return null;
};
