import { type FC, type ReactNode, useState } from 'react';
import {
  BadgeContainer,
  CardBody,
  CardContainer,
  CardHeader,
  CardSubtitle,
  CardTitle,
  HeaderActions,
  HorizontalCardContent,
  HorizontalLayout,
  HorizontalTitleRow,
  ImageWrapper,
} from './styles';

export interface CardProps {
  headerImage?: string;
  title: string;
  subtitle?: string;
  headerActions?: ReactNode;
  badge?: ReactNode;
  alwaysActive?: boolean;
  className?: string;
  isVertical?: boolean;
  onClick?: () => void;
}

export const Card: FC<CardProps> = ({
  headerImage,
  title,
  subtitle,
  headerActions,
  badge,
  alwaysActive = false,
  className,
  isVertical = true,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isClickable = !!onClick;

  return (
    <CardContainer
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      $isHovered={isHovered}
      $alwaysActive={alwaysActive}
      $isClickable={isClickable}
      onClick={onClick}
    >
      {isVertical ? (
        <>
          <CardHeader>
            <ImageWrapper>
              {badge && <BadgeContainer>{badge}</BadgeContainer>}
              <img src={headerImage || '/placeholder.svg'} alt="" />
            </ImageWrapper>
            {headerActions && (isHovered || alwaysActive) && (
              <HeaderActions>{headerActions}</HeaderActions>
            )}
          </CardHeader>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          </CardBody>
        </>
      ) : (
        <HorizontalLayout>
          <ImageWrapper>
            {badge && <BadgeContainer>{badge}</BadgeContainer>}
            <img src={headerImage || '/placeholder.svg'} alt="" />
          </ImageWrapper>
          <HorizontalCardContent>
            <HorizontalTitleRow>
              <CardTitle>{title}</CardTitle>
              {headerActions && (isHovered || alwaysActive) && (
                <HeaderActions>{headerActions}</HeaderActions>
              )}
            </HorizontalTitleRow>
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          </HorizontalCardContent>
        </HorizontalLayout>
      )}
    </CardContainer>
  );
};
