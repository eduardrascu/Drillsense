import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, FC, useState } from 'react';
import { Input } from '../index';
import Icon from '../../Button/icon';

type Story = StoryObj<typeof meta>;

const InputWrapper: FC<ComponentProps<typeof Input>> = props => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...props}
      value={value}
      onChange={event => {
        setValue(event.target.value);
        props.onChange?.(event);
      }}
    />
  );
};

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: InputWrapper,
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'The initial value of the input field.',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The value of the placeholder.',
    },
    label: {
      control: { type: 'text' },
      description: 'An optional label for the input.',
    },
    type: {
      options: ['text', 'number', 'date', 'password', 'email'],
      control: { type: 'select' },
      description:
        "The type of the input field (e.g., 'text', 'number', 'email', etc.).",
    },
    name: {
      control: { type: 'text' },
      description: 'The name attribute for the input.',
    },
    onChange: {
      action: 'changed',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      description: 'The size of the input field.',
    },
    insideLabel: {
      control: { type: 'boolean' },
      description: 'Whether to show the label inside the input field.',
    },
    showCloseIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the close icon inside the input field.',
    },
    infoText: {
      control: { type: 'text' },
      description: 'Whether the input has an info text.',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Whether the input has an error text.',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required.',
    },
    hasError: {
      control: { type: 'boolean' },
      description:
        'Whether the input has an error after touched but not error text.',
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
    name: 'default-input',
    label: 'Text Input',
    type: 'text',
    placeholder: 'Enter text',
    size: 'md',
    insideLabel: true,
    leftContent: <Icon />,
    rightContent: <Icon />,
  },
};

export const Password: Story = {
  args: {
    name: 'password-input',
    label: 'Password Input',
    type: 'password',
    placeholder: 'Enter password',
    size: 'md',
    insideLabel: true,
  },
};

export const Number: Story = {
  args: {
    name: 'number-input',
    label: 'Number Input',
    type: 'number',
    placeholder: 'Enter number',
    size: 'md',
    insideLabel: true,
  },
};

export const WithError: Story = {
  args: {
    name: 'error-input',
    label: 'Input with Error',
    type: 'text',
    placeholder: 'Enter text',
    size: 'md',
    insideLabel: true,
  },
};

export const LargeInput: Story = {
  args: {
    name: 'large-input',
    label: 'Large Input',
    type: 'text',
    placeholder: 'Enter text',
    size: 'lg',
    insideLabel: true,
  },
};

export const SmallInput: Story = {
  args: {
    name: 'small-input',
    label: 'Small Input',
    type: 'text',
    placeholder: 'Enter text',
    size: 'sm',
    insideLabel: true,
  },
};

export const OutsideLabel: Story = {
  args: {
    name: 'outside-label-input',
    label: 'Input with Outside Label',
    type: 'text',
    placeholder: 'Enter text',
    size: 'md',
    insideLabel: false,
  },
};

export const WithInfoText: Story = {
  args: {
    name: 'info-text-input',
    label: 'Input with Info Text',
    type: 'text',
    placeholder: 'Enter text',
    size: 'md',
    insideLabel: true,
    infoText: 'This is some additional information about the input field',
  },
};

export const WithContentOnEdges: Story = {
  args: {
    name: 'content-edges-input',
    label: 'Input with Content',
    type: 'text',
    placeholder: 'Enter text',
    size: 'md',
    insideLabel: true,
    leftContent: <span>@</span>,
    rightContent: <span>USD</span>,
  },
};

export default meta;
