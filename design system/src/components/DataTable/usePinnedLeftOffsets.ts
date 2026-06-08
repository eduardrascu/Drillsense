import { useLayoutEffect, useState } from 'react';

export function usePinnedLeftOffsets({
  table,
  columnPinningLeft,
  thRefs,
}: {
  table: any;
  columnPinningLeft: string[] | undefined;
  thRefs: Record<string, HTMLTableCellElement | null>;
}) {
  const [pinnedLeftOffsets, setPinnedLeftOffsets] = useState<
    Record<string, number>
  >({});

  useLayoutEffect(() => {
    const visibleLeafColumns = table.getVisibleLeafColumns();

    const pinnedCols = visibleLeafColumns.filter(
      (col: any) => col.getIsPinned() === 'left'
    );

    let left = 0;
    const offsets: Record<string, number> = {};

    pinnedCols.forEach((col: any) => {
      const th = thRefs[col.id];
      const width = th ? th.offsetWidth : col.getSize();
      offsets[col.id] = left;
      left += width;
    });

    setPinnedLeftOffsets(offsets);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    table,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (columnPinningLeft || []).join(','),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object.values(thRefs)
      .map(th => th?.offsetWidth)
      .join(','),
  ]);

  return pinnedLeftOffsets;
}
