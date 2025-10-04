import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Stepper } from './index';
import { Card, CardHeader, CardContent } from '../Card';
import { CheckCircle, WarningCircle, Info } from 'phosphor-react';

export const StepperDemo: React.FC = () => {
  const [activeH, setActiveH] = useState('one');
  const [activeNL, setActiveNL] = useState('one');
  const [activeV, setActiveV] = useState('one');

  const stepsBase = [
    { id: 'one', title: 'Step One', description: 'Basic details' },
    { id: 'two', title: 'Step Two', description: 'Configure options' },
    { id: 'three', title: 'Step Three', description: 'Review & submit' },
  ];

  const stepsStates = [
    { id: 'one', title: 'Completed', completed: true, icon: <CheckCircle size={16} /> },
    { id: 'two', title: 'Active', icon: <Info size={16} /> },
    { id: 'three', title: 'Error', error: true, icon: <WarningCircle size={16} /> },
    { id: 'four', title: 'Disabled', disabled: true },
  ];

  return (
    <div className="stepper-demo">
      <Typography variant="h2" className="demo-title">Stepper Component</Typography>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Horizontal (Linear)</Typography>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={stepsBase}
            activeId={activeH}
            onChange={setActiveH}
            orientation="horizontal"
            linear
          />
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Horizontal (Non-linear)</Typography>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={stepsBase}
            activeId={activeNL}
            onChange={setActiveNL}
            orientation="horizontal"
            linear={false}
          />
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Vertical</Typography>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 16 }}>
            <Stepper
              steps={stepsBase}
              activeId={activeV}
              onChange={setActiveV}
              orientation="vertical"
              linear
            />
            <div style={{ padding: 12 }}>
              <Typography variant="h4">Panel for: {activeV}</Typography>
              <Typography variant="body">Content for the selected step would render here.</Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">States, Icons, Disabled</Typography>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={stepsStates}
            activeId="two"
            orientation="horizontal"
            linear={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StepperDemo;
