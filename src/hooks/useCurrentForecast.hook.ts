import { useQuery } from '@tanstack/react-query';

import { fetchCurerntForecast } from '@/api/fetchCurrentForecast.api';
import type { units } from '@/contexts/units/Units.provider';
import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';

export const useCurrentForecast = (
  longitude: number | undefined,
  latitude: number | undefined,
  selectedUnits: units,
) => {
  return useQuery({
    queryKey: queryKeysFabric.currentForecast(selectedUnits),
    queryFn: () => fetchCurerntForecast(longitude, latitude, selectedUnits),
  });
};
