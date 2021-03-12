import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import Register from './Register'

describe('Given a component Login', () => {
  test('Then should have three childs', () => {
    const register = renderer.create(<Register/>).toJSON()
    expect(register.children.length).toBe(3)
  })

  test('Then navigates back when pressing back button', () => {
    const goBack = jest.fn()
    const { getByTestId } = render(<Register navigation={{ goBack }} />)
    fireEvent.press(getByTestId('go-back'))
    expect(goBack).toHaveBeenCalled()
  })

  describe('Given a TextInput name', () => {
    test('Then text input value should be amaia', () => {
      const { getByTestId } = render(<Register />)
      const newTestValue = 'amaia'
      const input = getByTestId('input-name')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })
  describe('Given a TextInput surname', () => {
    test('Then text input value should be semper', () => {
      const { getByTestId } = render(<Register />)
      const newTestValue = 'semper'
      const input = getByTestId('input-surname')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })
  describe('Given a TextInput email', () => {
    test('Then text input value should be amaia@gmail.com', () => {
      const { getByTestId } = render(<Register />)
      const newTestValue = 'amaia@gmail.com'
      const input = getByTestId('input-email')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })
  describe('Given a TextInput password', () => {
    test('Then text input value should be 64764', () => {
      const { getByTestId } = render(<Register />)
      const newTestValue = '64764'
      const input = getByTestId('input-password')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })
})
