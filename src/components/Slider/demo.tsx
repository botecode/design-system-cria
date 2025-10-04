import React, { useState } from 'react';
import { Slider } from './Slider';
import { Typography } from '../Typography';
import { Card } from '../Card';

export const SliderDemo: React.FC = () => {
  const [singleValue, setSingleValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  const [stepValue, setStepValue] = useState(25);
  const [colorValue, setColorValue] = useState(60);
  const [zeroToTenValue, setZeroToTenValue] = useState(5);
  const [textSliderValue, setTextSliderValue] = useState(5);

  const marks = [
    { value: 0, label: '0' },
    { value: 25, label: '25' },
    { value: 50, label: '50' },
    { value: 75, label: '75' },
    { value: 100, label: '100' }
  ];

  const rangeMarks = [
    { value: 0, label: 'Min' },
    { value: 50, label: 'Mid' },
    { value: 100, label: 'Max' }
  ];

  const zeroToTenMarks = [
    { value: 0, label: '0' },
    { value: 2, label: '2' },
    { value: 4, label: '4' },
    { value: 6, label: '6' },
    { value: 8, label: '8' },
    { value: 10, label: '10' }
  ];

  const textSliderMarks = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' }
  ];

  const getTextForValue = (value: number) => {
    const texts = [
      { value: 0, text: "Not at all", description: "This doesn't apply to me" },
      { value: 1, text: "Very little", description: "Rarely applicable" },
      { value: 2, text: "A little", description: "Sometimes applicable" },
      { value: 3, text: "Somewhat", description: "Moderately applicable" },
      { value: 4, text: "Moderately", description: "Fairly applicable" },
      { value: 5, text: "Neutral", description: "Neither agree nor disagree" },
      { value: 6, text: "Quite a bit", description: "Often applicable" },
      { value: 7, text: "A lot", description: "Very applicable" },
      { value: 8, text: "Very much", description: "Almost always applicable" },
      { value: 9, text: "Extremely", description: "Almost always true" },
      { value: 10, text: "Completely", description: "Always applies to me" }
    ];
    
    return texts.find(item => item.value === value) || texts[5];
  };

  return (
    <div style={{ padding: '24px', maxWidth: '800px' }}>
      <Typography variant="title1" weight="bold" style={{ marginBottom: '16px' }}>
        Slider Demo
      </Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {/* Basic Single Slider */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Basic Single Slider
          </Typography>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="body2" style={{ marginBottom: '8px' }}>
              Value: {singleValue}
            </Typography>
            <Slider
              min={0}
              max={100}
              value={singleValue}
              onChange={setSingleValue}
              marks={marks}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Zero to Ten Slider */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Zero to Ten Slider
          </Typography>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="body2" style={{ marginBottom: '8px' }}>
              Value: {zeroToTenValue}
            </Typography>
            <Slider
              min={0}
              max={10}
              value={zeroToTenValue}
              onChange={setZeroToTenValue}
              marks={zeroToTenMarks}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Interactive Text Slider */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Interactive Text Slider
          </Typography>
          <Typography variant="body2" style={{ marginBottom: '16px', color: '#666' }}>
            How much does this apply to you?
          </Typography>
          
          <div style={{ marginBottom: '24px' }}>
            <Slider
              min={0}
              max={10}
              value={textSliderValue}
              onChange={setTextSliderValue}
              marks={textSliderMarks}
              showLabels={true}
              color="primary"
            />
          </div>

          {/* Text Display Container */}
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '2px solid #e9ecef',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            borderColor: textSliderValue >= 7 ? '#28a745' : textSliderValue <= 3 ? '#dc3545' : '#6c757d'
          }}>
            <Typography 
              variant="h2" 
              weight="bold" 
              style={{ 
                marginBottom: '8px',
                color: textSliderValue >= 7 ? '#28a745' : textSliderValue <= 3 ? '#dc3545' : '#495057'
              }}
            >
              {getTextForValue(textSliderValue).text}
            </Typography>
            <Typography 
              variant="body1" 
              style={{ 
                color: '#6c757d',
                fontStyle: 'italic'
              }}
            >
              {getTextForValue(textSliderValue).description}
            </Typography>
            <div style={{ 
              marginTop: '12px',
              fontSize: '14px',
              color: '#868e96',
              fontWeight: '500'
            }}>
              Value: {textSliderValue}/10
            </div>
          </div>
        </Card>

        {/* Range Slider */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Range Slider
          </Typography>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="body2" style={{ marginBottom: '8px' }}>
              Range: {rangeValue[0]} - {rangeValue[1]}
            </Typography>
            <Slider
              min={0}
              max={100}
              value={rangeValue}
              onChange={setRangeValue}
              range
              marks={rangeMarks}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Step Control */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Step Control (Step: 5)
          </Typography>
          <div style={{ marginBottom: '16px' }}>
            <Typography variant="body2" style={{ marginBottom: '8px' }}>
              Value: {stepValue} (step: 5)
            </Typography>
            <Slider
              min={0}
              max={100}
              value={stepValue}
              onChange={setStepValue}
              step={5}
              marks={[
                { value: 0, label: '0' },
                { value: 20, label: '20' },
                { value: 40, label: '40' },
                { value: 60, label: '60' },
                { value: 80, label: '80' },
                { value: 100, label: '100' }
              ]}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Different Colors */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Different Colors
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Primary Color
              </Typography>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={setColorValue}
                color="primary"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Secondary Color
              </Typography>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={setColorValue}
                color="secondary"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Success Color
              </Typography>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={setColorValue}
                color="success"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Warning Color
              </Typography>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={setColorValue}
                color="warning"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Error Color
              </Typography>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={setColorValue}
                color="error"
                marks={marks}
                showLabels={true}
              />
            </div>
          </div>
        </Card>

        {/* Different Sizes */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Different Sizes
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Small Size
              </Typography>
              <Slider
                min={0}
                max={100}
                value={50}
                onChange={() => {}}
                size="sm"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Medium Size (Default)
              </Typography>
              <Slider
                min={0}
                max={100}
                value={50}
                onChange={() => {}}
                size="md"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Large Size
              </Typography>
              <Slider
                min={0}
                max={100}
                value={50}
                onChange={() => {}}
                size="lg"
                marks={marks}
                showLabels={true}
              />
            </div>
          </div>
        </Card>

        {/* Disabled State */}
        <Card style={{ padding: '24px' }}>
          <Typography variant="h3" weight="semiBold" style={{ marginBottom: '16px' }}>
            Disabled State
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Disabled Single Slider
              </Typography>
              <Slider
                min={0}
                max={100}
                value={50}
                onChange={() => {}}
                disabled
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <Typography variant="body2" style={{ marginBottom: '8px' }}>
                Disabled Range Slider
              </Typography>
              <Slider
                min={0}
                max={100}
                value={[30, 70]}
                onChange={() => {}}
                range
                disabled
                marks={rangeMarks}
                showLabels={true}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SliderDemo;
