import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'
import project from '@/views/project/project.vue'
import login from '@/views/login.vue'
import signup from '@/views/signup.vue'
import ws from '@/views/ws.vue'
Vue.use(Router)

export default new Router({
  /** 考虑有后续模块，这里要一开始就分出来，**/
  routes: [
    {
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/ws',
      name: 'ws',
      component: ws
    }
  ]
})
