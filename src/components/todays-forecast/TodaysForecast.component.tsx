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

const data = [
  { title: 'Fells Like', value: '64°' },
  { title: 'Humidity', value: '78%' },
  { title: 'Wind', value: '5 mph' },
  { title: 'Precipitation', value: '0 in' },
];
export const TodaysForecast = () => {
  return (
    <TodaysForecastContainer>
      <StyledTodaysForecast>
        <div>
          <Location>Berlin, Germany</Location>
          <Date>Tuesday, Aug 5, 2025</Date>
        </div>
        <TempWrapper>
          <img width='100' height='100' src={StyledWeatherIcon} alt='Weather icon' />
          <Temp>68°</Temp>
        </TempWrapper>
      </StyledTodaysForecast>
      <AddInfoContainer>
        {data.map(({ title, value }) => (
          <ForecastCard key={title}>
            <AddInfoTitle>{title}</AddInfoTitle>
            <AddInfoValue>{value}</AddInfoValue>
          </ForecastCard>
        ))}
      </AddInfoContainer>
    </TodaysForecastContainer>
  );
};
