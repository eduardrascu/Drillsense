import styled from 'styled-components';
import type { TSize } from '../../types/common.types';
import { FileUploadVariant } from './index';
import { DotsAnimation } from '../Spinner/styles';

export const UploadWrapper = styled.div``;

export const UploadContainer = styled.div``;

export const UploadArea = styled.div<{
  $isDragging: boolean;
  $size: TSize;
  $variant: FileUploadVariant;
}>`
  display: flex;
  flex-direction: ${({ $variant }) =>
    $variant === 'regular' ? 'column' : 'row'};
  align-items: center;
  justify-content: ${({ $variant }) =>
    $variant === 'regular' ? 'center' : 'space-between'};
  gap: 16px;
  padding: 16px;
  border: 1px dashed
    ${({ theme, $isDragging }) =>
      $isDragging
        ? theme.colors.primary.border.active
        : theme.colors.primary.border.default};
  border-radius: ${({ theme, $size }) => theme.radii[$size]};
  background-color: ${({ theme, $isDragging }) =>
    $isDragging
      ? theme.colors.primary.background.default
      : theme.colors.primary.background.transparent.weaker};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.border.hover};
    background-color: ${({ theme }) => theme.colors.primary.background.default};
  }
`;

export const UploadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const UploadIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: ${({ theme }) => theme.colors.primary.icon.default};
  border: 1px solid ${({ theme }) => theme.colors.primary.border.default};
  border-radius: ${({ theme }) => theme.radii['rounded']};

  svg {
    color: ${({ theme }) => theme.colors.primary.icon.default};
  }
`;

export const UploadText = styled.div<{ $textAlign?: string }>`
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSizes['s']};
  line-height: ${({ theme }) => theme.lineHeights['m']};
  font-weight: ${({ theme }) => theme.fontWeights['regular']};
  text-align: ${({ $textAlign = 'center' }) => $textAlign};

  span {
    display: block;
    color: ${({ theme }) => theme.colors.neutral.text.weaker};
    font-size: ${({ theme }) => theme.fontSizes['xs']};
    line-height: ${({ theme }) => theme.lineHeights['s']};
    font-weight: ${({ theme }) => theme.fontWeights['regular']};
  }
`;

export const BrowseButton = styled.button<{ $size: TSize }>`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary.border.default};
  color: ${({ theme }) => theme.colors.primary.text.default};
  padding: ${({ theme, $size }) => theme.components.buttons[$size].padding};
  border-radius: ${({ theme }) =>
    theme.components.buttons.borderRadius.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.background.default};
    border-color: ${({ theme }) => theme.colors.primary.border.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.background.active};
    border-color: ${({ theme }) => theme.colors.primary.border.active};
  }
`;

export const PictureUploadWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
`;

export const PicturePreview = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    color: ${({ theme }) => theme.colors.neutral.icon.weak};
  }
`;

export const PictureUploadButton = styled.button<{ $size: TSize }>`
  background-color: ${({ theme }) =>
    theme.colors.primary.background.transparent.weak};
  color: ${({ theme }) => theme.colors.primary.text.default};
  border: none;
  padding: ${({ theme, $size }) => theme.components.buttons[$size].padding};
  border-radius: ${({ theme }) => theme.radii['rounded']};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights['semibold']};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.primary.background.transparent.default};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.colors.primary.background.transparent.strong};
  }
`;

export const PictureText = styled.div<{ $noMargin?: boolean }>`
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.neutral.text.weaker};
  margin-top: ${({ $noMargin }) => ($noMargin ? '-8px' : '8px')};
  text-align: center;
`;

export const ProgressContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FileListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border: 1px solid ${({ theme }) => theme.colors.neutral.border.weakest};
  border-radius: 8px;
`;

export const FileDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  & > div {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: ${({ theme }) =>
      theme.colors.primary.background.strongest};
    animation: ${DotsAnimation} 1.4s infinite ease-in-out;
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const FileErrorIconBox = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.system.error.text.default};
  }
`;

export const ProgressLoaderBox = styled.div`
  height: 52px;
  position: relative;
`;
