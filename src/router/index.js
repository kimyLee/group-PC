import Vue from 'vue'
import Router from 'vue-router'
import project from '@/views/project/project.vue'

Vue.use(Router)

export default new Router({
  /** 考虑有后续模块，这里要一开始就分出来，**/
  routes: [
    {
      path: '/',
      name: 'project',
      component: project
    }
    /* {
      path: '/setting',
      name: '',
      component: ''
    } */
  ]
})
