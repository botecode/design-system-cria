import React, { useState, useCallback } from 'react';
import { Stepper, StepperStep } from './Stepper';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { Card, CardContent, CardHeader } from '../Card';
import { Grid, Row, Column } from '../Grid';
import { Button } from '../Button';
import { User, Gear, CreditCard, Check, FileText, Shield, Rocket, Heart, ShoppingCart, Bell, Camera, MapPin } from 'phosphor-react';
import { spacing, colors } from '../../tokens';

const StepperDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Sample data for different stepper examples
  const onboardingSteps = [
    {
      id: 'step1',
      title: 'Personal Information',
      description: 'Enter your personal details and contact information',
      icon: <User />,
      completed: false,
      active: true,
    },
    {
      id: 'step2',
      title: 'Account Settings',
      description: 'Configure your account preferences and security settings',
      icon: <Gear />,
      completed: false,
      active: false,
    },
    {
      id: 'step3',
      title: 'Payment Method',
      description: 'Set up your payment method for subscription',
      icon: <CreditCard />,
      completed: false,
      active: false,
    },
    {
      id: 'step4',
      title: 'Complete Setup',
      description: 'Review and complete your account setup',
      icon: <Check />,
      completed: false,
      active: false,
    },
  ];

  const projectSteps = [
    {
      id: 'p1',
      title: 'Project Planning',
      description: 'Define project scope, timeline, and resources',
      icon: <FileText />,
      completed: true,
      active: false,
    },
    {
      id: 'p2',
      title: 'Design Phase',
      description: 'Create wireframes, mockups, and design system',
      icon: <Camera />,
      completed: true,
      active: false,
    },
    {
      id: 'p3',
      title: 'Development',
      description: 'Implement features and functionality',
      icon: <Gear />,
      completed: false,
      active: true,
    },
    {
      id: 'p4',
      title: 'Testing',
      description: 'Quality assurance and bug fixes',
      icon: <Shield />,
      completed: false,
      active: false,
    },
    {
      id: 'p5',
      title: 'Deployment',
      description: 'Launch to production environment',
      icon: <Rocket />,
      completed: false,
      active: false,
    },
  ];

  const purchaseSteps = [
    {
      id: 's1',
      title: 'Select Items',
      description: 'Choose products and add to cart',
      icon: <ShoppingCart />,
      completed: true,
      active: false,
    },
    {
      id: 's2',
      title: 'Shipping Info',
      description: 'Enter delivery address and preferences',
      icon: <MapPin />,
      completed: true,
      active: false,
    },
    {
      id: 's3',
      title: 'Payment',
      description: 'Complete payment and billing information',
      icon: <CreditCard />,
      completed: false,
      active: true,
    },
    {
      id: 's4',
      title: 'Confirmation',
      description: 'Review order and receive confirmation',
      icon: <Check />,
      completed: false,
      active: false,
    },
  ];

  const handleStepClick = useCallback((index: number, step: any) => {
    console.log(`Clicked step ${index}:`, step);
    setCurrentStep(index);
  }, []);

  const handleNext = useCallback((currentIndex: number, currentStep: any) => {
    console.log('Next clicked:', currentIndex, currentStep);
    if (currentIndex < onboardingSteps.length - 1) {
      setCompletedSteps(prev => [...prev, currentIndex]);
      setCurrentStep(currentIndex + 1);
    }
  }, []);

  const handlePrevious = useCallback((currentIndex: number, currentStep: any) => {
    console.log('Previous clicked:', currentIndex, currentStep);
    if (currentIndex > 0) {
      setCurrentStep(currentIndex - 1);
    }
  }, []);

  const handleComplete = useCallback((currentIndex: number, currentStep: any) => {
    console.log('Complete clicked:', currentIndex, currentStep);
    setCompletedSteps(prev => [...prev, currentIndex]);
    alert('Setup completed successfully!');
  }, []);

  const resetStepper = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  return (
    <div style={{ padding: spacing[8], minHeight: '100vh' }}>
      <CriaTextHeadline1 style={{ marginBottom: spacing[6] }}>
        Stepper / Wizard
      </CriaTextHeadline1>

      <CriaTextBody1 style={{ marginBottom: spacing[8] }}>
        A component for guiding users through multi-step flows, processes, or workflows with clear progress indication.
      </CriaTextBody1>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Basic Stepper
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={onboardingSteps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onComplete={handleComplete}
          />
          <div style={{ marginTop: spacing[4], textAlign: 'center' }}>
            <Button variant="outlined" size="sm" onClick={resetStepper}>
              Reset Stepper
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Different Orientations
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Horizontal Orientation (Default)
                </CriaTextTitle1>
                <Stepper
                  steps={projectSteps}
                  currentStep={2}
            orientation="horizontal"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Vertical Orientation
                </CriaTextTitle1>
                <Stepper
                  steps={projectSteps}
                  currentStep={2}
                  orientation="vertical"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Different Sizes
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Small Size
                </CriaTextTitle1>
                <Stepper
                  steps={purchaseSteps}
                  currentStep={2}
                  size="sm"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Medium Size (Default)
                </CriaTextTitle1>
                <Stepper
                  steps={purchaseSteps}
                  currentStep={2}
                  size="md"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Large Size
                </CriaTextTitle1>
                <Stepper
                  steps={purchaseSteps}
                  currentStep={2}
                  size="lg"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Different Variants
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Default Variant
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  variant="default"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Minimal Variant
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  variant="minimal"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Without Navigation
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={onboardingSteps}
            currentStep={1}
            showNavigation={false}
            onStepClick={handleStepClick}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Without Connectors
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={onboardingSteps}
            currentStep={1}
            showConnector={false}
            onStepClick={handleStepClick}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Custom Connector
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={onboardingSteps}
            currentStep={1}
            connector={<div style={{ 
              width: '2px', 
              height: '20px', 
              backgroundColor: colors.primary[500],
              margin: '0 auto',
              borderRadius: '1px'
            }} />}
            onStepClick={handleStepClick}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Custom Navigation Labels
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={onboardingSteps}
            currentStep={1}
            nextLabel="Continue"
            previousLabel="Go Back"
            completeLabel="Finish Setup"
            onStepClick={handleStepClick}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onComplete={handleComplete}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Loading State
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
            <Stepper
            steps={[]}
            currentStep={0}
            loading
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Disabled State
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Stepper
            steps={onboardingSteps}
            currentStep={1}
            disabled
            onStepClick={handleStepClick}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onComplete={handleComplete}
          />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Different Connector Styles
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Solid Connector (Default)
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  connectorStyle="solid"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Dashed Connector
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  connectorStyle="dashed"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Dotted Connector
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  connectorStyle="dotted"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Different Connector Colors
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Primary Color (Default)
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  connectorColor="primary"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Secondary Color
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  connectorColor="secondary"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Gray Color
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  connectorColor="gray"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextHeadline2>
            Real-world Examples
          </CriaTextHeadline2>
        </CardHeader>
        <CardContent>
          <Grid gap="lg">
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  User Onboarding Flow
                </CriaTextTitle1>
                <Stepper
                  steps={onboardingSteps}
                  currentStep={1}
                  onStepClick={handleStepClick}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  onComplete={handleComplete}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  Project Development Pipeline
                </CriaTextTitle1>
                <Stepper
                  steps={projectSteps}
                  currentStep={2}
                  orientation="vertical"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
            <Row>
              <Column span={12}>
                <CriaTextTitle1 style={{ marginBottom: spacing[3] }}>
                  E-commerce Checkout Process
                </CriaTextTitle1>
                <Stepper
                  steps={purchaseSteps}
                  currentStep={2}
                  size="sm"
                  onStepClick={handleStepClick}
                />
              </Column>
            </Row>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepperDemo;