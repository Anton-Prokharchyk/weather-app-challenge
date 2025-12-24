import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
import { addUnitsSymbol, type unitsType } from '@/utils';

import { HourlyCardContainer, HourlyTime, HourlyTemp } from './hourly-forecast-card.styles';

export const HourlyForecastCard = ({
  units,
  time,
  temp,
  weather,
}: {
  time: string;
  temp: number;
  weather: number;
  units: unitsType;
}) => {
  return (
    <HourlyCardContainer>
      <img width='50' height='50' src={StyledWeatherIcon} alt='Weather icon' />
      <HourlyTime>{time}</HourlyTime>
      <HourlyTemp>{addUnitsSymbol(temp, units)}</HourlyTemp>
    </HourlyCardContainer>
  );
};
