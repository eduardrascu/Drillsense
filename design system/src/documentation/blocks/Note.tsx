import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { FlexContainer, InfoContainer, NoteContainer, Title } from './styles';
import NoteIcon from '../../assets/NoteIcon';

type Props = {
  type?: 'primary' | 'secondary';
  icon?: ReactNode;
  title: string;
};

const Note: FC<PropsWithChildren<Props>> = ({
  type = 'primary',
  title,
  icon,
  children,
}) => {
  return (
    <NoteContainer type={type}>
      <InfoContainer $gap={8}>
        {icon ? icon : <NoteIcon />}
        <FlexContainer $gap={8}>
          <Title size={16} $lineheight={24}>
            {title}
          </Title>
          {children}
        </FlexContainer>
      </InfoContainer>
    </NoteContainer>
  );
};

export default Note;
