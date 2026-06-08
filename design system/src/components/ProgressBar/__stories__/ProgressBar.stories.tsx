import React, { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (0-100)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    progress: 50,
  },
};

export const Small: Story = {
  args: {
    progress: 30,
  },
};

export const Large: Story = {
  args: {
    progress: 70,
  },
};

const AnimatedProgressBar = () => {
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

  return <ProgressBar progress={progress} />;
};

export const Animated: Story = {
  render: () => <AnimatedProgressBar />,
};

export const MultipleProgressBars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressBar progress={25} />
      <ProgressBar progress={50} />
      <ProgressBar progress={75} />
    </div>
  ),
};
