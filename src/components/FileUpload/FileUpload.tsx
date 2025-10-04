import React, { useCallback, useRef, useState } from 'react';
import { Typography } from '../Typography';

export interface FileUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  dragAndDrop?: boolean;
  maxSizeBytes?: number;
  onFilesChange?: (files: File[]) => void;
  onError?: (message: string) => void;
  value?: File[]; // controlled list
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label = 'Upload files',
  description,
  accept,
  multiple = true,
  disabled = false,
  required = false,
  dragAndDrop = true,
  maxSizeBytes,
  onFilesChange,
  onError,
  value,
  className = '',
  style,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [internalFiles, setInternalFiles] = useState<File[]>([]);
  const isControlled = value !== undefined;
  const files = isControlled ? (value as File[]) : internalFiles;

  const id = React.useId();

  const validate = (next: File[]): File[] => {
    if (!maxSizeBytes) return next;
    const valid = next.filter(f => f.size <= maxSizeBytes);
    const invalidCount = next.length - valid.length;
    if (invalidCount > 0) {
      onError?.(`Ignored ${invalidCount} file(s) over ${(maxSizeBytes / (1024*1024)).toFixed(1)}MB`);
    }
    return valid;
  };

  const commit = (next: File[]) => {
    const validated = validate(next);
    if (!isControlled) setInternalFiles(validated);
    onFilesChange?.(validated);
  };

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const list = Array.from(e.target.files);
    commit(list);
  }, []);

  const handleClick = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    const dt = e.dataTransfer;
    const list = Array.from(dt.files || []);
    if (!multiple && list.length > 1) {
      commit([list[0]]);
    } else {
      commit(list);
    }
  }, [disabled, multiple]);

  const prevent = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeAt = (idx: number) => {
    if (disabled) return;
    const next = files.filter((_, i) => i !== idx);
    commit(next);
  };

  return (
    <div
      className={[
        'cria-file-upload',
        dragAndDrop && 'cria-file-upload--dnd',
        disabled && 'cria-file-upload--disabled',
        className,
      ].filter(Boolean).join(' ')}
      style={style}
      {...props}
    >
      {label && (
        <label htmlFor={`file-input-${id}`} className="cria-file-upload__label">
          <Typography variant="body" weight="medium" color={disabled ? 'secondary' : 'content'}>
            {label}
            {required && <span aria-label="required"> *</span>}
          </Typography>
        </label>
      )}

      <input
        ref={inputRef}
        id={`file-input-${id}`}
        type="file"
        className="cria-file-upload__input"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleInput}
        aria-describedby={description ? `file-desc-${id}` : undefined}
      />

      <div
        className="cria-file-upload__dropzone"
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        onDragOver={prevent}
        onDragEnter={prevent}
        onDrop={dragAndDrop ? handleDrop : undefined}
        aria-disabled={disabled}
        aria-label={label}
      >
        <div className="cria-file-upload__dropzone-inner">
          <Typography variant="body" color="secondary">
            Drag & drop files here, or click to select
          </Typography>
          {accept && (
            <Typography variant="caption" color="secondary">
              Accepted: {accept}
            </Typography>
          )}
        </div>
      </div>

      {description && (
        <Typography id={`file-desc-${id}`} variant="caption" color="secondary" style={{ marginTop: 8 }}>
          {description}
        </Typography>
      )}

      {files.length > 0 && (
        <ul className="cria-file-upload__list" aria-label="Selected files">
          {files.map((f, idx) => (
            <li key={`${f.name}-${idx}`} className="cria-file-upload__item">
              <span className="cria-file-upload__filename">{f.name}</span>
              <span className="cria-file-upload__filesize">{(f.size / 1024).toFixed(1)} KB</span>
              {!disabled && (
                <button
                  type="button"
                  className="cria-file-upload__remove"
                  onClick={() => removeAt(idx)}
                  aria-label={`Remove ${f.name}`}
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUpload;


