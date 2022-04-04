import { ApplyToJob } from '../components/ApplyToJob';
import { JobInformation } from '../components/JobInformation';
import { useLocation } from 'react-router-dom';

export const JobScreen = () => {
  const { state }: any = useLocation();

  const { link, location, source } = state;

  const howToApply = { link, location, source };

  return (
    <>
      <ApplyToJob {...howToApply} />
      <JobInformation />
    </>
  );
};
