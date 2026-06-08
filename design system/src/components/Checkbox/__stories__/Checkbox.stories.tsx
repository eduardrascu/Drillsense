import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../';
import { ComponentProps, FC, useState } from 'react';

const CheckboxWrapper: FC<ComponentProps<typeof Checkbox>> = props => {
  const [checked, setChecked] = useState(props.checked || false);

  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={event => {
        setChecked(event.target.checked);
        props.onChange?.(event);
      }}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: CheckboxWrapper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onChange: {
      action: 'changed',
    },
    checked: {},
    intermediate: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
  decorators: [Story => <Story />],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

const InteractiveCheckbox = props => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...props}
      checked={checked}
      onChange={e => setChecked(e.target.checked)}
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveCheckbox />,
  args: {
    intermediate: true,
    checked: true,
  },
};

const customLabel = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <p>I agree to the terms and conditions</p>
    <a href="/">Test</a>
  </div>
);

export const WithLabel: Story = {
  render: () => <Checkbox id="terms" label={customLabel} />,
};

export const WithError: Story = {
  args: {
    hasError: true,
    label: 'Checkbox with error state',
  },
};

export const CheckedWithError: Story = {
  args: {
    hasError: true,
    checked: true,
    label: 'Checked checkbox with error state',
  },
};
