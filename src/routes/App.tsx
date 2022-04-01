import GlobalStyles from '../styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { HomeScreen } from '../pages/HomeScreen';

export const App = () => {
  const location = sessionStorage.getItem('currentLocation') || ':location';
  const keyword = sessionStorage.getItem('currentKeyword') || ':keyword';

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          {/* TODO: Implementar paginación */}
          <Route path={`/location=${location}/q=${keyword}`} element={<HomeScreen />} />
          {/*  //q?=developer&location=spain */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
