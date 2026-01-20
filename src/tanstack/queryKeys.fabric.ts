import type { units } from '@/contexts/units/Units.provider';

export const queryKeysFabric = {
  currentForecast: (selectedUnits: units) => ['current-forecast', selectedUnits] as const,
  dailyForecast: (selectedUnits: units) => ['daily-forecast', selectedUnits] as const,
  hourlyForecast: (selectedUnits: units) => ['hourly-forecast', selectedUnits] as const,
  searchCountryName: (searchString: string) => ['search-country-name', searchString] as const,
};
