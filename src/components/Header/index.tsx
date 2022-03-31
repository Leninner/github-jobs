import { Searcher } from '../Searcher';

export const Header = ({ setCurrentKeyword }: any) => {
  return (
    <div>
      <Searcher setCurrentKeyword={setCurrentKeyword} />
    </div>
  );
};
