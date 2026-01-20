import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { fetchSearchCountryName } from '@/api/fetchSearchCountryName.api';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';
import { DropDown } from '../shared/drop-down/DropDown.component';

import { SearchBox, SearchButton, SearchContainer, SearchInput, StyledSearchIcon } from './search.styles';

export const Search = () => {
  const [searchInputText, setsearchInputText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: queryKeysFabric.searchCountryName(searchInputText),
    queryFn: () => fetchSearchCountryName(searchInputText.split(',')[0]),
  });

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleChooseCountryFromDropDown = (e: React.MouseEvent) => {
    setsearchInputText(e.currentTarget.textContent);
    setIsDropDownOpen(false);
    e.currentTarget.focus();
    console.log('a', e.currentTarget);
    // inputRef.current?.focus();
  };

  const handle = (isOpen?: boolean) => {
    console.log('handle', isDropDownOpen, isOpen, isPending, data.length);
    if (isOpen) {
      if (isPending || data.length) {
        setIsDropDownOpen(true);
      } else {
        setIsDropDownOpen(false);
      }
    } else if (isOpen === undefined && isDropDownOpen) {
      if (isPending || data.length) {
        setIsDropDownOpen(true);
      } else {
        setIsDropDownOpen(false);
      }
    } else {
      setIsDropDownOpen(false);
    }
  };

  useEffect(() => {
    // if (!searchInputText) return;
    // setIsDropDownOpen(isPending || !!data.length);
    // handle();
  }, [data, isPending, searchInputText]);

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
          ref={inputRef}
          onFocus={() => {
            setIsDropDownOpen(true);
          }}
          value={searchInputText}
          // tabIndex={0}
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
                reference={inputRef}
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
