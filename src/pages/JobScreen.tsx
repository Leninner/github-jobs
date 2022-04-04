import { ApplyToJob } from '../components/ApplyToJob';
import { JobInformation } from '../components/JobInformation';
import { useLocation } from 'react-router-dom';
// import { Job } from '../interfaces';

export const JobScreen = () => {
  //FIXME: Type Location is missing the following properties from type React.Location:
  const { state }: any = useLocation();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <ApplyToJob {...state} />
      <JobInformation {...state} />
    </div>
  );
};
