import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Wallet from './views/Wallet.vue'
import CrearWallet from './views/CrearWallet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: Wallet
    },
    {
      path: '/CrearWallet',
      name: 'CrearWallet',
      component: CrearWallet
    }
  ]
})
