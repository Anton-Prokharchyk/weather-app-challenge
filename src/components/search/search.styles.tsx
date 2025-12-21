import styled from 'styled-components';

import SearchIcon from '@/assets/images/icon-search.svg?react';

export const SearchContainer = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  height: 5%;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100%; */
  background-color: var(--neutral-800);
  border-radius: var(--b-radius);
  padding: 8px 16px;
  cursor: pointer;
  &:focus-within {
    outline: 2px solid var(--neutral-0);
    outline-offset: 4px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  /* height: 100%; */
  background-color: var(--neutral-800);
  border-radius: var(--b-radius);
  outline: none;
  margin-left: 8px;
  cursor: pointer;
  &:focus {
    cursor: text;
  }
`;

export const SearchButton = styled.button`
  font-weight: 400;
  background-color: var(--blue-500);
  padding: 8px 16px;
  border-radius: var(--b-radius);
  text-transform: capitalize;
  &:hover {
    background-color: var(--blue-700);
  }
  &:focus {
    outline: 2px solid var(--blue-500);
    outline-offset: 4px;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  /* height: 100%; */
  color: var(--neutral-300);
`;
