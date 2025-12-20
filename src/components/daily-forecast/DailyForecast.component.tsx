import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';

import {
  DailyForecastContainer,
  DailyForecastTitle,
  DailyForecastWrapper,
  TempContainer,
} from './daily-forecast.styles';
import { useEffect, useState } from 'react';
import { fetchDailyForecast } from '@/api/fetchDailyForecast.api';

export const DailyForecast = () => {
  const [daily, setDaily] = useState([]);
  useEffect(() => {
    (async () => setDaily(await fetchDailyForecast()))();
  }, []);
  return (
    <DailyForecastWrapper>
      <DailyForecastTitle>Daily forecast</DailyForecastTitle>
      <DailyForecastContainer>
        {daily.map(({ day, temperatureMax, temperatureMin, weather }) => {
          return (
            <ForecastCard position='center' key={day}>
              <p>{day}</p>
              <img width='50' height='50' src={StyledWeatherIcon} alt='Weather icon' />
              <TempContainer>
                <p>{temperatureMax}°</p>
                <p>{temperatureMin}°</p>
              </TempContainer>
            </ForecastCard>
          );
        })}
      </DailyForecastContainer>
    </DailyForecastWrapper>
  );
};
