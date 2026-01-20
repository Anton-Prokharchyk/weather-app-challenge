import { apiGeocodeUrl } from './api.constants';

type CurrentForrecastType = {
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  timezone: string;
};

const params = '&count=10&language=en&format=json';
export const fetchSearchCountryName = async (searchString: string): Promise<CurrentForrecastType[]> => {
  const res = await fetch(apiGeocodeUrl + `?name=${searchString}` + params);
  const data = (await res.json()) as { generationTime: string; results: CurrentForrecastType[] };
  return data.results || [];
};
