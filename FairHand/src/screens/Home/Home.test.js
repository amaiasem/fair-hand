import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
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

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: [], shop: {}, filteredShops: DATA },
      reviewReducer: { reviews: [] }
    })
    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  })

  afterEach(() => cleanup())

  it('It should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('Then should have three children', () => {
    const theComponent = component.toJSON()
    expect(theComponent.children.length).toBe(3)
  })

  describe('When pressing a shop card', () => {
    it('Should call navigation.navigate', () => {
      const navigate = jest.fn()
      const { getByTestId } = render(<Provider store={store}>
        <Home/>
      </Provider>)
      fireEvent.press(getByTestId('navigate-shop'))
      expect(navigate).toHaveBeenCalled()
    })
  })
  // describe('Given a TextInput when searching Brava', () => {
  //   it('Text input value should be Brava', async () => {
  //     const { getByTestId } = await renderer.create(
  //       <Provider store={store}>
  //         <Home />
  //       </Provider>
  //     )
  //     let newTestValue
  //     let input

  //     await act(async () => {
  //       newTestValue = 'Brava'
  //       input = getByTestId('input-shop')
  //       fireEvent.changeText(input, newTestValue)
  //     })
  //     expect(input.props.value).toBe(newTestValue)
  //   })
  // })
})
