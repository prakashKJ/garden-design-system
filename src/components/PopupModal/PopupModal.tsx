import React from 'react';
import '../../styles/garden.css';

interface PopupModalProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
}

/**
 * PopupModal — Fixed width 440px. Frosted glass surface (bg-30 + blur).
 * Title uses H5 Medium. Body uses H4 Regular.
 * As text content decreases, the modal shrinks vertically.
 * Button is always full-width, 48px height, radius 16px.
 */
export const PopupModal: React.FC<PopupModalProps> = ({
  title = 'Hide transaction',
  description = 'Are you sure you want to hide this transaction?\nThis action does not affect the status or validity of the ongoing transaction.',
  actionLabel = 'Hide transaction',
  onAction,
  onClose,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 440,
        borderRadius: 'var(--radius-garden-outer)',
        padding: '16px 16px 20px',
        gap: 32,
        backgroundColor: 'var(--color-garden-surface-subtle)',
        backdropFilter: 'blur(75px)',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="garden-h5-medium">{title}</span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 4L12 12M12 4L4 12" stroke="var(--color-garden-text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {/* Body */}
        <div style={{ paddingRight: 40 }}>
          <span className="garden-h4-regular" style={{ whiteSpace: 'pre-wrap' }}>
            {description}
          </span>
        </div>
      </div>

      {/* Action */}
      <div style={{ display: 'flex', width: '100%' }}>
        <button
          onClick={onAction}
          className="garden-h3-medium garden-text-white"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            borderRadius: 'var(--radius-garden-outer)',
            padding: '12px 24px',
            backgroundColor: 'var(--color-garden-brand)',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};
