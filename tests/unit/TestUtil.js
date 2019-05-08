import Vuex from 'vuex'

export default {
  name: 'TestUtil',

  getDefaultStore() {
    return new Vuex.Store({
      state: {
        cuentas: [{ nombre: 'ahorros', fondos: 100 }, { nombre: 'comida', fondos: 200 }, { nombre: 'Fiesta', fondos: 200 }],
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
        }
      }
    })
  },
}
