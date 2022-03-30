import { useGetJobsInfo } from '../Hooks/useGetJobsInfo';
import { Response } from '../interfaces';
import { JobsFilter } from '../components/JobsFilter';
import { JobsList } from '../components/JobsList';

export const JobsContainer = () => {
  const {
    loading,
    data: { jobs },
  }: Response = useGetJobsInfo();

  return (
    <div>
      <JobsFilter />
      <JobsList jobs={jobs} loading={loading} />
    </div>
  );
};
