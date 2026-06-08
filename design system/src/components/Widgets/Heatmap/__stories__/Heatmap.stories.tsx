import type { Meta, StoryObj } from '@storybook/react';
import { Heatmap } from '../index';
import { DataItem, defaultChartParams } from '../Heatmap.types'; // Mock Data
import mockData from './HeatmapUnstructured.mock';
import { lightTheme } from '../../../../themes';

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
      detail: '{x: string, y: string, z: string}',
    },
    description: 'The data keys for xScale / yScale / colorScale of the chart',
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
  showLeftAxis: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show the left axis along with its title',
  },
  showBottomAxis: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show the bottom axis along with its title',
  },
  widerLeftTrick: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show left axis trick wider',
  },
  withTooltip: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show tooltip on hover',
  },
  leftAxisTickFormatter: {
    description: '',
  },
  bottomAxisTickFormatter: {
    description: '',
  },
};

const meta: Meta<typeof Heatmap> = {
  title: 'Data Viz Components/Diagrams/Heatmap',
  component: Heatmap,
  args: {
    dataKeys: {
      x: 'letter',
      y: 'month',
      z: 'value',
    },

    width: 800,
    height: 600,

    colorPalette: 'sequential_7_1',

    showLeftAxis: true,
    showBottomAxis: true,
    widerLeftTrick: true,

    legendPosition: 'bottom',

    withTooltip: true,

    data: mockData as unknown as DataItem[],
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
