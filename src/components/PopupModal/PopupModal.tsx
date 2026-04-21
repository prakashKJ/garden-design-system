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
 * PopupModal — max-width 440px, responsive. Frosted glass surface (bg-30 + blur).
 * Title uses H5 Medium. Body uses H4 Regular.
 * As text content decreases, the modal shrinks vertically.
 * Button is always full-width, 48px height, radius outer (16px).
 */
export const PopupModal: React.FC<PopupModalProps> = ({
  title = 'Hide transaction',
  description = 'Are you sure you want to hide this transaction?\nThis action does not affect the status or validity of the ongoing transaction.',
  actionLabel = 'Hide transaction',
  onAction,
  onClose,
}) => {
  const titleId = React.useId();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 440,
        width: '100%',
        borderRadius: 'var(--radius-garden-outer)',
        padding: 'var(--spacing-garden-4) var(--spacing-garden-4) var(--spacing-garden-5)',
        gap: 'var(--spacing-garden-8)',
        backgroundColor: 'var(--color-bg-overlay-soft)',
        backdropFilter: 'blur(var(--backdrop-blur-garden))',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-garden-2)' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span id={titleId} className="garden-h5-medium">{title}</span>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 4L12 12M12 4L4 12" stroke="var(--color-text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {/* Body */}
        <div style={{ paddingRight: 'var(--spacing-garden-10)' }}>
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
            padding: 'var(--spacing-garden-3) var(--spacing-garden-6)',
            backgroundColor: 'var(--color-action-primary)',
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            color: 'white',
            transition: 'background-color 0.15s ease',
          }}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};
