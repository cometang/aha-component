import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'


const tableShow =()=> import( './views/table/tableShow')


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
      {
        path:'/tableShow',
          name:'tableShow',
          component:tableShow
      }
  ]
})
