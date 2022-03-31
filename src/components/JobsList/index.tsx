import { JobsListContainer, JobInitialDataContainer } from './styles';
import { SkeletonLoader } from '../SkeletonLoader';

interface JobsListProps {
  loading: boolean;
  jobs: any;
  currentFilter: string;
}

export const JobsList = ({ jobs, loading }: JobsListProps) => {
  console.log(jobs);
  return (
    <JobsListContainer>
      {loading && <SkeletonLoader />}

      {jobs?.map((value: any) => (
        <JobInitialDataContainer key={value.id}>{value.title}</JobInitialDataContainer>
      ))}
    </JobsListContainer>
  );
};
