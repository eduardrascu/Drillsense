import type { Meta, StoryObj } from '@storybook/react';

import * as allCurves from '@visx/curve';

import {
  DataItem,
  defaultChartParams,
} from '../../CoreChartBase/CoreChartBase.types';
import { LineChart } from '../index';

import mockData from './LineChart.mock';

type Story = StoryObj<typeof meta>;

const leftRightAxesTickFormatter = (value: number): string =>
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
      detail: '{x: string, y: string[]}',
    },
    description: 'The data keys for xScale / yScale of the chart',
  },
  curveType: {
    control: 'select',
    mapping: Object.keys(allCurves),
    defaultValue: {
      summary: 'curveLinear',
    },
    description: 'Curve Type',
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
  withSecondScaleGridColumns: {
    control: 'boolean',
    defaultValue: {
      summary: false,
    },
    if: { arg: 'dataKeys2', truthy: true },
    description: 'Use secondary scale for grid columns',
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

const meta: Meta<typeof LineChart> = {
  title: 'Data Viz Components/Lines/LineChart',
  component: LineChart,
  args: {
    dataKeys: {
      x: 'month',
      y: ['units'],
    },
    colorPalette: 'qualitative_2_1',

    width: 800,
    height: 600,

    leftAxisLabel: 'Source Type',
    bottomAxisLabel: new Date().getFullYear().toString(),
    topAxisLabel: new Date().getFullYear().toString(),
    rightAxisLabel: 'Source Type',

    showTopAxis: true,
    showRightAxis: true,
    showBottomAxis: true,
    showLeftAxis: true,

    showVerticalAxesLine: false,
    showVerticalAxesTicks: false,
    showHorizontalAxesTicks: false,

    widerLeftTrick: false,
    widerRightTrick: false,

    hasGridColumnsPadding: true,
    hasGridColumnsOffset: true,
    withSecondScaleGridColumns: false,

    roundScale: true,
    niceScale: true,

    withTooltip: true,

    leftAxisTickFormatter: leftRightAxesTickFormatter,
    rightAxisTickFormatter: leftRightAxesTickFormatter,
    topAxisTickFormatter: d => d,
    bottomAxisTickFormatter: d => d,

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

export const CurveTypeNatural: Story = {
  args: {
    curveType: 'curveNatural',
  },
};

export const MultipleLines: Story = {
  args: {
    colorPalette: 'qualitative_4',
    dataKeys: {
      x: 'month',
      y: ['male', 'female', 'units'],
    },
    hasGridColumnsPadding: false,
    legendPosition: 'bottom',
  },
};

export default meta;
