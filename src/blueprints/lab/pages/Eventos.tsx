import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { CalendarBlank } from 'phosphor-react';

const Eventos: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Header Section */}
      <div style={{ 
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <CalendarBlank size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Eventos</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            Participe de eventos ao vivo e workshops
          </CriaTextBody1>
        </div>
      </div>

      {/* Content Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            📅 Próximos Eventos
          </CriaTextTitle2>
          <CriaTextBody1>
            Veja a agenda de eventos futuros e faça sua inscrição.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            🎥 Eventos ao Vivo
          </CriaTextTitle2>
          <CriaTextBody1>
            Participe de transmissões ao vivo e interaja em tempo real.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            🎓 Workshops
          </CriaTextTitle2>
          <CriaTextBody1>
            Aprenda com especialistas em sessões práticas e interativas.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default Eventos;

