import type { ReactNode } from 'react';

import { HourlyCardContainer } from './hourly-forecast-card.styles';

export const HourlyForecastCard = ({ children }: { children?: ReactNode }) => {
  return <HourlyCardContainer>{children}</HourlyCardContainer>;
};
