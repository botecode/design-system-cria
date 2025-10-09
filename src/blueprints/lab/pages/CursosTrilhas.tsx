import React, { useState } from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { Button } from '../../../components/Button';
import { Badge } from '../../../components/Badge';
import { ProgressBar } from '../../../components/ProgressBar';
import { CriaCourseCard, Course } from '../../../components/CriaCourseCard';
import { BookOpen, Lightning, Star, Calendar, Users, CheckCircle } from 'phosphor-react';

// Mock data for courses
const mockCoursesInProgress: (Course & { progress: number; lessons: number; completedLessons: number })[] = [
  {
    slug: 'produtividade-era-ia',
    title: 'Produtividade na Era da IA',
    description: 'Neste curso, você vai começar a usar a inteligência artificial para transformar sua produtividade pessoal e profissional. Vamos mostrar algumas ferramentas na prática, para você ver como a IA pode otimizar tarefas, acelerar pesquisas, melhorar sua comunicação e até ajudar a tomar decisões mais inteligentes.',
    thumbnailUrl: 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/688cd3e613fee77674c4b712_thumb_cursoProdutividadev3.png',
    duration: '01:44:50',
    progress: 65,
    lessons: 24,
    completedLessons: 16,
    instructors: [
      { id: '1', name: 'Equipe CRIA', avatarUrl: 'https://i.pravatar.cc/150?img=9' }
    ],
    tools: [
      { id: '1', name: 'ChatGPT', icon: '💬' },
      { id: '2', name: 'Gemini', icon: '✨' },
      { id: '3', name: 'Claude', icon: '🤖' },
      { id: '4', name: 'Perplexity', icon: '🔍' },
      { id: '5', name: 'DeepSeek', icon: '🔎' }
    ]
  },
  {
    slug: 'pesquisa-dados',
    title: 'Pesquisa & Dados',
    description: 'Reunimos as melhores aulas pra quem quer transformar o caos de abas abertas, PDFs e planilhas em insights práticos com apoio da IA. Você vai aprender a usar ferramentas de IA voltadas especialmente para a pesquisa, além de também organizar ideias com fluxogramas, gerar infográficos e analisar dados de forma acessível.',
    thumbnailUrl: 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6850387a8acb6b23ba3e6acd_Thumb_CursoPesquisaDadosv2.png',
    duration: '04:34:59',
    progress: 40,
    lessons: 32,
    completedLessons: 13,
    instructors: [
      { id: '2', name: 'Equipe CRIA', avatarUrl: 'https://i.pravatar.cc/150?img=13' }
    ],
    tools: [
      { id: '6', name: 'ChatGPT', icon: '💬' },
      { id: '7', name: 'Claude', icon: '🤖' },
      { id: '8', name: 'Perplexity', icon: '🔍' }
    ]
  }
];

const mockGeneratedTrilhas = [
  {
    id: 1,
    title: 'Trilha Full Stack Developer',
    description: 'Do básico ao avançado em desenvolvimento full stack',
    courses: 5,
    estimatedHours: 120,
    progress: 30,
    createdAt: '15 dias atrás'
  },
  {
    id: 2,
    title: 'Trilha DevOps e Cloud',
    description: 'Domine práticas DevOps e infraestrutura cloud',
    courses: 4,
    estimatedHours: 80,
    progress: 15,
    createdAt: '7 dias atrás'
  }
];

const mockFeaturedContent = [
  {
    id: 1,
    type: 'course',
    title: 'Inteligência Artificial com Python',
    description: 'Fundamentos de IA e Machine Learning aplicados',
    rating: 4.8,
    students: 1234,
    hours: 40,
    featured: true,
    instructor: 'Dr. Carlos Mendes'
  },
  {
    id: 2,
    type: 'trilha',
    title: 'Trilha Data Science',
    description: 'Da análise de dados ao machine learning',
    courses: 6,
    estimatedHours: 150,
    featured: true
  }
];

const mockLatestCourses: Course[] = [
  {
    slug: 'intro-inteligencia-artificial',
    title: 'Intro à Inteligência Artificial',
    description: 'Este curso introdutório foi pensado para quem quer entender, de forma clara e prática, como a inteligência artificial generativa funciona e transformá-la em uma aliada no dia a dia. Vamos te guiar desde os conceitos básicos até aplicações reais, com foco em segurança, ética e autonomia no uso das ferramentas.',
    thumbnailUrl: 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6876ceb6d37d3ab0ac633435_teste_thumb_cursoIntro.png',
    duration: '03:11:45',
    instructors: [
      { id: '1', name: 'Equipe CRIA', avatarUrl: 'https://i.pravatar.cc/150?img=5' }
    ],
    tools: [
      { id: '1', name: 'ChatGPT', icon: '💬' },
      { id: '2', name: 'VEO 2', icon: '🎬' },
      { id: '3', name: 'Suno', icon: '🎵' },
      { id: '4', name: 'Midjourney', icon: '🎨' },
      { id: '5', name: 'Claude', icon: '🤖' }
    ]
  },
  {
    slug: 'imagem-design',
    title: 'Imagem & Design',
    description: 'Essa seleção de aulas foi feita pra quem quer transformar ideias soltas em imagens potentes: vamos te mostrar, na prática, como usar as principais ferramentas (como Midjourney, Visual Electric e ChatGPT) para obter resultados incríveis. Usando IA generativa você aprende a gerar visuais prontos para aplicar em projetos de design, redes sociais, vídeos e muito mais.',
    thumbnailUrl: 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6840b28647c623b15649b98f_Thumb_CursoImagemDesign_v1.png',
    duration: '04:21:33',
    instructors: [
      { id: '2', name: 'Equipe CRIA', avatarUrl: 'https://i.pravatar.cc/150?img=12' }
    ],
    tools: [
      { id: '6', name: 'Midjourney', icon: '🎨' },
      { id: '7', name: 'ChatGPT', icon: '💬' },
      { id: '8', name: 'Visual Electric', icon: '⚡' },
      { id: '9', name: 'DALL-E', icon: '🖼️' }
    ]
  },
  {
    slug: 'produtividade-era-ia',
    title: 'Produtividade na Era da IA',
    description: 'Neste curso, você vai começar a usar a inteligência artificial para transformar sua produtividade pessoal e profissional. Sem enrolação, com linguagem acessível e foco total em aplicação prática, este curso é pra quem quer resultados reais — independente do seu nível de familiaridade com IA.',
    thumbnailUrl: 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/688cd3e613fee77674c4b712_thumb_cursoProdutividadev3.png',
    duration: '01:44:50',
    instructors: [
      { id: '3', name: 'Equipe CRIA', avatarUrl: 'https://i.pravatar.cc/150?img=8' }
    ],
    tools: [
      { id: '10', name: 'ChatGPT', icon: '💬' },
      { id: '11', name: 'Gemini', icon: '✨' },
      { id: '12', name: 'Claude', icon: '🤖' },
      { id: '13', name: 'Lovable', icon: '💖' },
      { id: '14', name: 'Tactiq', icon: '📝' }
    ]
  },
  {
    slug: 'pesquisa-dados',
    title: 'Pesquisa & Dados',
    description: 'Reunimos as melhores aulas pra quem quer transformar o caos de abas abertas, PDFs e planilhas em insights práticos com apoio da IA. Você vai aprender a usar ferramentas de IA voltadas especialmente para a pesquisa, além de também organizar ideias com fluxogramas, gerar infográficos e analisar dados de forma acessível, sem precisar de um conhecimento técnico.',
    thumbnailUrl: 'https://cdn.prod.website-files.com/65870ed41744e63eb43fd116/6850387a8acb6b23ba3e6acd_Thumb_CursoPesquisaDadosv2.png',
    duration: '04:34:59',
    instructors: [
      { id: '4', name: 'Equipe CRIA', avatarUrl: 'https://i.pravatar.cc/150?img=15' }
    ],
    tools: [
      { id: '15', name: 'ChatGPT', icon: '💬' },
      { id: '16', name: 'Claude', icon: '🤖' },
      { id: '17', name: 'Perplexity', icon: '🔍' },
      { id: '18', name: 'NotebookLM', icon: '📓' }
    ]
  }
];

const CursosTrilhas: React.FC = () => {
  const [showTrilhaForm, setShowTrilhaForm] = useState(false);

  return (
    <div style={{ 
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    }}>
      {/* Cursos em Andamento */}
      {mockCoursesInProgress.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Cursos em Andamento
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {mockCoursesInProgress.map(course => (
              <div key={course.slug} style={{ position: 'relative' }}>
                {/* Progress Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  backgroundColor: 'var(--cria-secondary)',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--cria-radius-full)',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }}>
                  {course.progress}% concluído
                </div>
                
                <CriaCourseCard
                  course={course}
                  onCourseClick={(course) => console.log('Continue course:', course)}
                  onInstructorClick={(instructor) => console.log('Instructor clicked:', instructor)}
                  onToolClick={(tool) => console.log('Tool clicked:', tool)}
                />
                
                {/* Progress Bar Overlay */}
                <div style={{ 
                  marginTop: '-1px',
                  padding: '1rem 1.5rem',
                  backgroundColor: 'var(--cria-surface-secondary)',
                  borderBottomLeftRadius: 'var(--cria-radius-lg)',
                  borderBottomRightRadius: 'var(--cria-radius-lg)',
                  borderTop: '1px solid var(--cria-border-primary)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <CriaTextBody2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={16} weight="duotone" color="var(--cria-primary)" />
                      {course.completedLessons}/{course.lessons} aulas concluídas
                    </CriaTextBody2>
                    <Button variant="primary" size="sm">
                      Continuar
                    </Button>
                  </div>
                  <ProgressBar value={course.progress} max={100} size="md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trilhas Geradas */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <CriaTextTitle1 style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Trilhas Geradas
          </CriaTextTitle1>
          <Button 
            variant="primary" 
            size="md"
            rightIcon={<Lightning size={16} weight="fill" />}
            onClick={() => setShowTrilhaForm(true)}
          >
            Gerar Nova Trilha
          </Button>
        </div>

        {mockGeneratedTrilhas.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mockGeneratedTrilhas.map(trilha => (
              <Card key={trilha.id} variant="elevated" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, var(--cria-surface-primary) 0%, var(--cria-surface-secondary) 100%)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Lightning size={20} weight="fill" color="var(--cria-secondary)" />
                      <Badge variant="secondary" size="sm">Trilha IA</Badge>
                    </div>
                    <CriaTextTitle2 style={{ marginBottom: '0.5rem' }}>{trilha.title}</CriaTextTitle2>
                    <CriaTextBody1 style={{ marginBottom: '1rem', opacity: 0.8 }}>
                      {trilha.description}
                    </CriaTextBody1>
                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
                      <CriaTextBody2 style={{ opacity: 0.7 }}>
                        📚 {trilha.courses} cursos
                      </CriaTextBody2>
                      <CriaTextBody2 style={{ opacity: 0.7 }}>
                        ⏱️ ~{trilha.estimatedHours}h
                      </CriaTextBody2>
                      <CriaTextBody2 style={{ opacity: 0.6 }}>
                        Criada {trilha.createdAt}
                      </CriaTextBody2>
                    </div>
                    <ProgressBar value={trilha.progress} max={100} size="sm" />
                    <CriaTextBody2 style={{ marginTop: '0.5rem', opacity: 0.7 }}>
                      {trilha.progress}% concluído
                    </CriaTextBody2>
                  </div>
                  <Button variant="secondary" size="md" style={{ marginLeft: '1rem' }}>
                    Ver Trilha
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card variant="outlined" style={{ padding: '2rem', textAlign: 'center' }}>
            <Lightning size={48} weight="duotone" color="var(--cria-primary)" style={{ margin: '0 auto 1rem' }} />
            <CriaTextBody1 style={{ marginBottom: '1rem', opacity: 0.8 }}>
              Você ainda não tem trilhas. Crie trilhas personalizadas com a nossa IA para organizar suas aulas por temas ou objetivos.
            </CriaTextBody1>
            <Button 
              variant="primary" 
              size="lg"
              rightIcon={<Lightning size={18} weight="fill" />}
              onClick={() => setShowTrilhaForm(true)}
            >
              Criar Minha Primeira Trilha!
            </Button>
          </Card>
        )}
      </div>

      {/* Cursos e Trilhas em Destaque */}
      {mockFeaturedContent.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Cursos e Trilhas em Destaque
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mockFeaturedContent.map(item => (
              <Card key={item.id} variant="elevated" style={{ padding: '1.5rem', border: '2px solid var(--cria-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <Star size={20} weight="fill" color="var(--cria-secondary)" />
                      <Badge variant="secondary" size="sm">Destaque</Badge>
                      {item.type === 'course' && <Badge variant="primary" size="sm">Curso</Badge>}
                      {item.type === 'trilha' && <Badge variant="primary" size="sm">Trilha</Badge>}
                    </div>
                    <CriaTextTitle2 style={{ marginBottom: '0.5rem' }}>{item.title}</CriaTextTitle2>
                    <CriaTextBody1 style={{ marginBottom: '1rem', opacity: 0.8 }}>
                      {item.description}
                    </CriaTextBody1>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      {item.type === 'course' && (
                        <>
                          <CriaTextBody2 style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Star size={14} weight="fill" color="var(--cria-secondary)" /> {item.rating}/5.0
                          </CriaTextBody2>
                          <CriaTextBody2 style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Users size={14} /> {item.students.toLocaleString()} alunos
                          </CriaTextBody2>
                          <CriaTextBody2>⏱️ {item.hours}h</CriaTextBody2>
                          <CriaTextBody2 style={{ opacity: 0.7 }}>
                            Instrutor: {item.instructor}
                          </CriaTextBody2>
                        </>
                      )}
                      {item.type === 'trilha' && (
                        <>
                          <CriaTextBody2>📚 {item.courses} cursos</CriaTextBody2>
                          <CriaTextBody2>⏱️ ~{item.estimatedHours}h</CriaTextBody2>
                        </>
                      )}
                    </div>
                  </div>
                  <Button variant="primary" size="md" style={{ marginLeft: '1rem' }}>
                    {item.type === 'course' ? 'Começar Curso' : 'Ver Trilha'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Últimos Cursos Adicionados */}
      {mockLatestCourses.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <CriaTextTitle1 style={{ marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Últimos Cursos Adicionados
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {mockLatestCourses.map(course => (
              <CriaCourseCard
                key={course.slug}
                course={course}
                onCourseClick={(course) => console.log('Course clicked:', course)}
                onInstructorClick={(instructor) => console.log('Instructor clicked:', instructor)}
                onToolClick={(tool) => console.log('Tool clicked:', tool)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CursosTrilhas;

