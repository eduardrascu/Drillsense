import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ColorRangeLegend } from '../index';
import { lightTheme } from '../../../themes';

type Story = StoryObj<typeof meta>;

const colorScaleRange = [
  lightTheme.colors.dataViz.sequential_7_1[0],
  lightTheme.colors.dataViz.sequential_7_1[-1],
];

const args = {
  colorScaleRange: {
    defaultValue: {
      summary: null,
    },
    description:
      'Range of 2 colors, in the following format: ["start color", "end color"]',
  },
  gap: {
    control: { type: 'number' },
    defaultValue: {
      summary: 8,
    },
    description: 'Gap between elements',
  },
  leftLabel: {
    control: { type: 'text' },
    defaultValue: {
      summary: 'Low',
    },
    description: 'Left side label',
  },
  rightLabel: {
    control: { type: 'text' },
    defaultValue: {
      summary: 'Hight',
    },
    description: 'Right side label',
  },
};

const meta: Meta<typeof ColorRangeLegend> = {
  title: 'Components/ColorRangeLegend',
  component: ColorRangeLegend,
  args: {
    colorScaleRange: colorScaleRange,
    gap: 8,
    leftLabel: 'Low',
    rightLabel: 'High',
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
