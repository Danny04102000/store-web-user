import config from '~/config';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

const { routes } = config;
const privateRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.login,
    component: Login,
  },
];

export { privateRoutes };
