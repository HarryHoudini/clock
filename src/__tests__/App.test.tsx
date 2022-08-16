import React from 'react'
import App from '../App'
import { Clock } from '../components/Clock/Clock'
import { mountWithConfig } from '../__mocks__/config'

describe(App.name, () => {
  it('should contain Clock component', () => {
    const wrapper = mountWithConfig(<App />)
    expect(wrapper.find(Clock)).toHaveLength(1)
  })
})
