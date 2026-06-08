import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TreeSelect, type TreeSelectNode } from '../index';

const meta: Meta<typeof TreeSelect> = {
  title: 'Components/TreeSelect',
  component: TreeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    multiSelect: {
      control: { type: 'boolean' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    insideLabel: {
      control: { type: 'boolean' },
    },
    asLabelAttachment: {
      control: { type: 'boolean' },
    },
    includeChildrenOnly: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TreeSelect>;

const sampleTreeData: TreeSelectNode[] = [
  {
    label: 'Documents',
    value: 'documents',
    children: [
      {
        label: 'Work',
        value: 'work',
        children: [
          { label: 'Reports', value: 'reports' },
          { label: 'Presentations', value: 'presentations' },
          { label: 'Contracts', value: 'contracts' },
        ],
      },
      {
        label: 'Personal',
        value: 'personal',
        children: [
          { label: 'Photos', value: 'photos' },
          { label: 'Videos', value: 'videos' },
          { label: 'Music', value: 'music' },
        ],
      },
    ],
  },
  {
    label: 'Applications',
    value: 'applications',
    children: [
      {
        label: 'Development',
        value: 'development',
        children: [
          { label: 'Code Editor', value: 'code-editor' },
          { label: 'Terminal', value: 'terminal' },
          { label: 'Database Tool', value: 'database-tool' },
        ],
      },
      {
        label: 'Design',
        value: 'design',
        children: [
          { label: 'Photo Editor', value: 'photo-editor' },
          { label: 'Vector Graphics', value: 'vector-graphics' },
          { label: '3D Modeling', value: '3d-modeling' },
        ],
      },
    ],
  },
  {
    label: 'Settings',
    value: 'settings',
    children: [
      { label: 'System', value: 'system' },
      { label: 'User', value: 'user' },
      { label: 'Privacy', value: 'privacy' },
    ],
  },
  {
    label:
      'Very Long Option Name That Should Test Text Wrapping Functionality In The TreeSelect Component',
    value: 'very-long-option',
    children: [
      {
        label:
          'Extremely Long Child Option That Contains A Lot Of Text To Test How The Component Handles Word Wrapping And Text Overflow In Nested Tree Structures',
        value: 'extremely-long-child',
      },
      {
        label:
          'Another Very Long Option Name That Should Also Test The Text Wrapping And Ensure The Popover Does Not Exceed Container Width',
        value: 'another-long-child',
      },
    ],
  },
];

const TreeSelectTemplate: Story = {
  render: args => {
    const TreeSelectComponent = () => {
      const [value, setValue] = useState<string | string[] | null>(null);

      return (
        <div style={{ width: '400px' }}>
          <TreeSelect
            {...args}
            options={sampleTreeData}
            value={value}
            onChange={setValue}
          />
        </div>
      );
    };

    return <TreeSelectComponent />;
  },
};

export const Default: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select an option...',
    label: 'Tree Select',
  },
};

export const MultiSelect: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select options...',
    label: 'Multi Tree Select',
    multiSelect: true,
  },
};

export const WithError: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select an option...',
    label: 'Tree Select with Error',
    hasError: true,
    errorText: 'This field is required',
  },
};

export const Disabled: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select an option...',
    label: 'Disabled Tree Select',
    isDisabled: true,
  },
};

export const Required: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select an option...',
    label: 'Required Tree Select',
    required: true,
  },
};

export const InsideLabel: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select an option...',
    label: 'Tree Select with Inside Label',
    insideLabel: true,
  },
};

export const LabelAttachment: Story = {
  ...TreeSelectTemplate,
  args: {
    placeholder: 'Select an option...',
    label: 'Tree Select as Label Attachment',
    asLabelAttachment: true,
  },
};

export const DifferentSizes: Story = {
  render: () => {
    const DifferentSizesComponent = () => {
      const [value2, setValue2] = useState<string | string[] | null>(null);
      const [value3, setValue3] = useState<string | string[] | null>(null);
      const [value4, setValue4] = useState<string | string[] | null>(null);

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '400px',
          }}
        >
          <TreeSelect
            options={sampleTreeData}
            value={value2}
            onChange={setValue2}
            placeholder="Small"
            label="Small"
            size="sm"
          />
          <TreeSelect
            options={sampleTreeData}
            value={value3}
            onChange={setValue3}
            placeholder="Medium"
            label="Medium"
            size="md"
          />
          <TreeSelect
            options={sampleTreeData}
            value={value4}
            onChange={setValue4}
            placeholder="Large"
            label="Large"
            size="lg"
          />
        </div>
      );
    };

    return <DifferentSizesComponent />;
  },
};

export const WithIcons: Story = {
  render: args => {
    const WithIconsComponent = () => {
      const [value, setValue] = useState<string | string[] | null>(null);

      const treeDataWithIcons: TreeSelectNode[] = [
        {
          label: 'Documents',
          value: 'documents',
          leftContent: <span>📁</span>,
          rightContent: (
            <span style={{ color: '#666', fontSize: '12px' }}>3 items</span>
          ),
          children: [
            {
              label: 'Work',
              value: 'work',
              leftContent: <span>💼</span>,
              rightContent: (
                <span style={{ color: '#666', fontSize: '12px' }}>3 files</span>
              ),
              children: [
                {
                  label: 'Reports',
                  value: 'reports',
                  leftContent: <span>📊</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      2.5MB
                    </span>
                  ),
                },
                {
                  label: 'Presentations',
                  value: 'presentations',
                  leftContent: <span>📽️</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      15.2MB
                    </span>
                  ),
                },
                {
                  label: 'Contracts',
                  value: 'contracts',
                  leftContent: <span>📄</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      1.8MB
                    </span>
                  ),
                },
              ],
            },
            {
              label: 'Personal',
              value: 'personal',
              leftContent: <span>👤</span>,
              rightContent: (
                <span style={{ color: '#666', fontSize: '12px' }}>3 items</span>
              ),
              children: [
                {
                  label: 'Photos',
                  value: 'photos',
                  leftContent: <span>📸</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      45.7MB
                    </span>
                  ),
                },
                {
                  label: 'Videos',
                  value: 'videos',
                  leftContent: <span>🎥</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      2.1GB
                    </span>
                  ),
                },
                {
                  label: 'Music',
                  value: 'music',
                  leftContent: <span>🎵</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      156.3MB
                    </span>
                  ),
                },
              ],
            },
          ],
        },
        {
          label: 'Applications',
          value: 'applications',
          leftContent: <span>⚙️</span>,
          rightContent: (
            <span style={{ color: '#666', fontSize: '12px' }}>1 item</span>
          ),
          children: [
            {
              label: 'Development',
              value: 'development',
              leftContent: <span>💻</span>,
              rightContent: (
                <span style={{ color: '#666', fontSize: '12px' }}>3 tools</span>
              ),
              children: [
                {
                  label: 'Code Editor',
                  value: 'code-editor',
                  leftContent: <span>📝</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      Active
                    </span>
                  ),
                },
                {
                  label: 'Terminal',
                  value: 'terminal',
                  leftContent: <span>🖥️</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      Running
                    </span>
                  ),
                },
                {
                  label: 'Database Tool',
                  value: 'database-tool',
                  leftContent: <span>🗄️</span>,
                  rightContent: (
                    <span style={{ color: '#666', fontSize: '12px' }}>
                      Connected
                    </span>
                  ),
                },
              ],
            },
          ],
        },
      ];

      return (
        <div style={{ width: '400px' }}>
          <TreeSelect
            {...args}
            options={treeDataWithIcons}
            value={value}
            onChange={setValue}
            placeholder="Select with icons..."
            label="Tree Select with Icons"
          />
        </div>
      );
    };

    return <WithIconsComponent />;
  },
};

export const ParentChildSelection: Story = {
  render: () => {
    const ParentChildSelectionComponent = () => {
      const [value, setValue] = useState<string[]>([]);

      const handleChange = (newValue: string | string[] | null) => {
        console.log('Selected values:', newValue);
        setValue(Array.isArray(newValue) ? newValue : []);
      };

      return (
        <div style={{ width: '400px' }}>
          <TreeSelect
            options={sampleTreeData}
            value={value}
            onChange={handleChange}
            placeholder="Select options..."
            label="Parent-Child Selection Demo"
            multiSelect={true}
          />
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            <strong>Selected values:</strong> {value.join(', ') || 'None'}
          </div>
          <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
            <strong>Behavior:</strong> Click a parent to select/deselect all
            children
          </div>
        </div>
      );
    };

    return <ParentChildSelectionComponent />;
  },
};

export const IncludeChildrenOnly: Story = {
  render: () => {
    const IncludeChildrenOnlyComponent = () => {
      const [valueDefault, setValueDefault] = useState<string[]>([]);
      const [valueChildrenOnly, setValueChildrenOnly] = useState<string[]>([]);

      const handleDefaultChange = (newValue: string | string[] | null) => {
        setValueDefault(Array.isArray(newValue) ? newValue : []);
      };

      const handleChildrenOnlyChange = (newValue: string | string[] | null) => {
        setValueChildrenOnly(Array.isArray(newValue) ? newValue : []);
      };

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '400px',
          }}
        >
          <div>
            <TreeSelect
              options={sampleTreeData}
              value={valueDefault}
              onChange={handleDefaultChange}
              placeholder="Select options..."
              label="Default Behavior (includeChildrenOnly: false)"
              multiSelect={true}
              includeChildrenOnly={false}
            />
            <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
              <strong>Selected values:</strong>{' '}
              {valueDefault.join(', ') || 'None'}
            </div>
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
              <strong>Behavior:</strong> Clicking a parent selects the parent
              and all its children
            </div>
          </div>

          <div>
            <TreeSelect
              options={sampleTreeData}
              value={valueChildrenOnly}
              onChange={handleChildrenOnlyChange}
              placeholder="Select options..."
              label="Include Children Only (includeChildrenOnly: true)"
              multiSelect={true}
              includeChildrenOnly={true}
            />
            <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
              <strong>Selected values:</strong>{' '}
              {valueChildrenOnly.join(', ') || 'None'}
            </div>
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#999' }}>
              <strong>Behavior:</strong> Clicking a parent selects only its leaf
              children (not the parent itself)
            </div>
          </div>
        </div>
      );
    };

    return <IncludeChildrenOnlyComponent />;
  },
};

export const LongOptionsTest: Story = {
  render: () => {
    const LongOptionsTestComponent = () => {
      const [value, setValue] = useState<string[]>([]);

      const longOptionsData: TreeSelectNode[] = [
        {
          label:
            'Very Long Option Name That Should Test Text Wrapping Functionality In The TreeSelect Component',
          value: 'very-long-option',
          children: [
            {
              label:
                'Extremely Long Child Option That Contains A Lot Of Text To Test How The Component Handles Word Wrapping And Text Overflow In Nested Tree Structures',
              value: 'extremely-long-child',
            },
            {
              label:
                'Another Very Long Option Name That Should Also Test The Text Wrapping And Ensure The Popover Does Not Exceed Container Width',
              value: 'another-long-child',
            },
            {
              label:
                'Supercalifragilisticexpialidocious Option Name That Is Even Longer Than The Previous Ones To Really Test The Limits Of Text Wrapping In This Component',
              value: 'super-long-child',
            },
          ],
        },
        {
          label:
            'Another Parent With Very Long Text That Should Also Test The Wrapping Functionality',
          value: 'another-long-parent',
          children: [
            {
              label:
                'This is a child option with a very long name that should wrap properly within the container boundaries and not cause any overflow issues',
              value: 'long-child-1',
            },
            {
              label:
                'Yet another extremely long option name that contains multiple words and should demonstrate proper text wrapping behavior in the TreeSelect component',
              value: 'long-child-2',
            },
          ],
        },
      ];

      const handleChange = (newValue: string | string[] | null) => {
        setValue(Array.isArray(newValue) ? newValue : []);
      };

      return (
        <div style={{ width: '300px' }}>
          <TreeSelect
            options={longOptionsData}
            value={value}
            onChange={handleChange}
            placeholder="Select long options..."
            label="Long Options Test"
            multiSelect={true}
          />
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
            <strong>Selected values:</strong> {value.join(', ') || 'None'}
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
