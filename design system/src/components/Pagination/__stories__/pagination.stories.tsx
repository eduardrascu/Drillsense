import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '..';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    type: 'list',
    showEdgePages: false,
    size: 'lg',
    setCurrentPage: () => {},
  },
};
