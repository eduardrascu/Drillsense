import type { Meta, StoryObj } from '@storybook/react';
import { RefObject, useEffect, useRef, useState } from 'react';
import { DataTable } from '../';
import { Checkbox } from '../../Checkbox';
import { Icon } from '../../Icon';
import { IconName } from '../../Icon/types';
import { SlideMenu } from '../../SlideMenu';
import { Typography } from '../../Typography';
import { Tag, TagsContainer } from '../styles';
import type { EnhancedColumnDef } from '../types';
import { treeData, TreeDataItem, treeDataWithAllFeatures } from './data';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ padding: '24px', maxWidth: '1200px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

function getTagColor(tag: string): string {
  const colors = {
    Measure: '#E3E8FF',
    year: '#FFE4CC',
    County: '#E2F6F3',
    Members: '#E5E1FF',
    Longitude: '#D1F3EA',
    Health: '#D1F3EA',
    Vital: '#FFE4CC',
    Lipids: '#E3E8FF',
    Lab: '#E5E1FF',
    Annual: '#E2F6F3',
  };
  return colors[tag as keyof typeof colors] || '#E2E8F0';
}

const dataWithBadges = [
  {
    name: 'Specific Gravity',
    format: '1.020',
    lastExecution: '1.01',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
    footerTemplate: (
      <TagsContainer>
        {['Health', 'Measure', 'Vital'].map((tag, i) => (
          <Tag key={i} $color={getTagColor(tag)}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>
    ),
  },
  {
    name: 'Blood Pressure Results',
    format: 'CSV',
    lastExecution: 'Oct 15, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
    footerTemplate: (
      <TagsContainer>
        {['Health', 'Measure', 'Vital'].map((tag, i) => (
          <Tag key={i} $color={getTagColor(tag)}>
            {tag}
          </Tag>
        ))}
      </TagsContainer>
    ),
  },
  {
    name: 'Glycated Hemoglobin (HbA1c) Test',
    format: 'CSV',
    lastExecution: 'Sep 27, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
    footerTemplate: (
      <TagsContainer>
        {['Measure', 'year', 'County', 'Members', 'Longitude', '+3'].map(
          (tag, i) => (
            <Tag key={i} $color={getTagColor(tag)}>
              {tag}
            </Tag>
          )
        )}
      </TagsContainer>
    ),
  },
  {
    name: 'Cholesterol Panel',
    format: 'XLS',
    lastExecution: 'Nov 5, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
    footerTemplate: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TagsContainer>
          {['Lipids', 'Lab', 'Annual'].map((tag, i) => (
            <Tag key={i} $color={getTagColor(tag)}>
              {tag}
            </Tag>
          ))}
        </TagsContainer>
        <button
          style={{
            padding: '4px 8px',
            background: '#E2E8F0',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          View Details
        </button>
      </div>
    ),
  },
];

const dataWithoutFooter = [
  {
    name: 'Specific Gravity',
    format:
      '1.0201234123412341234123412341234134123412431234123412341241298479123874892739872428167348263487263487623784682736487263487623847628734687236487263487623',
    lastExecution: '1.01',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
  },
  {
    name: 'Blood Pressure Results',
    format: 'CSV',
    lastExecution: 'Oct 15, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
  },
  {
    name: 'Glycated Hemoglobin (HbA1c) Test',
    format: 'CSV',
    lastExecution: 'Sep 27, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
  },
  {
    name: 'Cholesterol Panel',
    format: 'XLS',
    lastExecution: 'Nov 5, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
  },
];

const basicColumns: EnhancedColumnDef<unknown, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Test Name',
    cell: ({ row }) => {
      return row.getValue('name');
    },
    minSize: 200,
    maxSize: 400,
  },
  {
    accessorKey: 'format',
    header: 'Current Result',
    minSize: 100,
  },
  {
    accessorKey: 'lastExecution',
    header: 'Previous Result',
    minSize: 100,
  },
  {
    accessorKey: 'date',
    header: 'Previous Result Date',
    minSize: 150,
  },
  {
    accessorKey: 'units',
    header: 'Units',
    minSize: 100,
  },
  {
    accessorKey: 'reference',
    header: 'Reference Interval',
    minSize: 150,
  },
];

const enhancedColumns: EnhancedColumnDef<unknown, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Test Name',
    cell: ({ row }) => {
      return row.getValue('name');
    },
    minSize: 200,
    isStarred: true,
    isPinned: true,
  },
  {
    accessorKey: 'format',
    header: 'Current Result',
    minSize: 100,
    rightContent: <Icon iconName={IconName.INFO_CIRCLE} />,
    maxSize: 400,
  },
  {
    accessorKey: 'lastExecution',
    header: 'Previous Result',
    minSize: 100,
    isStarred: true,
  },
  {
    accessorKey: 'date',
    header: 'Previous Result Date',
    minSize: 150,
  },
  {
    accessorKey: 'units',
    header: 'Units',
    minSize: 100,
  },
  {
    accessorKey: 'reference',
    header: 'Reference Interval',
    minSize: 150,
  },
];

const treeColumns: EnhancedColumnDef<unknown, unknown>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export const Default: Story = {
  args: {
    columns: basicColumns,
    data: dataWithBadges,
    onRow: {
      onClick: row => {
        console.log('Row', row);
        window.location.reload();
      },
    },
  },
};

export const TreeTable: Story = {
  args: {
    columns: treeColumns,
    data: treeData,
    isTree: true,
  },
};

export const WithHeaderIcons: Story = {
  args: {
    columns: enhancedColumns,
    data: dataWithBadges,
  },
};

export const WithGridlines: Story = {
  args: {
    columns: enhancedColumns,
    data: dataWithBadges,
    showGridlines: true,
    isShowHeaderActions: true,
  },
};

const WithHeaderActionsTable = () => {
  const tableRef = useRef<{
    getHeaderRef: (id: string) => HTMLTableCellElement | null;
    getRowRef: (index: number) => HTMLTableRowElement | null;
  }>(null);

  const [open, setOpen] = useState(false);
  const [activeColumnId, setActiveColumnId] = useState<string | null>(null);

  const anchorRef = {
    current:
      activeColumnId && tableRef.current
        ? tableRef.current.getHeaderRef(activeColumnId)
        : null,
  } as RefObject<HTMLElement>;

  const headerActions = column => [
    {
      label: 'Edit',
      onClick: columnId => {
        console.log('Edit column', columnId, 'column', column);
        setActiveColumnId(columnId);
        setOpen(true);
      },
      icon: IconName.PENCIL,
    },
  ];

  return (
    <>
      <DataTable
        ref={tableRef}
        columns={enhancedColumns}
        data={dataWithBadges}
        headerActions={headerActions}
      />
      <SlideMenu
        isOpen={open}
        anchorRef={anchorRef}
        onClose={() => setOpen(false)}
        items={[
          {
            label: 'Close',
            onClick: () => {
              console.log('Close menu');
            },
            divider: true,
          },
        ]}
      >
        <div style={{ margin: '0 auto', padding: '0 10px' }}>
          <Typography variant="neutral" type="body" size="md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
        </div>
      </SlideMenu>
    </>
  );
};

export const WithHeaderActions: Story = {
  render: () => <WithHeaderActionsTable />,
};

const WithAllFeaturesTable = () => {
  const [data, setData] = useState(dataWithBadges);

  const handleRemoveRow = (index: number) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  const headerActions = [
    {
      label: 'Edit',
      onClick: column => {
        console.log('Edit column', column);
      },
      icon: IconName.PENCIL,
    },
  ];

  const actionItems = [
    {
      label: 'View',
      onClick: (row: any) => {
        console.log('View', row);
      },
      icon: IconName.VIEW,
    },
    {
      label: 'Rename',
      onClick: (row: any) => {
        console.log('Rename', row);
      },
      icon: IconName.RENAME,
    },
    {
      label: 'Share',
      onClick: (row: any) => {
        console.log('Share', row);
      },
      icon: IconName.SHARE,
      hidden: (_, index: number) => {
        return index === 1;
      },
    },
    {
      label: 'Download',
      onClick: (row: any) => {
        console.log('Download', row);
      },
      icon: IconName.DOWNLOAD,
      divider: true,
    },
    {
      label: 'Remove',
      onClick: (_, index: number) => {
        handleRemoveRow(index);
      },
      icon: IconName.TRASH,
    },
  ];

  return (
    <DataTable
      columns={enhancedColumns}
      data={data}
      headerActions={headerActions}
      actionItems={actionItems}
    />
  );
};

export const WithAllFeatures: Story = {
  render: () => <WithAllFeaturesTable />,
};

const WithAllFeaturesTreeTable = () => {
  const [data, setData] = useState(treeDataWithAllFeatures);

  const handleRemoveRow = (index: number) => {
    const removeById = (rows: TreeDataItem[], id: string): TreeDataItem[] => {
      return rows.filter(row => {
        if (row.id === id) {
          return false;
        }
        if (row.subRows) {
          row.subRows = removeById(row.subRows, id);
        }
        return true;
      });
    };

    const rowToRemove = findRowByIndex(data, index);
    if (rowToRemove) {
      setData(prevData => removeById(prevData, rowToRemove.id));
    }
  };

  const findRowByIndex = (
    rows: TreeDataItem[],
    index: number
  ): TreeDataItem | null => {
    let currentIndex = 0;
    let result: TreeDataItem | null = null;

    const traverse = (currentRows: TreeDataItem[]) => {
      for (const row of currentRows) {
        if (currentIndex === index) {
          result = row;
          return;
        }
        currentIndex++;
        if (row.subRows) {
          traverse(row.subRows);
          if (result) return;
        }
      }
    };

    traverse(rows);
    return result;
  };

  const headerActions = [
    {
      label: 'Edit',
      onClick: (column: any) => {
        console.log('Edit column', column);
      },
      icon: IconName.PENCIL,
    },
  ];

  const actionItems = [
    {
      label: 'View',
      onClick: (row: any) => {
        console.log('View', row);
      },
      icon: IconName.VIEW,
    },
    {
      label: 'Rename',
      onClick: (row: any) => {
        console.log('Rename', row);
      },
      icon: IconName.RENAME,
    },
    {
      label: 'Share',
      onClick: (row: any) => {
        console.log('Share', row);
      },
      icon: IconName.SHARE,
      hidden: (_: any, index: number) => {
        return index === 1;
      },
    },
    {
      label: 'Download',
      onClick: (row: any) => {
        console.log('Download', row);
      },
      icon: IconName.DOWNLOAD,
      divider: true,
    },
    {
      label: 'Remove',
      onClick: (_: any, index: number) => {
        handleRemoveRow(index);
      },
      icon: IconName.TRASH,
    },
  ];

  return (
    <DataTable
      columns={enhancedColumns}
      data={data}
      headerActions={headerActions}
      actionItems={actionItems}
      isTree
    />
  );
};

export const WithAllFeaturesTree: Story = {
  render: () => <WithAllFeaturesTreeTable />,
};

const WithoutFooterTable = () => {
  const headerActions = [
    {
      label: 'Edit',
      onClick: column => {
        console.log('Edit column', column);
      },
      icon: IconName.PENCIL,
    },
  ];

  const actionItems = [
    {
      label: 'View',
      onClick: (row: any) => {
        console.log('View', row);
      },
      icon: IconName.VIEW,
    },
    {
      label: 'Rename',
      onClick: (row: any) => {
        console.log('Rename', row);
      },
      icon: IconName.RENAME,
    },
  ];

  return (
    <DataTable
      columns={enhancedColumns}
      data={dataWithoutFooter}
      headerActions={headerActions}
      actionItems={actionItems}
      onRow={{
        onClick: row => {
          console.log('Row', row);
          window.location.reload();
        },
      }}
    />
  );
};

export const WithoutFooter: Story = {
  render: () => <WithoutFooterTable />,
};

const WithCheckboxTable = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(dataWithoutFooter.length).fill(false)
  );

  useEffect(() => {
    setCheckedItems(new Array(dataWithoutFooter.length).fill(false));
  }, []);

  const checkedCount = checkedItems.filter(Boolean).length;
  const checkAll =
    checkedCount === checkedItems.length && checkedItems.length > 0;
  const intermediate = checkedCount > 0 && checkedCount < checkedItems.length;

  const toggleCheckAll = (checked: boolean) => {
    setCheckedItems(new Array(dataWithoutFooter?.length).fill(checked));
  };

  const toggleSingleCheckbox = (index: number, checked: boolean) => {
    setCheckedItems(prev => {
      const updatedCheckedItems = [...prev];
      updatedCheckedItems[index] = checked;
      return updatedCheckedItems;
    });
  };

  const columns: EnhancedColumnDef<unknown, unknown>[] = [
    {
      id: 'id',
      header: () => (
        <Checkbox
          intermediate={intermediate}
          checked={checkAll}
          onChange={event => toggleCheckAll(event.target.checked)}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={checkedItems[row.index]}
          onChange={event => {
            event.stopPropagation();
            toggleSingleCheckbox(row.index, event.target.checked);
          }}
          onClick={event => {
            event.stopPropagation();
          }}
        />
      ),
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        return row.getValue('name');
      },
      isStarred: true,
      isPinned: true,
    },
    {
      accessorKey: 'units',
      header: 'Units',
    },
    {
      accessorKey: 'format',
      header: 'Current Result',
      maxSize: 400,
    },
    {
      accessorKey: 'lastExecution',
      header: 'Previous Result',
      isStarred: true,
    },
    {
      accessorKey: 'date',
      header: 'Previous Result Date',
    },

    {
      accessorKey: 'reference',
      header: 'Reference Interval',
    },
  ];
  return (
    <DataTable
      columns={columns}
      data={dataWithoutFooter}
      onRow={{
        onClick: row => {
          console.log('Row', row);
          window.location.reload();
        },
      }}
      size="lg"
      activeRows={checkedItems}
    />
  );
};

export const WithCheckbox: Story = {
  render: () => <WithCheckboxTable />,
};
