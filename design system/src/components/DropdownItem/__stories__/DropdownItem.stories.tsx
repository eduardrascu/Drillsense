import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, FC, useState } from 'react';
import { DropdownItem } from '..';
import InfoIcon from '../../Badge/assets/InfoIcon';

const DropdownWrapper: FC<ComponentProps<typeof DropdownItem>> = props => {
  const [checked, setChecked] = useState(props.checked || false);

  return (
    <DropdownItem
      {...props}
      checked={checked}
      onChange={event => {
        setChecked(event.target.checked);
        props.onChange?.(event);
      }}
    />
  );
};

const meta: Meta<typeof DropdownItem> = {
  title: 'Components/DropdownItem',
  component: DropdownWrapper,
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
type Story = StoryObj<typeof DropdownItem>;

export const Default: Story = {
  args: {
    variant: 'basic',
    title: 'Dropdown Item',
    description: 'This is a dropdown item',
    checked: true,
    avatar: {
      pictureAlt: 'Avatar',
      userName: 'John Doe',
    },
    badge: {
      label: '13',
      type: 'interactive',
      icon: <InfoIcon />,
    },
    iconLeft: 'Code',
    iconRight: 'Code',
    disabled: true,
  }
};

