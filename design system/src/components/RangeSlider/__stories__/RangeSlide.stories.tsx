import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RangeSlider, { RangeSliderProps } from '../index';

type Story = StoryObj<typeof meta>;

const args = {};

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/Range',
  component: RangeSlider,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template: Story<RangeSliderProps> = (args: RangeSliderProps) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (newValue: number) => {
    console.log(newValue);
    setValue(() => newValue);
  };

  return <RangeSlider {...args} value={value} onChange={handleChange} />;
};

export const Range = Template.bind({});

Range.args = {
  min: 2017,
  max: 2021,
  value: 2019,
  step: 1,
};

export default meta;
