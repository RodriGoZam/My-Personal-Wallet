import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cuentas: [{ nombre: 'ahorros', fondos: 0 }],
    categoriaIngresos: ['Salario', 'Transferencia', 'Otros'],
    categoriaEgresos: ['Expensas', 'Transferencia', 'Otros'],
    ingresos: [],
    egresos: []
  },
  mutations: {
  },
  actions: {
  }
})
