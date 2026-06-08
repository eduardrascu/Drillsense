import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '..';
import { Avatar } from '../../Avatar';
import PlusIcon from '../assets/PlusIcon';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {
    label: 'Label',
    value: 'Value',
    size: 'large',
    selected: false,
    disabled: false,
    variant: 'primary',
    avatar: <Avatar pictureAlt={''} userName={'Rob Eb'} size="xs" />,
    icon: <PlusIcon />,
    iconLeft: <PlusIcon />,
    onClick: e => {
      console.log(e);
    },
    onMouseEnter: () => {},
    onMouseLeave: () => {},
  },
};

export default meta;
