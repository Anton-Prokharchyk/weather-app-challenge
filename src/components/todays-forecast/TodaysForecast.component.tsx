import { useContext } from 'react';

import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
import { addUnitsSymbol } from '@/utils';
import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import { useCurrentForecast } from '@/hooks/useCurrentForecast.hook';
import { UnitsContext } from '@/contexts/units/units.context';
import { Loader } from '../shared/search-loader/SearchLoader.component';
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

const unitsSymbolsMapper: Record<string, keyof units> = {
  ['feels like']: 'temperature_unit',
  wind: 'wind_speed_unit',
  precipitation: 'precipitation_unit',
  humidity: 'humidity_unit',
};

export const TodaysForecast = () => {
  const { selectedUnits } = useContext(UnitsContext);

  const { isPending, data: current = { temperature: '', time: '', weather: '', addInfo: [] } } =
    useCurrentForecast(selectedUnits);

  return (
    <TodaysForecastContainer>
      {isPending ? (
        <Loader />
      ) : (
        <>
          <StyledTodaysForecast>
            <div>
              <Location>Berlin, Germany</Location>
              <Date>{current.time}</Date>
            </div>
            <TempWrapper>
              <img width='100' height='100' src={StyledWeatherIcon} alt='Weather icon' />
              <Temp>{addUnitsSymbol(current.temperature, selectedUnits.temperature_unit)}</Temp>
            </TempWrapper>
          </StyledTodaysForecast>
          <AddInfoContainer>
            {current.addInfo &&
              current.addInfo.map((item) => (
                <ForecastCard padding='16px' key={Object.keys(item)[0]}>
                  <AddInfoTitle>{Object.keys(item)[0]}</AddInfoTitle>
                  <AddInfoValue>
                    {addUnitsSymbol(Object.values(item)[0], selectedUnits[unitsSymbolsMapper[Object.keys(item)[0]]])}
                  </AddInfoValue>
                </ForecastCard>
              ))}
          </AddInfoContainer>
        </>
      )}
    </TodaysForecastContainer>
  );
};
