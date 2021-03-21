import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, fireEvent, render } from '@testing-library/react-native'
import DATA from '../../../constants/DATA'
import Map from './Map.tsx'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')
jest.mock('../../Components/SearchWithFilters/SearchWithFilters.tsx', () => 'SearchWithFilters')

const mockStore = configureStore([])
jest.useFakeTimers()
jest.spyOn(action, 'loadAllShops').mockReturnValue({ type: '' })

describe('Given a component Header', () => {
  let store
  let component
  let navigate
  let handleOnScroll
  let onMarkerPress

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: DATA, shop: {}, filteredShops: DATA }
    })
    navigate = jest.fn()
    handleOnScroll = jest.fn()
    onMarkerPress = jest.fn()
    component = (
      <Provider store={store}>
        <Map navigation={{ navigate }}/>
      </Provider>
    )
  })

  afterEach(() => cleanup())
  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })

  describe('When pressing \'more info\' from a shop card ', () => {
    it('It should call navigation.navigate', () => {
      const { getAllByTestId } = render(component)
      fireEvent.press(getAllByTestId('shop-card')[0])
      expect(navigate).toHaveBeenCalled()
    })
  })

  describe('When scrolling on the list of shops', () => {
    it('It should call handleOnScroll', async () => {
      const eventData = {
        nativeEvent: {
          contentOffset: {
            x: 300
          }
        }
      }

      const { getByTestId } = render(component)

      await fireEvent.scroll(getByTestId('scroll-item'), eventData)
      await (() => {
        expect(handleOnScroll).toHaveBeenCalled()
      },
      { timeout: 200 }
      )
    })
  })

  describe('When pressing on a shop marker', () => {
    it('It should call onMarkerPress', async () => {
      const eventMapData = {

        _targetInst: {
          return: {
            key: 0
          }
        }

      }

      const { getAllByTestId } = render(component)

      await fireEvent.press(getAllByTestId('marker-press')[0], eventMapData)

      await (() => {
        expect(onMarkerPress).toHaveBeenCalled()
      }, { timeout: 200 })
    })
  })
})
