import { apiUrl } from './api.constants';

const daysMapper: { [key: number]: string } = {
  0: 'Mon',
  1: 'Tue',
  2: 'Wed',
  3: 'Thu',
  4: 'Fri',
  5: 'Sat',
  6: 'Sun',
};

const params = '?daily=weather_code,temperature_2m_max,temperature_2m_min&latitude=53.9&longitude=27.5667';
export const fetchDailyForecast = async () => {
  const res = await fetch(apiUrl + params);
  const data = await res.json();
  const weatherMap = data.daily.temperature_2m_min.map((temp: number, index: number) => {
    const time = new Date(data.daily.time[index]).getDay();
    return {
      temperatureMin: temp,
      temperatureMax: data.daily.temperature_2m_max[index],
      time: daysMapper[time],
      weather: data.daily.weather_code[index],
    };
  });
  return weatherMap;
};
