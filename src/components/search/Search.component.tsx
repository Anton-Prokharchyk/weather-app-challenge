import { useState } from 'react';

import { DropDown } from '../shared/drop-down/DropDown.component';

import { StyledSearchIcon, SearchButton, SearchContainer, SearchInput, SearchBox } from './search.styles';

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen(!isOpen);
  return (
    <SearchContainer>
      <label>
        <SearchBox onClick={toggleDropDown}>
          <StyledSearchIcon />
          <SearchInput type='text' placeholder='Search for a place...' />
          <DropDown isOpen={isOpen}>123</DropDown>
        </SearchBox>
      </label>
      <SearchButton>search</SearchButton>
    </SearchContainer>
  );
};
