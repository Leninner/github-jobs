import GlobalStyles from '../styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Header } from '../components/Header';
import { JobsContainer } from '../containers/JobsContainer';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/jobs' element={<JobsContainer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
