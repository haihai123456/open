import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Data from './views/Data.vue'
import Reslove from './views/reslove.vue'
import Hello from './views/hello.vue'
import Map from './views/Map.vue'
import Watch from './views/watch.vue'
import Bass from './views/bass.vue'
import Elmentui from './views/elmentui.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/reslove',
      name: 'reslove',
      component: Reslove
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path:'/watch',
      name:'watch',
      component:Watch
    },
    {
      path:'/bass',
      name:'bass',
      component:Bass
    },
    {
      path:'/elmentui',
      name:'elmentui',
      component:Elmentui
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    }
  ]
})
