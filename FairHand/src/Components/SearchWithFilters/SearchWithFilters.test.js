import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import DATA from '../../../constants/DATA'
import SearchWithFilters from './SearchWithFilters.tsx'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore([])

jest.useFakeTimers()
jest.spyOn(action, 'filterShopsByName').mockReturnValue({ type: '' })
jest.spyOn(action, 'filterShopsByType').mockReturnValue({ type: '' })
jest.spyOn(action, 'loadAllShops').mockReturnValue({ type: '' })

describe('Given a component SearchWithFilters', () => {
  let store
  const shops = DATA
  let component

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: DATA, shop: {}, filteredShops: DATA }
    })

    component = (
        <Provider store={store}>
          <SearchWithFilters />
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

  describe('When pressing All button', () => {
    it('It should call loadAllShops', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('all'))
      expect(action.loadAllShops).toHaveBeenCalled()
    })
  })

  describe('When pressing Clothes button', () => {
    it('It should call filterShopsByType with argument shops and Clothes', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('Clothes'))
      expect(action.filterShopsByType).toHaveBeenCalledWith(shops, 'Clothes')
    })
  })

  describe('When pressing Accessories button', () => {
    it('It should call filterShopsByType with arguments shops and Accessories', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('Accessories'))
      expect(action.filterShopsByType).toHaveBeenCalledWith(shops, 'Accessories')
    })
  })

  describe('When pressing Shoes button', () => {
    it('It should call filterShopsByType with argument shops and Shoes', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('Shoes'))
      expect(action.filterShopsByType).toHaveBeenCalledWith(shops, 'Shoes')
    })
  })

  describe('When pressing Jewelry button', () => {
    it('It should call filterShopsByType with arguments shops and Jewelry', () => {
      const { getByTestId } = render(component)
      fireEvent.press(getByTestId('Jewelry'))
      expect(action.filterShopsByType).toHaveBeenCalledWith(shops, 'Jewelry')
    })
  })
})
