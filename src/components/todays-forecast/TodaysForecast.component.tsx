import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
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
import { useEffect, useState } from 'react';
import { fetchCurerntForecast } from '@/api/fetchCurrentForecast.api';

export const TodaysForecast = () => {
  const [current, setCurrent] = useState({});
  useEffect(() => {
    (async () => setCurrent(await fetchCurerntForecast()))();
  }, []);
  return (
    <TodaysForecastContainer>
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
            <ForecastCard key={Object.keys(item)[0]}>
              <AddInfoTitle>{Object.keys(item)[0]}</AddInfoTitle>
              <AddInfoValue>{Object.values(item)[0]}</AddInfoValue>
            </ForecastCard>
          ))}
      </AddInfoContainer>
    </TodaysForecastContainer>
  );
};
