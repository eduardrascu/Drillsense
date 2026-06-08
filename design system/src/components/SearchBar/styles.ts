import styled from 'styled-components';
import { searchBarWidth } from '../../helpers/stylesHelpers';
import Search from './searchIcon';

export const SearchBarContainer = styled.div<{ $width?: string }>`
	display: flex;
	width: ${({ $width }) => searchBarWidth($width)};
	height: 36px;
	align-self: center;
	border: 1px solid ${({ theme }) => theme['neutralBorder']} !important;
	border-radius: 8px;
`;

export const SearchButton = styled.button`
	display: flex;
	align-items: center;
	border-style: none;
	justify-content: center;
	width: 40px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 8px 0 0 8px;
	cursor: pointer;
`;

export const InputField = styled.input`
	width: 100%;
	border-style: none;
	padding: 5px;
	border-radius: 0 8px 8px 0;
	outline: none;
	color: rgba(95, 104, 119, 1);
	background-color: rgba(255, 255, 255, 1);
	font-size: 14px;

	&:focus {
		color: rgba(95, 104, 119, 1);
	}
`;

export const SearchIcon = styled(Search)``;
