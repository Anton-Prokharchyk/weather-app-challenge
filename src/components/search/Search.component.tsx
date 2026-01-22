import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, type SyntheticEvent } from 'react';

import { fetchSearchCountryName } from '@/api/fetchSearchCountryName.api';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';
import { DropDown } from '../shared/drop-down/DropDown.component';

import { SearchBox, SearchButton, SearchContainer, SearchInput, StyledSearchIcon } from './search.styles';

export const Search = () => {
  const [searchInputText, setsearchInputText] = useState('');
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: queryKeysFabric.searchCountryName(searchInputText),
    queryFn: () => fetchSearchCountryName(searchInputText.split(',')[0]),
  });

  const setCurerntLocation = () => {
    queryClient.setQueryData(queryKeysFabric.currentLocation, data[0]);
  };

  const handleChooseCountryFromDropDown = (e: SyntheticEvent) => {
    setsearchInputText(e.currentTarget.textContent);
    setIsDropDownOpen(false);
  };

  if (error) return <div>error.message</div>;

  return (
    <SearchContainer>
      <SearchBox
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setIsDropDownOpen(false);
          }
        }}
      >
        <StyledSearchIcon />
        <SearchInput
          onKeyDown={(e) => {
            if (e.key === 'Enter') console.log(e.currentTarget.value);
          }}
          onChange={(e) => {
            setsearchInputText(e.currentTarget.value);
          }}
          // ref={inputRef}
          onFocus={() => {
            setIsDropDownOpen(true);
          }}
          value={searchInputText}
          type='text'
          placeholder='Search for a place...'
        />
        <DropDown width={'100%'} isOpen={isDropDownOpen}>
          {isPending ? (
            <div>Loading...</div>
          ) : (
            !!data.length &&
            data.map(({ name, country, id }) => (
              <DropDownItem
                clickHandler={handleChooseCountryFromDropDown}
                key={id}
              >{`${name}, ${country}`}</DropDownItem>
            ))
          )}
        </DropDown>
      </SearchBox>
      <SearchButton>search</SearchButton>
    </SearchContainer>
  );
};
