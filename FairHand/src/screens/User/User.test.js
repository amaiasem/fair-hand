import React from 'react'
import { Provider } from 'react-redux'
import { cleanup, render, fireEvent } from '@testing-library/react-native'
import configureStore from 'redux-mock-store'
import User from './User'
import mockUser from '../../../constants/mockUser.ts'

const mockStore = configureStore()

describe('Given a component User', () => {
  let store
  let component
  let navigate

  beforeEach(() => {
    store = mockStore({
      userReducer: { user: mockUser }
    })
    navigate = jest.fn()
    component = (
      <Provider store={store}>
        <User navigation={{ navigate }}/>
        </Provider>)
  })

  afterEach(() => cleanup())

  it('It should match the snapshot', () => {
    render(component)
    expect(component).toMatchSnapshot()
  })
})

describe('When pressing on MyReviews button', () => {
  let store
  let component
  let navigate

  beforeEach(() => {
    store = mockStore({
      userReducer: {
        user: {
          _id: '604f3dcafcd75136b496ec65',
          name: 'Amaia Semper',
          surname: '',
          email: 'amaia@gmail.com',
          password: 'ahg56',
          address: 'Travessera de les Corts, Barcelona',
          myFavourites: [
            {
              shopId: '6046ab3fb9f8122550ebebc9'
            }
          ]
        }
      }
    })
    navigate = jest.fn()
    component = (
    <Provider store={store}>
      <User navigation={{ navigate }}/>
      </Provider>)
  })

  it('It should call navigation.navigate with argument MyReviews', () => {
    const { getByTestId } = render(component)

    fireEvent.press(getByTestId('navigate-myreviews'))
    expect(navigate).toHaveBeenCalledWith('MyReviews')
  })
})
