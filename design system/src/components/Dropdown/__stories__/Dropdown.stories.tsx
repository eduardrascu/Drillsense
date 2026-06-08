import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown, type DropdownOption, type DropdownProps } from '../';
import { OptionBadge } from '../styles';

const options: DropdownOption[] = [
  {
    value: 'option1',
    label:
      'United States United States United States United States United States',
    leftContent: <OptionBadge>{200}</OptionBadge>,
    rightContent: <OptionBadge>{13}</OptionBadge>,
  },
  {
    value: 'option2',
    label: 'Label',
    rightContent: <OptionBadge>{13}</OptionBadge>,
  },
  {
    value: 'option3',
    label: 'Label',
    rightContent: <OptionBadge>{13}</OptionBadge>,
  },
  {
    value: 'option4',
    label: 'Label',
    rightContent: <OptionBadge>{13}</OptionBadge>,
  },
];

const countryOptions: DropdownOption[] = [
  {
    value: 'us',
    label:
      'United States United States United States United States United States',
  },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
];

const statusOptions: DropdownOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending' },
  { value: 'archived', label: 'Archived' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    hasError: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const DropdownWrapper: React.FC<DropdownProps> = args => {
  const [selectedOption, setSelectedOption] = React.useState<
    string | string[] | null
  >(args.multiSelect ? [] : null);
  return (
    <Dropdown
      {...args}
      value={selectedOption}
      onChange={option => {
        setSelectedOption(option);
        args.onChange?.(option);
      }}
    />
  );
};

const DropdownTemplate: Story = {
  render: args => <DropdownWrapper {...args} />,
};

export const Default: Story = {
  ...DropdownTemplate,
  args: {
    options: options,
    placeholder: 'Value',
    size: 'md',
    hasError: false,
  },
};

export const WithLabel: Story = {
  ...DropdownTemplate,
  args: {
    options: options,
    placeholder: 'Value',
    size: 'md',
    hasError: false,
  },
};

export const WithError: Story = {
  ...DropdownTemplate,
  args: {
    options: options,
    placeholder: 'Invalid selection',
    size: 'md',
    hasError: true,
  },
};

export const SmallSize: Story = {
  ...DropdownTemplate,
  args: {
    options: statusOptions,
    placeholder: 'Select status',
    size: 'sm',
    hasError: false,
  },
};

export const LargeSize: Story = {
  ...DropdownTemplate,
  args: {
    options: countryOptions,
    placeholder: 'Select country',
    size: 'lg',
    hasError: false,
  },
};

export const WithInfoText: Story = {
  ...DropdownTemplate,
  args: {
    options: options,
    placeholder: 'Select a value',
    size: 'md',
    infoText: 'This is some additional information about the dropdown',
  },
};

export const MultiSelect: Story = {
  ...DropdownTemplate,
  args: {
    options: options,
    placeholder: 'Select multiple options',
    size: 'md',
    hasError: false,
    multiSelect: true,
  },
};

export const AsLabelAttachment: Story = {
  ...DropdownTemplate,
  args: {
    options: statusOptions,
    placeholder: 'Select status',
    size: 'md',
    hasError: false,
    asLabelAttachment: true,
  },
};

export const MultiSelectWithLabelAttachment: Story = {
  ...DropdownTemplate,
  args: {
    options: options,
    placeholder: 'Select multiple options',
    size: 'md',
    hasError: false,
    multiSelect: true,
    asLabelAttachment: true,
  },
};

export const LongOptionsTest: Story = {
  render: args => {
    const LongOptionsTestComponent = () => {
      const [selectedOption, setSelectedOption] = React.useState<
        string | string[] | null
      >(args.multiSelect ? [] : null);

      const longOptions: DropdownOption[] = [
        {
          value: 'very-long-option-1',
          label:
            'Very Long Option Name That Should Test Text Wrapping Functionality In The Dropdown Component',
          leftContent: <OptionBadge>1</OptionBadge>,
          rightContent: <OptionBadge>Active</OptionBadge>,
        },
        {
          value: 'extremely-long-option-2',
          label:
            'Extremely Long Option Name That Contains A Lot Of Text To Test How The Component Handles Word Wrapping And Text Overflow In The Dropdown Menu',
          leftContent: <OptionBadge>2</OptionBadge>,
          rightContent: <OptionBadge>Pending</OptionBadge>,
        },
        {
          value: 'super-long-option-3',
          label:
            'Supercalifragilisticexpialidocious Option Name That Is Even Longer Than The Previous Ones To Really Test The Limits Of Text Wrapping In This Dropdown Component',
          leftContent: <OptionBadge>3</OptionBadge>,
          rightContent: <OptionBadge>Archived</OptionBadge>,
        },
        {
          value: 'another-long-option-4',
          label:
            'Another Very Long Option Name That Should Also Test The Text Wrapping And Ensure The Popover Does Not Exceed Container Width Boundaries',
          leftContent: <OptionBadge>4</OptionBadge>,
          rightContent: <OptionBadge>Draft</OptionBadge>,
        },
        {
          value: 'final-long-option-5',
          label:
            'This is the final extremely long option name that contains multiple words and should demonstrate proper text wrapping behavior in the Dropdown component',
          leftContent: <OptionBadge>5</OptionBadge>,
          rightContent: <OptionBadge>Published</OptionBadge>,
        },
      ];

      return (
        <div style={{ width: '300px' }}>
          <Dropdown
            {...args}
            options={longOptions}
            value={selectedOption}
            onChange={option => {
              setSelectedOption(option);
              args.onChange?.(option);
            }}
            placeholder="Select long options..."
            label="Long Options Test"
            multiSelect={true}
          />
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            <strong>Selected values:</strong>{' '}
            {Array.isArray(selectedOption)
              ? selectedOption.join(', ') || 'None'
              : selectedOption || 'None'}
          </div>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
            <strong>Test:</strong> Check that long options wrap properly and
            popover doesn&apos;t exceed container width
          </div>
        </div>
      );
    };

    return <LongOptionsTestComponent />;
  },
};
