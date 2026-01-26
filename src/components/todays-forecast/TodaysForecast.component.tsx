import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';

import type { LocationType } from '@/api/fetchSearchCountryName.api';
import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
import { UnitsContext } from '@/contexts/units/units.context';
import type { units } from '@/contexts/units/Units.provider';
import { useCurrentForecast } from '@/hooks/useCurrentForecast.hook';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { addUnitsSymbol } from '@/utils';
import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import { TodaysLoader } from './todays-loader/TodaysLoader.component';

import {
  AddInfoContainer,
  AddInfoTitle,
  AddInfoValue,
  Date,
  ForecastImg,
  Location,
  StyledTodaysForecast,
  Temp,
  TempWrapper,
  TodaysForecastContainer,
} from './todays-forecast.styles';

const unitsSymbolsMapper = {
  ['feels like']: 'temperature_unit',
  wind: 'wind_speed_unit',
  precipitation: 'precipitation_unit',
  humidity: 'humidity_unit',
} as const satisfies Record<string, keyof units>;

export type todaysAddInfoType = keyof typeof unitsSymbolsMapper;

export const TodaysForecast = () => {
  const { selectedUnits } = useContext(UnitsContext);

  const queryClient = useQueryClient();
  const { data: currentLocation = null } = useQuery<LocationType | null | void>({
    queryKey: queryKeysFabric.currentLocation(),
    queryFn: () => queryClient.getQueryData(queryKeysFabric.currentLocation()) ?? null,
  });

  const { isPending, data: current } = useCurrentForecast(
    currentLocation?.longitude,
    currentLocation?.latitude,
    selectedUnits,
  );

  return (
    <TodaysForecastContainer>
      <StyledTodaysForecast isLoading={isPending}>
        {isPending || !current ? (
          <TodaysLoader />
        ) : (
          <>
            <div>
              <Location>{`${currentLocation?.name}, ${currentLocation?.country}`}</Location>
              <Date>{current.time}</Date>
            </div>
            <TempWrapper>
              <ForecastImg width='100px' height='100px' src={StyledWeatherIcon} alt='Weather icon' />
              <Temp>{addUnitsSymbol(current.temperature, selectedUnits.temperature_unit)}</Temp>
            </TempWrapper>
          </>
        )}
      </StyledTodaysForecast>
      <AddInfoContainer>
        {(Object.keys(unitsSymbolsMapper) as todaysAddInfoType[]).map((item) => (
          <ForecastCard padding='16px' key={item}>
            <AddInfoTitle>{item}</AddInfoTitle>
            <AddInfoValue>
              {current ? addUnitsSymbol(current[item], selectedUnits[unitsSymbolsMapper[item]]) : '-'}
            </AddInfoValue>
          </ForecastCard>
        ))}
      </AddInfoContainer>
    </TodaysForecastContainer>
  );
};
