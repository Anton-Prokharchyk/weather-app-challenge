import styled from 'styled-components';

import SearchIcon from '@/assets/images/icon-search.svg?react';

export const SearchContainer = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  height: 6%;

  ${({ theme }) =>
    theme.media.mobile(`
      align-items: stretch;
      flex-direction: column;
      height: 120px;
  `)}
`;
export const SearchInput = styled.input`
  width: 100%;
  background-color: var(--neutral-800);
  border-radius: var(--b-radius);
  outline: none;
  margin-left: 8px;
  cursor: pointer;
  &::placeholder {
    color: var(--neutral-300);
  }
`;

export const SearchBox = styled.label`
  position: relative;
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-800);
  border-radius: var(--b-radius);
  padding: 8px 16px;
  cursor: pointer;
  &:has(${SearchInput}:focus-visible) {
    outline: 2px solid var(--neutral-0);
    outline-offset: 4px;
  }
`;

export const SearchButton = styled.button`
  font-weight: 400;
  height: 100%;
  background-color: var(--blue-500);
  padding: 8px 16px;
  border-radius: var(--b-radius);
  text-transform: capitalize;
  &:hover {
    background-color: var(--blue-700);
  }
  &:focus-visible {
    outline: 2px solid var(--blue-500);
    outline-offset: 4px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: var(--neutral-300);
`;
