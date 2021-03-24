import React from 'react'
import renderHeader from './renderHeader'
import { render } from '@testing-library/react-native'

describe('Given a component renderHeader', () => {
  const component = (<renderHeader/>)
  test('Then should have onechild', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })
})
