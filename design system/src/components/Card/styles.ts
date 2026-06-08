import styled, { css } from 'styled-components';

interface CardContainerProps {
  $isHovered: boolean;
  $alwaysActive: boolean;
  $isClickable?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${({ theme, $isHovered, $alwaysActive }) =>
    $isHovered || $alwaysActive
      ? theme.colors.neutral.background.base
      : theme.colors.neutral.background.default};
  border-radius: ${({ theme }) => theme.radii['lg']};
  overflow: hidden;
  width: 100%;
  transition: all 0.2s ease-in-out;
  padding: ${({ theme }) => theme.layout.card?.['md']?.padding?.['desktop'] || '16px 12px'};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'default')};

  ${({ $isHovered, $alwaysActive, theme }) =>
    ($isHovered || $alwaysActive) &&
    css`
      box-shadow: ${theme.shadows['sm']};
    `}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.layout.card?.['sm']?.padding?.['desktop'] || '16px 12px'};
`;

export const ImageWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BadgeContainer = styled.div`
  position: absolute;
  top: -4px;
  left: -4px;
  z-index: 1;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.layout.card?.['sm']?.padding?.['desktop'] || '16px 12px'};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HorizontalCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const HorizontalTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HorizontalLayout = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.layout.card?.['sm']?.padding?.['desktop'] || '16px 12px'};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  margin: 0;
  line-height: ${({ theme }) => theme.lineHeights.md};
`;

export const CardSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  margin: ${({ theme }) => theme.layout.card?.['sm']?.padding?.['desktop'] || '16px 12px'} 0 0;
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;
