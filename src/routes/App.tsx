import GlobalStyles from '../styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { HomeScreen } from '../pages/HomeScreen';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
