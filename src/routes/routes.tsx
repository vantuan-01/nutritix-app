import Cart from '~/Pages/Cart'
import DetailItem from '~/Pages/DetailItem'
import { FunctionComponent } from 'react'
import Home from '~/Pages/Home'
import HomeLayout from '~/Layout/HomeLayout'
import NotFound404 from '~/Pages/NotFound404'
import Product from '~/Pages/Product'

const configroutes = {
  home: '/',
  shops: '/shop',
  shop: '/shop/*',
  cart: '/cart',
  about: '/about',
  blog: '/blog',
  contact: '/contact',
  notfound404: '*'
}

interface RouteConfig {
  path: string
  component: FunctionComponent
  layout?: any
}

const publicRoutes: RouteConfig[] = [
  { path: configroutes.home, component: Home, layout: HomeLayout },
  { path: configroutes.shops, component: Product },
  { path: configroutes.shop, component: DetailItem },
  { path: configroutes.notfound404, component: NotFound404 },
  { path: configroutes.cart, component: Cart }
]

const privateRoutes = []

export { publicRoutes, configroutes }
