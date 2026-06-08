import styled from "styled-components";

export const BreadcrumbsContainer = styled.nav`
  display: flex;
  align-items: center;
  font-family: inherit;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const BreadcrumbItemLi = styled.li<{ $isCurrent?: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ theme, $isCurrent }) =>
    $isCurrent
      ? theme.colors.neutral.text.default
      : theme.colors.components.link.text.default};
  font-weight: ${({ $isCurrent }) => ($isCurrent ? 500 : 400)};
  transition: color 0.15s ease-in-out;
  cursor: ${({ $isCurrent }) => ($isCurrent ? "default" : "pointer")};
  &:hover {
    color: ${({ theme, $isCurrent }) =>
      $isCurrent
        ? theme.colors.neutral.text.default
        : theme.colors.components.link.text.hover};
  }
  &:active {
    color: ${({ theme }) => theme.colors.components.link.text.active};
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.neutral.text.weaker};
  user-select: none;
`;

export const BreadcrumbEllipsis = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.primary.text.default};
  cursor: default;
  user-select: none;
`;