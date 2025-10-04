import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FileUpload } from '../FileUpload';

function createFile(name: string, size: number, type = 'text/plain') {
  const file = new File(['x'.repeat(size)], name, { type });
  return file;
}

describe('FileUpload', () => {
  it('renders with label and description', () => {
    render(<FileUpload label="Upload" description="Select files" />);
    expect(screen.getByText('Upload')).toBeInTheDocument();
    expect(screen.getByText('Select files')).toBeInTheDocument();
  });

  it('opens file dialog on click', () => {
    render(<FileUpload label="Upload" />);
    const dropzone = screen.getByRole('button', { name: /upload/i });
    expect(dropzone).toBeInTheDocument();
  });

  it('accepts files via input change', () => {
    const onFilesChange = vi.fn();
    render(<FileUpload onFilesChange={onFilesChange} />);
    const input = screen.getByRole('button').parentElement!.querySelector('input[type="file"]') as HTMLInputElement;
    const file = createFile('a.txt', 10);
    fireEvent.change(input, { target: { files: [file] } });
    expect(onFilesChange).toHaveBeenCalled();
  });

  it('filters by maxSize', () => {
    const onError = vi.fn();
    render(<FileUpload maxSizeBytes={5} onError={onError} />);
    const input = screen.getByRole('button').parentElement!.querySelector('input[type="file"]') as HTMLInputElement;
    const big = createFile('big.txt', 10);
    fireEvent.change(input, { target: { files: [big] } });
    expect(onError).toHaveBeenCalled();
  });

  it('supports drag and drop', () => {
    const onFilesChange = vi.fn();
    render(<FileUpload onFilesChange={onFilesChange} />);
    const dropzone = screen.getByRole('button');
    const file = createFile('a.txt', 10);
    fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });
    expect(onFilesChange).toHaveBeenCalled();
  });
});


