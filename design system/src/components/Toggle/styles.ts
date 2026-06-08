import styled, { css } from 'styled-components';
import { LabelProps, ToggleFontSizeEnum, ToggleProps, ToggleWidthSizeEnum, ToggleHeightSizeEnum } from './types';

export const ToggleInput = styled.input`
  margin: 0;
	opacity: 0;
	transition: all 0.3s;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 1px;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.neutral.background.active};
  border-radius: 32px;
	transition: all 0.3s;

  &:before {
    position: absolute;
    content: "";
    left: 2px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.colors.components.button.icon.inverted};
    border-radius: 50%;
		transition: all 0.3s;
}
`;

export const Label = styled.label<LabelProps>`
	display: flex;
	align-items: center;
  font-size: ${({ theme, $size }) =>
		theme.fontSizes[ToggleFontSizeEnum[$size || 'sm']]};
	transition: all 0.3s;
`;

export const ToggleSwitchWrapper = styled.label<ToggleProps>`
  position: relative;
  display: flex;
	align-items: center;
	width: max-content;
	gap: 10px;
	transition: all 0.3s;

	${({ $disabled }) =>
		$disabled &&
		css`
      pointer-events: none;

    `}
	${Label} {
		color: ${({ theme, $disabled }) => $disabled ? theme.colors.components.input.text.disabled : theme.colors.neutral.text.weak};
	}
	${ToggleInput} {
		width: ${({ $size }) => ToggleWidthSizeEnum[$size || 'sm']};
  	height: ${({ $size }) => ToggleHeightSizeEnum[$size || 'sm']};

		&:disabled + ${Slider} {
			background-color: ${({ theme }) => theme.colors.neutral.background.transparent};
			&:before {
				background-color: ${({ theme }) => theme.colors.components.input.icon.disabled};
			}
		}
		&:checked:not(:disabled) + ${Slider} {
			background-color: ${({ theme }) => theme.colors.primary.icon.weak};
		}
		&:checked + ${Slider} {
			&:before{
				transform: ${({ $size }) => `translateX(calc(${ToggleWidthSizeEnum[$size || 'sm']} - ${ToggleHeightSizeEnum[$size || 'sm']}))`};
			}
		}
	}
	${Slider} {
		${({ $labelPosition }) => $labelPosition === 'right' ? css`
			left: 0;
		` : css`
			right: 0;
		`}
		width: ${({ $size }) => ToggleWidthSizeEnum[$size || 'sm']};
  	height: ${({ $size }) => ToggleHeightSizeEnum[$size || 'sm']};
		&:before {
			height: ${({ $size }) => `calc(${ToggleHeightSizeEnum[$size || 'sm']} - 4px)`};
			width: ${({ $size }) => `calc(${ToggleHeightSizeEnum[$size || 'sm']} - 4px)`};
		}
	}

	&:hover{
		${Slider} {
			background-color: ${({ theme }) => theme.colors.neutral.background.hover};
		}
		${ToggleInput}:checked + ${Slider} {
    	background-color: ${({ theme }) => theme.colors.primary.icon.weaker};
  	}
		${Label} {
			color: ${({ theme }) => theme.colors.neutral.text.default};
		}
	}

	&:active{
		${Slider} {
			background-color: ${({ theme }) => theme.colors.neutral.background.active};
		}
		${ToggleInput}:checked + ${Slider} {
    	background-color: ${({ theme }) => theme.colors.primary.icon.weaker};
  	}
		${Label} {
			color: ${({ theme }) => theme.colors.neutral.text.default};
		}
	}
`;
