import React from 'react';
import '../../styles/garden.css';
import { AssetSelect } from '../AssetSelect/AssetSelect';

export type SwapInputVariant = 'send' | 'receive';

interface SwapInputProps {
  variant: SwapInputVariant;
  amount: string;
  /** Header-row muted sibling, e.g. "~$224.51" (include the prefix). */
  usdValue: string;
  /** Token label shown inside the embedded AssetSelect. */
  asset?: string;
  /** Forwarded to AssetSelect so chain logos match (L1 = single, L2 = paired). */
  network?: 'L1' | 'L2';
  onAmountChange?: (next: string) => void;
  /** Override the default trailing slot (wallet+balance / timer+eta). */
  trailing?: React.ReactNode;
  /** Default trailing for `send` — e.g. "1.012 BTC". */
  balance?: string;
  /** Default trailing for `receive` — e.g. "~2m 30s". */
  eta?: string;
}

const WalletIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path
      fill="currentColor"
      d="M2.5 10.5C2.225 10.5 1.98958 10.4021 1.79375 10.2063C1.59792 10.0104 1.5 9.775 1.5 9.5V2.5C1.5 2.225 1.59792 1.98958 1.79375 1.79375C1.98958 1.59792 2.225 1.5 2.5 1.5H9.5C9.775 1.5 10.0104 1.59792 10.2063 1.79375C10.4021 1.98958 10.5 2.225 10.5 2.5V3.75H9.5V2.5H2.5V9.5H9.5V8.25H10.5V9.5C10.5 9.775 10.4021 10.0104 10.2063 10.2063C10.0104 10.4021 9.775 10.5 9.5 10.5H2.5ZM6.5 8.5C6.225 8.5 5.98958 8.40208 5.79375 8.20625C5.59792 8.01042 5.5 7.775 5.5 7.5V4.5C5.5 4.225 5.59792 3.98958 5.79375 3.79375C5.98958 3.59792 6.225 3.5 6.5 3.5H10C10.275 3.5 10.5104 3.59792 10.7063 3.79375C10.9021 3.98958 11 4.225 11 4.5V7.5C11 7.775 10.9021 8.01042 10.7063 8.20625C10.5104 8.40208 10.275 8.5 10 8.5H6.5ZM10 7.5V4.5H6.5V7.5H10ZM8 6.75C8.20833 6.75 8.38542 6.67708 8.53125 6.53125C8.67708 6.38542 8.75 6.20833 8.75 6C8.75 5.79167 8.67708 5.61458 8.53125 5.46875C8.38542 5.32292 8.20833 5.25 8 5.25C7.79167 5.25 7.61458 5.32292 7.46875 5.46875C7.32292 5.61458 7.25 5.79167 7.25 6C7.25 6.20833 7.32292 6.38542 7.46875 6.53125C7.61458 6.67708 7.79167 6.75 8 6.75Z"
    />
  </svg>
);

const TimerIcon: React.FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M15 1H9v2h6V1Zm-4 13h2V8h-2v6Zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A9 9 0 1 0 21 14a9 9 0 0 0-1.97-5.61ZM12 20a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z" />
  </svg>
);

export const SwapInput: React.FC<SwapInputProps> = ({
  variant,
  amount,
  usdValue,
  asset,
  network,
  onAmountChange,
  trailing,
  balance,
  eta,
}) => {
  const label = variant === 'send' ? 'Send' : 'Receive';

  const defaultTrailing = variant === 'send'
    ? (
      <>
        <WalletIcon />
        <span className="garden-h5-regular" style={{ whiteSpace: 'nowrap' }}>{balance}</span>
      </>
    )
    : (
      <>
        <TimerIcon />
        <span className="garden-h5-regular" style={{ whiteSpace: 'nowrap' }}>{eta}</span>
      </>
    );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-garden-3)',
        padding: 'var(--spacing-garden-4)',
        background: 'var(--color-bg-overlay-strong)',
        borderRadius: 'var(--radius-garden-inner)',
        width: 400,
        boxSizing: 'border-box',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-garden-2)' }}>
          <span className="garden-h5-medium">{label}</span>
          <span
            className="garden-h5-regular"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {usdValue}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-garden-1)',
            color: 'var(--color-text-primary)',
          }}
        >
          {trailing ?? defaultTrailing}
        </div>
      </div>

      {/* Body row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <input
          type="text"
          inputMode="decimal"
          className="garden-h2-medium"
          value={amount}
          onChange={(e) => onAmountChange?.(e.target.value)}
          readOnly={!onAmountChange}
          style={{
            border: 'none',
            outline: 'none',
            background: 'transparent',
            padding: 0,
            margin: 0,
            color: 'var(--color-text-primary)',
            width: '100%',
            minWidth: 0,
            marginRight: 'var(--spacing-garden-3)',
          }}
        />
        <AssetSelect asset={asset} network={network} />
      </div>
    </div>
  );
};
