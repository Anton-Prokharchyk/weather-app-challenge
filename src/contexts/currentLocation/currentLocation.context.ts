import { createContext } from 'react';

export const CurrentLocationContext = createContext({
  currentLocation: '',
  setCurrentLocation: (location: string) => {},
});
