import type { units } from '@/contexts/units/Units.provider';
import { apiUrl, daysSlugMapper } from './api.constants';

const params = '?daily=weather_code,temperature_2m_max,temperature_2m_min&latitude=53.9&longitude=27.5667';
export const fetchDailyForecast = async (units: units | undefined = undefined) => {
  let unitsParams = ``;
  if (units)
    for (const [key, value] of Object.entries(units)) {
      unitsParams += `&${key}=${value}`;
    }
  console.log('units', units);

  console.log('unitsParams', unitsParams);
  const res = await fetch(apiUrl + params + unitsParams);
  const data = await res.json();
  const weatherMap = data.daily.temperature_2m_min.map((temp: number, index: number) => {
    const time = new Date(data.daily.time[index]).getDay();
    return {
      temperatureMin: temp.toFixed(0),
      temperatureMax: data.daily.temperature_2m_max[index].toFixed(0),
      day: daysSlugMapper[time],
      weather: data.daily.weather_code[index],
    };
  });
  return weatherMap;
};
