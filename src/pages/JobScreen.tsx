import { ApplyToJob } from '../components/ApplyToJob';
import { JobInformation } from '../components/JobInformation';
import { useLocation } from 'react-router-dom';
import { JobScreenContainer } from './styles';

export const JobScreen = () => {
  //FIXME: Type Location is missing the following properties from type React.Location:
  const { state }: any = useLocation();

  return (
    <JobScreenContainer>
      <ApplyToJob {...state} />
      <JobInformation {...state} />
    </JobScreenContainer>
  );
};
