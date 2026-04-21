import React from 'react';
import '../../styles/garden.css';

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
        background: 'var(--color-bg-overlay-mid)',
        borderRadius: 'var(--radius-garden-full)',
        overflow: 'hidden',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => onChange?.(i)}
          className="garden-h4-medium"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6px 12px',
            height: 32,
            borderRadius: 'var(--radius-garden-outer)',
            border: 'none',
            cursor: 'pointer',
            background: i === activeIndex ? 'var(--color-bg-overlay-strong)' : 'transparent',
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
