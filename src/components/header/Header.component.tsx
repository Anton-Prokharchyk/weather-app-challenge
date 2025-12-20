import Logo from '@/assets/images/logo.svg?react';

import { StyledHeader } from './header.styles';

export const Header = () => {
  return (
    <StyledHeader>
      <div className='header__logo'>
        <Logo />
      </div>
      <div className='header__dropdown-menu'>dropdown menu</div>
    </StyledHeader>
  );
};
