import { Header } from '../components/Header';
import { JobsContainer } from '../containers/JobsContainer';
import { useState } from 'react';

export const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(() => {
    if (localStorage.getItem('currentLocation')) {
      return localStorage.getItem('currentLocation');
    }

    return 'spain';
  });
  const [currentKeyword, setCurrentKeyword] = useState(() => {
    if (localStorage.getItem('currentKeyword')) {
      return localStorage.getItem('currentKeyword');
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
