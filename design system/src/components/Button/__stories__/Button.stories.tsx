import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../index';

import Icon from '../icon';

type Story = StoryObj<typeof meta>;

const args = {
  name: {
    defaultValue: {
      summary: 'Button',
    },
    description: 'The text content of the button',
  },
  onClick: {
    defaultValue: {
      summary: 'undefined',
    },
    description: 'Callback function to be executed when the button is clicked.',
  },
  icon: {
    defaultValue: {
      summary: 'object',
      detail: 'svg or jsx element',
    },
    description: 'The icon element to be displayed on the button.',
  },
  iconLeft: {
    defaultValue: {
      summary: 'object',
      detail: 'svg or jsx element',
    },
    description:
      'The icon element to be displayed on the left side of the button text.',
  },
  variant: {
    defaultValue: {
      summary: 'neutral',
    },
    description: `\`primary\` Primary button with prominent styling.\t
    \`secondary\` Secondary button with subdued styling.\t
    \`neutral\` Neutral button with a default appearance.\t
    \`neutral-color\` Neutral button with custom color.\t
    \`disabled\` Disabled button with a muted look.\t
    \`danger\` Button indicating a potentially dangerous action.`,
  },
  disabled: {
    defaultValue: {
      summary: 'false',
    },
    description: 'Disables the button if set to true.',
  },
  size: {
    defaultValue: {
      summary: 'large',
    },
    description: `The size of the button.\t
   \`xsmall\` XSmall size.\t
   \`small\` Small size.\t
   \`medium\` Medium size.\t
   \`large\` Large size.\t`,
  },

  type: {
    defaultValue: {
      summary: 'text',
    },
    description: 'The type of the button',
  },
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary: Story = {
  args: {
    label: 'Label',
    variant: 'primary-dark',
    leftIcon: <Icon />,
    rightIcon: <Icon />,
    disabled: false,
    size: 'lg',
    type: 'button',
    iconOnly: false,
  },
};

export default meta;
