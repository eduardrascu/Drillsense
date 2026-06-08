import type { Meta, StoryObj } from '@storybook/react';

import { BarChartHorizontal } from '../index';

type Story = StoryObj<typeof meta>;

// Mock Data
const mockData = [
  { year: 2019, month: 1, users: 10000 },
  { year: 2019, month: 2, users: 20000 },
  { year: 2019, month: 3, users: 30000 },
  { year: 2019, month: 4, users: 40000 },
  { year: 2019, month: 5, users: 50000 },
  { year: 2019, month: 6, users: 60000 },
  { year: 2019, month: 7, users: 70000 },
  { year: 2019, month: 8, users: 80000 },
  { year: 2019, month: 9, users: 90000 },
  { year: 2019, month: 10, users: 100000 },
  { year: 2019, month: 11, users: 110000 },
  { year: 2019, month: 12, users: 125000 },
  { year: 2020, month: 1, users: 134000 },
  { year: 2020, month: 2, users: 162000 },
  { year: 2020, month: 3, users: 200404 },
  { year: 2020, month: 4, users: 240234 },
  { year: 2020, month: 5, users: 280405 },
  { year: 2020, month: 6, users: 300000 },
  { year: 2020, month: 7, users: 420000 },
  { year: 2020, month: 8, users: 500000 },
  { year: 2020, month: 9, users: 580000 },
  { year: 2020, month: 10, users: 590000 },
  { year: 2020, month: 11, users: 740000 },
  { year: 2020, month: 12, users: 590000 },
  { year: 2021, month: 1, users: 745000 },
  { year: 2021, month: 2, users: 845000 },
  { year: 2021, month: 3, users: 925000 },
  { year: 2021, month: 4, users: 1000000 },
  { year: 2021, month: 5, users: 1100000 },
  { year: 2021, month: 6, users: 1000000 },
  { year: 2021, month: 7, users: 1200000 },
  { year: 2021, month: 8, users: 1300000 },
  { year: 2021, month: 9, users: 1350000 },
  { year: 2021, month: 10, users: 1250000 },
  { year: 2021, month: 11, users: 1350000 },
  { year: 2021, month: 12, users: 1400000 },
  { year: 2022, month: 1, users: 1000000 },
  { year: 2022, month: 2, users: 1200000 },
  { year: 2022, month: 3, users: 1300000 },
  { year: 2022, month: 4, users: 1350000 },
  { year: 2022, month: 5, users: 1250000 },
  { year: 2022, month: 6, users: 1000000 },
  { year: 2022, month: 7, users: 1200000 },
  { year: 2022, month: 8, users: 1300000 },
  { year: 2022, month: 9, users: 1350000 },
  { year: 2022, month: 10, users: 1200000 },
  { year: 2022, month: 11, users: 1000000 },
  { year: 2022, month: 12, users: 1400000 },
  { year: 2023, month: 1, users: 1250000 },
  { year: 2023, month: 2, users: 1350000 },
  { year: 2023, month: 3, users: 1402000 },
  { year: 2023, month: 4, users: 1200000 },
  { year: 2023, month: 5, users: 1350000 },
  { year: 2023, month: 6, users: 1000000 },
  { year: 2023, month: 7, users: 1200000 },
  { year: 2023, month: 8, users: 1300000 },
  { year: 2023, month: 9, users: 1350000 },
  { year: 2023, month: 10, users: 1250000 },
  { year: 2023, month: 11, users: 1400000 },
  { year: 2023, month: 12, users: 1400000 },
];

const args = {
  showSettingsButton: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Sets settings button visible',
  },
  storytelling: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description:
      'Indicates whether the component is used in storytelling mode.',
  },
  interactivity: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description:
      'Indicates whether the component should show interactive elements.',
  },
  onSettingsClick: {
    action: 'onSettingsClick',
    description: 'Handler for when the settings button is clicked',
  },
};

const meta: Meta<typeof BarChartHorizontal> = {
  title: 'Data Viz Components/Bars/BarChartHorizontal',
  component: BarChartHorizontal,
  args: {
    data: mockData,
    title: 'Bar Chart Horizontal',
  },
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {};

export default meta;
