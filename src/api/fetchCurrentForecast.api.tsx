import { apiUrl } from './api.constants';

const params =
  '?current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&latitude=53.9&longitude=27.5667';
export const fetchHourlyForecast = async () => {
  const res = await fetch(apiUrl + params);
  const data = await res.json();

  const weatherMap = data.hourly.temperature_2m.map((temp: number, index: number) => {
    const time = new Date(data.hourly.time[index]).getHours();
    return { temperature: temp.toFixed(0), time: time24hto12hMapper[time], weather: data.hourly.weather_code[index] };
  });
  return weatherMap;
};
