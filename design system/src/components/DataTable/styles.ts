import styled from 'styled-components';
import { TSizeTable } from './types';
import { padding } from './utils';

export const TableContainer = styled.div<{ $maxHeight?: string }>`
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  border-radius: ${({ theme }) => theme.radii['md']};
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  max-height: ${({ $maxHeight }) => $maxHeight || 'none'};
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  min-width: max-content;
`;

export const TableElement = styled.table<{ $showGridlines?: boolean }>`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;

  thead {
    position: sticky;
    top: 0;
    z-index: 2;
    background: ${({ theme }) => theme.colors.neutral.background.default};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  }

  tbody {
    background: ${({ theme }) => theme.colors.neutral.background.base};
  }
`;

export const Th = styled.th<{ $size: TSizeTable; $showGridlines?: boolean }>`
  position: relative;
  padding: ${({ $size }) => padding?.[$size] || '8px 12px'};
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes['s']};
  line-height: ${({ theme }) => theme.lineHeights['m']};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  user-select: none;

  ${({ $showGridlines, theme }) =>
    $showGridlines &&
    `
    border-right: 1px solid ${theme.colors.neutral.border.weakest};
    &:last-child {
      border-right: none;
    }
  `}
  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }

  &.pinned {
    position: sticky;
    left: 0;
    z-index: 1;
    background: ${({ theme }) => theme.colors.neutral.background.default};
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }

  .header-action-button {
    margin-left: auto;
    opacity: 1;
  }
`;

export const TBodyTr = styled.tr<{
  $hasRowClickFn: boolean;
  $selectedRow: boolean;
  $isExpanded?: boolean;
}>`
  vertical-align: middle;
  background-color: ${({
    theme,
    $selectedRow = false,
    $isExpanded = false,
  }) => {
    if ($selectedRow) {
      return theme.colors.primary.background.transparent.weak;
    }
    if ($isExpanded) {
      return theme.colors.neutral.background.transparent.weak;
    }
    return theme.colors.neutral.background.base;
  }};
  cursor: ${({ $hasRowClickFn = false }) =>
    $hasRowClickFn ? 'pointer' : 'initial'};
  &:hover,
  &:focus {
    background-color: ${({ theme, $selectedRow = false }) =>
      $selectedRow
        ? theme.colors.primary.background.transparent.weak
        : theme.colors.neutral.background.transparent.weak};
  }
`;

export const Td = styled.td<{
  $size: TSizeTable;
  $showGridlines?: boolean;
}>`
  vertical-align: middle;
  padding: ${({ $size }) => padding?.[$size] || '8px 12px'};
  font-size: ${({ theme }) => theme.fontSizes['s']};
  line-height: ${({ theme }) => theme.lineHeights['m']};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  color: ${({ theme }) => theme.colors.neutral.text.default};

  ${({ $showGridlines, theme }) =>
    $showGridlines &&
    `
    border-right: 1px solid ${theme.colors.neutral.border.weakest};
    &:last-child {
      border-right: none;
    }
  `}
  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }

  &.pinned {
    position: sticky;
    left: 0;
    z-index: 1;
    background: ${({ theme }) => theme.colors.neutral.background.base};
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }

  white-space: wrap;
  overflow: hidden;
  word-break: break-word;
`;

export const SortButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.text.default};
  }
`;

export const HeaderCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StarIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 24px 24px 0 0;
  border-color: ${({ theme }) =>
    `${theme.colors.system.warning.background.weakestActive} transparent transparent transparent`};
  z-index: 0;

  svg {
    position: absolute;
    top: -24px;
    left: 2px;
    width: 10px;
  }
`;

export const HeaderLabel = styled.div<{ $isStarred?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: ${({ $isStarred }) => ($isStarred ? '24px' : '0')};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 4px;
  color: ${({ theme }) => theme.colors.neutral.icon.weak};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii['sm']};

  &:hover {
    color: ${({ theme }) => theme.colors.neutral.icon.default};
  }

  &.header-action-button svg[data-icon='three-dots'] {
    transform: rotate(90deg);
  }
`;

export const RowFooter = styled.div`
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.neutral.background.base};
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.div<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background: ${({ $color }) => $color || '#E2E8F0'};
  border-radius: ${({ theme }) => theme.radii['full']};
  font-size: ${({ theme }) => theme.fontSizes['xs']};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
`;

export const SlideMenuWrapper = styled.div`
  z-index: 10;
`;
