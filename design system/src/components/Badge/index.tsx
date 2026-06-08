import { FC } from 'react';
import { BadgeContainer, BadgeLabel } from './styles';
import { BadgeProps } from './types';

export const Badge: FC<BadgeProps> = ({
  label,
  icon,
  selected = false,
  onClick = () => {},
  size = 'sm',
  type = 'interactive',
  background = 'none',
  disabled = false,
}) => {
  const handleOnClick = () => {
    if (type === 'interactive') {
      onClick();
    }
  };

  return (
    <>
      <BadgeContainer
        $size={size}
        $selected={selected}
        $type={type}
        $background={background}
        $disabled={disabled}
        onClick={handleOnClick}
      >
        {type !== 'interactive' && background === 'none' && (
          <div className="dot"></div>
        )}
        {icon &&
          ((type !== 'interactive' && background !== 'none') ||
            (size !== 'xs' && type === 'interactive')) && (
            <span className="badge-icon">{icon}</span>
          )}
        <BadgeLabel>{label}</BadgeLabel>
      </BadgeContainer>
    </>
  );
};
