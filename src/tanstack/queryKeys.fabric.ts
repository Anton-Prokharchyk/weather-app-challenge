export const queryKeysFabric = {
  currentForecast: () => ['current-forecast'] as const,
  dailyForecast: () => ['daily-forecast'] as const,
  hourlyForecast: () => ['hourly-forecast'] as const,
};
