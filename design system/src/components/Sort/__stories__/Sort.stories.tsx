import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import SortDropdown, { SortDropdownProps } from '../index';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof SortDropdown> = {
  title: 'Components/SortDropdown',
  component: SortDropdown,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template: Story<SortDropdown> = (args: SortDropdownProps) => {
  const [option, setOption] = useState(args.options[0]);

  const handleSelect = newValue => {
    console.log(newValue);
    setOption(() => newValue);
  };

  return (
    <SortDropdown {...args} selectedOption={option} onSelect={handleSelect} />
  );
};

export const Sort = Template.bind({});

Sort.args = {
  disabled: false,
  reversed: false,
  options: [
    { label: 'All', value: 'all' },
    { label: 'Some', value: 'some' },
    { label: 'None', value: 'none' },
  ],
};

export default meta;
