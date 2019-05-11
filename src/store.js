import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cuentas: [ { nombre: 'ahorros', fondos: 100 } ],
    categoriaIngresos: [ 'Salario', 'Transferencia', 'Otros' ],
    categoriaEgresos: [ 'Expensas', 'Transferencia', 'Otros' ],
    ingresos: [ { cuenta: 'ahorros', fecha: '2019-05-01', monto: 100, categoria: 'Salario' },
      { cuenta: 'ahorros', fecha: '2019-03-25', monto: 300, categoria: 'Otros' },
      { cuenta: 'ahorros', fecha: '2019-04-23', monto: 400, categoria: 'Otros' } ],
    egresos: [ { cuenta: 'ahorros', fecha: '2019-05-03', monto: 100, categoria: 'Expensas' },
      { cuenta: 'ahorros', fecha: '2019-01-30', monto: 1000, categoria: 'Expensas' },
      { cuenta: 'ahorros', fecha: '2019-04-21', monto: 550, categoria: 'Expensas' } ]
  },
  mutations: {

  },
  getters: {
    hacerReporte (state) {
      return state.ingresos.concat(state.egresos)
    },
    obtenerCategorias (state) {
      var cat = state.categoriaIngresos.concat(state.categoriaEgresos)
      for (var i = 0; i < cat.length; i++) {
        for (var j = i + 1; j < cat.length; ++j) {
          if (cat[i] === cat[j]) {
            cat.splice(j--, 1)
          }
        }
      }
      return cat
    },
    obtenerFechas (state) {
      var cat = state.ingresos.concat(state.egresos)
      var fechas = cat.map(dato => dato.fecha)
      return fechas
    }
  },
  actions: {

  }
})
