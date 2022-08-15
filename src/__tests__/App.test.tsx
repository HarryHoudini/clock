// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'
import React from 'react'
import App from '../App'

describe('check first div text', () => {
  render(<App />)
  const linkElement = screen.getByText('sssss')
  expect(linkElement).toBeInTheDocument()
})
