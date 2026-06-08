import { type ChangeEvent, ComponentProps, FC, useState } from 'react';
import { Meta, type StoryObj } from '@storybook/react';

import { Icon } from '../';
import { IconName } from '../types';
import { Input } from '../../Input';

export default {
  title: 'Components/Icon',
  component: Icon,
  decorators: [Story => <Story />],
} as Meta;

type Story = StoryObj<typeof Icon>;

export const IconExamples: FC<ComponentProps<typeof Icon>> = () => {
  const iconNames = Object.keys(IconName) as Array<keyof typeof IconName>;
  const [filter, setFilter] = useState('');
  const [icons, setIcons] = useState(iconNames);
  const onIconFilterChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFilter(event.target.value);
    setIcons(
      iconNames.filter(iconName =>
        iconName.includes(event.target.value.toUpperCase())
      )
    );
  };

  return (
    <div className="storybook__icon">
      <Input
        name="icon-filter"
        value={filter}
        onChange={onIconFilterChange}
        label="Search an icon"
      />
      <br />
      <div
        style={{
          height: '2px',
          backgroundColor: '#45678923',
          width: '100%',
          borderRadius: '100%',
        }}
      ></div>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {icons.map((iconName: keyof typeof IconName) => (
          <div
            key={iconName}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '16px',
            }}
          >
            <Icon iconName={IconName[iconName]} />
            <small style={{ marginTop: '8px', color: '#a1a1a1' }}>
              {iconName}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: args => <IconExamples {...args} />,
};
