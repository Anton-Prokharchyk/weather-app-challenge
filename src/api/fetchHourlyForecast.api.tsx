import { apiUrl } from './api.constants';

const time24hto12hMapper: { [key: number]: string } = {
  0: '0 AM',
  1: '1 AM',
  2: '2 AM',
  3: '3 AM',
  4: '4 AM',
  5: '5 AM',
  6: '6 AM',
  7: '7 AM',
  8: '8 AM',
  9: '9 AM',
  10: '10 AM',
  11: '11 AM',
  12: '12 PM',
  13: '1 PM',
  14: '2 PM',
  15: '3 PM',
  16: '4 PM',
  17: '5 PM',
  18: '6 PM',
  19: '7 PM',
  20: '8 PM',
  21: '9 PM',
  22: '10 PM',
  23: '11 PM',
};

const params = '?hourly=temperature_2m,weather_code&latitude=53.9&longitude=27.5667&forecast_days=1';
export const fetchHourlyForecast = async () => {
  const res = await fetch(apiUrl + params);
  const data = await res.json();

  const weatherMap = data.hourly.temperature_2m.map((temp: number, index: number) => {
    const time = new Date(data.hourly.time[index]).getHours();
    return { temperature: temp, time: time24hto12hMapper[time], weather: data.hourly.weather_code[index] };
  });
  return weatherMap;
};
