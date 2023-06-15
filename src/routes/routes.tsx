import DefaultLayout from '~/Layout/DefaultLayout'
import DetailItem from '~/Pages/DetailItem'
import { FunctionComponent } from 'react'
import Home from '~/Pages/Home'
import HomeLayout from '~/Layout/HomeLayout'
import Product from '~/Pages/Product'

const configroutes = {
  home: '/',
  shops: '/shop',
  shop: '/shop/*',
  about: '/about',
  blog: '/blog',
  contact: '/contact',
  notfound404: '/notfound404'
}

interface RouteConfig {
  path: string
  component: FunctionComponent
  layout?: any
}

const publicRoutes: RouteConfig[] = [
  { path: configroutes.home, component: Home, layout: HomeLayout },
  { path: configroutes.shops, component: Product },
  { path: configroutes.shop, component: DetailItem }
]

const privateRoutes = []

export { publicRoutes, configroutes }
