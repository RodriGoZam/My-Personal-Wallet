import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cuentas: [ { icon: 'home', text: 'Inicio', route: '/'},{ icon: 'add_circle_outline', text: 'Nuevo Wallet', route: '/CrearWallet'},  { icon: 'account_balance', text: 'Ahorros', route: '/wallet'}],
    categoriaIngresos: [ 'Salario', 'Transferencia', 'Otros' ],
    categoriaEgresos: [ 'Expensas', 'Transferencia', 'Otros' ],
    ingresos: [ { cuenta: 'ahorros', fecha: '01/05/2019', monto: 100, categoria: 'Salario' },
      { cuenta: 'ahorros', fecha: '01/05/2019', monto: 100, categoria: 'Otros' } ],
    egresos: [ { cuenta: 'ahorros', fecha: '03/05/2019', monto: 100, categoria: 'Expensas' } ]
  },
  mutations: {
    addCuenta(context, newCuenta) {
      context.cuentas.push(newCuenta);
    }
  },
  actions: {
    addCuenta(context, newCuenta) {
      context.commit('addCuenta',newCuenta);
    }
  }
})
