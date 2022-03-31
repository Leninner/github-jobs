import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { JobInitialDataContainer } from '../JobsList/styles';

export const SkeletonLoader = () => {
  const skeletonItems = [1, 2, 3, 4, 5];

  return (
    <>
      {skeletonItems.map((value: any) => (
        <JobInitialDataContainer key={value}>
          <p>
            <Skeleton />
          </p>
        </JobInitialDataContainer>
      ))}
    </>
  );
};
