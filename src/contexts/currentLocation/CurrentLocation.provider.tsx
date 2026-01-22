import { useState, type ReactNode } from 'react';
import { CurrentLocationContext } from './currentLocation.context';

const CurrentLocationProvider = ({ children }: { children: ReactNode }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('');

  return (
    <CurrentLocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </CurrentLocationContext.Provider>
  );
};
