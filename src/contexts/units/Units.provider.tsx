import { useCallback, useMemo, useState, type ReactNode } from 'react';

import { UnitsContext } from './units.context';

export type units = {
  temperature_unit: 'fahrenheit' | 'celsius';
  wind_speed_unit: 'mph' | 'kmh';
  precipitation_unit: 'inch' | 'mm';
  humidity_unit: 'percents';
};

export const UnitsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUnits, setSelectedUnits] = useState<units>({
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    precipitation_unit: 'mm',
    humidity_unit: 'percents',
  });
  const handleSetImnperialUnits = useCallback(
    () =>
      setSelectedUnits({
        ...selectedUnits,
        temperature_unit: 'fahrenheit',
        wind_speed_unit: 'mph',
        precipitation_unit: 'inch',
      }),
    [selectedUnits],
  );

  const value = useMemo(
    () => ({ selectedUnits, setSelectedUnits, handleSetImnperialUnits }),
    [selectedUnits, setSelectedUnits, handleSetImnperialUnits],
  );
  return <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>;
};
