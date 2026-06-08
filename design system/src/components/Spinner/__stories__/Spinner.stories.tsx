import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../index';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  decorators: [Story => <Story />],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      description: 'The size of the spinner field.',
    },
  },
  args: {
    size: 'md',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {};

export default meta;
