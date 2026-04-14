import React from 'react';
import '../../styles/garden.css';

export type TableSize = 'large' | 'small';

export interface TableColumn {
  key: string;
  header: string;
  /** Override min width. Defaults to 64px. Icon-only action columns can be smaller. */
  width?: number;
  /** If true, this is a trailing icon-only action column (exempt from 64px min) */
  isIconAction?: boolean;
  /** Render custom cell content */
  render?: (value: any, row: Record<string, any>) => React.ReactNode;
}

interface GardenTableProps {
  columns: TableColumn[];
  data: Record<string, any>[];
  size?: TableSize;
}

/**
 * GardenTable — Two sizes: large (40px rows, 80px gap) and small (36px rows, 64px gap).
 *
 * Column rules:
 * - Minimum column width: 64px (except icon-only action columns)
 * - Column width = max(64px, widest content in that column)
 * - Gap between columns: multiples of 8 (64, 72, 80, 88)
 * - Large uses 80px gap, Small uses 64px gap
 * - Last column is flex-stretched to align with right edge
 * - Row padding: 24px inline
 * - Even rows (header + every other data row) get bg-50 surface
 * - Outer container: radius 16px, overflow clip
 */
export const GardenTable: React.FC<GardenTableProps> = ({
  columns,
  data,
  size = 'large',
}) => {
  const rowHeight = size === 'large' ? 40 : 36;
  const gap = size === 'large' ? 80 : 64;

  const getColumnWidth = (col: TableColumn): number | undefined => {
    if (col.isIconAction) return undefined;
    if (col.width) return Math.max(col.width, 64);
    return 64;
  };

  const renderCell = (col: TableColumn, row: Record<string, any>) => {
    if (col.render) return col.render(row[col.key], row);
    return <span className="garden-h4-regular">{row[col.key]}</span>;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-garden-outer)',
        overflow: 'clip',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: rowHeight,
          paddingInline: 24,
          gap,
          backgroundColor: 'var(--color-garden-surface-nested)',
          flexShrink: 0,
        }}
      >
        {columns.map((col, i) => {
          const w = getColumnWidth(col);
          const isLast = i === columns.length - 1;
          return (
            <span
              key={col.key}
              className="garden-h5-regular"
              style={{
                width: w,
                minWidth: col.isIconAction ? undefined : 64,
                flexShrink: 0,
                ...(isLast && !w ? { flex: 1 } : {}),
              }}
            >
              {col.header}
            </span>
          );
        })}
      </div>

      {/* Data rows */}
      {data.map((row, rowIdx) => (
        <div
          key={rowIdx}
          style={{
            display: 'flex',
            alignItems: 'center',
            height: rowHeight,
            paddingInline: 24,
            gap,
            flexShrink: 0,
            backgroundColor: rowIdx % 2 === 1 ? 'var(--color-garden-surface-nested)' : undefined,
          }}
        >
          {columns.map((col, colIdx) => {
            const w = getColumnWidth(col);
            const isLast = colIdx === columns.length - 1;
            return (
              <div
                key={col.key}
                style={{
                  width: w,
                  minWidth: col.isIconAction ? undefined : 64,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  ...(isLast && !w ? { flex: 1, justifyContent: 'space-between' } : {}),
                }}
              >
                {renderCell(col, row)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
