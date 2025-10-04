import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { FileUpload } from './FileUpload';
import { CriaTextHeadline2, CriaTextTitle2, CriaTextBody1 } from '../TextTokens';

export const FileUploadDemo: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div style={{ padding: '24px', maxWidth: 900 }}>
      <CriaTextHeadline2 as="h2" style={{ marginBottom: 16 }}>File Upload</CriaTextHeadline2>
      <CriaTextBody1 style={{ marginBottom: 24 }}>Upload files via click or drag-and-drop. Accessible and keyboard friendly.</CriaTextBody1>

      <Card style={{ marginBottom: 24 }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Basic</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <FileUpload description="PNG, JPG, PDF" accept=".png,.jpg,.jpeg,.pdf" onFilesChange={setFiles} />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: 24 }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Controlled with max size</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <FileUpload label="Attachments" description="Max 2MB" maxSizeBytes={2*1024*1024} value={files} onFilesChange={setFiles} />
        </CardContent>
      </Card>
    </div>
  );
};

export default FileUploadDemo;


