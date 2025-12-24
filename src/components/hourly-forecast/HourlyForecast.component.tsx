import { useContext, useState, type MouseEvent } from 'react';
import { useQuery } from '@tanstack/react-query';

import { HourlyForecastCard } from '../hourly-forecast-card/HourlyForecastCard.component';
import { fetchHourlyForecast } from '@/api/fetchHourlyForecast.api';
import { Menu } from '../shared/menu/Menu.component';
import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import { DropDown } from '../shared/drop-down/DropDown.component';
import { daysMapper } from '@/api/api.constants';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';

import {
  HourlyForecastContainer,
  HourlyForecastList,
  HourlyForecastHead,
  HourlyHeading,
} from './hourly-forecast.styles';
import { UnitsContext } from '@/contexts/units/units.context';

const today = new Date(Date.now()).toLocaleString('en-US', { weekday: 'long' });

export const HourlyForecast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>(today);
  const toggleDropDown = () => setIsOpen(!isOpen);
  const handleSetCurrentDay = (event: MouseEvent<HTMLElement>) => {
    setCurrentDay(event.currentTarget.textContent);
  };
  const { selectedUnits } = useContext(UnitsContext);
  const { isPending: isHourlyPending, data: hourly } = useQuery({
    queryKey: queryKeysFabric.hourlyForecast(selectedUnits),
    queryFn: () => fetchHourlyForecast(selectedUnits),
  });

  return (
    <HourlyForecastContainer>
      <HourlyForecastHead>
        <HourlyHeading>Hourly forecast</HourlyHeading>
        <Menu clickHandler={toggleDropDown}>
          <p>{currentDay}</p>
          <DropDownIcon />
          <DropDown isOpen={isOpen} width='300px' setIsOpen={toggleDropDown}>
            {Object.values(daysMapper).map((day) => (
              <DropDownItem clickHandler={handleSetCurrentDay} key={day}>
                {day}
              </DropDownItem>
            ))}
          </DropDown>
        </Menu>
      </HourlyForecastHead>
      <HourlyForecastList>
        {isHourlyPending || !hourly
          ? 'Loading...'
          : Object.entries(hourly[currentDay.toLowerCase()]).map(([time, { temperature, weather }]) => (
              <HourlyForecastCard
                units={selectedUnits.temperature_unit}
                key={time}
                weather={weather}
                time={time}
                temp={temperature}
              />
            ))}
      </HourlyForecastList>
    </HourlyForecastContainer>
  );
};
