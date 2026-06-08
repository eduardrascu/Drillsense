import styled, { css } from 'styled-components';
import {
  ContainerSizeEnum,
  LabelProps,
  RadioButtonFontSizeEnum,
  RadioButtonProps,
  RadioButtonSizeEnum,
  RadioCheckmarkSizeEnum,
} from './types';

export const Checkmark = styled.span`
  position: relative;
  display: flex;
  border-radius: 50%;
  margin: 0;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  margin: 0;
`;

export const Label = styled.label<LabelProps>`
  font-size: ${({ theme, $size }) =>
    theme.fontSizes[RadioButtonFontSizeEnum[$size || 'sm']]};
  margin-left: 8px;
  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

export const Container = styled.label<RadioButtonProps>`
  display: flex;
  position: relative;
  align-items: center;
  user-select: none;
  max-height: ${({ $size }) => ContainerSizeEnum[$size || 'sm'] || '16px'};
  pointer-events: ${({ $disabled, $isInvalid }) =>
    $disabled || $isInvalid ? 'none' : 'auto'};

  ${Checkmark} {
    width: ${({ $size }) => RadioButtonSizeEnum[$size || 'sm'] || '16px'};
    height: ${({ $size }) => RadioButtonSizeEnum[$size || 'sm'] || '16px'};
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
    border: 1px solid ${({ theme }) => theme.colors.components.input.icon.weak};
    &:after {
      transition: 0.1s;
      content: '';
      position: absolute;
      display: none;
      aspect-ratio: 1;
      border-radius: 50%;
    }
  }
  ${Label} {
    color: ${({ theme }) => theme.colors.neutral.text.weak};
  }
  ${Input} {
    width: calc(
      ${({ $size }) => RadioButtonSizeEnum[$size || 'sm'] || '16px'} + 1px
    );
    height: calc(
      ${({ $size }) => RadioButtonSizeEnum[$size || 'sm'] || '16px'} + 1px
    );
  }

  ${Input}:hover + ${Checkmark} {
    background-color: ${({ theme }) => theme.colors.neutral.background.hover};
    border: 1px solid ${({ theme }) => theme.colors.neutral.icon.default};
  }
  ${Input}:hover ~ ${Label} {
    color: ${({ theme }) => theme.colors.neutral.text.default};
  }

  ${Input}:active + ${Checkmark} {
    background-color: ${({ theme }) => theme.colors.neutral.background.active};
  }

  ${Input}:checked ~ ${Label} {
    color: ${({ theme }) => theme.colors.neutral.text.default};
  }
  ${Input}:checked + ${Checkmark} {
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
    border: 1px solid
      ${({ theme }) => theme.colors.components.input.icon.active};
    &:after {
      display: block;
      top: ${({ $size }) =>
        `calc(50% - ${RadioCheckmarkSizeEnum[$size || 'sm'] || '6px'} / 2)`};
      left: ${({ $size }) =>
        `calc(50% - ${RadioCheckmarkSizeEnum[$size || 'sm'] || '6px'} / 2)`};
      width: ${({ $size }) => RadioCheckmarkSizeEnum[$size || 'sm'] || '6px'};
      background: ${({ theme }) => theme.colors.components.input.icon.active};
    }
  }
  ${Input}:checked:hover + ${Checkmark} {
    border: 1px solid ${({ theme }) => theme.colors.components.input.icon.hover};
    &:after {
      background: ${({ theme }) => theme.colors.components.input.icon.hover};
    }
  }
  ${Input}:checked:active + ${Checkmark} {
    background-color: ${({ theme }) => theme.colors.neutral.background.base};
  }

  ${Input}:not(:checked):hover ~ ${Checkmark}::after {
    aspect-ratio: 1;
    display: block;
    background: ${({ theme }) => theme.colors.neutral.background.hover};
  }
  ${Input}:not(:checked):active ~ ${Checkmark}::after {
    aspect-ratio: 1;
    background: ${({ theme }) => theme.colors.neutral.background.active};
    display: block;
  }

  ${Input}:disabled ~ ${Checkmark} {
    border: 1px solid
      ${({ theme }) => theme.colors.components.input.icon.disabled};
  }
  ${Input}:disabled ~ ${Label} {
    color: ${({ theme }) => theme.colors.components.input.text.disabled};
  }

  ${Input}[aria-invalid=true] + ${Checkmark} {
    border: 1px solid ${({ theme }) => theme.colors.system.error.text.default};
    &:after {
      background-color: ${({ theme }) =>
        theme.colors.system.error.text.default};
    }
  }

  ${Input}[aria-invalid=true] ~ ${Label} {
    color: ${({ theme }) => theme.colors.system.error.text.default};
  }
`;
