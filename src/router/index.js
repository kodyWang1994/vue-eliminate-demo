import Vue from 'vue'
import Router from 'vue-router'
import Eliminate from '@/components/Eliminate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'eliminate',
      component: Eliminate
    }
  ]
})
