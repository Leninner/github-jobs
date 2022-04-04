// import { useGetJobsInfo } from '../Hooks/useGetJobsInfo';
import { JobsFilter } from '../components/JobsFilter';
import { JobsList } from '../components/JobsList';
import { useState } from 'react';
import { StyledJobsContainer } from './styles';
import { useQuery } from 'react-query';
import { getJobsData } from '../utils/getJobsData';

export const JobsContainer = ({ currentLocation, setCurrentLocation, currentKeyword }: any) => {
  const [currentFilter, setCurrentFilter] = useState('All');
  const { data, isLoading } = useQuery(
    ['jobs', currentLocation, currentKeyword],
    () => getJobsData({ location: currentLocation, keyword: currentKeyword }),
    {
      refetchOnWindowFocus: false,
    }
  );

  const jobs = data?.jobs;

  const filteredJobs = () => {
    switch (currentFilter) {
      case 'All':
        return jobs;
      case 'Full Time':
        return jobs?.filter((job: any) => job.type.includes('Completa') && !job.type.includes('Temporal'));
      case 'Part Time':
        return jobs?.filter((job: any) => job.type.includes('Temporal'));
      case 'Unspecified':
        return jobs?.filter((job: any) => !job.type.length);
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
        currentKeyword={currentKeyword}
      />
      <JobsList
        jobs={filteredJobs()}
        loading={isLoading}
        currentKeyword={currentKeyword}
        currentLocation={currentLocation}
        currentFilter={currentFilter}
        isJobsObtained={jobs?.length > 0}
      />
    </StyledJobsContainer>
  );
};
