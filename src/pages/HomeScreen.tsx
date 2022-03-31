import { Header } from '../components/Header';
import { JobsContainer } from '../containers/JobsContainer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState('spain');
  const [currentKeyword, setCurrentKeyword] = useState('developer');
  const { location, query } = useParams();

  console.log(location, query);

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
