import { Meta, StoryObj } from '@storybook/react';
import { Illustrations } from '../';

const meta: Meta<typeof Illustrations> = {
  title: 'Components/Illustrations',
  component: Illustrations,
  args: {
    name: 'real-time',
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Illustrations>;

export const Default: Story = {
  args: {
    name: 'real-time',
  },
};
