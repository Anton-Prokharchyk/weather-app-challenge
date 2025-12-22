import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { units } from './Units.provider';

export const UnitsContext = createContext<{ units: units; setUnits: Dispatch<SetStateAction<units>> }>({
  units: { temperature_unit: 'celsius', wind_speed_unit: 'kmh', precipitation_unit: 'mm' },
  setUnits: () => {},
});
