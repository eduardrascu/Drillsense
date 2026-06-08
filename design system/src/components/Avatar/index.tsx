import { FC, useState } from 'react';

import { AvatarWrapper, StyledImage, StyledInitials } from './styles';
import { getInitials } from '../../utils/userInitials';

import { AvatarProps } from './types';

export const Avatar: FC<AvatarProps> = ({
  size = 'md',
  disabled,
  tooltip,
  picture,
  pictureAlt,
  userName,
  selected,
  className,
  onClick,
}) => {
  const [showNameTooltip, setShowNameToolTip] = useState<boolean>(false);
  const [isBroken, setIsBroken] = useState(false);

  const handleShowOnMouseOver = () => {
    setShowNameToolTip(() => true);
  };
  const handleShowOnMouseOut = () => {
    setShowNameToolTip(() => false);
  };
  const handleImageError = () => {
    setIsBroken(true);
  };

  return (
    <AvatarWrapper
      className={className}
      onClick={onClick}
      onMouseOver={handleShowOnMouseOver}
      onMouseOut={handleShowOnMouseOut}
      $size={size}
      $selected={selected}
      $disabled={disabled}
    >
      {picture && !isBroken ? (
        <StyledImage
          $size={size}
          src={picture}
          alt={pictureAlt}
          onError={handleImageError}
        />
      ) : (
        <StyledInitials $size={size}>{getInitials(userName)}</StyledInitials>
      )}

      {tooltip && showNameTooltip}
    </AvatarWrapper>
  );
};
