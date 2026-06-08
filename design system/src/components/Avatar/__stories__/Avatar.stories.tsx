import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '..';

import mockPicture from '../../../assets/avatar.png';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {
  args: {
    picture: mockPicture,
    userName: 'Vadim Popa',
    pictureAlt: 'mock',
    selected: false,
    disabled: false,
  },
};

export const NoPicture: Story = {
  args: {
    userName: 'Vadim Popa',
    pictureAlt: 'default',
    selected: false,
    disabled: false,
  },
};

export default meta;
