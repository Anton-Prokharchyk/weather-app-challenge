import type { WeatherType } from './weather-icon.type';
import { WeatherIcon } from './WeatherIcon.icon';

const weatherCodeMapper: Record<number, WeatherType> = {
  0: 'sunny',
  1: 'sunny',
  2: 'partly cloudy',
  3: 'overcast',
  45: 'fog',
  48: 'fog',
  51: 'drizzle',
  53: 'drizzle',
  55: 'drizzle',
  56: 'drizzle',
  57: 'drizzle',
  61: 'rain',
  63: 'rain',
  65: 'rain',
  66: 'rain',
  67: 'rain',
  71: 'snow',
  73: 'snow',
  75: 'snow',
  77: 'snow',
  80: 'rain',
  81: 'rain',
  82: 'rain',
  85: 'snow',
  86: 'snow',
  95: 'storm',
  96: 'storm',
  99: 'storm',
};

export type weatherCodesType = keyof typeof weatherCodeMapper;

export const getWeatherIconByCode = (weather_code: weatherCodesType) => (
  <WeatherIcon weather={weatherCodeMapper[weather_code]} />
);
