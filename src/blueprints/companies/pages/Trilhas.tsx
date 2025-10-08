import React from 'react';
import { CriaTextHeadline1, CriaTextTitle1, CriaTextBody1 } from '../../../components/TextTokens';
import { Card, CardContent } from '../../../components/Card';
import { Avatar } from '../../../components/Avatar';
import { CheckCircle, GraduationCap, BookOpen, Users, Buildings, User } from 'phosphor-react';

interface CustomLearning {
  id: string;
  name: string;
  lessonCount: number;
  courseCount: number;
  lessons: { title: string; slug: string }[];
  courses: { title: string; slug: string }[];
  users: {
    id: string;
    name: string;
    lastName: string;
    email: string;
    companyDepartment?: string;
    businessTitle?: string;
  }[];
}

const Trilhas: React.FC = () => {
  // Mock data for custom learnings
  const customLearnings: CustomLearning[] = [
    {
      id: '1',
      name: 'Trilha de Marketing Digital',
      lessonCount: 5,
      courseCount: 2,
      lessons: [
        { title: 'Introdução ao Marketing Digital', slug: 'intro-marketing' },
        { title: 'SEO Básico', slug: 'seo-basico' },
        { title: 'Google Ads', slug: 'google-ads' },
        { title: 'Redes Sociais', slug: 'redes-sociais' },
        { title: 'Analytics', slug: 'analytics' }
      ],
      courses: [
        { title: 'Curso Completo de Marketing', slug: 'curso-marketing' },
        { title: 'Estratégias Avançadas', slug: 'estrategias-avancadas' }
      ],
      users: [
        {
          id: '1',
          name: 'João',
          lastName: 'Silva',
          email: 'joao@empresa.com',
          companyDepartment: 'Marketing',
          businessTitle: 'Analista de Marketing'
        },
        {
          id: '2',
          name: 'Maria',
          lastName: 'Santos',
          email: 'maria@empresa.com',
          companyDepartment: 'Marketing',
          businessTitle: 'Gerente de Marketing'
        }
      ]
    },
    {
      id: '2',
      name: 'Trilha de Desenvolvimento',
      lessonCount: 8,
      courseCount: 3,
      lessons: [
        { title: 'Fundamentos de Programação', slug: 'fundamentos-programacao' },
        { title: 'JavaScript Básico', slug: 'javascript-basico' },
        { title: 'React Fundamentals', slug: 'react-fundamentals' },
        { title: 'Node.js', slug: 'nodejs' },
        { title: 'Banco de Dados', slug: 'banco-dados' },
        { title: 'APIs REST', slug: 'apis-rest' },
        { title: 'Testes Automatizados', slug: 'testes-automatizados' },
        { title: 'Deploy e DevOps', slug: 'deploy-devops' }
      ],
      courses: [
        { title: 'Desenvolvimento Full Stack', slug: 'full-stack' },
        { title: 'Arquitetura de Software', slug: 'arquitetura-software' },
        { title: 'Boas Práticas', slug: 'boas-praticas' }
      ],
      users: [
        {
          id: '3',
          name: 'Pedro',
          lastName: 'Costa',
          email: 'pedro@empresa.com',
          companyDepartment: 'Desenvolvimento',
          businessTitle: 'Desenvolvedor'
        }
      ]
    },
    {
      id: '3',
      name: 'Trilha de Vendas',
      lessonCount: 4,
      courseCount: 1,
      lessons: [
        { title: 'Técnicas de Vendas', slug: 'tecnicas-vendas' },
        { title: 'CRM e Gestão', slug: 'crm-gestao' },
        { title: 'Negociação', slug: 'negociacao' },
        { title: 'Pós-venda', slug: 'pos-venda' }
      ],
      courses: [
        { title: 'Vendas Consultivas', slug: 'vendas-consultivas' }
      ],
      users: [
        {
          id: '4',
          name: 'Ana',
          lastName: 'Oliveira',
          email: 'ana@empresa.com',
          companyDepartment: 'Vendas',
          businessTitle: 'Vendedora'
        },
        {
          id: '5',
          name: 'Carlos',
          lastName: 'Ferreira',
          email: 'carlos@empresa.com',
          companyDepartment: 'Vendas',
          businessTitle: 'Gerente de Vendas'
        }
      ]
    }
  ];

  const getInitials = (name: string, lastName?: string) => {
    const firstInitial = name ? name[0] : 'T';
    const lastInitial = lastName ? lastName[0] : '';
    return (firstInitial + lastInitial).toUpperCase();
  };

  return (
    <section data-testid="trilhas-page" style={{ padding: '24px', paddingBottom: '40px' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '32px' }}>
        <CriaTextHeadline1 style={{
          marginBottom: '8px',
          color: 'var(--cria-text-primary)'
        }}>
          Trilhas de Aprendizado
        </CriaTextHeadline1>
        <CriaTextBody1 style={{
          color: 'var(--cria-text-secondary)'
        }}>
          Visualize as trilhas personalizadas criadas para os alunos da empresa
        </CriaTextBody1>
      </div>

      {/* Custom Learnings */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {customLearnings.length > 0 ? (
          customLearnings.map((customLearning) => (
            <Card key={customLearning.id} style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
              <CardContent>
                {/* Custom Learning Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      height: '48px',
                      width: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--cria-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '16px'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'white'
                      }}>
                        {getInitials(customLearning.name)}
                      </span>
                    </div>
                    <div>
                      <CriaTextTitle1 style={{ color: 'var(--cria-text-primary)' }}>
                        {customLearning.name}
                      </CriaTextTitle1>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--cria-text-secondary)',
                    fontSize: '14px'
                  }}>
                    <span>{customLearning.lessonCount} aulas</span>
                    <span>•</span>
                    <span>{customLearning.courseCount} cursos</span>
                  </div>
                </div>

                {/* Lessons */}
                {customLearning.lessons.length > 0 && (
                  <div style={{ marginBottom: '16px' }}>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      fontWeight: '500',
                      marginBottom: '8px'
                    }}>
                      Aulas
                    </CriaTextBody1>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {customLearning.lessons.map((lesson, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '4px'
                        }}>
                          <CheckCircle size={16} style={{
                            color: 'var(--cria-success)',
                            marginRight: '8px'
                          }} />
                          <CriaTextBody1 style={{
                            color: 'var(--cria-text-primary)',
                            fontSize: '14px'
                          }}>
                            {lesson.title}
                          </CriaTextBody1>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Courses */}
                {customLearning.courses.length > 0 && (
                  <div style={{ marginBottom: '16px' }}>
                    <CriaTextBody1 style={{
                      color: 'var(--cria-text-secondary)',
                      fontSize: '14px',
                      fontWeight: '500',
                      marginBottom: '8px'
                    }}>
                      Cursos
                    </CriaTextBody1>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {customLearning.courses.map((course, index) => (
                        <li key={index} style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '4px'
                        }}>
                          <GraduationCap size={16} style={{
                            color: 'var(--cria-primary)',
                            marginRight: '8px'
                          }} />
                          <CriaTextBody1 style={{
                            color: 'var(--cria-text-primary)',
                            fontSize: '14px'
                          }}>
                            {course.title}
                          </CriaTextBody1>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Empty State for Custom Learning */}
                {customLearning.lessons.length === 0 && customLearning.courses.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '16px 0' }}>
                    <CriaTextBody1 style={{ color: 'var(--cria-text-tertiary)' }}>
                      Esta trilha não possui conteúdo ainda.
                    </CriaTextBody1>
                  </div>
                )}

                {/* Users with access to this custom learning */}
                <div style={{
                  marginTop: '24px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--cria-border-primary)'
                }}>
                  <CriaTextBody1 style={{
                    color: 'var(--cria-text-secondary)',
                    fontSize: '14px',
                    fontWeight: '500',
                    marginBottom: '16px'
                  }}>
                    Alunos com acesso a essa trilha:
                  </CriaTextBody1>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '12px'
                  }}>
                    {customLearning.users.map((user) => (
                      <div key={user.id} style={{
                        backgroundColor: 'var(--cria-bg-secondary)',
                        borderRadius: '8px',
                        padding: '12px',
                        border: '1px solid var(--cria-border-primary)',
                        transition: 'border-color 0.2s'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <div style={{ flexShrink: 0 }}>
                            <div style={{
                              height: '40px',
                              width: '40px',
                              borderRadius: '8px',
                              background: 'linear-gradient(135deg, var(--cria-primary) 0%, var(--cria-primary-dark) 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: 'var(--cria-shadow-sm)'
                            }}>
                              <span style={{
                                fontSize: '14px',
                                fontWeight: '600',
                                color: 'white'
                              }}>
                                {getInitials(user.name, user.lastName)}
                              </span>
                            </div>
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              marginBottom: '4px'
                            }}>
                              <CriaTextBody1 style={{
                                color: 'var(--cria-text-primary)',
                                fontWeight: '500',
                                fontSize: '14px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}>
                                {user.name} {user.lastName}
                              </CriaTextBody1>
                            </div>
                            <CriaTextBody1 style={{
                              color: 'var(--cria-text-secondary)',
                              fontSize: '12px',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              marginBottom: '4px'
                            }}>
                              {user.email}
                            </CriaTextBody1>
                            {user.companyDepartment && (
                              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2px' }}>
                                <Buildings size={12} style={{
                                  color: 'var(--cria-text-tertiary)',
                                  marginRight: '4px'
                                }} />
                                <CriaTextBody1 style={{
                                  color: 'var(--cria-text-tertiary)',
                                  fontSize: '12px',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap'
                                }}>
                                  {user.companyDepartment}
                                </CriaTextBody1>
                              </div>
                            )}
                            {user.businessTitle && (
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <User size={12} style={{
                                  color: 'var(--cria-text-tertiary)',
                                  marginRight: '4px'
                                }} />
                                <CriaTextBody1 style={{
                                  color: 'var(--cria-text-tertiary)',
                                  fontSize: '12px',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap'
                                }}>
                                  {user.businessTitle}
                                </CriaTextBody1>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          /* Empty State */
          <Card style={{ backgroundColor: 'var(--cria-surface-secondary)' }}>
            <CardContent>
              <div style={{
                textAlign: 'center',
                padding: '48px 0',
                color: 'var(--cria-text-tertiary)'
              }}>
                <BookOpen size={48} style={{ marginBottom: '16px', color: 'var(--cria-text-tertiary)' }} />
                <CriaTextTitle1 style={{ marginBottom: '8px', color: 'var(--cria-text-primary)' }}>
                  Nenhuma trilha encontrada
                </CriaTextTitle1>
                <CriaTextBody1>
                  Quando os alunos tiverem trilhas personalizadas, elas aparecerão aqui.
                </CriaTextBody1>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Trilhas;