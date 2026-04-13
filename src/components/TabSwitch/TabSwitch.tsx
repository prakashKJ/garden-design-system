import React from 'react';
import { colors } from '../../tokens';

interface TabSwitchProps {
  tabs?: string[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

export const TabSwitch: React.FC<TabSwitchProps> = ({
  tabs = ['Garden pass', 'Custom'],
  activeIndex = 0,
  onChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        background: colors.bg.overlay50,
        borderRadius: 999,
        overflow: 'hidden',
      }}
    >
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange?.(i)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 12px',
            height: 32,
            borderRadius: 16,
            border: 'none',
            cursor: 'pointer',
            background: i === activeIndex ? colors.bg.white : 'transparent',
            fontFamily: "'Haffer', sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: '20px',
            color: colors.text.primary,
            transition: 'background-color 0.15s ease',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
