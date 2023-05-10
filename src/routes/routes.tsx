import { FunctionComponent } from 'react';
import Home from '~/Pages/Home'
import Product from '~/Pages/Home/Product'

const configroutes = {
  home: '/',
  shops: '/shops',
  shop: '/shops/*',
  about: '/about',
  blog: './blog',
  contact: '/contact',
  notfound404: '/notfound404'
}

interface RouteConfig {
  path: string; 
  component: FunctionComponent;
  layout?: any;
}

const publicRoutes: RouteConfig[] = [
  { path: configroutes.home, component: Home },
  { path: configroutes.shops, component: Product }
]

const privateRoutes = []

export { publicRoutes, configroutes }