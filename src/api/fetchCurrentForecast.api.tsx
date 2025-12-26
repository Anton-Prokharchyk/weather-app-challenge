import { apiUrl, daysMapper, monthsMapper } from './api.constants';
import type { units } from '@/contexts/units/Units.provider';

type CurrentForrecastType = {
  time: string;
  temperature: number;
  weather: number;
  ['feels like']: number;
  wind: number;
  precipitation: number;
  humidity: number;
};

const params =
  '?current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&latitude=53.9&longitude=27.5667';
export const fetchCurerntForecast = async (units: units | undefined = undefined): Promise<CurrentForrecastType> => {
  let unitsParams = ``;
  if (units)
    for (const [key, value] of Object.entries(units)) {
      unitsParams += `&${key}=${value}`;
    }
  const res = await fetch(apiUrl + params + unitsParams);
  const data = await res.json();
  const day = daysMapper[new Date(data.current.time).getDay()];
  const month = monthsMapper[new Date(data.current.time).getMonth()];
  const date = new Date(data.current.time).getDate();
  const year = new Date(data.current.time).getFullYear();
  return {
    temperature: data.current.temperature_2m.toFixed(0),
    time: `${day}, ${month} ${date}, ${year}`,
    weather: data.current.weather_code,
    ['feels like']: data.current.apparent_temperature.toFixed(0),
    wind: data.current.wind_speed_10m.toFixed(0),
    precipitation: data.current.precipitation.toFixed(0),
    humidity: data.current.relative_humidity_2m,
  };
};
