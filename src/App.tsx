import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import BackToTop from './features/BackToTop'
import { DefaultLayout } from './Layout'
import Fragment from './components/Fragment'
import { Suspense } from 'react'
import { publicRoutes } from '~/routes'

function App() {
  return (
    <Router>
      <div className='App'>
        <Suspense fallback='loading ...'>
          <BackToTop>
            <Routes>
              {publicRoutes.map((route, index) => {
                let Layout = DefaultLayout
                if (route.layout) {
                  Layout = route.layout
                } else if (route.layout === null) {
                  Layout = Fragment
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
          </BackToTop>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
