import type { units } from '@/contexts/units/Units.provider';

export type unitsMapperType = Record<units[keyof units], string>;

export type unitsType = keyof unitsMapperType;

const unitsMapper: unitsMapperType = {
  celsius: ' °',
  fahrenheit: ' °F',
  kmh: ' km/h',
  mph: ' mph',
  mm: ' mm',
  inch: ' in',
  percents: ' %',
};

export const addUnitsSymbol = (value: number, units: unitsType): string => `${value}${unitsMapper[units]}`;
