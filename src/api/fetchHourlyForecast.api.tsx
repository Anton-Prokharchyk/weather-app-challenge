import type { units } from '@/contexts/units/Units.provider';
import { apiUrl, daysMapper, time24hto12hMapper } from './api.constants';

export type Hourly = Record<
  (typeof daysMapper)[keyof typeof daysMapper],
  | object
  | Record<(typeof time24hto12hMapper)[keyof typeof time24hto12hMapper], { temperature: string; weather: number }>
>;

const params = '?hourly=temperature_2m,weather_code&latitude=53.9&longitude=27.5667';
export const fetchHourlyForecast = async (units: units | undefined = undefined) => {
  let unitsParams = ``;
  if (units)
    for (const [key, value] of Object.entries(units)) {
      unitsParams += `&${key}=${value}`;
    }
  console.log('units', units);

  console.log('unitsParams', unitsParams);
  const res = await fetch(apiUrl + params + unitsParams);
  const data = await res.json();
  const initHourly: Hourly = {
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {},
    sunday: {},
  };

  data.hourly.temperature_2m.forEach((temp: number, index: number) => {
    const time = new Date(data.hourly.time[index]).getHours();
    const day = daysMapper[new Date(data.hourly.time[index]).getDay()].toLowerCase();

    initHourly[day] = {
      ...initHourly[day],
      [time24hto12hMapper[time]]: {
        temperature: JSON.stringify(Number(temp.toFixed(0)) || 0),
        weather: data.hourly.weather_code[index],
      },
    };
  });
  return initHourly;
};
