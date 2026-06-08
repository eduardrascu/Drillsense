import { ComponentProps, FC, useCallback, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../';
import styled from 'styled-components';

const StoryWrapper = styled.div`
  width: 600px;
  padding: 20px;
`;

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
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
    onChange: { action: 'files selected' },
    accept: {
      control: 'text',
      description: 'Accepted file types',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the upload component',
    },
    variant: {
      control: 'radio',
      options: ['regular', 'compact'],
      defaultValue: 'regular',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

const FileUploadWithProgress: FC<ComponentProps<typeof FileUpload>> = props => {
  const [files, setFiles] = useState<File[]>(props.initialFiles || []);
  const propsRef = useRef(props);
  propsRef.current = props;

  const handleFileSelect = useCallback(
    (selectedFiles: File[]) => {
      const newFiles = propsRef.current.multiple
        ? [...files, ...selectedFiles]
        : selectedFiles;
      setFiles(newFiles);
      propsRef.current.onChange(newFiles);
    },
    [files]
  );

  const simulateUpload = (
    file: File,
    updateProgress: (progress: number) => void
  ) => {
    let progress = 0;

    const uploadInterval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(uploadInterval);
        return;
      }
      progress += 10;
      updateProgress(progress);
    }, 500);
  };

  const handleCancel = (fileToRemove: File) => {
    const updatedFiles = files.filter(file => file !== fileToRemove);
    setFiles(updatedFiles);
    propsRef.current.onChange(updatedFiles);
  };

  return (
    <FileUpload
      {...props}
      onChange={handleFileSelect}
      onCancel={handleCancel}
      initialFiles={files}
      uploadFile={simulateUpload}
    />
  );
};

export const Default: Story = {
  render: args => <FileUploadWithProgress {...args} />,
  args: {
    multiple: false,
    size: 'md',
  },
};

export const MultipleFiles: Story = {
  render: args => <FileUploadWithProgress {...args} />,
  args: {
    ...Default.args,
    multiple: true,
  },
};

export const SmallSize: Story = {
  render: args => <FileUploadWithProgress {...args} />,
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: args => <FileUploadWithProgress {...args} />,
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const CustomAcceptTypes: Story = {
  render: args => <FileUploadWithProgress {...args} />,
  args: {
    ...Default.args,
    accept: '.pdf,.doc,.docx',
  },
};

export const WithPreUploadedFiles: Story = {
  render: args => {
    const FileUploadWithPreUploadedFiles: FC<
      ComponentProps<typeof FileUpload>
    > = props => {
      const [files, setFiles] = useState<File[]>([
        new File([''], 'document1.pdf', { type: 'application/pdf' }),
        new File([''], 'image1.jpg', { type: 'image/jpeg' }),
      ]);

      const propsRef = useRef(props);
      propsRef.current = props;

      const handleFileSelect = useCallback(
        (selectedFiles: File[]) => {
          const newFiles = [...files, ...selectedFiles];
          setFiles(newFiles);
          propsRef.current.onChange(newFiles);
        },
        [files]
      );

      return (
        <FileUpload
          {...props}
          onChange={handleFileSelect}
          initialFiles={files}
        />
      );
    };

    return <FileUploadWithPreUploadedFiles {...args} />;
  },
  args: {
    ...Default.args,
    multiple: true,
  },
};

export const PictureUpload: Story = {
  render: args => <FileUploadWithProgress {...args} />,
  args: {
    isAvatar: true,
    multiple: false,
    maxSize: Math.round(1.8 * 1024 * 1024),
  },
};

export const PictureUploadWithPreview: Story = {
  render: args => {
    const FileUploadWithPreview: FC<
      ComponentProps<typeof FileUpload>
    > = props => {
      const [files, setFiles] = useState<File[]>([
        new File([''], 'profile.jpg', { type: 'image/jpeg' }),
      ]);

      const handleFileSelect = useCallback(
        (selectedFiles: File[]) => {
          setFiles(selectedFiles);
          props.onChange(selectedFiles);
        },
        [setFiles, props]
      );

      return (
        <FileUpload
          {...props}
          onChange={handleFileSelect}
          initialFiles={files}
        />
      );
    };

    return <FileUploadWithPreview {...args} />;
  },
  args: {
    isAvatar: true,
    multiple: false,
    maxSize: 800 * 1024,
  },
};
