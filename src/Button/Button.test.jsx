import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('Button tests', () => {
  test('Button Renders ', () => {
    render(<Button />)
  })
  test('Button active', () => {
    const { container } = render(<Button active />)
    expect(container.firstChild).toHaveClass('active')
  })
  test('Button color', () => {
    const { container } = render(<Button color="red" />)
    expect(container.firstChild).toHaveClass('red')
  })
  test('Button clicked', () => {
    const spy = jest.fn()
    const { container } = render(<Button color="red" onClick={spy} />)
    userEvent.click(container.firstChild)
    expect(spy).toHaveBeenCalled()
  })
})
