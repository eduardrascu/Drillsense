import type { Meta, StoryObj } from '@storybook/react';

import * as allCurves from '@visx/curve';

import {
  ChartType,
  DataItem,
  defaultChartParams,
} from '../CoreChartBase.types';
import { CoreChartBase } from '../index';
import { lightTheme } from '../../../../themes';

import mockData from './CoreChartBase.mock';

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
  dataKeys2: {
    control: 'object',
    defaultValue: {
      summary: 'object',
      detail: '{x: string, y: string[]}',
    },
    description: 'The data keys for xScale / yScale of the second chart',
  },
  chartType: {
    control: 'select',
    mapping: Object.keys(ChartType),
    defaultValue: {
      summary: 'placeholder',
    },
    description: 'Chart Type',
  },
  chartType2: {
    control: 'select',
    mapping: Object.keys(ChartType),
    defaultValue: {
      summary: 'undefined',
    },
    description: 'Second Chart Type',
  },
  curveType: {
    control: 'select',
    mapping: Object.keys(allCurves),
    defaultValue: {
      summary: 'curveLinear',
    },
    description: 'Curve Type',
    if: { arg: 'chartType', eq: 'lineChart' },
  },
  curveType2: {
    control: 'select',
    mapping: Object.keys(allCurves),
    defaultValue: {
      summary: 'curveLinear',
    },
    description: 'Second Curve Type',
    if: { arg: 'chartType2', eq: 'lineChart' },
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

const meta: Meta<typeof CoreChartBase> = {
  title: 'Data Viz Components/CoreChartBase',
  component: CoreChartBase,
  args: {
    dataKeys: {
      x: 'month',
      y: ['units'],
    },

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
