import { useQuery } from '@tanstack/react-query';

import { ForecastCard } from '../shared/forecast-card/ForecastCard.component';
import StyledWeatherIcon from '@/assets/images/icon-sunny.webp';
import { fetchDailyForecast } from '@/api/fetchDailyForecast.api';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';

import {
  DailyForecastContainer,
  DailyForecastTitle,
  DailyForecastWrapper,
  TempContainer,
} from './daily-forecast.styles';

export const DailyForecast = () => {
  const { isPending, error, data } = useQuery({
    queryKey: queryKeysFabric.dailyForecast(),
    queryFn: () => fetchDailyForecast(),
  });
  if (error) return <div>error.message</div>;
  return (
    <DailyForecastWrapper>
      <DailyForecastTitle>Daily forecast</DailyForecastTitle>
      <DailyForecastContainer>
        {isPending
          ? 'Loading...'
          : data.map(({ day, temperatureMax, temperatureMin, weather }) => {
              return (
                <ForecastCard position='center' key={day}>
                  <p>{day}</p>
                  <img width='50' height='50' src={StyledWeatherIcon} alt='Weather icon' />
                  <TempContainer>
                    <p>{temperatureMax}°</p>
                    <p>{temperatureMin}°</p>
                  </TempContainer>
                </ForecastCard>
              );
            })}
      </DailyForecastContainer>
    </DailyForecastWrapper>
  );
};
