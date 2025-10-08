import React, { useState } from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { Button } from '../../../components/Button';
import { Avatar } from '../../../components/Avatar';
import { ArrowLeft, Users, User, CheckCircle, Clock, BookOpen, GraduationCap } from 'phosphor-react';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  lastSignInAt?: string;
  companyDepartment?: string;
  businessTitle?: string;
  completedLessons: number;
  onboarding?: {
    aiExperienceLevel?: number;
    aiIntimacyLevel?: string;
    objectives?: string[];
    workArea?: string;
    role?: string;
    dailyTasks?: string[];
    learningPreferences?: string[];
    discoverySource?: string;
  };
  customLearnings?: {
    id: string;
    name: string;
    lessonCount: number;
    courseCount: number;
    lessons: { title: string; slug: string }[];
    courses: { title: string; slug: string }[];
  }[];
}

const Alunos: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Mock data for users
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@empresa.com',
      createdAt: '2024-01-15',
      lastSignInAt: '2024-01-20',
      companyDepartment: 'Marketing',
      businessTitle: 'Analista de Marketing',
      completedLessons: 12,
      onboarding: {
        aiExperienceLevel: 7,
        aiIntimacyLevel: 'Médio',
        objectives: ['Automatizar tarefas repetitivas', 'Melhorar a tomada de decisões'],
        workArea: 'Marketing',
        role: 'Analista',
        dailyTasks: ['Análise de dados', 'Criação de conteúdo'],
        learningPreferences: ['Projetos práticos', 'Tutoriais em vídeo'],
        discoverySource: 'Mídias sociais'
      },
      customLearnings: [
        {
          id: '1',
          name: 'Trilha de Marketing Digital',
          lessonCount: 5,
          courseCount: 2,
          lessons: [
            { title: 'Introdução ao Marketing Digital', slug: 'intro-marketing' },
            { title: 'SEO Básico', slug: 'seo-basico' }
          ],
          courses: [
            { title: 'Curso Completo de Marketing', slug: 'curso-marketing' }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@empresa.com',
      createdAt: '2024-01-10',
      lastSignInAt: '2024-01-19',
      companyDepartment: 'Vendas',
      businessTitle: 'Gerente de Vendas',
      completedLessons: 8,
      onboarding: {
        aiExperienceLevel: 5,
        aiIntimacyLevel: 'Baixo',
        objectives: ['Personalizar experiências de clientes'],
        workArea: 'Vendas',
        role: 'Gerente',
        dailyTasks: ['Gestão de equipe', 'Relatórios de vendas'],
        learningPreferences: ['Webinars e aulas ao vivo'],
        discoverySource: 'Indicação de amigos/colegas'
      }
    },
    {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro@empresa.com',
      createdAt: '2024-01-05',
      lastSignInAt: '2024-01-18',
      companyDepartment: 'Desenvolvimento',
      businessTitle: 'Desenvolvedor',
      completedLessons: 15,
      onboarding: {
        aiExperienceLevel: 9,
        aiIntimacyLevel: 'Alto',
        objectives: ['Inovar produtos e serviços', 'Automatizar tarefas repetitivas'],
        workArea: 'Desenvolvimento de Produto',
        role: 'Especialista',
        dailyTasks: ['Desenvolvimento de software', 'Análise de requisitos'],
        learningPreferences: ['Projetos práticos', 'Mentoria individual'],
        discoverySource: 'Mecanismo de busca (Google, Bing)'
      }
    }
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Hoje';
    if (diffInDays === 1) return 'Ontem';
    if (diffInDays < 7) return `${diffInDays} dias atrás`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} semanas atrás`;
    return `${Math.floor(diffInDays / 30)} meses atrás`;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (selectedUser) {
    return (
      <section data-testid="alunos-detail-page" style={{ padding: '24px', paddingBottom: '40px' }}>
        {/* Back Button */}
        <div style={{ marginBottom: '24px' }}>
          <Button
            variant="ghost"
            onClick={() => setSelectedUser(null)}
            icon={<ArrowLeft size={16} />}
            style={{ color: 'var(--cria-text-secondary)' }}
          >
            Voltar para lista de alunos
          </Button>
        </div>

        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <CriaTextHeadline1 style={{
            marginBottom: '8px',
            color: 'var(--cria-text-primary)'
          }}>
            {selectedUser.name}
          </CriaTextHeadline1>
          <CriaTextBody1 style={{
            color: 'var(--cria-text-secondary)'
          }}>
            Detalhes do aluno
          </CriaTextBody1>
        </div>

        {/* User Information Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Basic Information */}
          <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
            <CardContent>
              <CriaTextTitle1 style={{
                marginBottom: '16px',
                color: 'var(--cria-text-primary)'
              }}>
                Informações Básicas
              </CriaTextTitle1>
              
              <div style={{ marginBottom: '24px' }}>
                {/* Avatar and Name */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <Avatar
                    size="lg"
                    name={selectedUser.name}
                    style={{ marginRight: '16px' }}
                  />
                  <div>
                    <CriaTextTitle1 style={{ color: 'var(--cria-text-primary)', marginBottom: '4px' }}>
                      {selectedUser.name}
                    </CriaTextTitle1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                      {selectedUser.email}
                    </CriaTextBody1>
                  </div>
                </div>

                {/* User Details */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '16px'
                }}>
                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Departamento
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.companyDepartment || 'Não informado'}
                    </CriaTextBody1>
                  </div>
                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Cargo
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.businessTitle || 'Não informado'}
                    </CriaTextBody1>
                  </div>
                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Número de aulas concluídas
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.completedLessons}
                    </CriaTextBody1>
                  </div>
                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Último login
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.lastSignInAt ? getTimeAgo(selectedUser.lastSignInAt) : 'Nunca acessou'}
                    </CriaTextBody1>
                  </div>
                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Membro desde
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {formatDate(selectedUser.createdAt)}
                    </CriaTextBody1>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Onboarding Information */}
          <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
            <CardContent>
              <CriaTextTitle1 style={{
                marginBottom: '16px',
                color: 'var(--cria-text-primary)'
              }}>
                Informações do Onboarding
              </CriaTextTitle1>
              
              {selectedUser.onboarding ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Experiência com IA
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.onboarding.aiExperienceLevel ? 
                        `Nível ${selectedUser.onboarding.aiExperienceLevel}/10` : 
                        'Não informado'
                      }
                    </CriaTextBody1>
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Nível de intimidade com IA
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.onboarding.aiIntimacyLevel || 'Não informado'}
                    </CriaTextBody1>
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Objetivos principais
                    </CriaTextBody1>
                    {selectedUser.onboarding.objectives && selectedUser.onboarding.objectives.length > 0 ? (
                      <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        {selectedUser.onboarding.objectives.map((objective, index) => (
                          <li key={index}>
                            <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                              {objective}
                            </CriaTextBody1>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                        Não informado
                      </CriaTextBody1>
                    )}
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Área de atuação
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.onboarding.workArea || 'Não informado'}
                    </CriaTextBody1>
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Papel na área
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.onboarding.role || 'Não informado'}
                    </CriaTextBody1>
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Tarefas do dia a dia
                    </CriaTextBody1>
                    {selectedUser.onboarding.dailyTasks && selectedUser.onboarding.dailyTasks.length > 0 ? (
                      <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        {selectedUser.onboarding.dailyTasks.map((task, index) => (
                          <li key={index}>
                            <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                              {task}
                            </CriaTextBody1>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                        Não informado
                      </CriaTextBody1>
                    )}
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Preferências de aprendizado
                    </CriaTextBody1>
                    {selectedUser.onboarding.learningPreferences && selectedUser.onboarding.learningPreferences.length > 0 ? (
                      <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        {selectedUser.onboarding.learningPreferences.map((preference, index) => (
                          <li key={index}>
                            <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                              {preference}
                            </CriaTextBody1>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                        Não informado
                      </CriaTextBody1>
                    )}
                  </div>

                  <div>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      marginBottom: '4px'
                    }}>
                      Por onde nos encontrou
                    </CriaTextBody1>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                      {selectedUser.onboarding.discoverySource || 'Não informado'}
                    </CriaTextBody1>
                  </div>
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '32px 0',
                  color: 'var(--cria-text-tertiary)'
                }}>
                  <BookOpen size={48} style={{ marginBottom: '16px', color: 'var(--cria-text-tertiary)' }} />
                  <CriaTextTitle1 style={{ marginBottom: '8px', color: 'var(--cria-text-primary)' }}>
                    Onboarding não concluído
                  </CriaTextTitle1>
                  <CriaTextBody1>
                    Este usuário ainda não completou o processo de onboarding.
                  </CriaTextBody1>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Custom Learnings */}
          <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
            <CardContent>
              <CriaTextTitle1 style={{
                marginBottom: '16px',
                color: 'var(--cria-text-primary)'
              }}>
                Trilhas Personalizadas
              </CriaTextTitle1>
              
              {selectedUser.customLearnings && selectedUser.customLearnings.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {selectedUser.customLearnings.map((learning) => (
                    <div key={learning.id} style={{
                      backgroundColor: 'var(--cria-bg-secondary)',
                      borderRadius: '8px',
                      padding: '16px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '12px'
                      }}>
                        <CriaTextTitle1 style={{ color: 'var(--cria-text-primary)' }}>
                          {learning.name}
                        </CriaTextTitle1>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'var(--cria-text-secondary)',
                          fontSize: '14px'
                        }}>
                          <span>{learning.lessonCount} aulas</span>
                          <span>•</span>
                          <span>{learning.courseCount} cursos</span>
                        </div>
                      </div>

                      {/* Lessons */}
                      {learning.lessons.length > 0 && (
                        <div style={{ marginBottom: '16px' }}>
                          <CriaTextBody1 style={{
                            color: 'var(--cria-text-secondary)',
                            fontSize: '14px',
                            marginBottom: '8px'
                          }}>
                            Aulas
                          </CriaTextBody1>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {learning.lessons.map((lesson, index) => (
                              <li key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '4px'
                              }}>
                                <CheckCircle size={16} style={{
                                  color: 'var(--cria-success)',
                                  marginRight: '8px'
                                }} />
                                <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                                  {lesson.title}
                                </CriaTextBody1>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Courses */}
                      {learning.courses.length > 0 && (
                        <div>
                          <CriaTextBody1 style={{
                            color: 'var(--cria-text-secondary)',
                            fontSize: '14px',
                            marginBottom: '8px'
                          }}>
                            Cursos
                          </CriaTextBody1>
                          <ul style={{ listStyle: 'none', padding: 0 }}>
                            {learning.courses.map((course, index) => (
                              <li key={index} style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '4px'
                              }}>
                                <GraduationCap size={16} style={{
                                  color: 'var(--cria-primary)',
                                  marginRight: '8px'
                                }} />
                                <CriaTextBody1 style={{ color: 'var(--cria-text-primary)' }}>
                                  {course.title}
                                </CriaTextBody1>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Empty State for Custom Learning */}
                      {learning.lessons.length === 0 && learning.courses.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '16px 0' }}>
                          <CriaTextBody1 style={{ color: 'var(--cria-text-tertiary)' }}>
                            Esta trilha não possui conteúdo ainda.
                          </CriaTextBody1>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '32px 0',
                  color: 'var(--cria-text-tertiary)'
                }}>
                  <GraduationCap size={48} style={{ marginBottom: '16px', color: 'var(--cria-text-tertiary)' }} />
                  <CriaTextTitle1 style={{ marginBottom: '8px', color: 'var(--cria-text-primary)' }}>
                    Nenhuma trilha personalizada
                  </CriaTextTitle1>
                  <CriaTextBody1>
                    Este usuário ainda não criou trilhas personalizadas.
                  </CriaTextBody1>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section data-testid="alunos-page" style={{ padding: '24px', paddingBottom: '40px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{
          marginBottom: '8px',
          color: 'var(--cria-text-primary)'
        }}>
          Usuários
        </CriaTextHeadline1>
        <CriaTextBody1 style={{
          color: 'var(--cria-text-secondary)'
        }}>
          Gerencie os usuários da empresa
        </CriaTextBody1>
      </div>

      {/* Users Table */}
      <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
        <CardContent>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <CriaTextTitle1 style={{ color: 'var(--cria-text-primary)' }}>
              Usuários da Empresa
            </CriaTextTitle1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)', fontSize: '14px' }}>
                {users.length} usuários
              </CriaTextBody1>
            </div>
          </div>

          {users.length > 0 ? (
            <div style={{ overflow: 'hidden' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0
              }}>
                <thead>
                  <tr style={{
                    backgroundColor: 'var(--cria-bg-secondary)',
                    borderBottom: '1px solid var(--cria-border-primary)'
                  }}>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--cria-text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Usuário
                    </th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--cria-text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Email
                    </th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--cria-text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Data de Registro
                    </th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--cria-text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Status
                    </th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'right',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'var(--cria-text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      style={{
                        borderBottom: '1px solid var(--cria-border-primary)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--cria-bg-secondary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <td style={{ padding: '16px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            size="md"
                            name={user.name}
                            style={{ marginRight: '16px' }}
                          />
                          <div>
                            <CriaTextBody1 style={{
                              color: 'var(--cria-text-primary)',
                              fontWeight: '500'
                            }}>
                              {user.name}
                            </CriaTextBody1>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                          {user.email}
                        </CriaTextBody1>
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <CriaTextBody1 style={{ color: 'var(--cria-text-secondary)' }}>
                          {formatDate(user.createdAt)}
                        </CriaTextBody1>
                      </td>
                      <td style={{ padding: '16px 24px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '4px 8px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: '500',
                          backgroundColor: 'var(--cria-success-50)',
                          color: 'var(--cria-success-700)'
                        }}>
                          Ativo
                        </span>
                      </td>
                      <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                        <Button
                          variant="ghost"
                          onClick={() => setSelectedUser(user)}
                          style={{
                            color: 'var(--cria-primary)',
                            fontSize: '14px',
                            fontWeight: '500'
                          }}
                        >
                          Ver detalhes
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '48px 0',
              color: 'var(--cria-text-tertiary)'
            }}>
              <Users size={48} style={{ marginBottom: '16px', color: 'var(--cria-text-tertiary)' }} />
              <CriaTextTitle1 style={{ marginBottom: '8px', color: 'var(--cria-text-primary)' }}>
                Nenhum usuário encontrado
              </CriaTextTitle1>
              <CriaTextBody1>
                Quando usuários se registrarem na empresa, eles aparecerão aqui.
              </CriaTextBody1>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Alunos;