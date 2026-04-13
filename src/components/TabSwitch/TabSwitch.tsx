import React from 'react';
import { colors, radius, font } from '../../tokens';

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
        display: 'inline-flex',
        width: 'fit-content',
        background: colors.surfaceNested,
        borderRadius: radius.full,
        overflow: 'hidden',
        border: 'none',
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
            borderRadius: radius.outer,
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            background: i === activeIndex ? colors.surfaceCard : 'transparent',
            fontFamily: font.family,
            fontWeight: font.weight.medium,
            fontSize: font.size.bodyMd,
            color: colors.textPrimary,
            transition: 'background-color 0.15s ease',
            boxShadow: 'none',
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
