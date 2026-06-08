import styled from 'styled-components';
import type { TSize } from '@src/types/common.types';

export const StyledDatePicker = styled.div<{ $size: TSize }>`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__year-wrapper {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }

  .react-datepicker__year-text {
    display: flex;
    padding: 8px;
    text-align: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radii['sm']};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.background.hover};
    }

    &--selected {
      background-color: ${({ theme }) =>
        theme.colors.neutral.background.strongest} !important;
      color: ${({ theme }) => theme.colors.neutral.text.static} !important;
    }
  }

  .react-datepicker {
    font-family: inherit;
    border: 1px solid ${({ theme }) => theme.colors.neutral.border.weak};
    border-radius: ${({ theme }) => theme.radii['lg']};
    box-shadow: ${({ theme }) => theme.shadows['sm']};
    padding: ${({ theme }) => theme.radii['md']};
    background: ${({ theme }) => theme.colors.neutral.background.base};
    width: 280px;

    &__month-container {
      float: none;
    }

    &__header {
      background: none;
      border: none;
      padding: 0;
    }

    &__day-names {
      margin-top: ${({ theme }) => theme.radii['md']};
      margin-bottom: ${({ theme }) => theme.radii['sm']};
      display: flex;
      justify-content: space-between;
      padding: 0 ${({ theme }) => theme.radii['sm']};
    }

    &__day-name {
      margin: 0;
      width: 32px;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.neutral.text.weak};

      &:first-child,
      &:last-child {
        color: ${({ theme }) => theme.colors.system.error.text.default};
      }
    }

    &__week {
      display: flex;
      justify-content: space-between;
      margin: ${({ theme }) => theme.radii['xs']} 0;
    }

    &__month {
      margin: 0;
      padding: 0 ${({ theme }) => theme.radii['sm']};
    }

    &-popper {
      z-index: 2;

      .react-datepicker__triangle {
        display: none;
      }
    }
  }

  .react-datepicker__day {
    margin: 0;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: ${({ theme }) => theme.radii['sm']};
    color: ${({ theme }) => theme.colors.neutral.text.default};
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral.background.hover};
    }

    &--selected {
      background-color: ${({ theme }) =>
        theme.colors.neutral.background.strongest} !important;
      color: ${({ theme }) => theme.colors.neutral.text.static} !important;
    }

    &--keyboard-selected {
      background-color: ${({ theme }) => theme.colors.neutral.background.hover};
    }

    &--today {
      position: relative;
      font-weight: ${({ theme }) => theme.fontWeights['semibold']};
      color: ${({ theme }) => theme.colors.primary.text.default};
    }

    &--weekend {
      color: ${({ theme }) => theme.colors.system.error.text.default};
    }

    &--outside-month {
      visibility: hidden;
    }
  }
`;

export const CalendarContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.radii['sm']};
`;

export const MonthHeader = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights['medium']};
  color: ${({ theme }) => theme.colors.neutral.text.default};
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
`;

export const NavigationButton = styled.button<{ $size: TSize }>`
  border: none;
  background: none;
  padding: ${({ theme }) => theme.radii['xs']};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral.icon.default};
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.neutral.icon.weakest};
  }

  &:hover:not(:disabled) {
    svg path {
      fill: ${({ theme }) => theme.colors.components.input.icon.hover};
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Day = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
`;

export const Year = styled.span`
  display: flex;
  padding: ${({ theme }) => theme.spacing['xs']};
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const DatepickerCalendarIcon = styled.div<{
  $size: TSize;
  $hasInsideLabel: boolean;
}>`
  position: absolute;
  right: ${({ theme, $size }) =>
    theme.components.inputs[$size].padding.split(' ')[1]};
  top: ${({ $hasInsideLabel }) => ($hasInsideLabel ? '50%' : '54%')};
  transform: ${({ $hasInsideLabel }) => $hasInsideLabel && 'translateY(-50%)'};
  color: ${({ theme }) => theme.colors.neutral.icon.weak};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  svg {
    width: 20px;
    height: 20px;
  }
`;
