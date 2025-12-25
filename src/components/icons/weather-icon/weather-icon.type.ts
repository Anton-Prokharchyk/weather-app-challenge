import type { HTMLAttributes } from 'react';

import { WeatherIconsMapper } from './weather-icon.mapper';

export type WeatherType = keyof typeof WeatherIconsMapper;

export type WeatherIconType = {
  weather?: WeatherType;
  width?: string;
  height?: string;
  otherProps?: HTMLAttributes<HTMLDivElement>;
};
