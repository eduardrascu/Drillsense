import styled from 'styled-components';
import type { AlertType } from './';

export const AlertContainer = styled.div<{ $type: AlertType }>`
  position: relative;
  background-color: ${({ theme }) =>
    theme.colors.system.error.background.weakest};
  padding: ${({ theme }) => theme.layout.card?.['sm']?.padding?.['desktop'] || '16px 12px'};
  color: ${({ theme }) => theme.colors.system.error.text.default};
  border-radius: ${({ theme }) => theme.radii['sm']};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    border-radius: ${({ theme }) =>
      `${theme.radii['sm']} 0 0 ${theme.radii['sm']}`};
    background-color: ${({ theme }) =>
      theme.colors.system.error.background.default};
  }

  &::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    bottom: 0;
    width: 10px;
    opacity: 0.5;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.system.error.background.default},
      ${({ theme }) => theme.colors.system.error.background.weakest}
    );
  }
`;

export const AlertContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.layout.card?.['sm']?.padding?.['desktop'] || '16px 12px'};
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.system.error.icon.default};
  flex-shrink: 0;
  margin-left: 4px;
`;

export const AlertHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights['semibold']};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  margin: 0;
`;

export const AlertText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  margin: 0;
`;
