import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import DefaultLayout from '~/Layout/DefaultLayout'
import { Fragment } from 'react'
import { publicRoutes } from '~/routes'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = DefaultLayout
            }
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
