import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { Header } from '../components/Header';
import GlobalStyles from '../styles/globalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
