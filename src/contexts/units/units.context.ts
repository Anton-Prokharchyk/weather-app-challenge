import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { units } from './Units.provider';

export const UnitsContext = createContext<{
  selectedUnits: units;
  setSelectedUnits: Dispatch<SetStateAction<units>>;
  handleSetImnperialUnits: () => void;
}>({
  selectedUnits: {
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    precipitation_unit: 'mm',
    humidity_unit: 'percents',
  },
  setSelectedUnits: () => {},
  handleSetImnperialUnits: () => {},
});
