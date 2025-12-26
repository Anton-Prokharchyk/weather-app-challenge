import { useContext } from 'react';

import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
import { addUnitsSymbol } from '@/utils';
import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import { useCurrentForecast } from '@/hooks/useCurrentForecast.hook';
import { UnitsContext } from '@/contexts/units/units.context';
import type { units } from '@/contexts/units/Units.provider';

import {
  TodaysForecastContainer,
  StyledTodaysForecast,
  Date,
  Location,
  TempWrapper,
  Temp,
  AddInfoContainer,
  AddInfoTitle,
  AddInfoValue,
} from './todays-forecast.styles';
import { TodaysLoader } from './todays-loader/TodaysLoader.component';

const unitsSymbolsMapper = {
  ['feels like']: 'temperature_unit',
  wind: 'wind_speed_unit',
  precipitation: 'precipitation_unit',
  humidity: 'humidity_unit',
} as const satisfies Record<string, keyof units>;

export type todaysAddInfoType = keyof typeof unitsSymbolsMapper;

export const TodaysForecast = () => {
  const { selectedUnits } = useContext(UnitsContext);

  const { isPending, data: current } = useCurrentForecast(selectedUnits);

  return (
    <TodaysForecastContainer>
      <StyledTodaysForecast isLoading={isPending}>
        {isPending || !current ? (
          <TodaysLoader />
        ) : (
          <>
            <div>
              <Location>Berlin, Germany</Location>
              <Date>{current.time}</Date>
            </div>
            <TempWrapper>
              <img width='100' height='100' src={StyledWeatherIcon} alt='Weather icon' />
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
