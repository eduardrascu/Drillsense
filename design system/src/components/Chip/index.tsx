import {
  ChipContainer,
  ChipIconWrapper,
  ChipLabelWrapper,
  ChipTextContainer,
  ChipTextWrapper,
} from './styles';

import { ChipProps } from './types';

export const Chip: React.FC<ChipProps> = ({
  avatar,
  disabled = false,
  icon,
  iconLeft,
  onClick,
  onMouseEnter,
  onMouseLeave,
  selected,
  size = 'medium',
  label,
  variant = 'primary',
  value,
}: ChipProps) => {
  const handleOnClick = () =>
    disabled
      ? () => {
          return;
        }
      : onClick();

  return (
    <ChipContainer
      $variant={disabled ? 'disabled' : variant}
      $size={size}
      $selected={selected}
      onClick={handleOnClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {variant !== 'empty' && (
        <>
          {iconLeft && (
            <ChipIconWrapper $size={size} $selected={selected}>
              {iconLeft}
            </ChipIconWrapper>
          )}
          {size !== 'small' && avatar}
          <ChipTextContainer>
            {label && <ChipLabelWrapper>{label}</ChipLabelWrapper>}
            {value && <ChipTextWrapper>{value}</ChipTextWrapper>}
          </ChipTextContainer>
          {icon && (
            <ChipIconWrapper $size={size} $selected={selected}>
              {icon}
            </ChipIconWrapper>
          )}
        </>
      )}
    </ChipContainer>
  );
};
