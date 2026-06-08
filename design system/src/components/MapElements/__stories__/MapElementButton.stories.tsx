import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MapElementButton from '../Button';

import PlusIcon from './plusIcon';

type Story = StoryObj<typeof meta>;

const args = {
  position: {
    control: {
      type: 'radio',
    },
    options: ['left', 'right', 'bottom', 'top'],
  },
};

const meta: Meta<typeof MapElementButton> = {
  title: 'Components/MapElementButton',
  component: MapElementButton,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const MapButtton: Story = {
  args: {
    icon: <PlusIcon />,
    rounded: true,
    disabled: false,
    position: 'left',
  },
};

export default meta;
