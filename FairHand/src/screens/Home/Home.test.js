import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import Home from './Home.tsx'
import DATA from '../../../constants/DATA'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')
jest.mock('../../Components/SearchWithFilters/SearchWithFilters.tsx', () => 'SearchWithFilters')

const mockStore = configureStore([])
jest.useFakeTimers()
jest.spyOn(action, 'loadAllShops').mockReturnValue({ type: '' })

describe('Given a Connected React-Redux Home Component', () => {
  let store
  let component
  let navigate

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: [], shop: {}, filteredShops: DATA },
      reviewReducer: { reviews: [] }
    })
    navigate = jest.fn()
    component = (
      <Provider store={store}>
        <Home navigation={{ navigate }}/>
      </Provider>
    )
  })

  afterEach(() => cleanup())

  it('It should render with given state from Redux store', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing a shop card from the FlatList', () => {
    it('It should call navigation.navigate', () => {
      const { getAllByTestId } = render(component)
      fireEvent.press(getAllByTestId('navigate-shop')[0])
      expect(navigate).toHaveBeenCalled()
    })
  })
})
