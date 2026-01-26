import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';

import { fetchDailyForecast } from '@/api/fetchDailyForecast.api';
import type { LocationType } from '@/api/fetchSearchCountryName.api';
import { UnitsContext } from '@/contexts/units/units.context';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { addUnitsSymbol } from '@/utils';
import { getWeatherIconByCode } from '../icons/';
import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import { loaderDailyCards } from './daily-forecast.constants';

import {
  DailyForecastContainer,
  DailyForecastTitle,
  DailyForecastWrapper,
  TempContainer,
} from './daily-forecast.styles';

export const DailyForecast = () => {
  const { selectedUnits } = useContext(UnitsContext);

  const queryClient = useQueryClient();
  const { data: currentLocation = null } = useQuery<LocationType | null | void>({
    queryKey: queryKeysFabric.currentLocation(),
    queryFn: () => queryClient.getQueryData(queryKeysFabric.currentLocation()) ?? null,
  });

  const {
    isPending: isDailyPending,
    error: dailyError,
    data: dailyForecast,
  } = useQuery({
    queryKey: queryKeysFabric.dailyForecast(selectedUnits),
    queryFn: () => fetchDailyForecast(currentLocation?.longitude, currentLocation?.latitude, selectedUnits),
  });

  if (dailyError) return <div>error.message</div>;

  return (
    <DailyForecastWrapper>
      <DailyForecastTitle>Daily forecast</DailyForecastTitle>
      <DailyForecastContainer>
        {isDailyPending
          ? loaderDailyCards
          : dailyForecast &&
            dailyForecast.map(({ day, temperatureMax, temperatureMin, weather }) => {
              return (
                <ForecastCard position='center' key={day}>
                  <p>{day}</p>
                  {getWeatherIconByCode(weather)}
                  <TempContainer>
                    <p>{addUnitsSymbol(temperatureMax, selectedUnits.temperature_unit)}</p>
                    <p>{addUnitsSymbol(temperatureMin, selectedUnits.temperature_unit)}</p>
                  </TempContainer>
                </ForecastCard>
              );
            })}
      </DailyForecastContainer>
    </DailyForecastWrapper>
  );
};
