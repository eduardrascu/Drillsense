export type TreeDataItem = {
  id: string;
  name: string;
  description: string;
  format: string;
  lastExecution: string;
  date: string;
  units: string;
  reference: string;
  subRows?: TreeDataItem[];
};

export const treeData = [
  {
    id: '1',
    name: 'Root',
    description: 'Root level item',
    subRows: [
      {
        id: '1.1',
        name: 'Child 1',
        description: 'First child',
        subRows: [
          {
            id: '1.1.1',
            name: 'Grandchild 1',
            description: 'First grandchild',
          },
        ],
      },
      {
        id: '1.2',
        name: 'Child 2',
        description: 'Second child',
      },
    ],
  },
  {
    id: '2',
    name: 'Another Root',
    description: 'Another root level item',
    subRows: [
      {
        id: '2.1',
        name: 'Another Child',
        description: 'Another child item',
      },
    ],
  },
];

export const treeDataWithAllFeatures: TreeDataItem[] = [
  {
    id: '1',
    name: 'Specific Gravity',
    description: 'Root level item',
    format: '1.020',
    lastExecution: '1.01',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
    subRows: [
      {
        id: '1.1',
        name: 'Blood Pressure Results',
        description: 'First child',
        format: 'CSV',
        lastExecution: 'Oct 15, 2024',
        date: '09/24/2021',
        units: 'N/A',
        reference: '1.005-1.030',
        subRows: [
          {
            id: '1.1.1',
            name: 'Glycated Hemoglobin (HbA1c) Test',
            description: 'First grandchild',
            format: 'CSV',
            lastExecution: 'Sep 27, 2024',
            date: '09/24/2021',
            units: 'N/A',
            reference: '1.005-1.030',
          },
        ],
      },
      {
        id: '1.2',
        name: 'Cholesterol Panel',
        description: 'Second child',
        format: 'XLS',
        lastExecution: 'Nov 5, 2024',
        date: '09/24/2021',
        units: 'N/A',
        reference: '1.005-1.030',
      },
    ],
  },
  {
    id: '2',
    name: 'Another Root',
    description: 'Another root level item',
    format: 'XLS',
    lastExecution: 'Nov 5, 2024',
    date: '09/24/2021',
    units: 'N/A',
    reference: '1.005-1.030',
    subRows: [
      {
        id: '2.1',
        name: 'Another Child',
        description: 'Another child item',
        format: 'XLS',
        lastExecution: 'Nov 5, 2024',
        date: '09/24/2021',
        units: 'N/A',
        reference: '1.005-1.030',
      },
    ],
  },
];
