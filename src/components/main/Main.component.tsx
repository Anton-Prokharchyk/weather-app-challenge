import { Search } from '@/components/search/Search.component';
import { TodaysForecast } from '@/components/todays-forecast/TodaysForecast.component';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import type { LocationType } from '@/api/fetchSearchCountryName.api';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { DailyForecast } from '../daily-forecast/DailyForecast.component';
import { HourlyForecast } from '../hourly-forecast/HourlyForecast.component';

import { MainContainer, MainForecastContainer, MainTitle, NoResults } from './main.styles';

export const Main = () => {
  const qc = useQueryClient();
  const { data: currentLocation = null, isPending: isCurrentLocationPending } = useQuery<LocationType | null | void>({
    queryKey: queryKeysFabric.currentLocation(),
    queryFn: () => qc.getQueryData(queryKeysFabric.currentLocation()) ?? null,
  });

  return (
    <MainContainer>
      <MainTitle>how&apos;s the sky looking today?</MainTitle>
      <Search />
      {currentLocation && !isCurrentLocationPending ? (
        <MainForecastContainer>
          <TodaysForecast />
          <HourlyForecast />
          <DailyForecast />
        </MainForecastContainer>
      ) : (
        <NoResults>No search result found!</NoResults>
      )}
    </MainContainer>
  );
};
