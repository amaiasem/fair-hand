import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import TabBar from './TabBar.tsx'

describe('Given a component TabBar', () => {
  let component
  let navigate

  const routes = [{ key: 1, name: 'Home', params: { icon: 'home' } },
    { key: 2, name: 'Maps', params: { icon: 'map' } },
    { key: 3, name: 'User', params: { icon: 'user' } }]

  beforeEach(() => {
    navigate = jest.fn()
    component = (
        <NavigationContainer>
            <TabBar state={ { routes } } navigation={{ navigate }}/>
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
      expect(navigate).toHaveBeenCalledWith('Home')
    })
  })
})
