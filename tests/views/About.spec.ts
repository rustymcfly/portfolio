import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About', () => {
  it('should renders is page content is correct', () => {
    const wrapper = mount(About)
    expect(wrapper.headline).toBe('About.headline')
  })

  // it('should render if props value is correct', () => {
  //   const message = 'Happy People'
  //   const testMessage = 'Happy People'
  //   const wrapper = mount(About, {
  //     props: { message },
  //   })
  //
  //   expect(wrapper.vm.message).toBe(testMessage)
  // })
})
