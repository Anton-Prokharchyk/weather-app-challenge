import { Search } from '@/components/search/Search.component';
import { TodaysForecast } from '@/components/todays-forecast/TodaysForecast.component';

import { DailyForecast } from '../daily-forecast/DailyForecast.component';
import { HourlyForecast } from '../hourly-forecast/HourlyForecast.component';

import { MainContainer, MainTitle, MainForecastContainer } from './main.styles';

export const Main = () => {
  return (
    <MainContainer>
      <MainTitle>how&apos;s the sky looking today?</MainTitle>
      <Search />
      <MainForecastContainer>
        <TodaysForecast />
        <HourlyForecast />
        <DailyForecast />
      </MainForecastContainer>
    </MainContainer>
  );
};
