import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ padding: '24px', width: '500px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    withDot: false,
  },
};

export const WithDot: Story = {
  args: {
    withDot: true,
  },
};

export const InContent: Story = {
  render: () => (
    <div>
      <h3>Section Title</h3>
      <p>
        This is some content above the divider. The divider helps to separate
        different sections of content and create visual hierarchy.
      </p>
      <Divider withDot />
      <p>
        This is some content below the divider. Notice how the divider creates a
        clear separation between the content sections.
      </p>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div>
      <h3>Multiple Dividers</h3>
      <p>First section content</p>
      <Divider />
      <p>Second section content</p>
      <Divider withDot />
      <p>Third section content</p>
      <Divider />
      <p>Fourth section content</p>
    </div>
  ),
};
