import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../Card';
import { FileUpload } from './FileUpload';
import { CriaTextHeadline2, CriaTextTitle2, CriaTextBody1 } from '../TextTokens';
import { spacing } from '../../tokens';

export const FileUploadDemo: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div style={{ padding: spacing[6], maxWidth: 900 }}>
      <div style={{ marginBottom: spacing[4] }}>
        <CriaTextHeadline2 as="h2">File Upload</CriaTextHeadline2>
      </div>
      <div style={{ marginBottom: spacing[6] }}>
        <CriaTextBody1>Upload files via click or drag-and-drop. Accessible and keyboard friendly.</CriaTextBody1>
      </div>

      <Card style={{ marginBottom: spacing[6] }}>
        <CardHeader>
          <CriaTextTitle2 as="h3">Basic</CriaTextTitle2>
        </CardHeader>
        <CardContent>
          <FileUpload description="PNG, JPG, PDF" accept=".png,.jpg,.jpeg,.pdf" onFilesChange={setFiles} />
        </CardContent>
      </Card>

      <Card style={{ marginBottom: spacing[6] }}>
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


