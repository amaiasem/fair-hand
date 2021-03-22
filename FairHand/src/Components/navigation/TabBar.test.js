import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabBar from './TabBar.tsx'

describe('Given a component TabBar', () => {
  let component
  let navigate
  let handlePress

  const routes = [{ name: 'Home', params: { icon: 'home' } },
    { name: 'Maps', params: { icon: 'map' } },
    { name: 'User', params: { icon: 'user' } }]

  const index = 1

  beforeEach(() => {
    navigate = jest.fn()
    handlePress = jest.fn()
    component = (
        <NavigationContainer>
            <TabBar state={ { routes, index } } navigation={{ navigate }}/>
        </NavigationContainer>
    )
  })

  afterEach(() => cleanup())
  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing the tab Home', () => {
    it('It should call handlePress', () => {
      const { getAllByTestId } = render(component)
      fireEvent.press(getAllByTestId('button-tab')[0])
      expect(handlePress).toHaveBeenCalled()
    })
  })
})
