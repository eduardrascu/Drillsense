import type { Meta, StoryObj } from '@storybook/react';

import { Legend } from '../index';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Legend> = {
  title: 'Components/Legend',
  component: Legend,
  args: {
    labels: [...new Array(2)].map((_, i) => `Unit ${i + 1}`),
  },

  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    labels: [...new Array(2)].map((_, i) => `Unit ${i + 1}`),
  },
};

export const colorPalette_12_colors: Story = {
  args: {
    direction: 'vertical',
    labels: [...new Array(12)].map((_, i) => `Unit ${i + 1}`),
    colorPalette: 'qualitative_12',
  },
};

export const colorPalette_12_colors_ScrollBar: Story = {
  args: {
    direction: 'vertical',
    labels: [...new Array(12)].map((_, i) => `Unit ${i + 1}`),
    colorPalette: 'qualitative_12',
    height: '100px',
  },
};

export default meta;
