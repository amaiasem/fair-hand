import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import Login from './Login'

describe('Given a component Login', () => {
  test('Then should have three childs', () => {
    const loginScreen = renderer.create(<Login/>).toJSON()
    expect(loginScreen.children.length).toBe(3)
  })

  test('Then navigates back when pressing back button', () => {
    const goBack = jest.fn()
    const { getByTestId } = render(<Login navigation={{ goBack }} />)
    fireEvent.press(getByTestId('go-back'))
    expect(goBack).toHaveBeenCalled()
  })

  describe('Given a TextInput', () => {
    test('Then change the value', () => {
      const { getByTestId } = render(<Login />)
      const newTestValue = 'amaia@gmail.com'
      const input = getByTestId('input-email')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
    test('Then change the value', () => {
      const { getByTestId } = render(<Login />)
      const newTestValue = '4564'
      const input = getByTestId('input-password')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })
})
