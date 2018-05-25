import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import list from '@/components/list.vue'
import listex from '@/components/listex.vue'
//const listex = () => import('@/components/listex.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo/:id',
      name: 'list',
      component: list
    },
    {
      path: '/foo',
      name: 'listex',
      component: listex
    }

  ]
})
