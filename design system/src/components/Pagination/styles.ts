import { styled } from 'styled-components';
import { PaginationSizes, PaginationType } from './types';
import { getPaginationFontSize } from './components/styles';

export const PaginationContainer = styled.div<{ $type: PaginationType }>`
  display: flex;
  gap: ${({ $type }) => ($type === 'list' ? '4px' : '8px')};
  align-items: center;
`;

export const Paragraph = styled.p<{ $size: PaginationSizes }>`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.text.weak};
  font-size: ${({ theme, $size }) => getPaginationFontSize($size, theme)};
  user-select: none;
`;

export const Separator = styled.span`
  color: ${({ theme }) => theme.colors.neutral.text.weakest};
  margin-right: 4px;
`;
