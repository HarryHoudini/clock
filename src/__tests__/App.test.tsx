// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import Clock from 'react-clock'
import App from '../App'
import { mountWithConfig } from '../__mocks__/config'

describe('check first div text', () => {
  const wrapper = mountWithConfig(<App />)
  expect(wrapper.find(Clock)).toHaveLength(1)
})
