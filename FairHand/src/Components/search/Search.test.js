import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import DATA from '../../../constants/DATA'
import Search from './Search.tsx'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore([])

jest.useFakeTimers()
jest.spyOn(action, 'filterShopsByName').mockReturnValue({ type: '' })

describe('Given a component Search', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: DATA, shop: {}, filteredShops: DATA }
    })
    component = (
        <Provider store={store}>
          <Search />
        </Provider>
    )
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When changing the input of the search bar', () => {
    it('It should change the value', () => {
      const { getByTestId } = render(component)
      const newTestValue = 'Br'
      const input = getByTestId('input-shop')
      fireEvent.changeText(input, newTestValue)

      expect(input.props.value).toBe(newTestValue)
    })
  })

  describe('When changing the input of the search bar', () => {
    it('It should call filterShopsByName', () => {
      const { getByTestId } = render(component)
      const newTestValue = 'B'
      const input = getByTestId('input-shop')
      fireEvent.changeText(input, newTestValue)

      jest.runOnlyPendingTimers()
      expect(setTimeout).toHaveBeenCalled()
      expect(action.filterShopsByName).toHaveBeenCalled()
    })
  })
})
