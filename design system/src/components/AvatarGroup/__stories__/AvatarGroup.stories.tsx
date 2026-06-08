import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AvatarGroup } from '..';
import { AvatarProps } from '../../../components/Avatar/types';

import mockPicture from '../../../assets/avatar.png';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const avatars: AvatarProps[] = [
  {
    picture: mockPicture,
    userName: 'Vadim Popa',
    pictureAlt: 'mock',
    selected: false,
    disabled: false,
  },
  {
    picture: mockPicture,
    userName: 'Vadim Popa',
    pictureAlt: 'mock',
    selected: false,
    disabled: false,
  },
  {
    userName: 'Vadim Popa',
    pictureAlt: 'mock',
    selected: false,
    disabled: false,
  },
  {
    userName: 'Vadim Popa',
    pictureAlt: 'mock',
    selected: false,
    disabled: false,
  },
  {
    userName: 'Vadim Popa',
    pictureAlt: 'mock',
    selected: false,
    disabled: false,
  },
];

export const Primary: Story = {
  args: {
    avatars: avatars,
  },
};

export default meta;
