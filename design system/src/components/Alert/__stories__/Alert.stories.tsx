import type { Meta, StoryObj } from '@storybook/react';
import { AlertMessage } from '../';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof AlertMessage> = {
  title: 'Components/AlertMessage',
  component: AlertMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [Story => <Story />],
};

export const ErrorAlert: Story = {
  args: {
    type: 'error',
    heading: 'Form incomplete',
    message: 'Ensure all mandatory fields are completed before submitting.',
  },
};

export const ErrorWithoutHeading: Story = {
  args: {
    type: 'error',
    message: 'Ensure all mandatory fields are completed before submitting.',
  },
};

export default meta;
