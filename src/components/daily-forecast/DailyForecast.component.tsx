import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';

import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import { fetchDailyForecast } from '@/api/fetchDailyForecast.api';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { UnitsContext } from '@/contexts/units/units.context';
import { addUnitsSymbol } from '@/utils';
import { loaderDailyCards } from './daily-forecast.constants';
import { getWeatherIconByCode } from '../icons/';

import {
  DailyForecastContainer,
  DailyForecastTitle,
  DailyForecastWrapper,
  TempContainer,
} from './daily-forecast.styles';

export const DailyForecast = () => {
  const { selectedUnits } = useContext(UnitsContext);
  const { isPending, error, data } = useQuery({
    queryKey: queryKeysFabric.dailyForecast(selectedUnits),
    queryFn: () => fetchDailyForecast(selectedUnits),
  });

  if (error) return <div>error.message</div>;

  return (
    <DailyForecastWrapper>
      <DailyForecastTitle>Daily forecast</DailyForecastTitle>
      <DailyForecastContainer>
        {isPending
          ? loaderDailyCards
          : data.map(({ day, temperatureMax, temperatureMin, weather }) => {
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
