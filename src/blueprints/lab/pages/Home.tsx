import React from 'react';
import { CriaTextTitle1, CriaTextTitle2, CriaTextBody1 } from '../../../components/TextTokens';
import { Card } from '../../../components/Card';
import { Flask } from 'phosphor-react';

const Home: React.FC = () => {
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
        <Flask size={48} weight="duotone" />
        <div>
          <CriaTextTitle1>Welcome to the Lab</CriaTextTitle1>
          <CriaTextBody1 style={{ marginTop: '0.5rem', opacity: 0.8 }}>
            A space for experimentation, prototyping, and innovation
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
            🧪 Experiments
          </CriaTextTitle2>
          <CriaTextBody1>
            Try out new features and test innovative ideas in a safe environment.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            🎨 Prototypes
          </CriaTextTitle2>
          <CriaTextBody1>
            Build and showcase early versions of new components and designs.
          </CriaTextBody1>
        </Card>

        <Card variant="elevated" style={{ padding: '1.5rem' }}>
          <CriaTextTitle2 style={{ marginBottom: '1rem' }}>
            💡 Innovation Hub
          </CriaTextTitle2>
          <CriaTextBody1>
            Explore cutting-edge patterns and push the boundaries of what's possible.
          </CriaTextBody1>
        </Card>
      </div>
    </div>
  );
};

export default Home;

