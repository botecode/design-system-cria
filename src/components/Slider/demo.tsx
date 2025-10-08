import React, { useState } from 'react';
import { Slider } from './Slider';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextTitle1, CriaTextTitle2, CriaTextBody1, CriaTextBody2 } from '../TextTokens';
import { spacing, colors, radii } from '../../tokens';
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
    <div style={{ padding: spacing[6], maxWidth: '800px' }}>
      <div style={{ marginBottom: spacing[4] }}>
        <CriaTextHeadline1>
        Slider Demo
        </CriaTextHeadline1>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[8] }}>
        {/* Basic Single Slider */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Basic Single Slider
          </CriaTextTitle1>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody2>
              Value: {singleValue}
            </CriaTextBody2>
            <Slider
              min={0}
              max={100}
              value={singleValue}
              onChange={(v) => typeof v === 'number' && setSingleValue(v)}
              marks={marks}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Zero to Ten Slider */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Zero to Ten Slider
          </CriaTextTitle1>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody2>
              Value: {zeroToTenValue}
            </CriaTextBody2>
            <Slider
              min={0}
              max={10}
              value={zeroToTenValue}
              onChange={(v) => typeof v === 'number' && setZeroToTenValue(v)}
              marks={zeroToTenMarks}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Interactive Text Slider */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Interactive Text Slider
          </CriaTextTitle1>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody2>
            How much does this apply to you?
            </CriaTextBody2>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <Slider
              min={0}
              max={10}
              value={textSliderValue}
              onChange={(v) => typeof v === 'number' && setTextSliderValue(v)}
              marks={textSliderMarks}
              showLabels={true}
              color="primary"
            />
          </div>

          {/* Text Display Container */}
          <div style={{
            backgroundColor: colors.gray[50],
            border: `2px solid ${colors.gray[200]}`,
            borderRadius: radii.lg,
            padding: spacing[5],
            textAlign: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            borderColor: textSliderValue >= 7 ? 'var(--cria-primary)' : textSliderValue <= 3 ? 'var(--cria-secondary)' : '#6c757d'
          }}>
            <div style={{ marginBottom: spacing[2], color: textSliderValue >= 7 ? colors.primary : textSliderValue <= 3 ? colors.secondary : colors.gray[600] }}>
              <CriaTextHeadline2>
                {getTextForValue(textSliderValue).text}
              </CriaTextHeadline2>
            </div>
            <div style={{ color: colors.text.secondary, fontStyle: 'italic' }}>
              <CriaTextBody1>
                {getTextForValue(textSliderValue).description}
              </CriaTextBody1>
            </div>
          </div>
        </Card>

        {/* Range Slider */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Range Slider
          </CriaTextTitle1>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody2>
              Range: {rangeValue[0]} - {rangeValue[1]}
            </CriaTextBody2>
            <Slider
              min={0}
              max={100}
              value={rangeValue}
              onChange={(v) => Array.isArray(v) && setRangeValue(v)}
              range
              marks={rangeMarks}
              showLabels={true}
            />
          </div>
        </Card>

        {/* Step Control */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Step Control (Step: 5)
          </CriaTextTitle1>
          <div style={{ marginBottom: spacing[4] }}>
            <CriaTextBody2>
              Value: {stepValue} (step: 5)
            </CriaTextBody2>
            <Slider
              min={0}
              max={100}
              value={stepValue}
              onChange={(v) => typeof v === 'number' && setStepValue(v)}
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Different Colors
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2>
                Primary Color
              </CriaTextBody2>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={(v) => typeof v === 'number' && setColorValue(v)}
                color="primary"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <CriaTextBody2>
                Secondary Color
              </CriaTextBody2>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={(v) => typeof v === 'number' && setColorValue(v)}
                color="secondary"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <CriaTextBody2>
                Success Color
              </CriaTextBody2>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={(v) => typeof v === 'number' && setColorValue(v)}
                color="success"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <CriaTextBody2>
                Warning Color
              </CriaTextBody2>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={(v) => typeof v === 'number' && setColorValue(v)}
                color="warning"
                marks={marks}
                showLabels={true}
              />
            </div>
            <div>
              <CriaTextBody2>
                Error Color
              </CriaTextBody2>
              <Slider
                min={0}
                max={100}
                value={colorValue}
                onChange={(v) => typeof v === 'number' && setColorValue(v)}
                color="error"
                marks={marks}
                showLabels={true}
              />
            </div>
          </div>
        </Card>

        {/* Different Sizes */}
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Different Sizes
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[6] }}>
            <div>
              <CriaTextBody2>
                Small Size
              </CriaTextBody2>
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
              <CriaTextBody2>
                Medium Size (Default)
              </CriaTextBody2>
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
              <CriaTextBody2>
                Large Size
              </CriaTextBody2>
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
        <Card style={{ padding: spacing[6] }}>
          <CriaTextTitle1>
            Disabled State
          </CriaTextTitle1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
            <div>
              <CriaTextBody2>
                Disabled Single Slider
              </CriaTextBody2>
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
              <CriaTextBody2>
                Disabled Range Slider
              </CriaTextBody2>
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
