/**
 * Created by lipeiwei on 16/10/4.
 */

import {
  Navigator,
} from 'react-native';
import Index from './pages/Zhijian/Index'
import Login from './pages/Zhijian/Login'
import CustomerAggent from './pages/Zhijian/CustomerAggent'
let navigator;

const routeMap = new Map();

routeMap.set('Index', {
  component: Index
});
routeMap.set('Login', {
  component: Login
})
routeMap.set('CustomerAggent', {
  component: CustomerAggent
})


export function registerNavigator(tempNavigator) {
  if (navigator) {
    return;
  }
  navigator = tempNavigator;

}

export function getNavigator() {
  return navigator;
}

export function getRouteMap() {
  return routeMap;
}






