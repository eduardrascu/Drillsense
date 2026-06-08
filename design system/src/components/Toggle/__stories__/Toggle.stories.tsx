import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '../index';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    label: { control: 'text' },
    onChange: {
      defaultValue: {
        summary: '(option: string) => void',
      },
      description: 'Callback function triggered when the toggle option changes.',
    },
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = args => {
  const [selectedOption, setSelectedOption] = useState<string>('regular');

  const handleToggleChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Toggle
      {...args}
      selectedOption={selectedOption}
      onChange={handleToggleChange}
    />
  );
};

Primary.args = {

};

export default meta;
