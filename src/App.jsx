import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { privateRoutes } from './routes'

function Apps() {
  return (
    <Router>
      <Routes>
        {privateRoutes.map((route, index) => {
          const Page = route.component
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Page />
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default Apps
