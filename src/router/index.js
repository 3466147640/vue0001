import Vue from 'vue'
import Router from 'vue-router'
import EmpList from '@/components/EmpList'
import EmpAdd from '@/components/EmpAdd'
import EmpUpdate from '@/components/EmpUpdate'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'EmpList',
      component: EmpList
    },
    {
      path: '/EmpAdd',
      name: 'EmpAdd',
      component: EmpAdd
    },
    {
      path: '/EmpUpdate',
      name: 'EmpUpdate',
      component: EmpUpdate
    }
  ]
})
