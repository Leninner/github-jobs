import { Header } from '../components/Header';
import { JobsContainer } from '../containers/JobsContainer';
import { useState } from 'react';

export const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState('spain');
  const [currentKeyword, setCurrentKeyword] = useState('developer');

  return (
    <>
      <Header setCurrentKeyword={setCurrentKeyword} />
      <JobsContainer
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        currentKeyword={currentKeyword}
      />
    </>
  );
};
