import type { Meta, StoryObj } from '@storybook/react';
import { type ReactNode, useState } from 'react';
import { Modal } from '..';
import styled from 'styled-components';
import { Button } from '../../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const WelcomeContainer = styled.div`
  text-align: center;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary.text.default};
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.neutral.text.default};
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

const CreateButton = styled(Button)`
  margin: 0 auto;
`;

const ModalTrigger = ({
  children,
  isSidebar = false,
  title,
  description,
  className,
  footerContent,
}: {
  children: ReactNode;
  isSidebar?: boolean;
  className?: string;
  title?: string;
  description?: string;
  footerContent?: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        label={isSidebar ? 'Sidebar' : 'Modal'}
      />

      <Modal
        isOpen={isOpen}
        title={title}
        description={description}
        onClose={() => setIsOpen(false)}
        isSidebar={isSidebar}
        className={className}
        footerContent={footerContent}
      >
        {children}
      </Modal>
    </>
  );
};

const WelcomeModalContent = () => (
  <WelcomeContainer>
    <Title>
      Welcome
      <br />
      to FuseDash!
    </Title>
    <Subtitle>Your personal analytics hub.</Subtitle>
    <Description>
      Start by creating Personal Health Profile to get your personalized
      analytical dashboard.
    </Description>
    <CreateButton size="md" variant="primary" label="Create Profile" />
  </WelcomeContainer>
);

export const Default: Story = {
  render: () => (
    <ModalTrigger>
      <h2>Basic Modal</h2>
      <p>This is a simple modal dialog.</p>
      <p>Click outside or press ESC to close.</p>
    </ModalTrigger>
  ),
};

export const WelcomeModal: Story = {
  render: () => (
    <ModalTrigger>
      <WelcomeModalContent />
    </ModalTrigger>
  ),
};

export const SidebarModal: Story = {
  render: () => (
    <ModalTrigger isSidebar>
      <h2>Sidebar Modal</h2>
      <p>This modal appears as a sidebar on the right side of the screen.</p>
      <p>
        It is useful for forms, details panels, and other content that needs
        more space.
      </p>
    </ModalTrigger>
  ),
};

export const SidebarWithTitleAndDescription: Story = {
  render: () => (
    <ModalTrigger
      isSidebar
      title="Sidebar Modal"
      description="This is a sidebar modal with a title and description."
    >
      <h2>Sidebar Modal</h2>
      <p>This modal appears as a sidebar on the right side of the screen.</p>
      <p>
        It is useful for forms, details panels, and other content that needs
        more space.
      </p>
    </ModalTrigger>
  ),
};

export const LongContentModal: Story = {
  render: () => (
    <ModalTrigger
      title="Modal with Long Content"
      description="This modal demonstrates sticky header and footer"
      footerContent={
        <div
          style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
        >
          <Button variant="secondary" label="Cancel" />
          <Button variant="primary" label="Save" />
        </div>
      }
    >
      <h2>Modal with Long Content and Sticky Header/Footer</h2>
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <p key={i}>
            This is paragraph {i + 1} with some content to demonstrate scrolling
            behavior in the modal. When content exceeds the modal height, it
            becomes scrollable while the header and footer remain fixed.
          </p>
        ))}
    </ModalTrigger>
  ),
};

const GradientModal = styled(Modal)`
  &.gradient-modal {
    background: linear-gradient(120deg, #ffffff 0%, #ffffff 65%, #4dc6fa 100%);
  }
`;

const GradientModalTrigger = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} label="Gradient Modal" />

      <GradientModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="gradient-modal"
      >
        {children}
      </GradientModal>
    </>
  );
};

export const GradientBackgroundModal: Story = {
  render: () => (
    <GradientModalTrigger>
      <WelcomeContainer>
        <Title>
          Welcome
          <br />
          to FuseDash!
        </Title>
        <Subtitle>Your personal analytics hub.</Subtitle>
        <Description>
          Start by creating Personal Health Profile to get your personalized
          analytical dashboard.
        </Description>
        <CreateButton size="md" variant="primary" label="Create Profile" />
      </WelcomeContainer>
    </GradientModalTrigger>
  ),
};

export const ModalWithFooter: Story = {
  render: () => {
    const footerContent = (
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
      >
        <Button variant="secondary" label="Cancel" />
        <Button variant="primary" label="Save" />
      </div>
    );

    return (
      <ModalTrigger
        title="Modal with Footer"
        description="This modal has a footer with action buttons"
        footerContent={footerContent}
      >
        <p>
          This modal demonstrates how to use the footerContent prop to add a
          footer with actions.
        </p>
        <p>The footer has a border on top and contains action buttons.</p>
      </ModalTrigger>
    );
  },
};
