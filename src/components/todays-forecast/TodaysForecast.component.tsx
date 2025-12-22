import { useQuery } from '@tanstack/react-query';

import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
import { fetchCurerntForecast } from '@/api/fetchCurrentForecast.api';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';

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
import { useCurrentForecast } from '@/hooks/useCurrentForecast.hook';

export const TodaysForecast = () => {
  const { isPending, data: current = { temperature: '', time: '', weather: '', addInfo: [] } } = useCurrentForecast();

  return (
    <TodaysForecastContainer>
      {isPending ? (
        'Loading...'
      ) : (
        <>
          <StyledTodaysForecast>
            <div>
              <Location>Berlin, Germany</Location>
              <Date>{current.time}</Date>
            </div>
            <TempWrapper>
              <img width='100' height='100' src={StyledWeatherIcon} alt='Weather icon' />
              <Temp>{current.temperature}</Temp>
            </TempWrapper>
          </StyledTodaysForecast>
          <AddInfoContainer>
            {current.addInfo &&
              current.addInfo.map((item) => (
                <ForecastCard padding='16px' key={Object.keys(item)[0]}>
                  <AddInfoTitle>{Object.keys(item)[0]}</AddInfoTitle>
                  <AddInfoValue>{Object.values(item)[0]}</AddInfoValue>
                </ForecastCard>
              ))}
          </AddInfoContainer>
        </>
      )}
    </TodaysForecastContainer>
  );
};
