import { Header } from '../components/Header';
import { JobsContainer } from '../containers/JobsContainer';
import { useState } from 'react';

export const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(() => {
    if (sessionStorage.getItem('currentLocation')) {
      return sessionStorage.getItem('currentLocation');
    }

    return 'spain';
  });
  const [currentKeyword, setCurrentKeyword] = useState(() => {
    if (sessionStorage.getItem('currentKeyword')) {
      return sessionStorage.getItem('currentKeyword');
    }

    return 'developer';
  });

  return (
    <>
      <Header setCurrentKeyword={setCurrentKeyword} currentLocation={currentLocation} />
      <JobsContainer
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        currentKeyword={currentKeyword}
      />
    </>
  );
};
