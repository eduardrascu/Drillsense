import styled from 'styled-components';

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 4px 0;
`;

export const DividerLine = styled.hr`
  flex-grow: 1;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral.border.weakest};
  margin: 0;
`;

export const DividerDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral.border.weakest};
  margin: 0 8px;
  flex-shrink: 0;
`;
