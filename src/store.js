import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cuentas: [{ nombre: 'ahorros', fondos: 100 }, { nombre: 'comida', fondos: 150 }],
    categoriaIngresos: ['Salario', 'Transferencia', 'Otros'],
    categoriaEgresos: ['Expensas', 'Transferencia', 'Otros'],
    ingresos: [],
    egresos: [],
  },
  mutations: {
    agregarIngreso (context, nuevoIngreso) {
      context.ingresos.unshift(nuevoIngreso)
    },
    agregarEgreso (context, nuevoEgreso) {
      context.egresos.unshift(nuevoEgreso)
    },
    actualizarSaldo (context, cuentaModificada) {
      context.cuentas.find(cuenta => cuenta.nombre === cuentaModificada.nombre).fondos = cuentaModificada.fondos;
    },
    agregarCategoriaIngreso (context, nuevaCategoria) {
      context.categoriaIngresos.unshift(nuevaCategoria)
    },
    agregarCategoriaEgreso (context, nuevaCategoria) {
      context.categoriaEgresos.unshift(nuevaCategoria)
    },
    editarCuentaNombre (context, cuentas) {
      context.cuentas.find(cuenta => cuenta.nombre === cuentas.nombreAntiguo).nombre = cuentas.nombreNuevo;
    }
  },
  actions: {
    agregarIngreso (context, nuevoIngreso) {
      context.commit('agregarIngreso', nuevoIngreso)
    },
    agregarEgreso (context, nuevoEgreso) {
      context.commit('agregarEgreso', nuevoEgreso)
    },
    actualizarSaldo (context, cuentaModificada) {
      context.commit('actualizarSaldo', cuentaModificada)
    },
    agregarCategoriaIngreso (context, nuevaCategoria) {
      context.commit('agregarCategoriaIngreso', nuevaCategoria)
    },
    agregarCategoriaEgreso (context, nuevaCategoria) {
      context.commit('agregarCategoriaEgreso', nuevaCategoria)
    },
    editarCuentaNombre (context, cuentas) {
      context.commit('editarCuentaNombre', cuentas)
    }
  },
})
