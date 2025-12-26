import type { JSX } from 'react';

import { HourlyForecastCard } from '../hourly-forecast-card/HourlyForecastCard.component';

export const loaderHourly: JSX.Element[] = [];

for (let i = 0; i < 24; i++) {
  loaderHourly.push(<HourlyForecastCard key={i}></HourlyForecastCard>);
}

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const loaderCurrentDay = '-';
