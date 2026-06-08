import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const slideIn = keyframes`
	from {
		transform: translateY(20px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

const slideInFromRight = keyframes`
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border-radius: ${({ theme }) => theme.radii['lg']};
  max-width: 90%;
  width: 480px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows['xl']};
  animation: ${slideIn} 0.3s ease-out;
  overflow: hidden;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: calc(100vh - 24px);
  width: auto;
  max-width: 90vw;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  box-shadow: ${({ theme }) => theme.shadows['xl']};
  border-radius: ${({ theme }) => theme.radii['lg']};
  margin: ${({ theme }) =>
    theme.layout.card?.['md']?.padding?.['desktop'] || '16px 12px'};
  display: flex;
  flex-direction: column;
  animation: ${slideInFromRight} 0.3s ease-out;
  z-index: 1002;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) =>
    theme.layout.card?.['lg']?.padding?.['desktop'] || '16px 12px'};
  overflow-y: auto;
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: ${({ theme }) =>
    theme.layout.card?.['lg']?.padding?.['desktop'] || '16px 12px'};
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  flex: 1;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    theme.layout.card?.['lg']?.padding?.['desktop'] || '16px 12px'};
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  position: sticky;
  bottom: 0;
  z-index: 10;
`;

export const FooterContent = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

export const Description = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.neutral.text.weaker};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(239, 240, 241, 0.8);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.background.transparent.weak};
  transition: background-color 0.2s ease;
  z-index: 11;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.background.hover};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows['focus']};
  }
`;
