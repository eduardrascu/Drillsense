import type { Meta, StoryObj } from '@storybook/react';

import {
  DataItem,
  defaultChartParams,
} from '../../CoreChartBase/CoreChartBase.types';
import { BubbleChart } from '../index';
import { lightTheme } from '../../../../themes';

import mockData from './BubbleChart.mock';

type Story = StoryObj<typeof meta>;

const xAxisTickFormatter = (value: string): string =>
  new Date(value).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });

const yAxisTickFormatter = (value: number): string =>
  Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);

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
      detail: '{x: string, y: string[], z: string}',
    },
    description:
      'The data keys for xScale / yScale / bubble value of the chart',
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
  topAxisLabel: {
    control: { type: 'text' },
    defaultValue: {
      summary: '',
    },
    description: 'Top axis title',
  },
  rightAxisLabel: {
    control: { type: 'text' },
    defaultValue: {
      summary: '',
    },
    description: 'Right axis title',
  },
  bottomAxisLabel: {
    control: { type: 'text' },
    defaultValue: {
      summary: '',
    },
    description: 'Bottom axis title',
  },
  leftAxisLabel: {
    control: { type: 'text' },
    defaultValue: {
      summary: '',
    },
    description: 'Left axis title',
  },
  showTopAxis: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show the top axis along with its title',
  },
  showRightAxis: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show the right axis along with its title',
  },
  showBottomAxis: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show the bottom axis along with its title',
  },
  showLeftAxis: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show the left axis along with its title',
  },
  showVerticalAxesLine: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show the line of vertical axes',
  },
  showVerticalAxesTicks: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show the thick lines of vertical axes',
  },
  showHorizontalAxesTicks: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show the thick lines of horizontal axes',
  },
  widerLeftTrick: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show left axis trick wider',
  },
  widerRightTrick: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    description: 'Show right axis trick wider',
  },
  hasGridColumnsPadding: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show grid columns with horizontal padding',
  },
  hasGridColumnsOffset: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    if: { arg: 'hasGridColumnsPadding' },
    description: 'Show grid columns with horizontal offset',
  },
  topAxisTickFormatter: {
    control: 'function',
    defaultValue: {
      summary: null,
    },
    description: 'Top Axis Tick Formatter',
  },
  rightAxisTickFormatter: {
    control: 'function',
    defaultValue: {
      summary: null,
    },
    description: 'Right Axis Tick Formatter',
  },
  bottomAxisTickFormatter: {
    control: 'function',
    defaultValue: {
      summary: null,
    },
    description: 'Bottom Axis Tick Formatter',
  },
  leftAxisTickFormatter: {
    control: 'function',
    defaultValue: {
      summary: null,
    },
    description: 'Bottom Axis Tick Formatter',
  },
  roundScale: {
    control: 'boolean',
    defaultValue: {
      summary: true,
    },
    description: 'Show rounded scale values',
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

const meta: Meta<typeof BubbleChart> = {
  title: 'Data Viz Components/Circulars/BubbleChart',
  component: BubbleChart,
  args: {
    dataKeys: {
      x: 'date',
      y: ['male', 'female'],
      z: 'sales',
    },
    xScaleType: 'time',
    colorPalette: 'qualitative_2_1',

    width: 800,
    height: 600,

    leftAxisLabel: 'Members',
    bottomAxisLabel: 'Date',
    topAxisLabel: '',
    rightAxisLabel: '',

    showTopAxis: false,
    showRightAxis: false,
    showBottomAxis: true,
    showLeftAxis: true,

    showVerticalAxesLine: false,
    showVerticalAxesTicks: false,
    showHorizontalAxesTicks: false,

    widerLeftTrick: false,
    widerRightTrick: false,

    hasGridColumnsPadding: false,
    hasGridColumnsOffset: false,

    roundScale: true,
    niceScale: true,

    legendPosition: 'bottom',
    withTooltip: true,

    leftAxisTickFormatter: yAxisTickFormatter,
    rightAxisTickFormatter: yAxisTickFormatter,
    topAxisTickFormatter: xAxisTickFormatter,
    bottomAxisTickFormatter: xAxisTickFormatter,

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

export const LinearXScale: Story = {
  args: {
    dataKeys: {
      x: 'sales',
      y: ['male', 'female'],
      z: 'units',
    },
    xScaleType: 'linear',

    bottomAxisLabel: 'Sales',

    topAxisTickFormatter: d => d,
    bottomAxisTickFormatter: d => d,
  },
};

export default meta;
