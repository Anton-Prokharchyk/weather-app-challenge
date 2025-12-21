import { useEffect, useState } from 'react';

import { HourlyForecastCard } from '../hourly-forecast-card/HourlyForecastCard.component';
import { fetchHourlyForecast } from '@/api/fetchHourlyForecast.api';
import { Menu } from '../shared/menu/Menu.component';
import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import { DropDown } from '../shared/drop-down/DropDown.component';

import {
  HourlyForecastContainer,
  HourlyForecastList,
  HourlyForecastHead,
  HourlyHeading,
} from './hourly-forecast.styles';
import { daysMapper } from '@/api/fetchCurrentForecast.api';

export const HourlyForecast = () => {
  const [hourly, setHourly] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen(!isOpen);
  useEffect(() => {
    (async () => setHourly(await fetchHourlyForecast()))();
  }, []);
  console.log(isOpen);
  return (
    <HourlyForecastContainer>
      <HourlyForecastHead>
        <HourlyHeading>Hourly forecast</HourlyHeading>
        <Menu clickHandler={toggleDropDown}>
          <p>Tuesday</p>
          <DropDownIcon />
          <DropDown isOpen={isOpen} width='300px' setIsOpen={toggleDropDown}>
            {Object.values(daysMapper).map((day) => (
              <p key={day}>{day}</p>
            ))}
          </DropDown>
        </Menu>
      </HourlyForecastHead>
      <HourlyForecastList>
        {hourly.map(({ time, temperature, weather }) => (
          <HourlyForecastCard key={time} weather={weather} time={time} temp={temperature} />
        ))}
      </HourlyForecastList>
    </HourlyForecastContainer>
  );
};
