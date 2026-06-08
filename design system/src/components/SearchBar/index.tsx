import { useState } from 'react';
import {
  InputField,
  SearchBarContainer,
  SearchButton,
  SearchIcon,
} from './styles';

interface SearchInterface {
  width?: 'small' | 'medium' | 'large' | 'xs';
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Search = ({ width, onChange, placeholder }: SearchInterface) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <SearchBarContainer $width={width}>
      <SearchButton>
        <SearchIcon />
      </SearchButton>
      <InputField
        autoComplete="off"
        type="search"
        name="search"
        value={searchValue}
        placeholder={placeholder ? placeholder : 'Search...'}
        onChange={handleChange}
      ></InputField>
    </SearchBarContainer>
  );
};
