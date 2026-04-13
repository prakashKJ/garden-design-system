import React from 'react';
import { colors, radius, spacing, font } from '../../tokens';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search by transaction hash or address',
  value = '',
  onChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        background: colors.surfaceNested,
        borderRadius: radius.inner,
        padding: `0 ${spacing[3]} 0 ${spacing[4]}`,
        width: 400,
        border: 'none',
        outline: 'none',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          border: 'none',
          background: 'transparent',
          outline: 'none',
          fontFamily: font.family,
          fontWeight: font.weight.regular,
          fontSize: font.size.bodyMd,
          color: value ? colors.textPrimary : colors.textSecondary,
          flex: 1,
        }}
      />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="var(--color-garden-text-secondary)" strokeWidth="1.5" />
        <line x1="11" y1="11" x2="14" y2="14" stroke="var(--color-garden-text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
