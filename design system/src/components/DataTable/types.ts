import { IconName } from '@src/components/Icon/types';
import { ColumnDef } from '@tanstack/react-table';
import { Row } from '@tanstack/table-core/src/types';
import type { CSSProperties, ReactNode } from 'react';
import type { TSize } from '../../types/common.types';

export type TSizeTable = Exclude<TSize, 'xs'>;

export type EnhancedColumnDef<TData, TValue> = ColumnDef<TData, TValue> & {
  isStarred?: boolean;
  isPinned?: boolean;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

export type OnRowProps<TData> = {
  onClick?: (row: Row<TData>) => void;
  style?: CSSProperties;
};

export interface DataTableRef {
  getHeaderRef: (id: string) => HTMLTableCellElement | null;
  getRowRef: (index: number) => HTMLTableRowElement | null;
}

export interface DataTableProps<TData, TValue> {
  columns: Array<EnhancedColumnDef<TData, TValue>>;
  data: TData[];
  onRemoveRow?: (index: number) => void;
  size?: TSizeTable;
  emptyContent?: ReactNode;
  maxHeight?: string;
  showGridlines?: boolean;
  actionItems?: Array<{
    label: string;
    onClick: (row: TData, index: number) => void;
    icon?: IconName;
    divider?: boolean;
    hidden?: (row: TData, index: number) => boolean;
  }>;
  headerActions?:
    | Array<{
        label: string;
        onClick: (columnId: string) => void;
        icon?: IconName;
        divider?: boolean;
      }>
    | ((column: EnhancedColumnDef<TData, TValue>) => Array<{
        label: string;
        onClick: (columnId: string) => void;
        icon?: IconName;
        divider?: boolean;
      }>);
  isShowHeaderActions?: boolean;
  onRow?: OnRowProps<TData>;
  style?: CSSProperties;
  activeRows?: boolean[];
  isTree?: boolean;
}
