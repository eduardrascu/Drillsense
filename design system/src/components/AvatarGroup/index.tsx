import React from 'react';

import { AdditionalCount, AvatarStack, StyledAvatar } from './styles';
import { AvatarGroupProps } from './types';

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  size,
  onMouseOver,
  onMouseOut,
}) => {
  const additionalCount = 0;

  return (
    <AvatarStack>
      {avatars
        .slice(0, 3) // Using a default value of 3 instead of accessing the non-existent property
        .map((avatar, index) => (
          <StyledAvatar key={index} {...avatar} $offset={index} $size={size} />
        ))}
      {additionalCount && additionalCount > 0 && (
        <AdditionalCount
          $size={size}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          +{additionalCount}
        </AdditionalCount>
      )}
    </AvatarStack>
  );
};
