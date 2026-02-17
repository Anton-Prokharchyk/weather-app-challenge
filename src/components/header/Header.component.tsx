import { Fragment, useContext, useState } from 'react';

import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import SettingsIcon from '@/assets/images/icon-units.svg?react';
import Logo from '@/assets/images/logo.svg?react';
import { UnitsContext } from '@/contexts/units/units.context';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';
import { DropDown } from '../shared/drop-down/DropDown.component';
import { Menu } from '../shared/menu/Menu.component';

import { Divider, OptionType, StyledDropDownMenu, StyledHeader } from './header.styles';

const unitsKeysMapper = {
  temperature_unit: 'Temperature',
  wind_speed_unit: 'Wind Speed',
  precipitation_unit: 'Precipitation',
};
const unitsFilter = {
  temperature_unit: ['celsius', 'fahrenheit'],
  wind_speed_unit: ['kmh', 'mph'],
  precipitation_unit: ['inch', 'mm'],
};

const unitsOptionMapper = {
  celsius: 'Celsius(°C)',
  fahrenheit: 'Fahrenheit(°F)',
  kmh: 'km/h',
  mph: 'mph',
  inch: 'Inches (in)',
  mm: 'Mollimeters (mm)',
};

export const Header = () => {
  const { selectedUnits, setSelectedUnits, handleSetImnperialUnits } = useContext(UnitsContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelectUnit = (unitTypeToChange: string, valueToChange: string) => {
    setSelectedUnits({ ...selectedUnits, [unitTypeToChange]: valueToChange });
  };
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
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
          <DropDown width='200px' isOpen={isOpen}>
            <DropDownItem tabIndex={0} clickHandler={handleSetImnperialUnits}>
              Switch to Imperial
            </DropDownItem>
            {Object.entries(unitsFilter).map(([key, values]) => {
              return (
                <Fragment key={key}>
                  <OptionType>{unitsKeysMapper[key]}</OptionType>
                  {values.map((value) => {
                    if (selectedUnits[key] === value)
                      return (
                        <DropDownItem clickHandler={() => handleSelectUnit(key, value)} selected key={value}>
                          {unitsOptionMapper[value]}
                        </DropDownItem>
                      );
                    return (
                      <DropDownItem clickHandler={() => handleSelectUnit(key, value)} key={value}>
                        {unitsOptionMapper[value]}
                      </DropDownItem>
                    );
                  })}
                  <Divider />
                </Fragment>
              );
            })}
          </DropDown>
        </Menu>
      </StyledDropDownMenu>
    </StyledHeader>
  );
};
