import Logo from '@/assets/images/logo.svg?react';
import SettingsIcon from '@/assets/images/icon-units.svg?react';
import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import { Menu } from '../shared/menu/Menu.component';
import { DropDown } from '../shared/drop-down/DropDown.component';

import { StyledDropDownMenu, StyledHeader } from './header.styles';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen(!isOpen);
  return (
    <StyledHeader>
      <div className='header__logo'>
        <Logo />
      </div>
      <StyledDropDownMenu tabIndex={0}>
        <Menu clickHandler={toggleDropDown} variant='dark'>
          <SettingsIcon />
          <p>Units</p>
          <DropDownIcon />
          <DropDown isOpen={isOpen}>123</DropDown>
        </Menu>
      </StyledDropDownMenu>
    </StyledHeader>
  );
};
