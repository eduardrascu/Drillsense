import { Meta, StoryObj } from '@storybook/react';
import { Datepicker, DatepickerProps } from '../';
import React, { useState } from 'react';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {
    label: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    hasError: { control: 'boolean' },
    insideLabel: { control: 'boolean' },
    restrictFutureYears: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

const DatepickerWrapper = (args: DatepickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <Datepicker
      {...args}
      value={selectedDate}
      onChange={date => {
        setSelectedDate(date);
        args.onChange?.(date);
      }}
    />
  );
};

const DatepickerTemplate: Story = {
  render: args => <DatepickerWrapper {...args} />,
};

export const Default: Story = {
  ...DatepickerTemplate,
  args: {
    label: 'Select a date',
    size: 'md',
    hasError: false,
    insideLabel: true,
    name: 'default-datepicker',
    restrictFutureYears: false,
  },
};

export const WithError: Story = {
  ...DatepickerTemplate,
  args: {
    label: 'Invalid date',
    size: 'md',
    hasError: true,
    insideLabel: true,
    name: 'error-datepicker',
    restrictFutureYears: false,
  },
};

export const OutsideLabel: Story = {
  ...DatepickerTemplate,
  args: {
    label: 'Date of birth',
    size: 'md',
    hasError: false,
    insideLabel: false,
    name: 'outside-label-datepicker',
    restrictFutureYears: true,
  },
};

export const SmallSize: Story = {
  ...DatepickerTemplate,
  args: {
    label: 'Small datepicker',
    size: 'sm',
    hasError: false,
    insideLabel: true,
    name: 'small-datepicker',
    restrictFutureYears: false,
  },
};

export const LargeSize: Story = {
  ...DatepickerTemplate,
  args: {
    label: 'Large datepicker',
    size: 'lg',
    hasError: false,
    insideLabel: true,
    name: 'large-datepicker',
    restrictFutureYears: false,
  },
};
