import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RadioGroup } from '../';

type Story = StoryObj<typeof meta>;

const RadioGroupWrapper: React.FC<
  React.ComponentProps<typeof RadioGroup>
> = props => {
  const [value, setValue] = useState(props.value || '');
  return (
    <RadioGroup
      {...props}
      value={value}
      onChange={newValue => {
        setValue(newValue);
        props.onChange?.(newValue);
      }}
    />
  );
};

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroupWrapper,
  argTypes: {
    options: {
      control: { type: 'object' },
      description: 'An array of radio options.',
    },
    value: {
      control: { type: 'text' },
      description: 'The currently selected value.',
    },
    label: {
      control: { type: 'text' },
      description: 'An optional heading for the radio group.',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for the radio inputs.',
    },
    onChange: {
      action: 'changed',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      description: 'The size of the radio buttons.',
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Whether the radio group has an error state.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is disabled.',
    },
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {
  args: {
    name: 'default-radio',
    label: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    size: 'md',
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    name: 'error-radio',
    label: 'Radio Group with Error',
    hasError: true,
  },
};

export const LargeRadio: Story = {
  args: {
    ...Primary.args,
    name: 'large-radio',
    label: 'Large Radio Group',
    size: 'lg',
  },
};

export const SmallRadio: Story = {
  args: {
    ...Primary.args,
    name: 'small-radio',
    label: 'Small Radio Group',
    size: 'sm',
  },
};

export const DisabledRadio: Story = {
  args: {
    ...Primary.args,
    name: 'disabled-radio',
    label: 'Disabled Radio Group',
    disabled: true,
  },
};

export const ManyOptions: Story = {
  args: {
    ...Primary.args,
    name: 'many-options-radio',
    label: 'Radio Group with Many Options',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
      { value: 'option4', label: 'Option 4' },
      { value: 'option5', label: 'Option 5' },
      { value: 'option6', label: 'Option 6' },
    ],
  },
};

export default meta;
