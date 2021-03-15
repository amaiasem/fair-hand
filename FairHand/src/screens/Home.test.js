import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import Home from './Home.tsx'
// import { DATA } from '../../constants'
import configureStore from 'redux-mock-store'
import loadAllShops from '../redux/actions/fairHandActionCreators'

const mockStore = configureStore([])

describe('Given a Connected React-Redux Home Component', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore({
      shopReducer: { shops: [], shop: {}, filteredShops: [] },
      reviewReducer: { reviews: [] }
    })

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
  })

  it('It should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('It should dispatch loadAllShops', async () => {
    await store.dispatch(loadAllShops())
    expect(store.getActions()).toMatchSnapshot()
  })
  // describe('Given a TextInput when searching Brava', () => {
  //   it('Text input value should be Brava', () => {
  //     const { getByTestId } = render(<Home />)
  //     const newTestValue = 'Brava'
  //     const input = getByTestId('input-shop')
  //     fireEvent.changeText(input, newTestValue)
  //     expect(input.props.value).toBe(newTestValue)
  //   })
  // })
})
