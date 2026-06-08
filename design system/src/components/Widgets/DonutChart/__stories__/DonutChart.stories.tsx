import type { Meta, StoryObj } from '@storybook/react';

import { lightTheme } from '../../../../themes';
import { DonutChart } from '../index';
import { DataItem, defaultChartParams } from '../DonutChart.types';

import mockData from './DonutChart.mock';

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
  isOrderedByIndex: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Display pie sorted by data index or value',
  },
  hasColorsOrderedByIndex: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Color the pie based on the data index or value',
  },
  hasLabels: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show arc label',
  },
  withTooltip: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show tooltip on hover',
  },
};

const meta: Meta<typeof DonutChart> = {
  title: 'Data Viz Components/Circulars/DonutChart',
  component: DonutChart,
  args: {
    data: mockData as unknown as DataItem[],
    dataKeys: {
      x: 'month',
      y: ['units'],
    },

    colorPalette: 'qualitative_12',

    width: 400,
    height: 400,

    isOrderedByIndex: false,
    hasColorsOrderedByIndex: false,
    hasLabels: false,
    withTooltip: true,
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

export const WithChild: Story = {
  args: {
    children: 'Donut Chart',
  },
};

export const ColoredByDataIndex: Story = {
  args: {
    hasColorsOrderedByIndex: true,
  },
};

export const SortedByDataIndex: Story = {
  args: {
    isOrderedByIndex: true,
  },
};

export const HasLabels: Story = {
  args: {
    hasLabels: true,
  },
};

export default meta;
