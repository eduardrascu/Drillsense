import type { Meta, StoryObj } from '@storybook/react';

import { RadarChart } from '../index';
import { DataItem, defaultChartParams } from '../RadarChart.types';

import mockData from './RadarChart.mock';

type Story = StoryObj<typeof meta>;

const args = {
  data: {
    control: 'object',
    defaultValue: {
      summary: 'object',
      detail: '{[key: string]: number}[]',
    },
    description: 'Chart data provided',
  },
  dataKeys: {
    control: 'object',
    defaultValue: {
      summary: 'object',
      detail: '{x: string, y: string[]}',
    },
    description: 'The data keys for xScale / yScale of the chart',
  },
  colorPalette: {
    control: 'select',
    mapping: Object.keys(lightTheme.colors.dataViz),
    defaultValue: {
      summary: 'qualitative_2_1',
    },
    description: 'Color Palete',
  },
  width: {
    control: 'number',
    defaultValue: {
      summary: defaultChartParams.width,
    },
    description: 'Chart width (px)',
  },
  height: {
    control: 'number',
    defaultValue: {
      summary: defaultChartParams.height,
    },
    description: 'Chart height (px)',
  },
  levels: {
    control: { type: 'number' },
    defaultValue: {
      summary: 5,
    },
    description: 'Indicates the number of radial levels.',
  },
  niceScale: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show grid columns with horizontal padding',
  },
  withTooltip: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show tooltip on hover',
  },
};

const meta: Meta<typeof RadarChart> = {
  title: 'Data Viz Components/Circulars/RadarChart',
  component: RadarChart,
  args: {
    data: mockData as unknown as DataItem[],
    dataKeys: {
      x: 'month',
      y: ['units'],
    },

    width: 400,
    height: 400,
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

export const TwoPolygons: Story = {
  args: {
    dataKeys: {
      x: 'month',
      y: ['male', 'female'],
    },
  },
};

export const ThreePolygons: Story = {
  args: {
    dataKeys: {
      x: 'month',
      y: ['male', 'female', 'units'],
    },
    colorPalette: 'qualitative_4',
  },
};

export default meta;
