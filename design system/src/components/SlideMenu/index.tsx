import { FC, Fragment, useEffect, useRef, useState } from 'react';
import {
  SlideMenuContainer,
  SlideMenuContent,
  SlideMenuDivider,
  SlideMenuItem,
  SlideMenuItemIcon,
} from './styles';
import { Icon } from '../Icon';
import type { SlideMenuProps } from './types';

export const SlideMenu: FC<SlideMenuProps> = ({
  items,
  isOpen,
  onClose,
  anchorRef,
  position = 'bottom',
  defaultPosition,
  children,
  style,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState<{
    top?: number;
    left?: number;
  }>();

  useEffect(() => {
    if (isOpen && anchorRef.current && menuRef.current) {
      const anchorRect = anchorRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = 0;
      let left = 0;

      switch (position) {
        case 'bottom':
          top = anchorRect.bottom + 5;
          left = anchorRect.left + anchorRect.width / 2 - menuRect.width / 2;

          if (left < 0) {
            left = 0;
          } else if (left + menuRect.width > viewportWidth) {
            left = viewportWidth - menuRect.width;
          }

          if (
            top + menuRect.height > viewportHeight &&
            anchorRect.top > menuRect.height
          ) {
            top = anchorRect.top - menuRect.height;
          }
          break;

        case 'top':
          top = anchorRect.top - menuRect.height - 5;
          left = anchorRect.left + anchorRect.width / 2 - menuRect.width / 2;

          if (left < 0) {
            left = 0;
          } else if (left + menuRect.width > viewportWidth) {
            left = viewportWidth - menuRect.width;
          }

          if (top < 0) {
            top = anchorRect.bottom;
          }
          break;

        case 'left':
          top = anchorRect.top + anchorRect.height / 2 - menuRect.height / 2;
          left = anchorRect.left - menuRect.width - 5;

          if (left < 0) {
            left = anchorRect.right;
          }

          if (top < 0) {
            top = 0;
          } else if (top + menuRect.height > viewportHeight) {
            top = viewportHeight - menuRect.height;
          }
          break;

        case 'right':
          top = anchorRect.top + anchorRect.height / 2 - menuRect.height / 2;
          left = anchorRect.right + 5;

          if (left + menuRect.width > viewportWidth) {
            left = anchorRect.left - menuRect.width;
          }

          if (top < 0) {
            top = 0;
          } else if (top + menuRect.height > viewportHeight) {
            top = viewportHeight - menuRect.height;
          }
          break;
      }

      setMenuPosition({ top, left: left - 20 });
    }
  }, [isOpen, anchorRef, position]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  return (
    <SlideMenuContainer
      $isOpen={isOpen}
      ref={menuRef}
      style={{
        top: `${(menuPosition?.top ?? 0) + (defaultPosition?.top ?? 0)}px`,
        left: `${(menuPosition?.left ?? 0) + (defaultPosition?.left ?? 0)}px`,
        ...style,
      }}
    >
      {items?.length ? (
        <SlideMenuContent>
          {items.map((item, index) => (
            <Fragment key={index}>
              <SlideMenuItem
                onClick={event => {
                  event.stopPropagation();
                  item.onClick();
                  onClose();
                }}
                style={item.style}
              >
                {item.icon && (
                  <SlideMenuItemIcon>
                    <Icon iconName={item.icon} />
                  </SlideMenuItemIcon>
                )}
                {item.label}
              </SlideMenuItem>
              {item.divider && <SlideMenuDivider />}
            </Fragment>
          ))}
          {children || null}
        </SlideMenuContent>
      ) : children ? (
        children
      ) : null}
    </SlideMenuContainer>
  );
};
