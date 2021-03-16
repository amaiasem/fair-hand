import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { fireEvent, cleanup, act } from '@testing-library/react-native'
import Home from './Home.tsx'
// import { DATA } from '../../constants'
import configureStore from 'redux-mock-store'
import * as action from '../../redux/actions/fairHandActionCreators'
jest.mock('../../redux/actions/fairHandActionCreators')

const mockStore = configureStore([])

describe('Given a Connected React-Redux Home Component', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: [], shop: {}, filteredShops: [] },
      reviewReducer: { reviews: [] }
    })

    afterEach(() => cleanup())

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  })

  it('It should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
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
