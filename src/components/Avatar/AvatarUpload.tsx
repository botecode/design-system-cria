import React, { useRef, useState, useCallback } from 'react';
import { Avatar } from './Avatar';
import { Typography } from '../Typography';

export interface AvatarUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  accept?: string;
  disabled?: boolean;
  onChange?: (file: File | null) => void;
  src?: string;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  size = 'lg',
  label = 'Upload avatar',
  accept = 'image/*',
  disabled = false,
  onChange,
  src,
  className = '',
  style,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | undefined>(src);
  const id = React.useId();

  const handlePick = useCallback(() => {
    if (disabled) return;
    inputRef.current?.click();
  }, [disabled]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file);
    } else {
      setPreview(undefined);
      onChange?.(null);
    }
  }, [onChange]);

  return (
    <div className={["cria-avatar-upload", className].filter(Boolean).join(' ')} style={style} {...props}>
      <input
        ref={inputRef}
        id={`avatar-input-${id}`}
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        onChange={handleChange}
        disabled={disabled}
      />
      <button
        type="button"
        className="cria-avatar-upload__button"
        aria-label={label}
        onClick={handlePick}
        disabled={disabled}
      >
        <Avatar src={preview} size={size} clickable />
      </button>
      {label && (
        <Typography variant="caption" color="secondary" style={{ marginTop: 8 }}>
          {label}
        </Typography>
      )}
    </div>
  );
};

export default AvatarUpload;


