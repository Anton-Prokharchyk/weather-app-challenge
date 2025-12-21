import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';

import { HourlyCardContainer, HourlyTime, HourlyTemp } from './hourly-forecast-card.styles';

export const HourlyForecastCard = ({ time, temp, weather }: { time: string; temp: number; weather: number }) => {
  return (
    <HourlyCardContainer>
      <img width='50' height='50' src={StyledWeatherIcon} alt='Weather icon' />
      <HourlyTime>{time}</HourlyTime>
      <HourlyTemp>{temp}°</HourlyTemp>
    </HourlyCardContainer>
  );
};
