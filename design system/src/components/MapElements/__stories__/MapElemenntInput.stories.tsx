import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MapElementInput from '../Input';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof MapElementInput> = {
  title: 'Components/MapElementInput',
  component: MapElementInput,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const MapInput: Story = {
  args: {
    disabled: false,
    onChange: e => console.log(e.currentTarget),
    value: '100%',
    placeholder: '100%',
  },
};

export default meta;
