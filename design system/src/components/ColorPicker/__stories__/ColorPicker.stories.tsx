import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import ColorPicker from '../index';

type Story = StoryObj<typeof meta>;

const args = {
  callback: {
    callback: { action: 'clicked' },
    defaultValue: {
      summary: 'function',
    },
    description: 'Callback function to handle color changes.',
  },
  color: {
    defaultValue: {
      summary: 'string',
    },
    control: {
      type: 'color',
      presetColors: ['#ff0000', '#00ff00', '#0000ff'],
    },
    description: 'The current color value.',
  },
  item: {
    defaultValue: {
      summary: 'object',
    },
    description: 'An object representing the color item.',
  },
};

const meta: Meta<typeof ColorPicker> = {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  argTypes: {
    ...args,
  },
  decorators: [Story => <Story />],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type StoryProps = {
  callback: (color: any) => void;
  color: string;
  item: any;
};

export const Primary: Story = (args: StoryProps) => {
  const handleColorChange = (color: any) => {
    if (!color || !color.rgb) {
      console.error('Color or color.rgb is undefined');
      return;
    }

    console.log({
      ...args.item,
      backgroundColor: color?.hex,
      gradient: '',
      rgbaColor: `rgba(${color?.rgb.r},${color?.rgb.g},${color?.rgb.b},${color?.rgb.a})`,
    });
  };

  return <ColorPicker {...args} callback={handleColorChange} />;
};

Primary.args = {
  item: {
    heading: 'Add a title to this story',
    highlights:
      'Please add a subtitle here that provides a brief overview of the content presented on this page below.',
    description:
      "Here, you'll find additional information that may not be crucial but could still be interesting or helpful.",
    textAlignment: 'left',
    image: '',
    backgroundColor: '',
    id: 1,
    widget: '',
    gradient: 'linear-gradient(90deg, #0052D4 0%, #4364F7 50%, #6FB1FC 100%)',
    rgbaColor: '',
  },
};

export default meta;
