import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NavDrawer from '@/components/NavDrawer.vue'

describe('NavDrawer.vue', () => {
  it('Open Navigation Drawer on Click', () => {
    const wrapper = shallowMount(NavDrawer)
    wrapper.find('.drawerbutton').trigger('click')
    expect(wrapper.vm.click).to.be.true
  })
})
