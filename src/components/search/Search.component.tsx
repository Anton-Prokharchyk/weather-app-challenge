import { useState } from 'react';

import { DropDown } from '../shared/drop-down/DropDown.component';

import { StyledSearchIcon, SearchButton, SearchContainer, SearchInput, SearchBox } from './search.styles';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen(!isOpen);
  return (
    <SearchContainer>
      <SearchBox onClick={toggleDropDown}>
        <StyledSearchIcon />
        <SearchInput tabIndex={0} type='text' placeholder='Search for a place...' />
        <DropDown width={'100%'} isOpen={isOpen}>
          <DropDownItem>item1</DropDownItem>
          <DropDownItem>item2</DropDownItem>
          <DropDownItem>item3</DropDownItem>
        </DropDown>
      </SearchBox>
      <SearchButton>search</SearchButton>
    </SearchContainer>
  );
};
