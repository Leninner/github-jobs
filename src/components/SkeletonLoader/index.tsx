import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { JobInitialDataContainer } from '../JobsList/styles';

export const SkeletonLoader = () => {
  const skeletonItems = [1, 2, 3, 4, 5];

  return (
    <>
      {skeletonItems.map((value: any) => (
        <JobInitialDataContainer key={value}>
          <section className='JobMainInfo'>
            <div className='BoxImage'>
              <Skeleton width={90} height={90} />
            </div>

            <div className='JobData'>
              <span>
                <Skeleton width={150} height={17} />
              </span>
              <h3>
                <Skeleton width={250} />
              </h3>

              <Skeleton width={66} height={22} />
            </div>
          </section>

          <section className='DateInfo'>
            <div>
              <Skeleton width={100} height={17} />
            </div>
            <div>
              <Skeleton width={100} height={17} />
            </div>
          </section>
        </JobInitialDataContainer>
      ))}
    </>
  );
};
