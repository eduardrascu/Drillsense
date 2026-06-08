import React, { FC, ReactNode } from 'react';

import { StyledMapButton } from './styles';

type MapElementButtonProps = {
  icon: ReactNode;
  rounded?: boolean;
  disabled?: boolean;
  position: 'left' | 'right' | 'bottom' | 'top';
  onClick?: () => void;
};

const MapElementButton: FC<MapElementButtonProps> = ({
  icon,
  rounded,
  disabled,
  position,
  onClick,
}) => {
  return (
    <StyledMapButton
      $rounded={rounded}
      $disabled={disabled}
      $position={position}
      onClick={!disabled ? onClick : undefined}
    >
      {icon}
    </StyledMapButton>
  );
};

export default MapElementButton;
