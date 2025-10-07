import React, { useState, useEffect } from 'react';
import { CriaTextHeadline1, CriaTextHeadline2, CriaTextBody1, CriaTextBody2, CriaTextTitle1, CriaTextTitle2 } from '../TextTokens';
import { ProgressBar } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Button } from '../Button';
import { spacing } from '../../tokens';
import { Download, Upload, Database, FileText, CheckCircle, WarningCircle } from 'phosphor-react';

export const ProgressBarDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Simulate progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Simulate upload progress
  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          setIsUploading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
  };

  // Simulate download progress
  const simulateDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          setIsDownloading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
  };

  return (
    <div className="progress-bar-demo">
      <CriaTextHeadline1 className="demo-title">
        Progress Bar Component
      </CriaTextHeadline1>
      
      <CriaTextBody1 className="demo-description">
        Display task completion and loading states with accessible progress indicators.
      </CriaTextBody1>

      {/* Basic Progress Bars */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Basic Progress Bars</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Standard progress bars with different completion levels.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar value={25} label="Task Progress" />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={50} label="Upload Progress" />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={75} label="Download Progress" />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={100} label="Completed Task" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Percentage */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>With Percentage Display</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Progress bars showing completion percentage.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar value={33} label="Database Backup" showPercentage />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={67} label="File Processing" showPercentage />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={90} label="System Update" showPercentage />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Variants */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Color Variants</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Different color variants for various states and contexts.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar value={40} label="Primary Progress" color="primary" />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={60} label="Success Progress" color="success" />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={80} label="Warning Progress" color="warning" />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={20} label="Error Progress" color="error" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sizes */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Different Sizes</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Progress bars in different sizes for various use cases.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <CriaTextTitle2>Small</CriaTextTitle2>
              <ProgressBar value={45} size="sm" label="Small Progress" />
            </div>
            
            <div className="demo-item">
              <CriaTextTitle2>Medium (Default)</CriaTextTitle2>
              <ProgressBar value={65} size="md" label="Medium Progress" />
            </div>
            
            <div className="demo-item">
              <CriaTextTitle2>Large</CriaTextTitle2>
              <ProgressBar value={85} size="lg" label="Large Progress" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Indeterminate Progress */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Indeterminate Progress</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Loading indicators for unknown completion times.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar variant="indeterminate" label="Loading..." />
            </div>
            
            <div className="demo-item">
              <ProgressBar variant="indeterminate" color="success" label="Processing..." />
            </div>
            
            <div className="demo-item">
              <ProgressBar variant="indeterminate" color="warning" label="Connecting..." />
            </div>
            
            <div className="demo-item">
              <ProgressBar variant="indeterminate" color="error" label="Retrying..." />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Striped and Animated */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Striped and Animated</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Progress bars with striped patterns and animations.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar value={progress} label="Striped Progress" striped />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={progress} label="Animated Striped" striped animated />
            </div>
            
            <div className="demo-item">
              <ProgressBar value={progress} label="Smooth Animation" transitionDuration="0.1s" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Examples */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Interactive Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Real-world examples with simulated progress.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <div className="demo-header">
                <Upload size={20} />
                <CriaTextTitle2>File Upload</CriaTextTitle2>
              </div>
              <ProgressBar 
                value={uploadProgress} 
                label="Uploading document.pdf" 
                showPercentage 
                color={uploadProgress === 100 ? "success" : "primary"}
              />
              <Button 
                onClick={simulateUpload} 
                disabled={isUploading}
                size="sm"
                style={{ marginTop: spacing[2] }}
              >
                {isUploading ? 'Uploading...' : 'Start Upload'}
              </Button>
            </div>
            
            <div className="demo-item">
              <div className="demo-header">
                <Download size={20} />
                <CriaTextTitle2>File Download</CriaTextTitle2>
              </div>
              <ProgressBar 
                value={downloadProgress} 
                label="Downloading large-file.zip" 
                showPercentage 
                color={downloadProgress === 100 ? "success" : "primary"}
              />
              <Button 
                onClick={simulateDownload} 
                disabled={isDownloading}
                size="sm"
                style={{ marginTop: spacing[2] }}
              >
                {isDownloading ? 'Downloading...' : 'Start Download'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Min/Max Values */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Custom Min/Max Values</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Progress bars with custom value ranges.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar 
                value={750} 
                min={0} 
                max={1000} 
                label="Storage Usage (GB)" 
                showPercentage 
              />
            </div>
            
            <div className="demo-item">
              <ProgressBar 
                value={3} 
                min={1} 
                max={5} 
                label="Rating Progress" 
                showPercentage 
              />
            </div>
            
            <div className="demo-item">
              <ProgressBar 
                value={-10} 
                min={-50} 
                max={50} 
                label="Temperature Range" 
                showPercentage 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Disabled State */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Disabled State</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Progress bars in disabled state.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="demo-item">
              <ProgressBar value={60} label="Paused Task" disabled />
            </div>
            
            <div className="demo-item">
              <ProgressBar variant="indeterminate" label="Disabled Loading" disabled />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Usage Examples</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <CriaTextBody1 className="demo-description">
            Common use cases for progress bars in applications.
          </CriaTextBody1>
          
          <div className="demo-content">
            <div className="usage-examples">
              <div className="usage-example">
                <div className="usage-header">
                  <Database size={20} />
                  <CriaTextTitle2>Database Migration</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Migrating user data to new schema
                </CriaTextBody2>
                <ProgressBar 
                  value={progress} 
                  label="Migration Progress" 
                  showPercentage 
                  color="primary"
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <FileText size={20} />
                  <CriaTextTitle2>Document Processing</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Converting PDF documents to text
                </CriaTextBody2>
                <ProgressBar 
                  value={progress * 0.8} 
                  label="Processing Documents" 
                  showPercentage 
                  color="success"
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <CheckCircle size={20} />
                  <CriaTextTitle2>Task Completion</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  User onboarding checklist
                </CriaTextBody2>
                <ProgressBar 
                  value={85} 
                  label="Onboarding Progress" 
                  showPercentage 
                  color="warning"
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <WarningCircle size={20} />
                  <CriaTextTitle2>Error Recovery</CriaTextTitle2>
                </div>
                <CriaTextBody2>
                  Retrying failed operations
                </CriaTextBody2>
                <ProgressBar 
                  variant="indeterminate" 
                  label="Retrying Connection" 
                  color="error"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility Features */}
      <Card className="demo-section">
        <CardHeader>
          <CriaTextTitle1>Accessibility Features</CriaTextTitle1>
        </CardHeader>
        <CardContent>
          <div className="demo-content">
            <div className="accessibility-features">
              <div className="feature">
                <CriaTextTitle2>Screen Reader Support</CriaTextTitle2>
                <CriaTextBody1>
                  Progress bars announce current progress with proper ARIA attributes.
                </CriaTextBody1>
              </div>
              
              <div className="feature">
                <CriaTextTitle2>Keyboard Navigation</CriaTextTitle2>
                <CriaTextBody1>
                  All progress bars are accessible via keyboard and assistive technologies.
                </CriaTextBody1>
              </div>
              
              <div className="feature">
                <CriaTextTitle2>ARIA Attributes</CriaTextTitle2>
                <CriaTextBody1>
                  Proper role, aria-valuenow, aria-valuemin, and aria-valuemax attributes.
                </CriaTextBody1>
              </div>
              
              <div className="feature">
                <CriaTextTitle2>Visual Indicators</CriaTextTitle2>
                <CriaTextBody1>
                  Clear visual progress indication with color coding and percentage display.
                </CriaTextBody1>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressBarDemo;
