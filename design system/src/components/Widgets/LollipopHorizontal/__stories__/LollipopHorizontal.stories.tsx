import type { Meta, StoryObj } from '@storybook/react';

import { LollipopHorizontalChart } from '../index';

type Story = StoryObj<typeof meta>;

// Mock Data
const mockData = [
  { y: '2019', x: 10 },
  { y: '2020', x: 15 },
  { y: '2021', x: 12 },
  { y: '2022', x: 6 },
  { y: '2023', x: 17 },
  { y: '2024', x: 20 },
];

const args = {};

const meta: Meta<typeof LollipopHorizontalChart> = {
  title: 'Data Viz Components/Bars/LollipopHorizontalChart',
  component: LollipopHorizontalChart,
  args: {
    data: mockData,
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
