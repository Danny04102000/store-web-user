import config from '../config'
import Home from '../components/Home';

const { routes } = config
console.log(routes);
const privateRoutes = [
  {
    path: routes.home,
    component: Home,
  },
]

export {privateRoutes }