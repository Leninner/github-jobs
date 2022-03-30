import { MainTitle } from './styles';

export const Layout = ({ children }: any) => {
  return (
    <div>
      <MainTitle>
        Github <span>Jobs</span>
      </MainTitle>
      {children}
    </div>
  );
};
