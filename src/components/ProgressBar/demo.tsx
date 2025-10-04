import React, { useState, useEffect } from 'react';
import { Typography } from '../Typography';
import { ProgressBar } from './index';
import { Card, CardContent, CardHeader } from '../Card';
import { Button } from '../Button';
import { Download, Upload, Database, FileText, CheckCircle, AlertCircle, Clock } from 'phosphor-react';

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
      <Typography variant="h2" className="demo-title">
        Progress Bar Component
      </Typography>
      
      <Typography variant="body" className="demo-description">
        Display task completion and loading states with accessible progress indicators.
      </Typography>

      {/* Basic Progress Bars */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Basic Progress Bars</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Standard progress bars with different completion levels.
          </Typography>
          
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
          <Typography variant="h3">With Percentage Display</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Progress bars showing completion percentage.
          </Typography>
          
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
          <Typography variant="h3">Color Variants</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Different color variants for various states and contexts.
          </Typography>
          
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
          <Typography variant="h3">Different Sizes</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Progress bars in different sizes for various use cases.
          </Typography>
          
          <div className="demo-content">
            <div className="demo-item">
              <Typography variant="h4">Small</Typography>
              <ProgressBar value={45} size="sm" label="Small Progress" />
            </div>
            
            <div className="demo-item">
              <Typography variant="h4">Medium (Default)</Typography>
              <ProgressBar value={65} size="md" label="Medium Progress" />
            </div>
            
            <div className="demo-item">
              <Typography variant="h4">Large</Typography>
              <ProgressBar value={85} size="lg" label="Large Progress" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Indeterminate Progress */}
      <Card className="demo-section">
        <CardHeader>
          <Typography variant="h3">Indeterminate Progress</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Loading indicators for unknown completion times.
          </Typography>
          
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
          <Typography variant="h3">Striped and Animated</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Progress bars with striped patterns and animations.
          </Typography>
          
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
          <Typography variant="h3">Interactive Examples</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Real-world examples with simulated progress.
          </Typography>
          
          <div className="demo-content">
            <div className="demo-item">
              <div className="demo-header">
                <Upload size={20} />
                <Typography variant="h4">File Upload</Typography>
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
                style={{ marginTop: '8px' }}
              >
                {isUploading ? 'Uploading...' : 'Start Upload'}
              </Button>
            </div>
            
            <div className="demo-item">
              <div className="demo-header">
                <Download size={20} />
                <Typography variant="h4">File Download</Typography>
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
                style={{ marginTop: '8px' }}
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
          <Typography variant="h3">Custom Min/Max Values</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Progress bars with custom value ranges.
          </Typography>
          
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
          <Typography variant="h3">Disabled State</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Progress bars in disabled state.
          </Typography>
          
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
          <Typography variant="h3">Usage Examples</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="body" className="demo-description">
            Common use cases for progress bars in applications.
          </Typography>
          
          <div className="demo-content">
            <div className="usage-examples">
              <div className="usage-example">
                <div className="usage-header">
                  <Database size={20} />
                  <Typography variant="h4">Database Migration</Typography>
                </div>
                <Typography variant="caption">
                  Migrating user data to new schema
                </Typography>
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
                  <Typography variant="h4">Document Processing</Typography>
                </div>
                <Typography variant="caption">
                  Converting PDF documents to text
                </Typography>
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
                  <Typography variant="h4">Task Completion</Typography>
                </div>
                <Typography variant="caption">
                  User onboarding checklist
                </Typography>
                <ProgressBar 
                  value={85} 
                  label="Onboarding Progress" 
                  showPercentage 
                  color="warning"
                />
              </div>
              
              <div className="usage-example">
                <div className="usage-header">
                  <AlertCircle size={20} />
                  <Typography variant="h4">Error Recovery</Typography>
                </div>
                <Typography variant="caption">
                  Retrying failed operations
                </Typography>
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
          <Typography variant="h3">Accessibility Features</Typography>
        </CardHeader>
        <CardContent>
          <div className="demo-content">
            <div className="accessibility-features">
              <div className="feature">
                <Typography variant="h4">Screen Reader Support</Typography>
                <Typography variant="body">
                  Progress bars announce current progress with proper ARIA attributes.
                </Typography>
              </div>
              
              <div className="feature">
                <Typography variant="h4">Keyboard Navigation</Typography>
                <Typography variant="body">
                  All progress bars are accessible via keyboard and assistive technologies.
                </Typography>
              </div>
              
              <div className="feature">
                <Typography variant="h4">ARIA Attributes</Typography>
                <Typography variant="body">
                  Proper role, aria-valuenow, aria-valuemin, and aria-valuemax attributes.
                </Typography>
              </div>
              
              <div className="feature">
                <Typography variant="h4">Visual Indicators</Typography>
                <Typography variant="body">
                  Clear visual progress indication with color coding and percentage display.
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressBarDemo;
