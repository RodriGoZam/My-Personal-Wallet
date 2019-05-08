import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cuentas: [{ nombre: 'ahorros', fondos: 100 }],
    categoriaIngresos: ['Salario', 'Transferencia', 'Otros'],
    categoriaEgresos: ['Expensas', 'Transferencia', 'Otros'],
    ingresos: [{ cuenta: 'ahorros', fecha: '01/05/2019', monto: 100, categoria: 'Salario' },
      { cuenta: 'ahorros', fecha: '01/05/2019', monto: 100, categoria: 'Otros' }],
    egresos: [{ cuenta: 'ahorros', fecha: '03/05/2019', monto: 100, categoria: 'Expensas' }],
  },
  mutations: {
  },
  actions: {
  },
})
