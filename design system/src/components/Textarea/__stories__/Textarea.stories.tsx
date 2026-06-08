import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, FC, useState } from 'react';
import { Textarea } from '../index';

type Story = StoryObj<typeof meta>;

const TextareaWrapper: FC<ComponentProps<typeof Textarea>> = props => {
  const [value, setValue] = useState('');
  return (
    <Textarea
      {...props}
      value={value}
      onChange={event => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
    />
  );
};

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: TextareaWrapper,
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'The initial value of the textarea field.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The value of the placeholder.',
    },
    label: {
      control: { type: 'text' },
      description: 'An optional label for the textarea.',
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for the textarea.',
    },
    onChange: {
      action: 'changed',
    },
    insideLabel: {
      control: { type: 'boolean' },
      description: 'Whether to show the label inside the textarea field.',
    },
    infoText: {
      control: { type: 'text' },
      description: 'Whether the textarea has an info text.',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Whether the textarea has an error text.',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is required.',
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
    name: 'default-textarea',
    label: 'Textarea label',
    placeholder: 'Enter text',
    infoText: 'This is some additional information about the textarea field',
    insideLabel: true,
  },
};

export default meta;
