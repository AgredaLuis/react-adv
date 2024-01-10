
import {lazy} from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element
interface Route {
 to: string;
 path: string;
 Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
 name:string;
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: 'lazyload/',
    Component: lazyLayout,
    name: 'LazyLayout'
  },

  {
    path: 'nolazy',
    to: "nolazy",
    Component: NoLazy,
    name: 'No lazy'
  }
]