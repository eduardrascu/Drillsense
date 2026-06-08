import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../';
import imageToShow from '../../FileUpload/defaultPicture.png';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { IconName } from '../../Icon/types';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  decorators: [Story => <Story />],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

const InfoBadge = () => (
  <div
    style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: '#136EFF',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontWeight: 'bold',
    }}
  >
    i
  </div>
);

export const Default: Story = {
  args: {
    headerImage: imageToShow,
    title: 'Device Name',
    subtitle: 'Subtitle',
  },
};

export const Horizontal: Story = {
  args: {
    headerImage: imageToShow,
    title: 'OURA',
    subtitle: '1-4 Generation',
    isVertical: false,
  },
};

export const WithConnect: Story = {
  args: {
    headerImage: imageToShow,
    title: 'Device Name',
    subtitle: 'Subtitle',
    headerActions: <Button size="sm" variant="primary" label="Connect" />,
  },
};

export const WithDisconnect: Story = {
  args: {
    headerImage: imageToShow,
    title: 'Device Name',
    subtitle: 'Subtitle',
    headerActions: <Button size="sm" variant="error" label="Disconnect" />,
  },
};

export const Requested: Story = {
  args: {
    headerImage: imageToShow,
    title: 'Device Name',
    subtitle: 'Subtitle',
    alwaysActive: true,
    headerActions: (
      <div
        style={{
          backgroundColor: '#EFF0F1',
          color: '#6C7584',
          padding: '8px 12px',
          borderRadius: '999px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon iconName={IconName.CHECK} />
        Requested
      </div>
    ),
  },
};

export const WithBadge: Story = {
  args: {
    headerImage: imageToShow,
    title: 'Device Name',
    subtitle: 'Subtitle',
    badge: <InfoBadge />,
    headerActions: <Button size="sm" variant="primary" label="Connect" />,
  },
};

export const WithBadgeAndRequested: Story = {
  args: {
    headerImage: imageToShow,
    title: 'Device Name',
    subtitle: 'Subtitle',
    badge: <InfoBadge />,
    alwaysActive: true,
    headerActions: (
      <div
        style={{
          backgroundColor: '#EFF0F1',
          color: '#6C7584',
          padding: '8px 12px',
          borderRadius: '999px',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        <Icon iconName={IconName.CHECK} />
        Requested
      </div>
    ),
  },
};

export const HorizontalWithActions: Story = {
  args: {
    headerImage: imageToShow,
    title: 'OURA',
    subtitle: '1-4 Generation',
    isVertical: false,
    headerActions: <Button size="sm" variant="primary" label="Connect" />,
  },
};
