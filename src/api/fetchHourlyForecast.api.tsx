import type { units } from '@/contexts/units/Units.provider';
import { apiUrl, daysMapper, time24hto12hMapper } from './api.constants';

export type Hourly = Record<
  (typeof daysMapper)[keyof typeof daysMapper],
  Record<(typeof time24hto12hMapper)[keyof typeof time24hto12hMapper], { temperature: number; weather: number }>
>;

const params = '?hourly=temperature_2m,weather_code&latitude=53.9&longitude=27.5667';
export const fetchHourlyForecast = async (units: units | undefined = undefined): Promise<Hourly> => {
  let unitsParams = ``;
  if (units)
    for (const [key, value] of Object.entries(units)) {
      unitsParams += `&${key}=${value}`;
    }
  const res = await fetch(apiUrl + params + unitsParams);
  const data = await res.json();

  const hourly = data.hourly.temperature_2m.reduce((acc: Hourly, temp: number, index: number) => {
    const time = new Date(data.hourly.time[index]).getHours();
    const day = daysMapper[new Date(data.hourly.time[index]).getDay()].toLowerCase();
    return (acc = {
      ...acc,
      [day]: {
        ...acc[day],
        [time24hto12hMapper[time]]: {
          temperature: Number(temp.toFixed(0)) || 0,
          weather: data.hourly.weather_code[index],
        },
      },
    });
  }, {});

  return hourly;
};
