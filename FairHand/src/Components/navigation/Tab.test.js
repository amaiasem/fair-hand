import React from 'react'
import { render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tab from './Tab.tsx'

describe('Given a Tab component', () => {
  let component
  const onPress = jest.fn()
  const icon = 'home'
  beforeEach(() => {
    component = (
          <NavigationContainer>
              <Tab route={ { onPress, icon } } />
          </NavigationContainer>
    )
  })
  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })
})
