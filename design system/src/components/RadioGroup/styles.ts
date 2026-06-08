import styled from 'styled-components';
import { sizes } from '../../themes';
import type { TSize } from '@src/types/common.types';

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.radii['xs']};
`;

export const RadioGroupHeading = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights['semibold']};
  line-height: ${({ theme }) => theme.lineHeights['3xl']};
  color: ${({ theme }) => theme.colors.neutral.text.default};
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.radii['xs']};
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.radii['xs']};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  padding: ${({ theme }) => `${theme.spacing['2xs']} 0`};
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioButton = styled.div<{
  $size: TSize;
  $hasError?: boolean;
  $isFocused?: boolean;
}>`
  width: calc(${({ $size }) => sizes[$size]} - 20px);
  height: calc(${({ $size }) => sizes[$size]} - 20px);
  background-color: ${({ theme }) => theme.colors.neutral.background.base};
  border: 2px solid
    ${({ $hasError, $isFocused, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : $isFocused
        ? theme.colors.primary.border.active
        : theme.colors.neutral.border.default};
  border-radius: ${({ theme }) => theme.radii['rounded']};
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${({ $hasError, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : theme.colors.components.button.border.active};
  }

  &:before {
    content: '';
    width: calc(${({ $size }) => sizes[$size]} - 28px);
    height: calc(${({ $size }) => sizes[$size]} - 28px);
    background-color: ${({ theme }) =>
      theme.colors.components.button.icon.active};
    border-radius: ${({ theme }) => theme.radii['rounded']};
    opacity: 0;
    transition: all 0.3s ease;
  }

  ${RadioInput}:checked + & {
    border-color: ${({ theme }) =>
      theme.colors.components.button.border.active};

    &:before {
      opacity: 1;
    }
  }

  ${RadioInput}:focus + & {
    border-color: ${({ $hasError, theme }) =>
      $hasError
        ? theme.colors.system.error.border.default
        : theme.colors.primary.border.active};
    box-shadow: ${({ theme }) => theme.shadows['focus']};
  }

  ${RadioInput}:disabled + & {
    background-color: ${({ theme }) => theme.colors.neutral.background.hover};
    border-color: ${({ theme }) => theme.colors.neutral.border.weakest};
    cursor: not-allowed;

    &:before {
      background-color: ${({ theme }) => theme.colors.neutral.text.weaker};
    }
  }
`;
