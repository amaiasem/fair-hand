import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import Home from './Home.tsx'

describe('Given a component Home', () => {
  test('Then should have three children', () => {
    const home = renderer.create(<Home/>).toJSON()
    expect(home.children.length).toBe(3)
  })

  test('Then should render correctly', () => {
    const home = renderer.create(<Home/>).toJSON()
    expect(home).toMatchSnapshot()
  })

  describe('Given a TextInput when searching Brava', () => {
    test('Then text input value should be Brava', () => {
      const { getByTestId } = render(<Home />)
      const newTestValue = 'Brava'
      const input = getByTestId('input-shop')
      fireEvent.changeText(input, newTestValue)
      expect(input.props.value).toBe(newTestValue)
    })
  })
})
