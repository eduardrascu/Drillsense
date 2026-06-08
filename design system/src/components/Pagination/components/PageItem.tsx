import React, { ReactNode, useRef, useState } from 'react';
import {
  Container,
  List,
  ListItem,
  PageItemContainer,
  PageList,
} from './styles';
import { PaginationSizes } from '../types';
import { useClickOutside } from '../../../hooks/useClickOutside';

type PageItemProps = {
  size: PaginationSizes;
  pageNumber?: number | string;
  pages?: number[];
  icon?: ReactNode;
  active: boolean;
  onClick: (pageNumber: number) => void;
  isDot?: boolean;
};

const PageItem: React.FC<PageItemProps> = ({
  pageNumber = '',
  active,
  size,
  pages,
  icon,
  isDot,
  onClick = () => {},
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [tooltip, setTooltip] = useState(false);

  const isClickable = typeof pageNumber === 'number';

  const handleOnClick = () => {
    if (isDot) {
      setTooltip(prev => !prev);
      return;
    }

    return isClickable && onClick(pageNumber);
  };

  useClickOutside(ref, () => setTooltip(false));

  return (
    <Container>
      <PageItemContainer
        $size={size}
        $active={active || tooltip}
        onClick={handleOnClick}
      >
        {icon ? icon : isDot ? '...' : pageNumber}
      </PageItemContainer>

      {tooltip && isDot && pages && (
        <PageList ref={ref}>
          <List>
            {pages.map(item => (
              <ListItem key={item} onClick={() => onClick(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </PageList>
      )}
    </Container>
  );
};

export default PageItem;
