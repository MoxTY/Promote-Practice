import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Class from '@/components/class/Class'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class
    }
  ]
})
