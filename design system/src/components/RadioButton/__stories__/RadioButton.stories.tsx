import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton as Radio } from '../index';

type Story = StoryObj<typeof Radio>;

const args = {
  variant: {
    control: {
      type: 'radio',
    },
    options: ['primary', 'danger'],
  },
  size: {
    control: {
      type: 'radio',
    },
    options: ['sm', 'md'],
  },
  onChange: { action: 'selected' },
};

const meta: Meta<typeof Radio> = {
  title: 'Components/RadioButton',
  component: Radio,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: Story = {
  args: {
    label: 'Default',
    size: 'md',
    checked: false,
    onChange: () => console.log('Default Selected'),
  },
};

export const Selected: Story = {
  args: {
    label: 'Selected',
    checked: true,
    size: 'md',
    onChange: () => console.log('Selected'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    size: 'md',
    checked: false,
    disabled: true,
    onChange: () => console.log('Disabled Selected'),
  },
};

export const Group: Story = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);

    console.log(value + ' Selected');
  };

  return (
    <>
      <Radio
        label="Group1"
        checked={selectedValue === 'option1'}
        onChange={() => handleSelect('option1')}
        size={'sm'}
      />
      <Radio
        label="Group2"
        checked={selectedValue === 'option2'}
        onChange={() => handleSelect('option2')}
        size={'sm'}
      />
    </>
  );
};

Group.args = {};
