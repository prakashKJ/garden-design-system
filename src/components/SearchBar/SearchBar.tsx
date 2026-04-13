import React from 'react';
import { colors } from '../../tokens';

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
        background: colors.bg.overlay50,
        borderRadius: 12,
        padding: '0 12px 0 16px',
        width: 400,
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
          fontFamily: "'Haffer', sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '20px',
          color: value ? colors.text.primary : colors.text.secondary,
          flex: 1,
        }}
      />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke={colors.text.secondary} strokeWidth="1.5" />
        <line x1="11" y1="11" x2="14" y2="14" stroke={colors.text.secondary} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
