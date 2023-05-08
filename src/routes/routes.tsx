import DefaultLayout from '~/Layout/DefaultLayout'
import Home from '~/Pages/Home'
import Product from '~/Pages/Home/Product'
import { ReactNode } from 'react'

const configroutes = {
  home: '/',
  shops: '/shops',
  shop: '/shops/*',
  about: '/about',
  blog: './blog',
  contact: '/contact',
  notfound404: '/notfound404'
}

const publicRoutes = [
  { path: configroutes.home, component: Home },
  { path: configroutes.shops, component: Product }
]

const privateRoutes = []

export { publicRoutes, configroutes }