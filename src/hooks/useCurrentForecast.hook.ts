import { useQuery } from '@tanstack/react-query';

import { queryKeysFabric } from '@/tanstack/queryKeys.fabric';
import { fetchCurerntForecast } from '@/api/fetchCurrentForecast.api';

export const useCurrentForecast = () => {
  return useQuery({
    queryKey: queryKeysFabric.currentForecast(),
    queryFn: () => fetchCurerntForecast(),
  });
};
