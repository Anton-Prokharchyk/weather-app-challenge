import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';

import {
  DailyForecastContainer,
  DailyForecastTitle,
  DailyForecastWrapper,
  TempContainer,
} from './daily-forecast.styles';

const daily = [
  { day: 'Tue', nightTemp: 64, dayTemp: 68 },
  { day: 'Wed', nightTemp: 64, dayTemp: 68 },
  { day: 'Thu', nightTemp: 64, dayTemp: 68 },
  { day: 'Fri', nightTemp: 64, dayTemp: 68 },
  { day: 'Sat', nightTemp: 64, dayTemp: 68 },
  { day: 'Sun', nightTemp: 64, dayTemp: 68 },
  { day: 'Mon', nightTemp: 64, dayTemp: 68 },
];

export const DailyForecast = () => {
  return (
    <DailyForecastWrapper>
      <DailyForecastTitle>Daily forecast</DailyForecastTitle>
      <DailyForecastContainer>
        {daily.map(({ day, nightTemp, dayTemp }) => {
          return (
            <ForecastCard position='center' key={day}>
              <p>{day}</p>
              <img width='50' height='50' src={StyledWeatherIcon} alt='Weather icon' />
              <TempContainer>
                <p>{dayTemp}°</p>
                <p>{nightTemp}°</p>
              </TempContainer>
            </ForecastCard>
          );
        })}
      </DailyForecastContainer>
    </DailyForecastWrapper>
  );
};
