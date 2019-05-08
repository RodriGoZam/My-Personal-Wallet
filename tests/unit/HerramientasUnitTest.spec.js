import { shallowMount } from '@vue/test-utils'
import Herramientas from '@/components/Herramientas.vue'
import TestUtil from './TestUtil.js'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

describe('Unit tests relacionados a agregasn un nuevo ingreso', () => {
  let wrapper
  let store
  const assert = require('chai').assert
  const nuevosDatos = [
    { cuenta: 'ahorros', fecha: '06/05/2019', monto: 120, categoria: 'Salario',
    },
    { cuenta: 'ahorros', fecha: '02/05/2019', monto: 30, categoria: 'Otros',
    }]

  beforeEach(function() {
    store = TestUtil.getDefaultStore()
    wrapper = shallowMount(Herramientas,
        {
          store,
        })
  })
  it('Agrega el nuevo ingreso al inicio del array ingresos de la store', () => {
    wrapper.vm.agregarIngreso()
    assert.equal(nuevosDatos[0], this.$store.state.ingresos[0])
  })
  it('No se pueden agregar ingresos de montos menores o iguales a 0', () => {
    // aqui se modifica el ambiente, una vez halla componentes
    wrapper.vm.agregarIngreso()
    assert.notEqual(nuevosDatos[0], this.$store.state.ingresos[0])
  })
})
