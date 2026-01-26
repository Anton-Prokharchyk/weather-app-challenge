import type { units } from '@/contexts/units/Units.provider';

export const queryKeysFabric = {
  currentForecast: (selectedUnits: units) => ['current-forecast', selectedUnits] as const,
  dailyForecast: (selectedUnits: units) => ['daily-forecast', selectedUnits] as const,
  hourlyForecast: (selectedUnits: units) => ['hourly-forecast', selectedUnits] as const,
  searchCountryName: () => ['search-country-name'] as const,
  currentLocation: () => ['current-location'] as const,
};
