import { useGetJobsInfo } from '../Hooks/useGetJobsInfo';
import { Response } from '../interfaces';
import { JobsFilter } from '../components/JobsFilter';
import { JobsList } from '../components/JobsList';
import { useState } from 'react';
import { StyledJobsContainer } from './styles';

export const JobsContainer = () => {
  const [currentFilter, setCurrentFilter] = useState('All');
  const [currentLocation, setCurrentLocation] = useState('');

  const {
    loading,
    data: { jobs },
  }: Response = useGetJobsInfo(currentLocation);

  const filteredJobs = () => {
    switch (currentFilter) {
      case 'All':
        return jobs;
      case 'Full Time':
        return jobs.filter((job: any) => job.type.includes('Completa') && !job.type.includes('Temporal'));
      case 'Part Time':
        return jobs.filter((job: any) => job.type.includes('Temporal'));
      case 'Sin especificar':
        return jobs.filter((job: any) => !job.type.length);
      default:
        break;
    }
  };

  return (
    <StyledJobsContainer>
      <JobsFilter
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        setCurrentLocation={setCurrentLocation}
        currentLocation={currentLocation}
      />
      <JobsList jobs={filteredJobs()} loading={loading} currentFilter={currentFilter} />
    </StyledJobsContainer>
  );
};
