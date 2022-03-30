import { JobsListContainer, JobInitialDataContainer } from './styles';

interface JobsListProps {
  loading: boolean;
  jobs: any;
  currentFilter: string;
}

export const JobsList = ({ jobs, loading }: JobsListProps) => {
  console.log(jobs);
  return (
    <JobsListContainer>
      {loading && <p>Cargando...</p>}
      {jobs?.map((value: any) => (
        <JobInitialDataContainer key={value.id}>{value.title}</JobInitialDataContainer>
      ))}
    </JobsListContainer>
  );
};
