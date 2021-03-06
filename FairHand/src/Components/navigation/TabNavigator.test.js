import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react-native'
import TabNavigator from './TabNavigator.tsx'
import configureStore from 'redux-mock-store'
import { NavigationContainer } from '@react-navigation/native'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore([])
jest.spyOn(action, 'loadAllShops').mockReturnValue({ type: '' })

describe('Given a component TabNavigator', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: [], shop: {}, filteredShops: [] }
    })
    component = (
      <Provider store={store}>
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
      </Provider>
    )
  })

  it('renders the correct screen', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })
})
