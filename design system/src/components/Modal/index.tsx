import {
  type FC,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  CloseButton,
  Description,
  FooterContainer,
  FooterContent,
  HeaderContainer,
  HeaderContent,
  ModalContainer,
  ModalContent,
  ModalOverlay,
  SidebarContainer,
  Title,
} from './styles';
import { Icon } from '../Icon';
import { IconName } from '../Icon/types';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isSidebar?: boolean;
  className?: string;
  title?: string;
  description?: string;
  footerContent?: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isSidebar = false,
  className,
  title,
  description,
  footerContent,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose]
  );

  const hasHeader = useMemo(() => {
    return !!(title || description);
  }, [title, description]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const ContentContainer = isSidebar ? SidebarContainer : ModalContainer;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ContentContainer ref={modalRef} className={className}>
        {hasHeader && (
          <HeaderContainer>
            <HeaderContent>
              {title && <Title>{title}</Title>}
              {description && <Description>{description}</Description>}
            </HeaderContent>
          </HeaderContainer>
        )}

        <CloseButton onClick={onClose}>
          <Icon iconName={IconName.X} />
        </CloseButton>

        <ModalContent>{children}</ModalContent>

        {footerContent && (
          <FooterContainer>
            <FooterContent>{footerContent}</FooterContent>
          </FooterContainer>
        )}
      </ContentContainer>
    </ModalOverlay>
  );
};
