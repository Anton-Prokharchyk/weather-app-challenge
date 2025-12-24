import { useQuery } from '@tanstack/react-query';

import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { fetchCurerntForecast } from '@/api/fetchCurrentForecast.api';
import type { units } from '@/contexts/units/Units.provider';

export const useCurrentForecast = (selectedUnits: units) => {
  return useQuery({
    queryKey: queryKeysFabric.currentForecast(selectedUnits),
    queryFn: () => fetchCurerntForecast(selectedUnits),
  });
};
