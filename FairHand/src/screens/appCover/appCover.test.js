import React from 'react'
import AppCover from './appCover'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'

describe('Given a component appCover', () => {
  test('Then should have three child', () => {
    const cover = renderer.create(<AppCover/>).toJSON()
    expect(cover.children.length).toBe(3)
  })

  test('Then should render correctly', () => {
    const cover = renderer.create(<AppCover/>).toJSON()
    expect(cover).toMatchSnapshot()
  })

  test('Then navigates to login when pressing login button', () => {
    const navigate = jest.fn()
    const { getByText } = render(<AppCover navigation={{ navigate }} />)
    fireEvent.press(getByText('LOGIN'))
    expect(navigate).toHaveBeenCalledWith('Login')
  })
  test('Then navigates to register when pressing Sign up button', () => {
    const navigate = jest.fn()
    const { getByText } = render(<AppCover navigation={{ navigate }} />)
    fireEvent.press(getByText('SIGN UP'))
    expect(navigate).toHaveBeenCalledWith('Register')
  })
})
