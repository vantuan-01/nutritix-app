import DefaultLayout from '~/Layout/DefaultLayout'
import Home from '~/Pages/Home'

const Configroutes = {
  home: '/',
  shops: '/shops',
  shop: '/shops/*',
  about: '/about',
  contact: '/contact',
  notfound404: '/notfound404'
}

const publicRoutes = [{ path: Configroutes.home, component: Home, layout: DefaultLayout }]

const privateRoutes = []

export { publicRoutes }