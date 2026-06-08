export const createPageRange = (
  showEdgePages: boolean,
  currentPage: number,
  totalPages: number
): (number | 'dot')[] => {
  const DOT = 'dot';

  if (!showEdgePages) {
    const totalVisible = Math.min(5, totalPages);

    let start = Math.max(currentPage - 2, 1);
    let end = start + totalVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - totalVisible + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  const leftBound = Math.max(currentPage - 2, 2);
  const rightBound = Math.min(currentPage + 1, totalPages - 1);
  const range: (number | 'dot')[] = [];

  range.push(1);

  if (leftBound > 2) {
    range.push(DOT);
  }

  for (let i = leftBound; i <= rightBound; i++) {
    range.push(i);
  }

  if (rightBound < totalPages - 1) {
    range.push(DOT);
  }

  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
};
