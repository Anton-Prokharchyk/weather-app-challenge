import { StyledSearchIcon, SearchButton, SearchContainer, SearchInput, SearchBox } from './search.styles';

export const Search = () => {
  return (
    <SearchContainer>
      <label>
        <SearchBox>
          <StyledSearchIcon />
          <SearchInput type='text' placeholder='Search for a place...' />
        </SearchBox>
      </label>
      <SearchButton>search</SearchButton>
    </SearchContainer>
  );
};
