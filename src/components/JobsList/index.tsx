import { JobsListContainer, JobInitialDataContainer, NotFound } from './styles';
import { SkeletonLoader } from '../SkeletonLoader';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { JobsListProps } from '../../interfaces';
import { Pagination } from '../Pagination';

export const JobsList = ({
  jobs,
  loading,
  currentKeyword,
  currentLocation,
  currentFilter,
  isJobsObtained,
  setCurrentPage,
  totalCount,
  currentPage,
}: JobsListProps) => {
  const navigate = useNavigate();
  const goToJob = (jobId: string, state: any) => navigate(`/job/${jobId}`, { state: { ...state } });

  return (
    <JobsListContainer>
      {loading && <SkeletonLoader />}

      {!jobs?.length ? (
        <NotFound>
          <h3>
            {isJobsObtained ? (
              <>
                Not found results for <span>{currentFilter}</span>. Try with another filter.
              </>
            ) : (
              <>
                No founds jobs for <span>{currentKeyword}</span> in <span>{currentLocation}</span>. Try with another
                <span> location</span> or another <span>keyword.</span>
              </>
            )}
          </h3>
        </NotFound>
      ) : (
        <>
          {jobs?.map((value: any) => (
            // <Link to={`/job/${value.id}`} key={value.id} style={{ textDecoration: 'none' }}>
            <JobInitialDataContainer key={value.id} onClick={() => goToJob(value.id, value)}>
              <section className='JobMainInfo'>
                <div className='BoxImage'>
                  <img
                    src='https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-lindo-bulldog-funcionamiento-portatil-concepto-icono-tecnologia-animal_138676-1912.jpg?t=st=1648749241~exp=1648749841~hmac=77e6b8a2ab0179268a6740da3aadc9b704a9f7bcf4ae2bdc3f3ba7918270a863&w=740'
                    alt=''
                  />
                </div>

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
        </>
      )}

      <Pagination setCurrentPage={setCurrentPage} totalCount={totalCount} currentPage={currentPage} />
    </JobsListContainer>
  );
};
