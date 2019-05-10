import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NavDrawer from '@/components/NavDrawer.vue'

describe('NavDrawer.vue', () => {
  let wrapper

  beforeEach(function () {
    wrapper = shallowMount(NavDrawer)
  })
  it('drawer works properly', () => {
    wrapper.setData({ drawer: false })
    wrapper.find('.drawerbutton').trigger('click.stop')
    expect(wrapper.vm.drawer).to.equal(true)
  })
})
