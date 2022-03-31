import { JobsListContainer, JobInitialDataContainer } from './styles';
import { SkeletonLoader } from '../SkeletonLoader';
import moment from 'moment';

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
        <JobInitialDataContainer key={value.id}>
          <section className='JobMainInfo'>
            <div className='BoxImage' />
            <div className='JobData'>
              <span>{value.company}</span>
              <h3>{value.title}</h3>
              <div>
                {value.type === 'Completa' ? (
                  <span>Full Time</span>
                ) : value.type === '' ? (
                  <span>N/A</span>
                ) : (
                  <span>Part Time</span>
                )}
              </div>
            </div>
          </section>

          <section className='DateInfo'>
            <div>
              <span className='material-icons-outlined md-18'>public</span>
              <p>{value.location}</p>
            </div>
            <div>
              <span className='material-icons-outlined md-18'>schedule</span>
              <p>{moment(value.updated).fromNow()}</p>
            </div>
          </section>
        </JobInitialDataContainer>
      ))}
    </JobsListContainer>
  );
};
