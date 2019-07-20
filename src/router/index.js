import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Detail from '@/components/Detail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/:id',
      name:'Detail',
      component: Detail
    }
  ]
})
