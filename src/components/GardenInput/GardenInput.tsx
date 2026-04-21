import React from 'react';
import '../../styles/garden.css';

interface GardenInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  maxWidth?: number;
}

/**
 * GardenInput — Larger input with label INSIDE the container.
 * Container: bg surface-card (70%), radius inner (12px), padding spacing-4 (16px).
 * Label: H5 Medium (12px/16px), text-primary. Sits above the value/placeholder.
 * Value/Placeholder: H3 Regular (16px/20px). Value = text-primary, placeholder = text-secondary.
 * Gap between label and input: spacing-3 (12px).
 */
export const GardenInput: React.FC<GardenInputProps> = ({
  label = 'Refund address',
  placeholder = 'Your Bitcoin address',
  value = '',
  onChange,
  maxWidth = 400,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-garden-3)',
        maxWidth,
        width: '100%',
        padding: 'var(--spacing-garden-4)',
        backgroundColor: 'var(--color-bg-overlay-strong)',
        borderRadius: 'var(--radius-garden-inner)',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <span className="garden-h5-medium">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={value ? 'garden-h3-regular' : 'garden-h3-regular garden-text-secondary'}
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          margin: 0,
          color: value ? 'var(--color-text-primary)' : undefined,
        }}
      />
    </div>
  );
};
