import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../index';
import Icon from './icon';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
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
    label: 'Label',
    icon: <Icon />,
    leftIcon: <Icon />,
    size: 'md',
    selected: false,
    onClick: () => {
      console.log('link path');
    },
  },
};

export default meta;
