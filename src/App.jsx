import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { privateRoutes } from '~/routes';
import { Provider } from 'react-redux';
import { getToken } from './utils/auth';
import store from './store';
import { useEffect } from 'react';

function Apps() {
  useEffect(() => {
    const accessToken = getToken();
    console.log(accessToken);
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </Provider>
  );
}

export default Apps;
