import { useState, useContext } from 'react';

import Logo from '@/assets/images/logo.svg?react';
import SettingsIcon from '@/assets/images/icon-units.svg?react';
import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import { Menu } from '../shared/menu/Menu.component';
import { DropDown } from '../shared/drop-down/DropDown.component';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';

import { Divider, OptionType, StyledDropDownMenu, StyledHeader } from './header.styles';
import { UnitsContext } from '@/contexts/units/units.context';

const unitsKeysMapper = {
  temperature_unit: 'Temperature',
  wind_speed_unit: 'Wind Speed',
  precipitation_unit: 'Precipitation',
};

const unitsOptionMapper = {
  celsius: 'Celsius(°C)',
  fahrenheit: 'Fahrenheit(°F)',
  kmh: 'km/h',
  mph: 'mph',
  inch: 'Inches (in)',
  mm: 'Mollimeters (mm)',
};

const unitsFilter = {
  temperature_unit: ['celsius', 'fahrenheit'],
  wind_speed_unit: ['kmh', 'mph'],
  precipitation_unit: ['inch', 'mm'],
};

export const Header = () => {
  const { units, setUnits } = useContext(UnitsContext);
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
          <DropDown isOpen={isOpen}>
            <DropDownItem>Switch to Imperial</DropDownItem>
            {Object.entries(unitsFilter).map(([key, values]) => {
              return (
                <>
                  <OptionType>{unitsKeysMapper[key]}</OptionType>
                  {values.map((value) => (
                    <DropDownItem key={value}>{unitsOptionMapper[value]}</DropDownItem>
                  ))}
                  <Divider />
                </>
              );
            })}
          </DropDown>
        </Menu>
      </StyledDropDownMenu>
    </StyledHeader>
  );
};
