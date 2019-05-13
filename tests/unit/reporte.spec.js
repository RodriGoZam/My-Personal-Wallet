import { expect, assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import report from '@/components/report.vue'
import TestUtil from '@/Utils/TestUtil.js'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

describe('Unit tests del reporte', () => {
  let wrapper
  let store

  beforeEach(function () {
    store = TestUtil.getDefaultStore()
    wrapper = shallowMount(report,
      {
        store
      })
  })
  it('Recibe las fechas con exito', () => {
    var fechas = store.getters.obtenerFechas
    expect(fechas).to.have.lengthOf(6)
  })

  it('Reporte obtenido con 6 objetos', () => {
    expect(wrapper.vm.nuevoReporte).to.exist
    assert.lengthOf(wrapper.vm.nuevoReporte, 6)
  })

  it('Categorias concatenadas para el filtro', () => {
    var catIngreso = store.state.categoriaIngresos
    var catEgreso = store.state.categoriaEgresos
    var concatenacion = store.getters.obtenerCategorias
    var total = catIngreso.length + catEgreso.length
    expect(concatenacion.length).to.be.at.most(total)

  })
})
