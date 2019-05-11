import Vue from 'vue'
import Router from 'vue-router'
import ReportesVista from './views/ReportesVista.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ReportesVista
    }
  ]
})
