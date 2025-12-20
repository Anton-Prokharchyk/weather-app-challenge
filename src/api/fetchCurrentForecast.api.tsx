import { apiUrl } from './api.constants';

const daysMapper: { [key: number]: string } = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  6: 'Sunday',
};
const monthsMapper: { [key: number]: string } = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

const params =
  '?current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&latitude=53.9&longitude=27.5667';
export const fetchCurerntForecast = async () => {
  const res = await fetch(apiUrl + params);
  const data = await res.json();
  const day = daysMapper[new Date(data.current.time).getDay()];
  const month = monthsMapper[new Date(data.current.time).getMonth()];
  const date = new Date(data.current.time).getDate();
  const year = new Date(data.current.time).getFullYear();
  return {
    temperature: data.current.temperature_2m.toFixed(0) + '°',
    time: `${day}, ${month} ${date}, ${year}`,
    weather: data.current.weather_code,
    addInfo: [
      {
        feels: data.current.apparent_temperature.toFixed(0) + '°',
      },
      {
        wind: data.current.wind_speed_10m.toFixed(0) + ' km/h',
      },
      {
        precipitation: data.current.precipitation.toFixed(0) + ' mm',
      },
      {
        humidity: data.current.relative_humidity_2m + '%',
      },
    ],
  };
};
