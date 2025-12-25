import { addUnitsSymbol, type unitsType } from '@/utils';

import { HourlyCardContainer, HourlyTime, HourlyTemp } from './hourly-forecast-card.styles';
import { getWeatherIconByCode, type weatherCodesType } from '../icons/weather-icon/getWeatherIconByCode';

export const HourlyForecastCard = ({
  units,
  time,
  temp,
  weather,
}: {
  time: string;
  temp: number;
  weather: weatherCodesType;
  units: unitsType;
}) => {
  return (
    <HourlyCardContainer>
      {getWeatherIconByCode(weather)}
      <HourlyTime>{time}</HourlyTime>
      <HourlyTemp>{addUnitsSymbol(temp, units)}</HourlyTemp>
    </HourlyCardContainer>
  );
};
