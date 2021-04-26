import React from 'react'
import { render } from '@testing-library/react'

import Input from './Input'

describe('Input tests', () => {
  test('Input Renders ', () => {
    render(<Input />)
  })
  test('Input active', () => {
    const { container } = render(<Input active />)
    expect(container.firstChild).toHaveClass('active')
  })
  test('Input display', () => {
    const { container } = render(<Input color="display" />)
    expect(container.firstChild).toHaveClass('display')
  })
})
