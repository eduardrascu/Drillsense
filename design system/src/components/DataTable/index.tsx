import {
  type ColumnPinningState,
  type ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  type Row,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  ForwardedRef,
  forwardRef,
  Fragment,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';
import { SlideMenu } from '../SlideMenu';
import type { ActionItem } from '../SlideMenu/types';
import {
  ActionButton,
  EmptyStateContainer,
  HeaderCell,
  HeaderLabel,
  RowFooter,
  SlideMenuWrapper,
  StarIndicator,
  TableContainer,
  TableElement,
  TableWrapper,
  TBodyTr,
  Td,
  Th,
} from './styles';
import { DataTableProps, DataTableRef, EnhancedColumnDef } from './types';
import { usePinnedLeftOffsets } from './usePinnedLeftOffsets';

function DataTableInner<TData, TValue>(
  props: DataTableProps<TData, TValue>,
  ref: ForwardedRef<DataTableRef>
) {
  const {
    columns,
    data,
    onRemoveRow,
    size = 'md',
    emptyContent = 'No data available',
    maxHeight,
    showGridlines = false,
    actionItems,
    headerActions,
    isShowHeaderActions = false,
    onRow,
    style,
    activeRows,
    isTree = false,
  } = props;

  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeHeaderMenu, setActiveHeaderMenu] = useState<string | null>(null);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: [],
    right: [],
  });

  const actionButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const thRefs = useRef<Record<string, HTMLTableCellElement | null>>({});
  const rowRefs = useRef<Array<HTMLTableRowElement | null>>([]);

  useImperativeHandle(ref, () => ({
    getHeaderRef: (id: string) => thRefs.current[id] || null,
    getRowRef: (index: number) => rowRefs.current[index] || null,
  }));

  const isAnyAncestorExpanded = (row: Row<TData>): boolean => {
    let parent = row.getParentRow();
    while (parent) {
      if (parent.getIsExpanded()) {
        return true;
      }
      parent = parent.getParentRow();
    }
    return false;
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,
    ...(isTree && {
      onExpandedChange: setExpanded,
      getSubRows: (row: any) => row.subRows,
      getExpandedRowModel: getExpandedRowModel(),
    }),
    state: {
      sorting,
      rowSelection,
      columnPinning,
      ...(isTree && { expanded }),
    },
  });

  // Reset expanded state when data changes
  useEffect(() => {
    if (isTree) {
      setExpanded({});
    }
  }, [data, isTree]);

  const columnMinWidths =
    table
      .getHeaderGroups()[0]
      ?.headers.map(header => header.column.columnDef.minSize || 'auto') || [];

  const columnMaxWidths =
    table.getHeaderGroups()[0]?.headers.map(header => {
      const maxSize = header.column.columnDef.maxSize;

      return (
        typeof maxSize === 'number' && maxSize.toString().length <= 3 && maxSize
      );
    }) || [];

  const handleHeaderActionClick = useCallback(
    (columnId: string) => () => {
      setActiveHeaderMenu(activeHeaderMenu === columnId ? null : columnId);
    },
    [activeHeaderMenu]
  );

  const closeMenu = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const closeHeaderMenu = useCallback(() => {
    setActiveHeaderMenu(null);
  }, []);

  const handleRemoveRow = useCallback(
    (index: number) => {
      onRemoveRow?.(index);
    },
    [onRemoveRow]
  );

  const togglePinColumn = useCallback(
    (columnId: string) => {
      const column = table.getColumn(columnId);
      if (column) {
        const isPinned = column.getIsPinned();
        if (isPinned) {
          column.pin(false);
        } else {
          column.pin('left');
        }
      }
      closeHeaderMenu();
    },
    [table, closeHeaderMenu]
  );

  const handleHeaderLabelClick = useCallback(
    (columnId: string) => () => {
      if (
        !isShowHeaderActions &&
        (!headerActions || headerActions.length === 0)
      ) {
        const column = table.getColumn(columnId);
        if (column && column.getCanSort()) {
          const isSorted = column.getIsSorted();
          if (!isSorted) {
            column.toggleSorting(false);
          } else if (isSorted === 'asc') {
            column.toggleSorting(true);
          } else {
            column.clearSorting();
          }
        }
      }
    },
    [headerActions, isShowHeaderActions, table]
  );

  const getHeaderActions = useCallback(
    (columnId: string, canSort: boolean) => {
      const baseActions: ActionItem[] = [];
      const column = table.getColumn(columnId);

      if (!column) return baseActions;

      const isSorted = column?.getIsSorted();

      if (canSort) {
        baseActions.push(
          {
            label: 'Sort Ascending',
            onClick: () => {
              if (column) {
                column.toggleSorting(false);
              }
              closeHeaderMenu();
            },
            icon: IconName.ARROW_UP,
            style:
              isSorted === 'asc' ? { backgroundColor: '#E2E8F0' } : undefined,
          },
          {
            label: 'Sort Descending',
            onClick: () => {
              if (column) {
                column.toggleSorting(true);
              }
              closeHeaderMenu();
            },
            icon: IconName.ARROW_DOWN,
            divider: true,
            style:
              isSorted === 'desc' ? { backgroundColor: '#E2E8F0' } : undefined,
          }
        );
      }

      baseActions.push(
        {
          label: table.getColumn(columnId)?.getIsPinned()
            ? 'Unpin Column'
            : 'Pin Column',
          onClick: () => {
            togglePinColumn(columnId);
          },
          icon: table.getColumn(columnId)?.getIsPinned()
            ? IconName.PIN
            : IconName.PIN_FILLED,
          style: table.getColumn(columnId)?.getIsPinned()
            ? { backgroundColor: '#E2E8F0' }
            : undefined,
        },
        {
          label: 'Autosize This Column',
          onClick: () => {
            closeHeaderMenu();
          },
          icon: IconName.ARROW_LEFT_RIGHT,
        },
        {
          label: 'Autosize All Columns',
          onClick: () => {
            closeHeaderMenu();
          },
          icon: IconName.ARROW_LEFT_RIGHT,
          divider: true,
        }
      );

      if (headerActions) {
        const extraActions =
          typeof headerActions === 'function'
            ? headerActions(column.columnDef)
            : headerActions;

        if (Array.isArray(extraActions)) {
          baseActions.push(
            ...extraActions.map(action => ({
              ...action,
              onClick: () => {
                action.onClick(columnId);
                closeHeaderMenu();
              },
            }))
          );
        }
      }

      return baseActions;
    },
    [headerActions, table, closeHeaderMenu, togglePinColumn]
  );

  const fixPinningOrder = useCallback(() => {
    const visibleLeafColumns = table.getVisibleLeafColumns();
    const newLeft = visibleLeafColumns
      .map(col => col.id)
      .filter(id => (columnPinning.left ?? []).includes(id));
    if (JSON.stringify(newLeft) !== JSON.stringify(columnPinning.left)) {
      setColumnPinning(pinning => ({
        ...pinning,
        left: newLeft,
      }));
    }
  }, [table, columnPinning.left]);

  useEffect(() => {
    fixPinningOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(columnPinning.left), fixPinningOrder]);

  const pinnedLeftOffsets = usePinnedLeftOffsets({
    table,
    columnPinningLeft: columnPinning.left,
    thRefs: thRefs.current,
  });

  return (
    <TableContainer $maxHeight={maxHeight} style={style}>
      <TableWrapper>
        <TableElement $showGridlines={showGridlines}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => {
                  const columnDef = header.column
                    .columnDef as EnhancedColumnDef<TData, TValue>;
                  const isSorted = header.column.getIsSorted();

                  return (
                    <Th
                      key={header.id}
                      $size={size}
                      $showGridlines={showGridlines}
                      className={header.column.getIsPinned() ? 'pinned' : ''}
                      ref={el => { thRefs.current[header.id] = el; }}
                      style={{
                        // width: columnMinWidths[index] || 'auto',
                        minWidth: columnMinWidths[index] || 'auto',
                        maxWidth: columnMaxWidths[index] || 'auto',
                        ...(header.column.getIsPinned() === 'left' && {
                          left: `${pinnedLeftOffsets[header.column.id]}px`,
                        }),
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <HeaderCell>
                          {columnDef.isStarred && (
                            <StarIndicator>
                              <Icon iconName={IconName.STAR_FILLED} />
                            </StarIndicator>
                          )}

                          <HeaderLabel
                            $isStarred={columnDef.isStarred}
                            onClick={handleHeaderLabelClick(header.id)}
                            style={{
                              cursor:
                                header.column.getCanSort() &&
                                !isShowHeaderActions &&
                                (!headerActions || headerActions.length === 0)
                                  ? 'pointer'
                                  : 'default',
                            }}
                          >
                            {columnDef.leftContent}

                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}

                            {header.column.getCanSort() && isSorted && (
                              <Icon
                                iconName={
                                  isSorted === 'asc'
                                    ? IconName.ARROW_UP
                                    : IconName.ARROW_DOWN
                                }
                                style={{ marginLeft: '4px' }}
                              />
                            )}
                          </HeaderLabel>

                          {columnDef.rightContent}

                          {(!!headerActions || isShowHeaderActions) && (
                            <Fragment>
                              <ActionButton
                                className="header-action-button"
                                onClick={handleHeaderActionClick(header.id)}
                              >
                                <Icon iconName={IconName.THREE_DOTS_VERTICAL} />
                              </ActionButton>

                              {activeHeaderMenu === header.id &&
                                thRefs.current[header.id] && (
                                  <SlideMenuWrapper>
                                    <SlideMenu
                                      items={getHeaderActions(
                                        header.column.id,
                                        header.column.getCanSort()
                                      )}
                                      isOpen={activeHeaderMenu === header.id}
                                      onClose={closeHeaderMenu}
                                      anchorRef={{
                                        current: thRefs.current[header.id],
                                      }}
                                      position="bottom"
                                      defaultPosition={
                                        header.index === 0
                                          ? { left: 30 }
                                          : undefined
                                      }
                                    />
                                  </SlideMenuWrapper>
                                )}
                            </Fragment>
                          )}
                        </HeaderCell>
                      )}
                    </Th>
                  );
                })}
                {onRemoveRow && (
                  <Th
                    $size={size}
                    $showGridlines={showGridlines}
                    style={{ width: '50px' }}
                  />
                )}
                {actionItems && (
                  <Th
                    $size={size}
                    $showGridlines={showGridlines}
                    style={{ width: '1px', whiteSpace: 'nowrap', paddingLeft: '8px', paddingRight: '8px' }}
                  />
                )}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td
                  colSpan={
                    columns.length +
                    (onRemoveRow ? 1 : 0) +
                    (actionItems ? 1 : 0)
                  }
                >
                  <EmptyStateContainer>{emptyContent}</EmptyStateContainer>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row, index) => (
                <Fragment key={row.id}>
                  <TBodyTr
                    key={row.id}
                    ref={el => {
                      rowRefs.current[index] = el;
                    }}
                    onClick={() => onRow?.onClick?.(row)}
                    style={onRow?.style}
                    $hasRowClickFn={!!onRow?.onClick}
                    $selectedRow={!!activeRows?.[index]}
                    $isExpanded={
                      isTree &&
                      (row.getIsExpanded() || isAnyAncestorExpanded(row))
                    }
                  >
                    {row.getVisibleCells().map((cell, cellIndex) => {
                      const cellStyle: React.CSSProperties = {
                        minWidth: columnMinWidths[cellIndex] || 'auto',
                        maxWidth: columnMaxWidths[cellIndex] || 'auto',
                        ...(cell.column.getIsPinned() === 'left' && {
                          left: `${pinnedLeftOffsets[cell.column.id]}px`,
                        }),
                      };

                      if (isTree && cellIndex === 0) {
                        cellStyle.paddingLeft = `${row.depth * 2}rem`;
                      }
                      return (
                        <Td
                          key={cell.id}
                          $size={size}
                          $showGridlines={showGridlines}
                          className={cell.column.getIsPinned() ? 'pinned' : ''}
                          style={cellStyle}
                        >
                          {isTree && cellIndex === 0 ? (
                            <div
                              style={{ display: 'flex', alignItems: 'center' }}
                            >
                              {row.getCanExpand() && (
                                <ActionButton
                                  onClick={e => {
                                    e.stopPropagation();
                                    row.getToggleExpandedHandler()();
                                  }}
                                  style={{
                                    cursor: 'pointer',
                                    marginRight: '0.5rem',
                                    paddingLeft: '0.5rem',
                                  }}
                                >
                                  <Icon
                                    iconName={
                                      row.getIsExpanded()
                                        ? IconName.CHEVRON_UP
                                        : IconName.CHEVRON_DOWN
                                    }
                                  />
                                </ActionButton>
                              )}
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </div>
                          ) : (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          )}
                        </Td>
                      );
                    })}
                    {onRemoveRow && (
                      <Td
                        $size={size}
                        $showGridlines={showGridlines}
                        style={{ width: '50px' }}
                      >
                        <ActionButton
                          onClick={event => {
                            event.stopPropagation();
                            handleRemoveRow(index);
                          }}
                        >
                          <Icon iconName={IconName.X} />
                        </ActionButton>
                      </Td>
                    )}
                    {actionItems && (
                      <Td
                        $size={size}
                        $showGridlines={showGridlines}
                        style={{ width: '1px', whiteSpace: 'nowrap', paddingLeft: '8px', paddingRight: '8px' }}
                      >
                        <ActionButton
                          ref={el => { actionButtonRefs.current[index] = el; }}
                          onClick={event => {
                            event.stopPropagation();
                            setActiveMenu(activeMenu === index ? null : index);
                          }}
                        >
                          <Icon iconName={IconName.THREE_DOTS} />
                        </ActionButton>
                        {activeMenu === index &&
                          actionButtonRefs.current[index] && (
                            <SlideMenuWrapper>
                              <SlideMenu
                                items={actionItems
                                  .filter(
                                    item =>
                                      !item?.hidden ||
                                      !item?.hidden(row.original, index)
                                  )
                                  .map(item => ({
                                    ...item,
                                    onClick: () => {
                                      item.onClick(row.original, index);
                                    },
                                  }))}
                                isOpen={activeMenu === index}
                                onClose={closeMenu}
                                anchorRef={{
                                  current: actionButtonRefs.current[index],
                                }}
                                position="bottom"
                              />
                            </SlideMenuWrapper>
                          )}
                      </Td>
                    )}
                  </TBodyTr>
                  {(row.original as any).footerTemplate && (
                    <tr>
                      <td
                        style={{
                          borderTop: showGridlines
                            ? '1px solid #DFE1E4'
                            : 'none',
                        }}
                        colSpan={
                          columns.length +
                          (onRemoveRow ? 1 : 0) +
                          (actionItems ? 1 : 0)
                        }
                      >
                        <RowFooter>
                          {(row.original as any).footerTemplate}
                        </RowFooter>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))
            )}
          </tbody>
        </TableElement>
      </TableWrapper>
    </TableContainer>
  );
}

export const DataTable = forwardRef(DataTableInner) as <
  TData,
  TValue = unknown
>(
  props: DataTableProps<TData, TValue> & { ref?: Ref<DataTableRef> }
) => ReturnType<typeof DataTableInner>;
