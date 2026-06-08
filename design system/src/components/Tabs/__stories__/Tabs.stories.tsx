'use client';

import type { Meta, StoryObj } from '@storybook/react';
import type React from 'react';
import { useState } from 'react';
import { Tabs } from '../';
import Icon from '../../Button/icon';

type Story = StoryObj<typeof meta>;

interface TabsWrapperProps extends React.ComponentProps<typeof Tabs> {
  initialActiveTab?: string;
}

const TabsWrapper: React.FC<TabsWrapperProps> = ({
  initialActiveTab = 'applications',
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <Tabs
      {...props}
      activeTab={activeTab}
      onTabChange={tabId => {
        setActiveTab(tabId);
        props.onTabChange?.(tabId);
      }}
    />
  );
};

const meta: Meta<typeof TabsWrapper> = {
  title: 'Components/Tabs',
  component: TabsWrapper,
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array of tab objects with id, label, and optional icon',
    },
    activeTab: {
      control: 'text',
      description: 'ID of the currently active tab',
    },
    onTabChange: {
      action: 'tab changed',
      description: 'Function called when a tab is clicked',
    },
    fullWidth: {
      control: 'boolean',
      description:
        'Whether tabs should take up the full width of the container',
    },
    variant: {
      options: ['default', 'button', 'pills', 'underline'],
      control: { type: 'select' },
      description: 'The visual style of the tabs',
    },
    size: {
      options: ['lg', 'md', 'sm', 'xs'],
      control: { type: 'select' },
      description: 'The visual size of the tabs',
    },
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const DefaultVariant: Story = {
  args: {
    tabs: [
      {
        id: 'applications',
        label: 'Applications',
        leftIcon: <Icon />,
        rightIcon: <Icon />,
        badgeCount: 10,
      },
      {
        id: 'publicSources',
        label: 'Public Sources',
        leftIcon: <Icon />,
        rightIcon: <Icon />,
        badgeCount: 1,
      },
    ],
    variant: 'default',
    fullWidth: false,
    disabled: false,
    size: 'md',
  },
};

export const ButtonVariant: Story = {
  args: {
    tabs: [
      {
        id: 'applications',
        label: 'Applications',
      },
      {
        id: 'publicSources',
        label: 'Public Sources',
      },
    ],
    variant: 'button',
    fullWidth: false,
  },
};

export const FullWidth: Story = {
  args: {
    tabs: [
      {
        id: 'applications',
        label: 'Applications',
      },
      {
        id: 'publicSources',
        label: 'Public Sources',
      },
    ],
    variant: 'default',
    fullWidth: true,
  },
};

export const WithoutIcons: Story = {
  args: {
    tabs: [
      { id: 'applications', label: 'Applications' },
      { id: 'publicSources', label: 'Public Sources' },
    ],
    variant: 'default',
    fullWidth: false,
  },
};

export const OnlyIcons: Story = {
  args: {
    tabs: [
      { id: 'applications', leftIcon: <Icon /> },
      { id: 'publicSources', rightIcon: <Icon /> },
    ],
    variant: 'default',
    isIconOnly: true,
    fullWidth: false,
  },
};

export const MultipleTabs: Story = {
  args: {
    tabs: [
      { id: 'home', label: 'Home' },
      {
        id: 'applications',
        label: 'Applications',
      },
      {
        id: 'publicSources',
        label: 'Public Sources',
      },
      { id: 'users', label: 'Users', badgeCount: 10 },
      { id: 'analytics', label: 'Analytics' },
      { id: 'settings', label: 'Settings' },
    ],
    variant: 'default',
    fullWidth: false,
  },
};

export default meta;
