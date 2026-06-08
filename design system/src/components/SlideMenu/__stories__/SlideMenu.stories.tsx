'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import { SlideMenu } from '../';
import { Button } from '../../Button';
import { IconName } from '../../Icon/types';
import type { SlideMenuPosition } from '../types';
import { Icon } from '../../Icon';

const meta: Meta<typeof SlideMenu> = {
  title: 'Components/SlideMenu',
  component: SlideMenu,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: '24px',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SlideMenu>;

const BasicSlideMenuExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      label: 'View',
      onClick: () => console.log('View clicked'),
      icon: IconName.VIEW,
    },
    {
      label: 'Share',
      onClick: () => console.log('Share clicked'),
      icon: IconName.SHARE,
    },
    {
      label: 'Download',
      onClick: () => console.log('Download clicked'),
      icon: IconName.DOWNLOAD,
      divider: true,
    },
    {
      label: 'Delete',
      onClick: () => console.log('Delete clicked'),
      icon: IconName.TRASH,
    },
  ];

  return (
    <div>
      <Button
        ref={buttonRef}
        label="Open Menu (Bottom)"
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
        rightIcon={<Icon iconName={IconName.THREE_DOTS} />}
      />
      <SlideMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={buttonRef}
      />
    </div>
  );
};

const PositionedSlideMenuExample = () => {
  const [position, setPosition] = useState<SlideMenuPosition>('bottom');
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      label: 'Option 1',
      onClick: () => console.log('Option 1 clicked'),
      icon: IconName.CHECK,
    },
    {
      label: 'Option 2',
      onClick: () => console.log('Option 2 clicked'),
      icon: IconName.X,
    },
    {
      label: 'Option 3',
      onClick: () => console.log('Option 3 clicked'),
      icon: IconName.INFO_CIRCLE,
      divider: true,
    },
    {
      label: 'Dangerous Action',
      onClick: () => console.log('Dangerous action clicked'),
      icon: IconName.SEARCH,
    },
  ];

  const positions: SlideMenuPosition[] = ['bottom', 'top', 'left', 'right'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {positions.map(pos => (
          <Button
            key={pos}
            label={pos}
            onClick={() => setPosition(pos)}
            variant={position === pos ? 'primary' : 'secondary'}
          />
        ))}
      </div>
      <Button
        ref={buttonRef}
        label={`Open Menu (${position})`}
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
      />
      <SlideMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={buttonRef}
        position={position}
      />
    </div>
  );
};

const MultiplePositionsExample = () => {
  const [openMenu, setOpenMenu] = useState<SlideMenuPosition | null>(null);
  const buttonRefs = {
    bottom: useRef<HTMLButtonElement>(null),
    top: useRef<HTMLButtonElement>(null),
    left: useRef<HTMLButtonElement>(null),
    right: useRef<HTMLButtonElement>(null),
  };

  const items = [
    {
      label: 'Action 1',
      onClick: () => console.log('Action 1 clicked'),
      icon: IconName.CHECK,
    },
    {
      label: 'Action 2',
      onClick: () => console.log('Action 2 clicked'),
      icon: IconName.X,
      divider: true,
    },
    {
      label: 'Dangerous Action',
      onClick: () => console.log('Dangerous action clicked'),
      icon: IconName.INFO_CIRCLE,
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '100px',
      }}
    >
      <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
        <Button
          ref={buttonRefs.top}
          label="Top Menu"
          onClick={() => setOpenMenu(openMenu === 'top' ? null : 'top')}
          variant="primary"
        />
        <SlideMenu
          items={items}
          isOpen={openMenu === 'top'}
          onClose={() => setOpenMenu(null)}
          anchorRef={buttonRefs.top}
          position="top"
        />
      </div>
      <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
        <Button
          ref={buttonRefs.right}
          label="Right Menu"
          onClick={() => setOpenMenu(openMenu === 'right' ? null : 'right')}
          variant="primary"
        />
        <SlideMenu
          items={items}
          isOpen={openMenu === 'right'}
          onClose={() => setOpenMenu(null)}
          anchorRef={buttonRefs.right}
          position="right"
        />
      </div>
      <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
        <Button
          ref={buttonRefs.left}
          label="Left Menu"
          onClick={() => setOpenMenu(openMenu === 'left' ? null : 'left')}
          variant="primary"
        />
        <SlideMenu
          items={items}
          isOpen={openMenu === 'left'}
          onClose={() => setOpenMenu(null)}
          anchorRef={buttonRefs.left}
          position="left"
        />
      </div>
      <div style={{ justifySelf: 'center', alignSelf: 'center' }}>
        <Button
          ref={buttonRefs.bottom}
          label="Bottom Menu"
          onClick={() => setOpenMenu(openMenu === 'bottom' ? null : 'bottom')}
          variant="primary"
        />
        <SlideMenu
          items={items}
          isOpen={openMenu === 'bottom'}
          onClose={() => setOpenMenu(null)}
          anchorRef={buttonRefs.bottom}
          position="bottom"
        />
      </div>
    </div>
  );
};

const MultipleDividersExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const items = [
    {
      label: 'File Actions',
      onClick: () => console.log('File Actions clicked'),
      icon: IconName.VIEW,
    },
    {
      label: 'Open',
      onClick: () => console.log('Open clicked'),
      icon: IconName.UPLOAD,
    },
    {
      label: 'Save',
      onClick: () => console.log('Save clicked'),
      icon: IconName.INFO_CIRCLE,
      divider: true,
    },
    {
      label: 'Sharing Options',
      onClick: () => console.log('Sharing Options clicked'),
      icon: IconName.DOWNLOAD,
    },
    {
      label: 'Share with Team',
      onClick: () => console.log('Share with Team clicked'),
      icon: IconName.SHARE,
    },
    {
      label: 'Get Link',
      onClick: () => console.log('Get Link clicked'),
      icon: IconName.APPLICATIONS,
      divider: true,
    },
    {
      label: 'Delete',
      onClick: () => console.log('Delete clicked'),
      icon: IconName.TRASH,
    },
  ];

  return (
    <div>
      <Button
        ref={buttonRef}
        label="Menu with Multiple Dividers"
        onClick={() => setIsOpen(!isOpen)}
        variant="primary"
      />
      <SlideMenu
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        anchorRef={buttonRef}
      />
    </div>
  );
};

export const Basic: Story = {
  render: () => <BasicSlideMenuExample />,
};

export const PositionSelector: Story = {
  render: () => <PositionedSlideMenuExample />,
};

export const MultiplePositions: Story = {
  render: () => <MultiplePositionsExample />,
};

export const MultipleDividers: Story = {
  render: () => <MultipleDividersExample />,
};
