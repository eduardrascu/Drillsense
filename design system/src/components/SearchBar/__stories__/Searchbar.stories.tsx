import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Search } from '../index';

type Story = StoryObj<typeof meta>;

const args = {
  width: {
    defaultValue: {
      summary: '"medium"',
    },
    description: 'Width of the search bar.',
  },
  onChange: {
    defaultValue: {
      summary: 'function',
      detail: '(value: string) => void',
    },
    description: 'Callback function triggered when the search value changes.',
  },
  placeholder: {
    defaultValue: {
      summary: 'string',
    },
    description: 'Placeholder text for the search input.',
  },
};

const meta: Meta<typeof Search> = {
  title: 'Components/SearchBar',
  component: Search,
  argTypes: { ...args },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {};

export default meta;
