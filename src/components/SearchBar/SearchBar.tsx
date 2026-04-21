import React from 'react';
import '../../styles/garden.css';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  maxWidth?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search by transaction hash or address',
  value = '',
  onChange,
  maxWidth = 400,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        background: 'var(--color-bg-overlay-mid)',
        borderRadius: 'var(--radius-garden-inner)',
        padding: '0 var(--spacing-garden-3) 0 var(--spacing-garden-4)',
        maxWidth,
        width: '100%',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={value ? 'garden-h4-regular' : 'garden-h4-regular garden-text-secondary'}
        style={{
          border: 'none',
          background: 'transparent',
          flex: 1,
          color: value ? 'var(--color-text-primary)' : undefined,
        }}
      />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="var(--color-text-secondary)" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="14" y2="14" stroke="var(--color-text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
