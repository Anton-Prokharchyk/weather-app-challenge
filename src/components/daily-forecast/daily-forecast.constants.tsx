import type { JSX } from 'react';

import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';

export const loaderDailyCards: JSX.Element[] = [];

for (let i = 0; i < 7; i++) {
  loaderDailyCards.push(<ForecastCard key={i}></ForecastCard>);
}
