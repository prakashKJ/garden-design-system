import React from 'react';
import { colors } from '../../tokens';

interface AssetValueProps {
  value?: string;
  active?: boolean;
}

export const AssetValue: React.FC<AssetValueProps> = ({
  value = '0.06212967',
  active = true,
}) => {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <span
        style={{
          fontFamily: "'Haffer', sans-serif",
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '20px',
          color: active ? colors.text.primary : colors.text.secondary,
          textAlign: 'right',
        }}
      >
        {value}
      </span>
      <div style={{ display: 'flex', position: 'relative', width: 38, height: 20, opacity: active ? 1 : 0.7 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#F7931A',
            position: 'absolute',
            left: 0,
          }}
        />
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: '#627EEA',
            position: 'absolute',
            left: 18,
          }}
        />
      </div>
    </div>
  );
};
