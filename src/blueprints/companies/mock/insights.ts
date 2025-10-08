// Mock data for Insights page based on Rails template
export const insightsMockData = {
  // Onboarding summaries
  aiExperienceSummary: {
    1: 12, // Beginner
    2: 8,  // Intermediate  
    3: 5,  // Advanced
    4: 3,  // Expert
    5: 2   // Master
  },
  
  aiIntimacySummary: {
    'very_low': 8,
    'low': 10,
    'medium': 7,
    'high': 4,
    'very_high': 1
  },
  
  objectivesSummary: {
    'productivity': 15,
    'automation': 12,
    'analysis': 8,
    'creativity': 6,
    'learning': 4
  },
  
  workAreasSummary: {
    'technology': 12,
    'marketing': 8,
    'sales': 6,
    'operations': 5,
    'finance': 4,
    'hr': 3
  },
  
  rolesSummary: {
    'manager': 10,
    'developer': 8,
    'analyst': 6,
    'designer': 4,
    'consultant': 2
  },
  
  dailyTasksSummary: {
    'data_analysis': 12,
    'reporting': 10,
    'content_creation': 8,
    'customer_service': 6,
    'research': 4
  },
  
  learningPreferencesSummary: {
    'hands_on': 15,
    'theoretical': 8,
    'visual': 12,
    'practical': 10,
    'collaborative': 6
  },
  
  discoverySourceSummary: {
    'social_media': 12,
    'search_engine': 8,
    'referral': 6,
    'advertisement': 4,
    'event': 2
  },
  
  // Department and title data
  departmentData: [
    ['Tecnologia', 15],
    ['Marketing', 8],
    ['Vendas', 6],
    ['Operações', 5],
    ['Financeiro', 4],
    ['RH', 3]
  ],
  
  titleData: [
    ['Gerente', 10],
    ['Desenvolvedor', 8],
    ['Analista', 6],
    ['Designer', 4],
    ['Consultor', 2]
  ]
};

// Labels for onboarding data (matching Rails Onboarding model)
export const onboardingLabels = {
  aiExperience: {
    1: 'Nunca usei IA',
    2: 'Uso básico (ChatGPT, etc.)',
    3: 'Uso intermediário',
    4: 'Uso avançado',
    5: 'Sou especialista em IA'
  },
  
  aiIntimacy: {
    'very_low': 'Muito baixo',
    'low': 'Baixo',
    'medium': 'Médio',
    'high': 'Alto',
    'very_high': 'Muito alto'
  },
  
  objectives: {
    'productivity': 'Aumentar produtividade',
    'automation': 'Automatizar tarefas',
    'analysis': 'Análise de dados',
    'creativity': 'Criatividade',
    'learning': 'Aprendizado'
  },
  
  workAreas: {
    'technology': 'Tecnologia',
    'marketing': 'Marketing',
    'sales': 'Vendas',
    'operations': 'Operações',
    'finance': 'Financeiro',
    'hr': 'Recursos Humanos'
  },
  
  roles: {
    'manager': 'Gerente',
    'developer': 'Desenvolvedor',
    'analyst': 'Analista',
    'designer': 'Designer',
    'consultant': 'Consultor'
  },
  
  dailyTasks: {
    'data_analysis': 'Análise de dados',
    'reporting': 'Relatórios',
    'content_creation': 'Criação de conteúdo',
    'customer_service': 'Atendimento ao cliente',
    'research': 'Pesquisa'
  },
  
  learningPreferences: {
    'hands_on': 'Prático',
    'theoretical': 'Teórico',
    'visual': 'Visual',
    'practical': 'Aplicado',
    'collaborative': 'Colaborativo'
  },
  
  discoverySource: {
    'social_media': 'Redes sociais',
    'search_engine': 'Buscador',
    'referral': 'Indicação',
    'advertisement': 'Publicidade',
    'event': 'Evento'
  }
};
