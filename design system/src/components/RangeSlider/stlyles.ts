import { styled } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const RangeInput = styled.input`
  opacity: 0%;
  width: 100%;
  height: 100%;
  transform: translateY(-5px);
`;

export const SliderTrack = styled.div<{ $valuePercent: number }>`
  width: 100%;
  height: 12px;
  border-radius: 4px;
  position: relative;
  margin-bottom: 4px;

  background: ${({ theme, $valuePercent }) =>
    `linear-gradient(to right, ${theme['primaryBackgroundStrong']} 0%, ${theme['primaryBackgroundStrong']} ${$valuePercent}%, ${theme['neutralBackground']} ${$valuePercent}%, ${theme['neutralBackground']} 100%)`};
`;

export const SliderThumb = styled.div`
  width: 24px;
  height: 16px;
  background-color: ${({ theme }) => theme['neutralBackgroundBase']};
  border: 1px solid ${({ theme }) => theme['weakBorder']};
  box-shadow: 0px 2px 8px 0px #20262d0a;
  position: absolute;
  top: -3px;
  cursor: pointer;
  border-radius: 2px;
`;

export const Label = styled.span<{ $position: string }>`
  position: absolute;
  top: 24px;
  font-size: 12px;
  color: ${({ theme }) => theme['neutralTextWeak']};
  left: ${({ $position }) => $position};
`;

export const Tick = styled.div<{
  $position: string;
  $isFirst?: boolean;
  $isLast?: boolean;
}>`
  position: absolute;
  height: 4px;
  width: 1px;
  background-color: ${({ theme }) => theme['neutralBorder']};
  left: ${({ $position, $isFirst, $isLast }) =>
    $isFirst ? '3%' : $isLast ? '96%' : $position};
`;

export const Dot = styled.div<{
  $position: string;
  $isFirst?: boolean;
  $isLast?: boolean;
}>`
  position: absolute;
  opacity: 0.99;
  z-index: -1;
  height: 4px;
  width: 4px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme['primaryBackgroundActive']};
  left: ${({ $position, $isFirst, $isLast }) =>
    $isFirst ? '3%' : $isLast ? '96%' : $position};
  top: 40%;
`;
