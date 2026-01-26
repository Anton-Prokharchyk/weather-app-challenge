import { useQuery } from '@tanstack/react-query';
import { useContext, useMemo, useState, type MouseEvent } from 'react';

import { fetchHourlyForecast } from '@/api/fetchHourlyForecast.api';
import type { LocationType } from '@/api/fetchSearchCountryName.api';
import DropDownIcon from '@/assets/images/icon-dropdown.svg?react';
import { UnitsContext } from '@/contexts/units/units.context';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { addUnitsSymbol } from '@/utils';
import { HourlyForecastCard } from '../hourly-forecast-card/HourlyForecastCard.component';
import { getWeatherIconByCode } from '../icons';
import { DropDownItem } from '../shared/drop-down-item/DropDownItem.component';
import { DropDown } from '../shared/drop-down/DropDown.component';
import { Menu } from '../shared/menu/Menu.component';
import { days, loaderCurrentDay, loaderHourly } from './horuly-forecast.constants';

import {
  HourlyForecastContainer,
  HourlyForecastHead,
  HourlyForecastList,
  HourlyHeading,
  HourlyScrollBarWrapper,
  HourlyTemp,
  HourlyTime,
} from './hourly-forecast.styles';

export const HourlyForecast = () => {
  const { selectedUnits } = useContext(UnitsContext);
  const { data: currentLocation } = useQuery<LocationType | null | void>({
    queryKey: queryKeysFabric.currentLocation(),
    queryFn: () => {},
  });
  const { isPending: isHourlyPending, data: hourly } = useQuery({
    queryKey: queryKeysFabric.hourlyForecast(selectedUnits),
    queryFn: () => fetchHourlyForecast(currentLocation?.longitude, currentLocation?.latitude, selectedUnits),
  });

  const defaultDay = useMemo(() => {
    if (!hourly) return loaderCurrentDay;
    const key = Object.keys(hourly)[0];
    return key.charAt(0).toUpperCase() + key.slice(1);
  }, [hourly]);

  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const currentDay = selectedDay ?? defaultDay;

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => setIsOpen(!isOpen);
  const handleSetCurrentDay = (event: MouseEvent<HTMLElement>) => {
    if (event.currentTarget) setSelectedDay(event.currentTarget.textContent);
  };

  return (
    <HourlyForecastContainer>
      <HourlyForecastHead>
        <HourlyHeading>Hourly forecast</HourlyHeading>
        <Menu clickHandler={toggleDropDown}>
          <p>{currentDay}</p>
          <DropDownIcon />
          <DropDown isOpen={isOpen} width='200px' clickHandler={toggleDropDown} setIsOpen={setIsOpen}>
            {days.map((day) => (
              <DropDownItem clickHandler={handleSetCurrentDay} key={day}>
                {day}
              </DropDownItem>
            ))}
          </DropDown>
        </Menu>
      </HourlyForecastHead>
      <HourlyForecastList>
        <HourlyScrollBarWrapper>
          {isHourlyPending || !hourly
            ? loaderHourly
            : Object.entries(hourly[currentDay.toLowerCase()]).map(([time, { temperature, weather }]) => (
                <HourlyForecastCard key={time}>
                  {getWeatherIconByCode(weather)}
                  <HourlyTime>{time}</HourlyTime>
                  <HourlyTemp>{addUnitsSymbol(temperature, selectedUnits.temperature_unit)}</HourlyTemp>
                </HourlyForecastCard>
              ))}
        </HourlyScrollBarWrapper>
      </HourlyForecastList>
    </HourlyForecastContainer>
  );
};
