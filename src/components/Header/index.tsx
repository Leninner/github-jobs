import { Searcher } from '../Searcher';

export const Header = ({ setCurrentKeyword, currentLocation }: any) => {
  return (
    <div>
      <Searcher setCurrentKeyword={setCurrentKeyword} currentLocation={currentLocation} />
    </div>
  );
};
