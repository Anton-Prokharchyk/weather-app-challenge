import type { WeatherIconType } from './weather-icon.type';
import { WeatherIconsMapper } from './weather-icon.mapper';

import { WeatherIconWrapper } from './weather-icon.styles';

export const WeatherIcon = ({ weather = 'sunny', width = '50px', height = '50px', ...otherProps }: WeatherIconType) => {
  return (
    <WeatherIconWrapper width={width} height={height} {...otherProps}>
      <img width={width} height={height} src={WeatherIconsMapper[weather]} alt='Weather icon' />
    </WeatherIconWrapper>
  );
};
