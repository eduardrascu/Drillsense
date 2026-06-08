import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../index';

type Story = StoryObj<typeof meta>;

const args = {
  variant: {
    defaultValue: {
      summary: 'heading',
    },
    description: 'Size of Typography',
  },
};

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Heading: Story = {
  args: {
    type: 'heading',
    variant: 'neutral',
    size: 'xl',
    weight: 'semibold',
    children: 'Heading 1',
  },
};

export default meta;
