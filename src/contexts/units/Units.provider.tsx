import { useMemo, useState, type ReactNode } from 'react';

import { UnitsContext } from './units.context';

export type units = {
  temperature_unit?: 'fahrenheit' | 'celsius';
  wind_speed_unit?: 'mph' | 'kmh';
  precipitation_unit?: 'inch' | 'mm';
};

export const UnitsProvider = ({ children }: { children: ReactNode }) => {
  const [units, setUnits] = useState<units>({
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    precipitation_unit: 'mm',
  });
  const value = useMemo(() => ({ units, setUnits }), [units, setUnits]);
  return <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>;
};
