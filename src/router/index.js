import Vue from 'vue'
import Router from 'vue-router'
import CronList from '@/components/CronList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CronList',
      component: CronList
    }
  ]
})
