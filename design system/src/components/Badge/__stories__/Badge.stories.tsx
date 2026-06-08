import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../';
import InfoIcon from '../assets/InfoIcon';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // color: { control: 'color' },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: '13',
    type: 'interactive',
    background: 'none',
    size: 'md',
    selected: false,
    disabled: false,
    icon: <InfoIcon />,
  },
};
