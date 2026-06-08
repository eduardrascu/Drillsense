import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Loader, LoaderProps } from '../index';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  decorators: [Story => <Story />],
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
      description: 'The size of the loader field.',
    },
  },
  args: {
    size: 'md',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {};

const AnimatedLoader = (props: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 1, 100);
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Loader {...props} progress={progress} />;
};

export const Animated: Story = {
  render: props => <AnimatedLoader {...props} />,
};

export default meta;
