import { useEffect, useState } from 'react';
import { HourlyForecastCard } from '../hourly-forecast-card/HourlyForecastCard.component';
import { fetchHourlyForecast } from '@/api/fetchHourlyForecast.api';

import {
  HourlyForecastContainer,
  HourlyForecastList,
  HourlyForecastHead,
  HourlyHeading,
} from './hourly-forecast.styles';

export const HourlyForecast = () => {
  const [hourly, setHourly] = useState([]);
  useEffect(() => {
    (async () => setHourly(await fetchHourlyForecast()))();
  }, []);

  return (
    <HourlyForecastContainer>
      <HourlyForecastHead>
        <HourlyHeading>Hourly forecast</HourlyHeading>
        <p>dropdown menu</p>
      </HourlyForecastHead>
      <HourlyForecastList>
        {hourly.map(({ time, temperature, weather }) => (
          <HourlyForecastCard key={time} weather={weather} time={time} temp={temperature} />
        ))}
      </HourlyForecastList>
    </HourlyForecastContainer>
  );
};
