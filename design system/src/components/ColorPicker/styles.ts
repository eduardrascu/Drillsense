import styled from 'styled-components';
import { AlphaPicker } from 'react-color';

export const StyledSketchPickerWrapper = styled.div<{
  $backgroundColor?: string;
}>`
  overflow-y: unset;
  width: 252px !important;
  height: 209px !important;
  margin: 16px 15px 30px 15px !important;

  .swatches-picker {
    height: unset !important;
    width: unset !important;
  }
  .swatches-picker > div > div:nth-child(2) > div {
    height: unset !important;
    width: unset !important;
  }

  .swatches-picker > div > div {
    inset: 0 !important;
    box-shadow: none !important;
    background: none !important;
  }

  .swatches-picker > div > div > div > div {
    padding: 0 !important;
  }
  .swatches-picker > div > div:nth-child(2) > div > div > div {
    width: unset !important;
    margin-right: 1px !important;
  }

  & .swatches-picker span > div {
    height: 20px !important;
    width: 20px !important;
  }

  & .swatches-picker span > div > div {
    margin-left: 3px !important;
  }

  & .swatches-picker span svg {
    height: 14px !important;
    width: 14px !important;
  }

  .alpha-picker {
    height: 4px !important;
  }

  .alpha-picker > div > div:nth-child(3) > div > div {
    transform: translate(-9px, -7px) !important;
    background-color: ${({ $backgroundColor }) => $backgroundColor} !important;
    outline: 1px solid white !important;
  }
`;

export const CustomAlphaPicker = styled(AlphaPicker)`
  margin-top: 18px;
`;
export const GradientsWrapper = styled.div`
  margin-top: 16px;
`;

export const GradientsTitle = styled.div`
  color: ${({ theme }) => theme['neutralTextWeak']};
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.8px;
`;

export const GradientsItems = styled.div`
  display: flex;
  gap: 8px;
  flex-flow: wrap;
  margin-top: 8px;
`;
export const GradientsItem = styled.div<{
  $selectedItem?: boolean | undefined;
}>`
  cursor: pointer;

  ${({ $selectedItem }) =>
    $selectedItem &&
    'outline: 2px solid black; border-radius: 50%; height: 27px'}
`;

export const HexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HexTitle = styled.div`
  color: ${({ theme }) => theme['neutralTextWeak']};
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 0.8px;
`;
export const HexInput = styled.input`
  height: 32px;
  width: 251px;
  outline: none;
  padding-left: 10px;
  border: 1px solid ${({ theme }) => theme['neutralBorder']};
  border-radius: 8px;
  color: ${({ theme }) => theme['neutralText']};
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
`;
