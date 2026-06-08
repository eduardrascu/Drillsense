import type { Meta, StoryObj } from '@storybook/react';

import { SankeyPlot } from '../index';

import mockData from './Sankey.mock';
import { DataItem, defaultChartParams } from '../Sankey.types';

const valueFormatter = (value: number): string =>
  Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);

type Story = StoryObj<typeof meta>;

const args = {
  data: {
    control: 'object',
    defaultValue: {
      summary: 'object',
      detail: '{source: string, target: string, value: string}',
    },
    description: 'Chart data provided',
  },
  dataLabels: {
    control: 'object',
    defaultValue: {
      summary: 'object',
      detail: '{source: string, target: string, value: string}',
    },
    description: 'The data labels for tooltip and header',
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
  legendPosition: {
    control: 'select',
    mapping: ['none', 'top', 'right', 'bottom'],
    defaultValue: {
      summary: null,
    },
    description: 'Legend position',
  },
  withTooltip: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show tooltip on hover',
  },
};

const meta: Meta<typeof SankeyPlot> = {
  title: 'Data Viz Components/Diagrams/SankeyPlot',
  component: SankeyPlot,
  args: {
    data: mockData as unknown as DataItem[],
    dataLabels: {
      source: 'Year',
      target: 'Age Group',
      value: 'Members',
    },

    width: 800,
    height: 400,

    colorPalette: 'sequential_7_1',
    legendPosition: 'bottom',
    withTooltip: true,
    valueFormatter: valueFormatter,
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
