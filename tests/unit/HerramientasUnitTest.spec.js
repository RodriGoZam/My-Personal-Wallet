import { shallowMount } from '@vue/test-utils'
import Herramientas from '@/components/Herramientas.vue'
import TestUtil from './TestUtil.js'
import BotonTransacciones from '@/components/BotonTransacciones'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

describe('Unit tests relacionados a agregar un nuevo ingreso', () => {
  let wrapper
  let store
  const assert = require('chai').assert
  const nuevosDatos = [
    { cuenta: 'ahorros', fecha: '06/05/2019', monto: 120, categoria: 'Salario',
    }]
  const cuenta = {nombre: 'ahorros', fondos: '100'}

  beforeEach(function() {
    store = TestUtil.getDefaultStore()
    wrapper = shallowMount(BotonTransacciones,
        {
          store, propsData: {tipo: 'Ingreso', cuenta: cuenta, categorias: store.state.categoriaIngresos}
        })
  })
  it('Agrega el nuevo ingreso al inicio del array ingresos de la store', () => {
    wrapper.vm.monto = nuevosDatos[0].monto
    wrapper.vm.fecha = nuevosDatos[0].fecha
    wrapper.vm.categoria = nuevosDatos[0].categoria
    
    wrapper.vm.agregar()
    assert.equal(nuevosDatos[0].cuenta, store.state.ingresos[0].cuenta, 'no se agrega la cuenta correctamente')
    assert.equal(nuevosDatos[0].fecha, store.state.ingresos[0].fecha, 'no se agrega la fecha correctamente')
    assert.equal(nuevosDatos[0].monto, store.state.ingresos[0].monto, 'no se agrega el monto correctamente')
    assert.equal(nuevosDatos[0].categoria, store.state.ingresos[0].categoria, 'no se agrega la categoria correctamente')
  })
  it('No se pueden agregar ingresos de montos menores o iguales a 0', () => {
    // aqui se modifica el ambiente, una vez halla componentes
    wrapper.vm.monto = -9
    wrapper.vm.fecha = nuevosDatos[0].fecha
    wrapper.vm.categoria = nuevosDatos[0].categoria
    wrapper.vm.agregar()
    assert.equal(0, store.state.ingresos.length, 'se ha agregado un ingreso negativo, , ' + store.state.ingresos.length)
    wrapper.vm.monto = 0
    wrapper.vm.fecha = nuevosDatos[0].fecha
    wrapper.vm.categoria = nuevosDatos[0].categoria
    wrapper.vm.agregar()
    assert.equal(0, store.state.ingresos.length, 'se ha agregado un ingresode monto 0, ' + store.state.ingresos.length)
  })
})
