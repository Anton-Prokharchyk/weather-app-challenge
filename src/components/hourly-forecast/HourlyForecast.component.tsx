import { useEffect, useState, type MouseEvent } from 'react';

import { HourlyForecastCard } from '../hourly-forecast-card/HourlyForecastCard.component';
import { fetchHourlyForecast, type Hourly } from '@/api/fetchHourlyForecast.api';
import { Menu } from '../shared/menu/Menu.component';
import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import { DropDown } from '../shared/drop-down/DropDown.component';
import { daysMapper } from '@/api/api.constants';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';

import {
  HourlyForecastContainer,
  HourlyForecastList,
  HourlyForecastHead,
  HourlyHeading,
} from './hourly-forecast.styles';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { useQuery } from '@tanstack/react-query';
import { useCurrentForecast } from '@/hooks/useCurrentForecast.hook';

export const HourlyForecast = () => {
  const { isPending: isCurrentPending, data: current = { temperature: '', time: '', weather: '', addInfo: [] } } =
    useCurrentForecast();
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState(current.time.split(',')[0]);
  const toggleDropDown = () => setIsOpen(!isOpen);
  const handleSetCurrentDay = (event: MouseEvent<HTMLElement>) => {
    setCurrentDay(event.currentTarget.textContent);
  };
  const { isPending: isHourlyPending, data: hourly } = useQuery({
    queryKey: queryKeysFabric.hourlyForecast(),
    queryFn: () => fetchHourlyForecast(),
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
        {isHourlyPending || isCurrentPending
          ? 'Loading...'
          : Object.entries(hourly[currentDay?.toLowerCase()]).map(([time, { temperature, weather }]) => (
              <HourlyForecastCard key={time} weather={weather} time={time} temp={temperature} />
            ))}
      </HourlyForecastList>
    </HourlyForecastContainer>
  );
};
