import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import MultiFiltersPlugin from './plugins/MultiFilters'

Vue.config.productionTip = false

Vue.use(MultiFiltersPlugin)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
